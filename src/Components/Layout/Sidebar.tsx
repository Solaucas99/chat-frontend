import React, { useEffect, useRef, useState } from 'react';
import {
  MdExitToApp,
  MdOutlineContactPage,
  MdOutlineMenuOpen,
} from 'react-icons/md';
import { AiFillHome, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { styled } from '../../Styles/stitches.config';

function Sidebar() {
  const SidebarBackground = styled('div', {
    background: '$sidebar',
    position: 'fixed',
    right: '-10px',
    width: '0px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    border: '2px solid white',
  });

  const SidebarList = styled('ul', {
    height: '80%',
    width: '100%',
    listStyle: 'none',
    margin: '0px',
    padding: '0px',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const SidebarItem = styled('li', {
    width: '100%',
    padding: '20px',
    color: '#ececec',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '$sidebar',
    marginTop: '5px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    '& > *': {
      width: '50%',
    },

    '&:hover': {
      backgroundColor: '$sidebarHover',
      color: '$sidebar',
    },
  });

  const MenuToggle = styled('button', {
    background: '$sidebar',
    position: 'absolute',
    border: 'none',
    padding: '5px',
    color: '#ececec',
    zIndex: '-1',
    left: '-50px',
    cursor: 'pointer',
    top: '30%',
  });

  const SidebarHeader = styled('div', {
    width: '100%',
    backgroundColor: '$sidebarHover',
    height: '120px',
    padding: '20px 0px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    top: '0',
  });

  const SidebarFooter = styled('div', {
    width: '100%',
    backgroundColor: '$sidebarHover',
    height: '120px',
    padding: '20px 0px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    bottom: '0',
  });

  const elMenuToggle = useRef<HTMLDivElement>(null);
  const [menuToggledState, setMenuToggledState] = useState<boolean>(false);

  const toggleAnimation = () => {
    setMenuToggledState(prevValue => !prevValue);
  };

  useEffect(() => {
    if (elMenuToggle.current) {
      if (!menuToggledState) {
        elMenuToggle.current.classList.remove('animate__bounceInRight');
        elMenuToggle.current.style.width = '0px';
        return;
      }

      elMenuToggle.current.classList.remove('animate__bounceOutRight');
      elMenuToggle.current.classList.add('animate__bounceInRight');
      elMenuToggle.current.style.width = '250px';
    }
  }, [menuToggledState]);

  return (
    <SidebarBackground ref={elMenuToggle} className="animate__animated">
      <MenuToggle onClick={toggleAnimation}>
        {menuToggledState ? (
          <AiOutlineClose size={35} />
        ) : (
          <MdOutlineMenuOpen size={35} />
        )}
      </MenuToggle>

      <SidebarHeader>
        <span>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQELq8F8PU6vzQ/profile-displayphoto-shrink_800_800/0/1609996105418?e=1656547200&v=beta&t=rFmG9U-_Ka3hpwAdgI79edgZg1noQnAwZwah8_cHwr8"
            alt="profilePhoto"
            style={{ height: '80px', width: '80px', borderRadius: '50%' }}
          />
        </span>
        <br />
        <span>Hello, Lucas!</span>
      </SidebarHeader>

      <SidebarList>
        <SidebarItem>
          <span>Hello</span> <AiFillHome size={23} />
        </SidebarItem>
        <SidebarItem>
          <span>Menu</span> <AiOutlineUser size={23} />
        </SidebarItem>
        <SidebarItem>
          <span>Burger</span> <MdOutlineContactPage size={23} />
        </SidebarItem>
        <SidebarItem>
          <span>:)</span> <MdExitToApp size={23} />
        </SidebarItem>
      </SidebarList>

      <SidebarFooter>
        <span>Meus dados</span>
        <br />
        <span>Sair</span>
      </SidebarFooter>
    </SidebarBackground>
  );
}

export default Sidebar;
