import React from 'react';
import { styled } from '../../../Styles/stitches.config';

function Footer() {
  const FooterContainer = styled('div', {
    width: '100%',
    background: '$backgroundGradient',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '5px solid #FFFFFF',
    marginTop: '40px',
  });

  const FooterText = styled('div', {
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  });
  return (
    <FooterContainer>
      <FooterText>
        Lucas Amorim - 2022 / Todos os direitos reservados ©
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
