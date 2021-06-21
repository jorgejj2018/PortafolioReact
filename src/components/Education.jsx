import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";
const Education = () => {
  return (
    <div className="Education">
      <H2Styled name="Estudios" />
      <div className="Education-container">
        <div className="Education-item">
          <H3Styled>
            UBA - <span>2017</span>
          </H3Styled>
          <PStyled name="Ingenieria En Sistemas -- no Culminado" />
        </div>
        <div className="Education-item">
          <H3Styled>
            Cesde - <span>2019</span>
          </H3Styled>
          <PStyled name="Tecnico En Desarrollo De Sotware" />
        </div>
      </div>
    </div>
  );
};

export default Education;
