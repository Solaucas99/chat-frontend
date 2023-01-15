import React, { useRef } from 'react';

import { MdArrowDropDown } from 'react-icons/md';
import { styled } from '../../Styles/stitches.config';

function Navbar() {
  const NavbarBackground = styled('nav', {
    width: '100%',
    backgroundColor: '$navbarBackground',
    position: 'absolute',
    top: '0',
    height: '80px',
    display: 'flex',
  });

  const NavbarSeparation = styled('span', {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '0px 12px',
    color: '$navbarMenuText',
  });

  const NavbarLogo = styled('span', {
    width: '100%',
  });

  const NavbarListMenu = styled('ul', {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    width: '100%',
  });

  const NavbarItemDefault = styled('li', {
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    borderBottom: `2px solid $textSecondary`,
    padding: '5px 3px',

    '&:hover': {
      color: '$textPrimary',
    },
  });

  const NavbarItemDropdown = styled('li', {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    borderBottom: `2px solid $textSecondary`,
    padding: '5px 3px',

    '&:hover': {
      color: '$textPrimary',
    },
  });

  const NavbarSubMenu = styled('div', {
    position: 'absolute',
    height: '200px',
    width: '170px',
    background: '$background',
    top: '-2225px',
    left: '-40px',
    zIndex: '999',
    borderRadius: '10px',
    boxShadow: '2px 3px 14px 5px rgba(0,0,0,0.44)',
  });

  const navbarSubMenu = useRef<HTMLDivElement>(null);

  const hoverDropdown = () => {
    if (navbarSubMenu.current) {
      navbarSubMenu.current.classList.remove('animate__fadeOutUp');
      navbarSubMenu.current.style.top = '30px';
      navbarSubMenu.current.classList.add('animate__fadeInDown');
    }
  };

  const hoverCloseDropdown = () => {
    if (navbarSubMenu.current) {
      navbarSubMenu.current.classList.remove('animate__fadeInDown');
      navbarSubMenu.current.classList.add('animate__fadeOutUp');
    }
  };

  return (
    <NavbarBackground>
      <NavbarSeparation>
        <NavbarLogo>
          <h1>Lucas Amorim</h1>
        </NavbarLogo>
      </NavbarSeparation>

      <NavbarSeparation>
        <NavbarListMenu>
          <NavbarItemDefault>Home</NavbarItemDefault>
          <NavbarItemDefault>Sobre</NavbarItemDefault>
          <NavbarItemDefault>Portolio</NavbarItemDefault>
          <NavbarItemDropdown
            onMouseLeave={hoverCloseDropdown}
            onMouseOver={hoverDropdown}
          >
            Serviços
            <MdArrowDropDown />
            <NavbarSubMenu
              onMouseLeave={hoverCloseDropdown}
              ref={navbarSubMenu}
              className="animate__animated animate__faster"
            />
          </NavbarItemDropdown>
          <NavbarItemDefault>Contato</NavbarItemDefault>
        </NavbarListMenu>
      </NavbarSeparation>
    </NavbarBackground>
  );
}

export default Navbar;
