import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;

    position: fixed;
    background-color:#6DD47E;

    
    
    animation: showSideBar 0.5s;
    @keyframes showSideBar {
        
        from {
            transform: translateX(-100%);
        }
    }
`