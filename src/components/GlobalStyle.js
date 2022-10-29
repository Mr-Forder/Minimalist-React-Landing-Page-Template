import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

html{
    @media(max-width: 1700px){
        font-size:75%;
    }
}

body{
    background: #1b1b1b;
   font-family: 'Nunito', sans-serif;
}

.cta{
    color: white;
    text-decoration: none;
}


button{
    font-weight: bold;
    border-radius:5px;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    margin: 0rem 0rem;
    background: #EC008C;
    border: none;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #1b1b1b;
        color: white;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

h3{
    color: white;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size:1.2rem;
    line-height:150%;
}

h4{
    font-weight:bold;
    font-size: 2rem;
    
}
span{
    font-weight:bold;
    color: #EC008C;
}
a{
    font-size:1.1rem;
}
`;

export default GlobalStyle;
