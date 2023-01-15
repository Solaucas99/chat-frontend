import React from 'react';
import { styled } from '../../../Styles/stitches.config';

type Props = {
  children: React.ReactNode;
};

function BoxList({ children }: Props) {
  const BoxListComponent = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: '1',
    width: '95%',
    height: '80%',
    padding: '20px 0px',
    justifyContent: 'space-around',
  });

  return <BoxListComponent data-aos="fade-right">{children}</BoxListComponent>;
}

export default BoxList;
