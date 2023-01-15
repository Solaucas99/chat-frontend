import React, { useEffect, useState } from 'react';
import { AiFillEdit, AiOutlineSearch } from 'react-icons/ai';
import { BsCheck2All } from 'react-icons/bs';
import { styled } from '../../../Styles/stitches.config';
import { IConversation } from '../../../Types/Entities/IConversation';
import { IUserContextProvider } from '../../../Types/IUserContextProvider';
import { returnFormattedHour } from '../../../Utils/returnFormattedHour';

const LeftBarDiv = styled('div', {
  background: '$backgroundBars',
  width: '20%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const LoggedProfile = styled('div', {
  width: '100%',
  height: '15%',
  display: 'flex',
  position: 'relative',
  borderBottom: '0.2px solid #bbbbbba1',
});

const MessagesDiv = styled('div', {
  width: '100%',
  height: '75%',
  display: 'flex',
});

const ProfileInformation = styled('div', {
  position: 'absolute',
  left: '0',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
});

const ProfileInformationDiv = styled('div', {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const ProfileIcons = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
});

const ProfilePhoto = styled('div', {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
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

const ProfileDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
});

const ProfileName = styled('span', {
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#348ceb',
});

const ProfileDescription = styled('span', {
  fontSize: '12px',
  color: '#444444',
});

const SearchBarDiv = styled('div', {
  width: '100%',
  height: '10%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '0.2px solid #bbbbbba1',

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
  justifyContent: 'center',
  alignItems: 'center',

  '& input': {
    width: '100%',
    height: '100%',
    padding: '10px',
    borderRadius: '30px',
    border: 'none',
    outline: 'none',
    fontSize: '12px',
  },
});

const InputIcons = styled('span', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-around',
  right: '10px',
  top: '0',
  height: '100%',
});

const SendButton = styled('button', {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  height: '100%',
  background: 'none',

  '& svg': {
    transition: 'all 0.2s',
    color: 'gray',
  },

  '&:hover svg': {
    color: 'purple',
  },
});

const MessageList = styled('ul', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  overflow: 'auto',
  listStyle: 'none',
  // position: 'relative',
  // borderBottom: '0.2px solid #bbbbbba1',
});

const MessageItem = styled('li', {
  height: '80px',
  width: '100%',
  position: 'relative',
  borderBottom: '0.2px solid #bbbbbba1',
  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:hover': {
    background: '#1212121A',
  },
});

const MessageProfileInformationDiv = styled('div', {
  height: '100%',
  width: '95%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const MessageProfileInformation = styled('div', {
  position: 'absolute',
  left: '0',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
});

const MessageProfileIcons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '60%',
  alignItems: 'center',
  justifyContent: 'space-around',

  '& span': {
    fontSize: '13px',
  },
});

const MessageProfilePhoto = styled('div', {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',

  '& img': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const MessageProfileDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  padding: '30px 10px',
});

const MessageProfileName = styled('span', {
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#348ceb',
  margin: '0px',
});

const MessageProfileText = styled('span', {
  fontSize: '12px',
  color: '#333333',
  margin: '5px 0px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const MessageNotification = styled('span', {
  borderRadius: '50%',
  background: '#348ceb',
  padding: '4px 7px',
  color: '#fff',
});

function LeftBar({
  returnUserSearchCallback,
  connectedUserData,
  changeConversation,
}: {
  returnUserSearchCallback: (username: string) => void;
  connectedUserData: IUserContextProvider;
  changeConversation: (conversation: IConversation) => void;
}) {
  const [searchBarUsername, setSearchBarUsername] = useState<string>('');

  useEffect(() => {
    console.log(connectedUserData);
  }, [connectedUserData]);

  return (
    <LeftBarDiv>
      <LoggedProfile>
        <ProfileInformationDiv>
          <ProfileInformation>
            <ProfilePhoto>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQELq8F8PU6vzQ/profile-displayphoto-shrink_800_800/0/1609996105418?e=1656547200&v=beta&t=rFmG9U-_Ka3hpwAdgI79edgZg1noQnAwZwah8_cHwr8"
                alt="Profile Pic"
              />
            </ProfilePhoto>

            <ProfileDetails>
              <ProfileName>
                {window.localStorage.getItem('username')?.replaceAll('"', '')}
              </ProfileName>

              <ProfileDescription>Analista Dev. Pleno</ProfileDescription>
            </ProfileDetails>

            <ProfileIcons>
              <AiFillEdit size={14} />
            </ProfileIcons>
          </ProfileInformation>
        </ProfileInformationDiv>
      </LoggedProfile>

      <SearchBarDiv>
        <form
          onSubmit={e => {
            e.preventDefault();
            returnUserSearchCallback(searchBarUsername);
          }}
        >
          <MessageBlock>
            <input
              type="text"
              onChange={e => setSearchBarUsername(e.target.value)}
              value={searchBarUsername}
              placeholder="Procurar contato..."
            />
            <InputIcons>
              <SendButton type="submit">
                <AiOutlineSearch size={20} />
              </SendButton>
            </InputIcons>
          </MessageBlock>
        </form>
      </SearchBarDiv>

      <MessagesDiv>
        <MessageList>
          {connectedUserData &&
            connectedUserData.userData.conversations.map(conversation => (
              <MessageItem
                key={conversation.conversationid}
                onClick={() => changeConversation(conversation)}
              >
                <MessageProfileInformationDiv>
                  <MessageProfileInformation>
                    <MessageProfilePhoto>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU"
                        alt="Profile Pic"
                      />
                    </MessageProfilePhoto>

                    <MessageProfileDetails>
                      <MessageProfileName>
                        {conversation.users[0].username}
                      </MessageProfileName>

                      <MessageProfileText>
                        {conversation.messages.length > 0 &&
                          conversation.messages.slice(-1)[0].messagetext}
                      </MessageProfileText>
                    </MessageProfileDetails>

                    <MessageProfileIcons>
                      <span>
                        {conversation.messages.length > 0 &&
                          returnFormattedHour(
                            conversation.messages.slice(-1)[0].datehour
                          )}
                      </span>
                      <BsCheck2All color="#03c6fc" size={18} />
                    </MessageProfileIcons>
                  </MessageProfileInformation>
                </MessageProfileInformationDiv>
              </MessageItem>
            ))}
        </MessageList>
      </MessagesDiv>
    </LeftBarDiv>
  );
}

export default LeftBar;
