import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md';
import { styled } from '../../../Styles/stitches.config';

function ContactUs() {
  const Section = styled('section', {
    fontFamily: 'Poppins, sans-serif',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '500px',
    display: 'flex',
    width: '100%',

    // '&::before': {
    //   content: '',
    //   position: 'absolute',
    //   top: '0',
    //   left: '0',
    //   width: '50%',
    //   height: '100%',
    //   background: '$backgroundSecondary',
    // },
  });

  const Container = styled('div', {
    position: 'relative',
    minWidth: '1100px',
    minHeight: '550px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '995',
  });

  const ContactInfo = styled('div', {
    position: 'absolute',
    top: '40px',
    width: '350px',
    height: 'calc(100% - 80px)',
    background: '$backgroundGradient',
    zIndex: '1',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.2)',
    left: '15px',
    color: '#fff',
    border: '1px solid #fff',

    '& h2': {
      color: '#fff',
      fontSize: '23px',
      fontWeight: 'bold',
    },
  });

  const UlInfo = styled('ul', {
    position: 'relative',
    margin: '20px 0',

    '& li': {
      position: 'relative',
      listStyle: 'none',
      display: 'flex',
      margin: '20px 0',
      cursor: 'pointer',
      alignItems: 'center',
    },

    '& li span:nth-child(1)': {
      width: '25%',
    },

    '& li span:nth-child(2)': {
      width: '75%',
    },
  });

  const UlIcons = styled('ul', {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',

    '& li button': {
      padding: '10px 30px',
      border: 'none',
      outline: 'none',
      fontSize: '1em',
      fontWeight: '500',
      background: 'none',
      transition: '0.5s',
      cursor: 'pointer',
      color: '#FFFFFF',
    },

    '& li button:hover': {
      opacity: '0.6',
    },
  });

  const ContactForm = styled('div', {
    position: 'absolute',
    padding: '70px 50px',
    background: '#FFFFFF',
    width: 'calc(100% - 150px)',
    marginLeft: '150px',
    paddingLeft: '250px',
    height: '90%',
    boxShadow: '0 50px 50px rgba(0, 0, 0, 0.5)',

    '& h2': {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '$backgroundGradient',
    },
  });

  const FormBox = styled('form', {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingTop: '30px',
  });

  const InputBox = styled('div', {
    position: 'relative',
    margin: '0 0 35px 0',
    width: '47%',

    '&:last-child, &:nth-child(5)': {
      width: '100%',
    },

    '& textarea': {
      minHeight: '120px',
    },

    '& span': {
      position: 'absolute',
      left: '0',
      padding: '5px 0',
      resize: 'none',
      fontSize: '18px',
      fontWeight: '300',
      color: '#333',
      transition: '0.3s',
      pointerEvents: 'none',
    },

    '& input, & textarea, & button': {
      width: '100% !important',
      padding: '5px 0',
      resize: 'none',
      fontSize: '18px',
      fontWeight: '300',
      color: '#333',
      border: 'none',
      borderBottom: '1px solid #777',
      outline: 'none',
    },

    '& input:focus ~ span, & textarea:focus ~ span, & input:valid ~ span, & textarea:valid ~ span':
      {
        transform: 'translateY(-20px)',
        fontSize: '12px',
        fontWeight: '400',
        letterSpacing: '1px',
        color: '$textSecondary',
      },

    '& button': {
      background: '$backgroundGradient',
      color: '#FFF',
    },
  });

  return (
    <Section>
      <Container data-aos="fade-right">
        <ContactInfo>
          <h2>Contact Info</h2>
          <UlInfo>
            <li>
              <span>
                <MdLocationPin size={30} />
              </span>
              <span>
                Rua Yolts Unger Mattos, 335 - Helena Maria - Osasco SP
              </span>
            </li>

            <li>
              <span>
                <MdMail size={30} />
              </span>
              <span>solaucas98@outlook.com</span>
            </li>

            <li>
              <span>
                <MdPhone size={30} />
              </span>
              <span>+55 (11) 96734-4692</span>
            </li>
          </UlInfo>

          <UlIcons>
            <li>
              <button type="button">
                <AiFillGithub size={40} />
              </button>
            </li>
            <li>
              <button type="button">
                <AiFillLinkedin size={40} />
              </button>
            </li>
            <li>
              <button type="button">
                <AiOutlineTwitter size={40} />
              </button>
            </li>
          </UlIcons>
        </ContactInfo>

        <ContactForm>
          <h2>Envie uma mensagem!</h2>
          <FormBox>
            <InputBox>
              <input type="text" required />
              <span>Nome Completo</span>
            </InputBox>

            <InputBox>
              <input type="text" required />
              <span>E-mail</span>
            </InputBox>

            <InputBox>
              <input type="text" required />
              <span>Telefone</span>
            </InputBox>

            <InputBox>
              <input type="text" required />
              <span>Telefone</span>
            </InputBox>

            <InputBox>
              <textarea required />
              <span>Mensagem</span>
            </InputBox>

            <InputBox>
              <button type="submit">Enviar</button>
            </InputBox>
          </FormBox>
        </ContactForm>
      </Container>
    </Section>
  );
}

export default ContactUs;
