import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
     font-family:'Montserrat',sans-serif;
}

h1{
    text-align: center;
    margin-bottom: 0.5rem;
}
h2{
    text-align: center;
    margin-bottom: 0.5rem;
    font-weight: lighter;
}
/* html{
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:darkgray;
    }
    &::-webkit-scrollbar-track{
        background-color:darkgray;
    }
}
body{
    font-family:'Montserrat',sans-serif;
    width:100%;
}

h2{
    font-size:3rem;
    font-family:'Abril Fartface',cursive;
    font-weight:lighter;
    color:#333;
}
h3{
    font-size:1.3rem;
    color:#333;
    padding: 1.5rem 0rem;
}
p{
    font-size:1.2rem;
    line-height:200%;
    color:#696969;
}
a{
    text-decoration:none;
    color:#333;
}
img{
    display:block;
}
input{
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
} */
`;

export default GlobalStyles;
