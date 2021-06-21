//Componente de tipo función Stateless
import React from 'react';
import Social from './Social';
import {     
    AboutStyle,
    AboutAvatar,
    AboutImg,
    AboutName,
    AboutH2,
    AboutProfession,
    AboutBio,
    AboutLocation } from '../styled/AboutStyles';

const About = () => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg 
            src="https://i.ibb.co/kK4pxc6/logo-decencia-Figma.png" 
            alt="Mi avatar" 
          />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>Jorge Quintero</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>
           Desarrollador de Software
        </AboutProfession>
      </div>
      <div className="About-description">
          <AboutBio>
             De la mente al codigo
         </AboutBio>
      </div>
      <div className="About-location">
            <AboutLocation>
                Medellin, Colombia
            </AboutLocation>
      </div>
      <div className="About-social">
       <Social />
      </div>
    </div>
  </AboutStyle>
);

export default About;
