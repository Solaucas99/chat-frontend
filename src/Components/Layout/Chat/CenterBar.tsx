import React, { useState, useRef } from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineSend } from 'react-icons/ai';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { styled } from '../../../Styles/stitches.config';
import { IUserContextProvider } from '../../../Types/IUserContextProvider';
import { ConversationProperty } from '../../../Providers/FocusedConversationContextProvider';
import { returnFormattedHour } from '../../../Utils/returnFormattedHour';
import { returnTodayDate } from '../../../Utils/returnTodayDate';
import { returnYesterdayDate } from '../../../Utils/returnYesterdayDate';

const CenterBarDiv = styled('div', {
  background: '$backgroundChat',
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Header = styled('div', {
  width: '100%',
  height: '10%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  boxShadow: '5px 5px 50px rgba(0,0,0,0.10)',
  borderBottomRightRadius: '15px',
  borderBottomLeftRadius: '15px',
});

const Body = styled('div', {
  width: '100%',
  height: '75%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'auto',
});

const Footer = styled('div', {
  width: '100%',
  height: '15%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '-5px -5px 50px rgba(0,0,0,0.05)',
  borderTopRightRadius: '15px',
  borderTopLeftRadius: '15px',
  marginTop: '10px',

  '& form': {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MessageBlock = styled('div', {
  width: '90%',
  height: '50%',
  display: 'flex',
  position: 'relative',
  borderRadius: '30px',
  justifyContent: 'center',
  alignItems: 'center',

  '& input': {
    width: '100%',
    height: '100%',
    padding: '10px',
    borderRadius: '30px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
});

const InputIcons = styled('span', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-around',
  right: '0',
  top: '0',
  width: '100px',
  height: '100%',

  '& button': {
    width: '50%',
  },
});

const SendButton = styled('button', {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: '#348ceb',
  padding: '8px 10px 8px 12px',
  borderRadius: '30%',
  height: '100%',

  '& svg': {
    transition: 'all 0.2s',
    color: '#ececec',
  },

  '&:hover svg': {
    color: 'purple',
  },
});

const EmojiButton = styled('button', {
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',

  '& svg': {
    transition: 'all 0.2s',
  },

  '&:hover svg': {
    color: 'yellow',
  },
});

const ContactFocusedBlock = styled('div', {
  width: '90%',
  height: '80%',
  padding: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
});

const ContactDiv = styled('div', {
  height: '100%',
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const ContactDetails = styled('div', {
  position: 'absolute',
  left: '0',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '50%',
});

const ContactIcons = styled('div', {
  position: 'absolute',
  right: '0',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '30%',
});

const ProfilePhoto = styled('div', {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 15px 50px rgba(0,0,0,0.35)',
  border: '2px solid #348ceb',

  '& img': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const ProfileActivity = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '80%',
  flexDirection: 'column',
  justifyContent: 'center',
});

const ProfileName = styled('span', {
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  width: '80%',
  fontSize: '14px',
});

const ProfileStatus = styled('span', {
  display: 'flex',
  alignItems: 'center',
  width: '80%',
  fontSize: '11px',
});

const MessagesList = styled('ul', {
  width: '85%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  margin: '0',
  padding: '15px',

  '& li': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'right',
    borderRadius: '8px',
    padding: '10px',
    maxWidth: '300px',
    minWidth: '150px',
    minHeight: '50px',
    flexWrap: 'wrap',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',

    '&:not(first-child)': {
      marginTop: '2px',
    },

    '& img': {
      borderRadius: '50%',
      height: '20px',
      width: '20px',
    },

    '& span': {
      margin: '0',
      fontWeight: 'normal',
      fontSize: '12x',
      zIndex: '2',
    },
  },
});

const OwnerMessageText = styled('span', {
  fontSize: '13px',
});

const DestinationMessageText = styled('span', {
  fontSize: '13px',
});

const HourOfMessage = styled('span', {
  fontSize: '9px',
  position: 'absolute',
  right: '3px',
  bottom: '3px',
  fontWeight: 'bold',
});

const OwnerChatMessage = styled('li', {
  background: '#218aff',
  color: '#fdfdfd',
  marginRight: 'auto',

  '&::before': {
    backgroundColor: '#218aff',
    borderRight: '0',
    content: '',
    height: '20px',
    marginTop: '0px',
    marginRight: '-5px',
    position: 'absolute',
    left: '-7px',
    transform: 'rotate(50deg)',
    width: '30px',
    zIndex: '1',
  },
});

const DestinationChatMessage = styled('li', {
  background: '#fdfdfd',
  color: '#4b4b4b',
  marginLeft: 'auto',

  '&::before': {
    backgroundColor: '#fdfdfd',
    borderLeft: '0',
    content: '',
    height: '20px',
    marginTop: '0px',
    marginLeft: '-5px',
    position: 'absolute',
    right: '-5px',
    transform: 'rotate(-50deg)',
    width: '20px',
    zIndex: '1',
  },
});

const DateDescriber = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '11px',
  margin: '5px 0px 15px 0px',
  color: '#ABABAB',

  '&:after, &:before': {
    content: '______________________________',
    margin: '0px 5px',
  },
});

function CenterBar({
  messageCallback,
  isUserTypingCallback,
  focusedConversation,
  connectedUserData,
  returnMessageOnScroll,
}: {
  messageCallback: (message: string, conversationid?: string) => void;
  isUserTypingCallback: () => void;
  focusedConversation: ConversationProperty;
  connectedUserData: IUserContextProvider;
  returnMessageOnScroll: (conversationid: string, page: string) => void;
}) {
  const [message, setMessage] = useState<string>('');

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const refOwner = useRef<HTMLLIElement>(null);
  const refDestination = useRef<HTMLLIElement>(null);

  return (
    <CenterBarDiv>
      <Header>
        <ContactFocusedBlock>
          <ContactDiv>
            <ContactDetails>
              <ProfilePhoto>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt="Profile Pic"
                />
              </ProfilePhoto>

              <ProfileActivity>
                <ProfileName>
                  {focusedConversation.users.length &&
                    focusedConversation.users[0].username}{' '}
                  {focusedConversation.users.length &&
                  focusedConversation.users[0].socketid !== '0' ? (
                    <GrStatusGoodSmall color="green" />
                  ) : (
                    <GrStatusGoodSmall color="red" />
                  )}
                </ProfileName>

                <ProfileStatus>
                  {focusedConversation.users.length &&
                  focusedConversation.users[0].socketid !== '0'
                    ? 'Online'
                    : 'Offline'}
                </ProfileStatus>
              </ProfileActivity>
            </ContactDetails>
          </ContactDiv>

          <ContactDiv>
            <ContactIcons>
              <AiOutlineSearch />
              <AiOutlineHeart />
              <IoMdNotificationsOutline />
            </ContactIcons>
          </ContactDiv>
        </ContactFocusedBlock>
      </Header>
      <Body
        onScroll={event => {
          const element = event.target as HTMLDivElement;
          if (element.scrollTop <= 30) {
            if (!focusedConversation.paginationState) return;
            returnMessageOnScroll(
              focusedConversation.conversationid,
              focusedConversation.paginationState
            );
          }
        }}
      >
        {focusedConversation &&
          Object.entries(focusedConversation.messages)
            .reverse()
            .map(([key, value]) => (
              <MessagesList key={key}>
                <DateDescriber>
                  {(key === returnTodayDate() && 'Hoje') ||
                    (key === returnYesterdayDate() && 'Ontem') ||
                    key}
                </DateDescriber>
                {value.map(messageSubmitted => {
                  const msgOwner = messageSubmitted.messageowner;

                  const userLoggedId = connectedUserData.userId;

                  if (userLoggedId === msgOwner) {
                    return (
                      <OwnerChatMessage
                        ref={refOwner}
                        key={messageSubmitted.messageid}
                      >
                        <OwnerMessageText>
                          {messageSubmitted.messagetext}
                        </OwnerMessageText>
                        <HourOfMessage>
                          {returnFormattedHour(
                            messageSubmitted.datehour as string
                          )}
                        </HourOfMessage>
                      </OwnerChatMessage>
                    );
                  }
                  return (
                    <DestinationChatMessage
                      ref={refDestination}
                      key={messageSubmitted.messageid}
                    >
                      <DestinationMessageText>
                        {messageSubmitted.messagetext}
                      </DestinationMessageText>
                      <HourOfMessage>
                        {returnFormattedHour(
                          messageSubmitted.datehour as string
                        )}
                      </HourOfMessage>
                    </DestinationChatMessage>
                  );
                })}
              </MessagesList>
            ))}
      </Body>
      <Footer>
        <form
          onSubmit={ev => {
            ev.preventDefault();

            messageCallback(
              message,
              focusedConversation?.conversationid || undefined
            );

            setMessage('');
          }}
        >
          <MessageBlock>
            <input
              onChange={changeInput}
              onKeyPress={() => isUserTypingCallback()}
              value={message}
              type="text"
              placeholder="Digite sua mensagem..."
            />
            <InputIcons>
              <EmojiButton type="button">
                <MdOutlineEmojiEmotions size={22} />
              </EmojiButton>
              <SendButton type="submit">
                <AiOutlineSend size={30} />
              </SendButton>
            </InputIcons>
          </MessageBlock>
        </form>
      </Footer>
    </CenterBarDiv>
  );
}

export default CenterBar;
