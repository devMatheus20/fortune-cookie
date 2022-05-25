import styled from 'styled-components'
import Background from './assets/background.png'



export const Container = styled.div `
    background-image: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;

`

export const Image = styled.img `
    width: 300px;
    height: 300px;
    margin-top: 100px;

`

export const Button = styled.button `
    background: #E4AE61;
    margin: 30px 0;
    padding: 10px 100px;
    border: 1px solid #E4AE61;
    border-radius: 3px;
    color: #000;
    font-size: 1rem;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }

    :active {
        opacity: 0.8;
    }
`

export const TextPhrase = styled.p `
    margin-top: 20px;
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    color: #fff;

`