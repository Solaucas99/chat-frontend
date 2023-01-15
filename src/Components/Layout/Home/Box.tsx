import React from 'react';
import { styled } from '../../../Styles/stitches.config';

type Props = {
  children: React.ReactNode;
  icon: JSX.Element;
};

function Box({ children, icon }: Props) {
  const PostBox = styled('div', {
    background: '$box',
    width: '30%',
    minHeight: '200px',
    border: '1px solid $textSecondary',
    margin: '5px 0px',
    padding: '15px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    color: '$textSecondary',
    fontFamily: 'Poppins, sans-serif;',
    position: 'relative',
    fontSize: '15px',

    '& svg': {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
  });

  return (
    <PostBox>
      {icon}
      {children}
    </PostBox>
  );
}

export default Box;
