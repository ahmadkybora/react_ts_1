import styled, { createGlobalStyle } from "styled-components"
import BGImage from './images/1.jpg';

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0; 
    display: flex;
    justify-content: center;

}

* {
    box-size: border-box;
    font-family: 'catamaran', sans-serif
}
`
export const Wrapper = styled.div`
display: flex
`