import styled from "styled-components"


export const Container = styled.section`
    height: 100vh;
    width: 100%;
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    
    .content {
        width: 100%;
        display:flex;
        flex-direction: row-reverse;
        height: 100vh;
        img { 
            max-width: 100%;
            width: 100%; 
            height: 100%;
            background-color: black;
        }
    }
    @media screen and (max-width: 768px) {
        .content {
            width: 100%;
            flex-direction: column-reverse;
        }
        .contentNone {
            display: none;
        }
    }
`