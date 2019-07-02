import React from 'react';
import { Container } from './hero.css';

const Hero = () => {
  return (
    <Container>
      {/* <div style={{ fontSize: '2.5em', position: 'relative', left: '-120px', top: '-.75em', zIndex: '-1', fontWeight: '400i' }}>{'{'}</div> */}
      <div>
        <div style={{ fontStyle: 'italic', fontWeight: '700' }}>Diego Benjamín</div>
        <div>Aguilar Aguilar</div>
      </div>
      {/* <div style={{ fontSize: '2.5em', position: 'relative', left: '120px', top: '.75em', zIndex: '-1' }}>{'}'}</div> */}
    </Container>
  );
};

export default Hero;
