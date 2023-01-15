import React from 'react';
import { styled } from './stitches.config';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function GlobalDiv({ children, className }: Props) {
  const ContainerBody = styled('div', {
    backgroundColor: '$background',
    color: '$textPrimary',
    width: '100%',
    minHeight: '100vh',
    height: '100vh',
  });

  return <ContainerBody className={className || ''}>{children}</ContainerBody>;
}

GlobalDiv.defaultProps = {
  className: '',
};

export { GlobalDiv };
