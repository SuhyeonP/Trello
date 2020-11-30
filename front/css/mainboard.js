import { css } from '@emotion/react';

const mainBoardSection = css`
 background-color: #0079bf;
 overflow-y:hidden;
 height:100vh;
 *{
    margin:0;
    padding:0;
 }
 header{
    display:flex;
    text-align:center;
    justify-content:space-between;
    background-color:#0067a3;
    padding:10px 20px;
    p{
        color:white;
        font-size:20px;
    }
    .ant-input-group-wrapper{
        width:25%;
        position:relative;
        input{
            padding-left:9px;
            height:35px;
            border:0;
            outline:0;
        }
        .ant-input-group{
            z-index:40;
            height:35px;
        }
    }
 }
`;

export { mainBoardSection };
