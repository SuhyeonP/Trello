import { css } from '@emotion/react';

const mainPage = css`
    display:table;
    height:100vh;
    
    .user-join{
        display:table-cell;
        vertical-align:middle;
        text-align:center;
        width:100vw;
    }
    button{
        margin:0 10px;
    }
    .signup-div{
        display:block;
        text-align:center;
        margin:10px 0;
    }
    .ant-form{
        width:50vw;
        margin:0 auto;
        input{
            width:40%;
        }
        .pw-check{
            color:red;
        }
    }
    .go-back-set{
        margin-top:30px;
        border:0;
        span{
            text-decoration:underline;
            &:hover{
                color:#408bff;
            }
        }
    }
    @media (max-width:677px){
        .ant-form{
            width:50vw;
            margin:0 auto;
            input{
                width:90%;
            }
            .pw-check{
                color:red;
            }
        }
    }
`;

export { mainPage };
