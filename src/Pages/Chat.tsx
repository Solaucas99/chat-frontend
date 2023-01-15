import React, { useState, useCallback, useEffect } from 'react';
import { io } from 'socket.io-client';
import CenterBar from '../Components/Layout/Chat/CenterBar';
import LeftBar from '../Components/Layout/Chat/LeftBar';
import {
  ConversationProperty,
  useFocusedConversation,
} from '../Providers/FocusedConversationContextProvider';
import { useUser } from '../Providers/UserContextProvider';
import { styled } from '../Styles/stitches.config';
import { IConversation } from '../Types/Entities/IConversation';
import { IMessage } from '../Types/Entities/IMessage';
import { IUserContextProvider } from '../Types/IUserContextProvider';
import { returnFormattedDate } from '../Utils/returnFormattedDate';
import { returnTodayDate } from '../Utils/returnTodayDate';

const ChatPage = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const socket = io('ws://localhost:3001', {
  withCredentials: true,
  autoConnect: false,
});

socket.auth = {
  username: window.localStorage.getItem('username'),
  userid: window.localStorage.getItem('userid'),
};

socket.connect();

socket.on('connect_error', err => {
  console.log('err', err);
  if (err.message === 'invalid username') {
    console.log('Usuário inválido');
  }
});

function Chat() {
  const { user, setUser } = useUser();
  const { conversation, setConversation } = useFocusedConversation();

  const handleMessage = useCallback(
    (message: string, conversationid?: string) => {
      socket.emit('chatMessage', {
        message,
        conversationid,
        from: socket.userid,
        userid:
          conversation?.users[0].userid ||
          JSON.parse(localStorage.getItem('usernameToSendMessage') as string)
            .userId,
      });
    },
    [conversation]
  );

  const handleUserTyping = useCallback(() => {
    let timer;
    clearTimeout(timer);
    socket.emit('userIsTyping', conversation.users[0].socketid);
    timer = setTimeout(() => {
      socket.emit('userStoppedTyping', conversation.users[0].socketid);
    }, 2000);
  }, [conversation]);

  const handleUserSearch = useCallback((username: string) => {
    socket.emit('GET:userbyusername:req', { username });
  }, []);

  const handleScroll = useCallback((conversationid: string, page: string) => {
    socket.emit('GET:messageOnScroll:req', { conversationid, page });
  }, []);

  const handleConversationChange = useCallback(
    (conversationParam: IConversation) => {
      const reducedMessages: Record<string, IMessage[]> =
        conversationParam.messages.reduce(
          (prevValue: Record<string, IMessage[]> | [], nextValue: IMessage) => {
            const key = returnFormattedDate(nextValue.datehour);

            if (!prevValue[key]) {
            prevValue[key] = [nextValue]; // eslint-disable-line
            } else {
              prevValue[key].push(nextValue);
            }

            return prevValue as Record<string, IMessage[]>;
          },
          {}
        );

      const filterConversation: ConversationProperty = {
        ...conversationParam,
        messages: reducedMessages,
      };

      setConversation(filterConversation);
    },
    [setConversation]
  );

  useEffect(() => {
    socket.on('session', ({ userid, username }) => {
      socket.emit('GET:connectedUserData:req', {});
      // attach the session ID to the next reconnection attempts
      socket.auth = { userid, username };
      // store it in the localStorage
      localStorage.setItem('userid', userid);
      localStorage.setItem('username', username);
      // save the ID of the user
      socket.userid = userid;
      // socket.sessionID = sessionID;
      socket.username = username;
    });
    const userid = localStorage.getItem('userid');
    const username = localStorage.getItem('username');

    if (userid && username) {
      socket.auth = { userid, username };
    }

    socket.on(`user disconnected`, disconnectedUser => {
      const userFocused = conversation.users.some(
        focusedConversationUser =>
          focusedConversationUser.userid === disconnectedUser.userid
      );

      if (userFocused) {
        setConversation(lastConversation => {
          const newUsers = lastConversation.users.map(lastConversationUser => ({
            ...lastConversationUser,
            socketid:
              lastConversationUser.userid === disconnectedUser.userid
                ? '0'
                : lastConversationUser.socketid,
          }));

          return {
            ...lastConversation,
            users: [...newUsers],
          };
        });
      }
    });

    socket.on(`user connected`, connectedUser => {
      const userFocused = conversation.users.some(
        focusedConversationUser =>
          focusedConversationUser.userid === connectedUser.userid
      );

      if (userFocused) {
        setConversation(lastConversation => {
          const newUsers = lastConversation.users.map(lastConversationUser => ({
            ...lastConversationUser,
            socketid:
              lastConversationUser.userid === connectedUser.userid
                ? connectedUser.socketid
                : lastConversationUser.socketid,
          }));

          return {
            ...lastConversation,
            users: [...newUsers],
          };
        });
      }
    });

    socket.on('GET:connectedUserData:res', obj => {
      setUser(obj);
    });

    socket.on('GET:userbyusername:res', data => {
      localStorage.setItem('usernameToSendMessage', JSON.stringify(data));

      setConversation(lastConversation => {
        console.log(lastConversation);

        return { ...lastConversation, users: [{}] };
      });
    });

    socket.on('chatMessageSuccess', data => {
      setConversation(lastConversation => {
        const messagesEntries = { ...lastConversation.messages };

        if (messagesEntries[returnTodayDate()]) {
          messagesEntries[returnTodayDate()] = [
            ...messagesEntries[returnTodayDate()],
            data,
          ];
        } else {
          messagesEntries[returnTodayDate()] = [data];
        }

        return {
          ...lastConversation,
          messages: messagesEntries,
        };
      });
      socket.emit('GET:connectedUserData:req');
    });

    socket.on('GET:messageOnScroll:res', data => {
      setConversation(lastConversation => {
        const messagesEntries = { ...lastConversation.messages };

        data.result.forEach(message => {
          const key = returnFormattedDate(message.datehour);

          if (messagesEntries[key]) {
            messagesEntries[key] = [message, ...messagesEntries[key]];
          } else {
            messagesEntries[key] = [message];
          }
        });

        return {
          ...lastConversation,
          messages: messagesEntries,
          paginationState: data.page,
        };
      });

      socket.emit('GET:connectedUserData:req');
    });

    return () => {
      socket.off('GET:messageOnScroll:res');
      socket.off('chatMessageSuccess');
      socket.off('GET:userbyusername:res');
      socket.off('GET:connectedUserData:res');
      socket.off('user disconnected');
      socket.off('session');
      socket.off('user connected');
    };
  }, [setConversation, setUser, conversation]);

  return (
    <ChatPage>
      <LeftBar
        returnUserSearchCallback={handleUserSearch}
        connectedUserData={user as IUserContextProvider}
        changeConversation={handleConversationChange}
      />
      <CenterBar
        isUserTypingCallback={handleUserTyping}
        messageCallback={handleMessage}
        focusedConversation={conversation as ConversationProperty}
        connectedUserData={user as IUserContextProvider}
        returnMessageOnScroll={handleScroll}
      />
    </ChatPage>
  );
}

export default Chat;
