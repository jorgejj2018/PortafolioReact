import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificate = () =>(
    <div className="Certificates">
        <H2Styled name="Certificaciones" />
        <div className="Certificates-container">
            <div className="Certificates-item">
                <H3Styled>Accenture StartIV</H3Styled>
                <PStyled name="Habilidades Blandas-Basicas"></PStyled>
                <PStyled name="Desarrollo Personal"></PStyled>
                <PStyled name="Desarrolo de Software"></PStyled>
            </div>
            <div className="Certificates-item">
                <H3Styled>Alcadia de Medellin - Coursera </H3Styled>
                <PStyled name="Desarrollo Web con Bootstrap 4 - U.Buenos Aires -"></PStyled>
                <PStyled name="Python - U.Michigan -"></PStyled>
                <PStyled name="Humanidades Digitales - U.Barcelona -"></PStyled>
            </div>
            <div className="Certificates-item">
                <H3Styled>Estudios Autodidacta</H3Styled>
                <PStyled name="JavaScripts - Profesor Jhon Mircha  - Youtube -"></PStyled>
                <PStyled name="Figma - Profesor Jhon Mircha  - Youtube -"></PStyled>
                <PStyled name="Webpack - Profesor Jhon Mircha  - Youtube -"></PStyled>
            </div>
        </div>
    </div>
);

export default Certificate;