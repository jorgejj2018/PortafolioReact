import React from 'react'
import styled from 'styled-components';

const StyleH3 = styled.h3 `
    color: rgba(221,0,31,0.4166841736694677);
    font-weight: 400;
    margin: 0.5em 0;
`

const H3Styled = ( { children} ) => <StyleH3> { children } </StyleH3>

export default H3Styled
