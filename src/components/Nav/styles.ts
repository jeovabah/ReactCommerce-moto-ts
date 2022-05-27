import styled from "styled-components";

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    
    ul{
        padding: 0 1rem;
        margin-top: 4rem;
        li{
            text-align: center;
            list-style: none;
            margin: 1rem 0;
            a{
                width: 100%;
            }
        }
    }
`