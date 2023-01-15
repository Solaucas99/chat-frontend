import React from 'react';
import { styled } from '../../../Styles/stitches.config';

function AboutMe() {
  const GeneralDiv = styled('div', {
    width: '90%',
    height: '500px',
    fontSize: '15px',
    padding: '20px',
    display: 'flex',
    position: 'relative',
    background: '#fff',
  });

  const Background = styled('div', {
    width: '100%',
    height: '100%',
    background: '$backgroundGradient right no-repeat',
    backgroundSize: '30%',
    padding: '20px',
    overflow: 'hidden',
    position: 'absolute',
    top: '0',
    right: '0',
  });

  const TextDiv = styled('div', {
    width: '40%',
    height: '90%',
    padding: '20px',
    position: 'absolute',
    left: '50px',

    '& h2': {
      textAlign: 'center',
    },
  });

  const ImageDiv = styled('div', {
    width: '25%',
    height: '70%',
    position: 'absolute',
    right: '250px',
    top: '10%',
    background: 'purple',
    borderRadius: '20px',
    overflow: 'hidden',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  });

  return (
    <GeneralDiv data-aos="fade-right">
      <TextDiv>
        <h2>Olá! Eu me chamo Lucas!</h2>
        <br />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
          consequat magna. Pellentesque sed odio et dui sodales luctus eget eu
          metus. Phasellus lobortis lectus sed leo maximus iaculis. Fusce leo
          tortor, volutpat a orci sit amet, feugiat ornare purus. Etiam ultrices
          id lectus id imperdiet. Sed pretium mauris tincidunt risus fringilla
          mattis. Nunc viverra, dolor ac sodales euismod, nisl lectus cursus
          velit, interdum semper magna turpis at massa. Donec blandit, dolor at
          sagittis mattis, sapien odio sollicitudin urna, pharetra imperdiet
          lorem dui et leo. Aliquam ipsum augue, pharetra non commodo elementum,
          placerat eu velit. Curabitur vulputate mauris velit, at faucibus massa
          hendrerit ut. Maecenas eu tempor diam. In accumsan vulputate tortor,
          eu efficitur sapien sollicitudin in. Fusce et enim euismod, tristique
          libero non, consequat turpis. Aliquam erat volutpat. Nulla dapibus
          massa commodo urna tincidunt, et maximus arcu pharetra. Integer
          egestas ex sed ullamcorper bibendum. Aliquam augue libero, sagittis
          eget massa sagittis, finibus posuere lacus. Donec finibus mauris vel
          lacus feugiat tincidunt.
        </p>
      </TextDiv>
      <Background />
      <ImageDiv>
        <img alt="profile_photo" src="https://i.imgur.com/Gk2uUB6.jpeg" />
      </ImageDiv>
    </GeneralDiv>
  );
}

export default AboutMe;
