import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { styled } from '../../../Styles/stitches.config';
import Navbar from '../Navbar';

function Header() {
  const HeaderBackground = styled('div', {
    background: '$backgroundGradient',

    minHeight: '700px',
    height: '700px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const HeaderCard = styled('div', {
    position: 'relative',
    width: '500px',
    height: '180px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 35px 80px rgba(0,0,0,0.15)',
    transition: '0.5s',

    '&:hover': {
      height: '400px',
    },

    '&:after': {
      content: '',
      position: 'absolute',
      borderBottom: '45px solid #fff',
      borderLeft: '45px solid transparent',
      borderRight: '45px solid transparent',
      width: '0',
      height: '0',
      bottom: '-5px',
      left: '-35px',
      transform: 'rotate(-10deg)',
    },

    '&:hover .imgBox': {
      width: '200px',
      height: '200px',
    },

    '&:hover .details': {
      transform: 'translateY(0px)',
    },
  });

  const ImgBox = styled('div', {
    position: 'absolute',
    left: '50%',
    top: '-50px',
    transform: 'translateX(-50%)',
    width: '150px',
    height: '150px',
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 15px 50px rgba(0,0,0,0.35)',
    overflow: 'hidden',
    transition: '0.5s',

    '& img': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  });

  const Content = styled('div', {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    overflow: 'hidden',
  });

  const Details = styled('div', {
    padding: '40px',
    width: '100%',
    transition: '0.5s',
    textAlign: 'center',
    transform: 'translateY(150px)',

    '& h2': {
      fontSize: '1.25em',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'bold',
      color: '#555',
      lineHeight: '1.2em',
    },

    '& h2 span': {
      fontSize: '0.75em',
      fontWeight: '500',
      opacity: '0.5',
    },
  });

  const Data = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',

    '& h3': {
      fontSize: '1em',
      color: '#555',
      lineHeight: '1.2em',
      fontWeight: '600',
    },

    '& h3 span': {
      fontSize: '0.85em',
      opacity: '0.5',
      fontWeight: '400',
    },
  });

  const ActionBtn = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    '& button': {
      padding: '10px 30px',
      border: 'none',
      outline: 'none',
      fontSize: '1em',
      fontWeight: '500',
      background: 'none',
      color: '#BD2D87',
      transition: '0.5s',
      cursor: 'pointer',
    },

    '& button:hover': {
      color: '#B191FF',
    },
  });

  return (
    <>
      <Navbar />

      <HeaderBackground>
        <HeaderCard className="animate__animated animate__bounceInLeft">
          {/* <HeaderCardSeparator>
            <h1>Olá prezado!</h1>
            <br />
            <p>
              Eu me chamo Lucas Amorim, sou programador Javascript full-stack e
              esse é meu site de portfolio!
            </p>
            <br />
            <p>
              Essa landing page foi produzida para que você conheça melhor os
              meus projetos/trabalhos feitos até aqui na minha jornada. Já são 3
              anos de dedicação e aprendizado. Espero que goste do conteúdo!
            </p>
            <br />
            <a href="#teste">
              Clique aqui para saber mais! <AiOutlineArrowDown />
            </a>
          </HeaderCardSeparator>
          <HeaderCardSeparator>
            <span>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQELq8F8PU6vzQ/profile-displayphoto-shrink_800_800/0/1609996105418?e=1656547200&v=beta&t=rFmG9U-_Ka3hpwAdgI79edgZg1noQnAwZwah8_cHwr8"
                alt="profilePhoto"
                style={{ height: '300px', width: '300px', borderRadius: '50%' }}
              />
            </span>
          </HeaderCardSeparator> */}
          <ImgBox className="imgBox">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQELq8F8PU6vzQ/profile-displayphoto-shrink_800_800/0/1609996105418?e=1656547200&v=beta&t=rFmG9U-_Ka3hpwAdgI79edgZg1noQnAwZwah8_cHwr8"
              alt="profilePhoto"
            />
          </ImgBox>
          <Content>
            <Details className="details">
              <h2>
                Lucas Amorim
                <br />
                <span>Analista Desenvolvedor Pleno</span>
              </h2>
              <Data>
                <h3>
                  342
                  <br />
                  <span>Followers</span>
                </h3>
                <h3>
                  342
                  <br />
                  <span>Followers</span>
                </h3>

                <h3>
                  342
                  <br />
                  <span>Followers</span>
                </h3>
              </Data>

              <ActionBtn>
                <button type="button">
                  <AiFillGithub size={40} />
                </button>
                <button type="button">
                  <AiFillLinkedin size={40} />
                </button>
                <button type="button">
                  <AiOutlineTwitter size={40} />
                </button>
              </ActionBtn>
            </Details>
          </Content>
        </HeaderCard>
      </HeaderBackground>
    </>
  );
}

export default Header;
