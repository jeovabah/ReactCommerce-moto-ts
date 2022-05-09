import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    padding:  0 2rem;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    background-color: rgba(255, 255, 255, 0.1);
    padding: 2rem;

    .link {
        position: absolute;
        top: 0;
        right: 0;

        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;

        border-radius: 5px;
        padding: 0 1rem; 
        
        color: #40A251;
        border: 1px solid #40A251;
    }

    h4 {
        color: #1976a9;
        margin-bottom: 3rem;
        font-size: 2.5rem;
        font-weight: bold;
    }
    

    .MuiFormControl-root{
        margin-top: 0.5rem;
    }
    label {
        color: gray;
    }
    input {
        border-radius: 0.5rem;
    }
    input:hover {
        filter: brightness(0.1);
    }

    .register {
        margin-top: 1rem;
    }
`

export const Button = styled.button`
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: .7rem 4rem;

    font-weight: bold;
    font-size: 1.2rem;
    
    background-color: #1976a9;

    border: none;
    border-radius: 0.5rem;
    
    cursor: pointer;
    transition: filter 0.5s;
    color: #fff;

    &:hover{
        filter: brightness(0.8);
    }
`