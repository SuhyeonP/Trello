import { css } from '@emotion/react';

export const singleBoard = css`
    z-index:999;
    text-align:center;
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    display:table;
    margin:0;
    padding:0;
    background-color:#0000004a;
    .fix-center{
        display:table-cell;
        vertical-align:middle;
        position:relative;
    }
    iframe{   
        display:inline-block;
        width:768px;
        height:90vh;
        border:0;
    }
    .haveTo-close{
        display:inline-block;
        position:relative;
    }
    .close-frame{
        position:absolute;
        top:20px;
        right:20px;
        font-size:20px;
        font-weight:600;
        cursor:pointer;
    }
    @media (max-width:767px){
        iframe{   
            display:inline-block;
            width:90vw;
            border:0;
        }
    }
`;

export const OpenLinkSingle = css`
    background-color:#f4f5f7;
    width:100vw;
    height:100vh; 
    .board-title{
        position:relative;
        min-height:32px;
        padding:8px 0 8px;
        font-size:0;
        color: #172b4d;
        margin: 0 40px 8px 56px;
        span{
            position:absolute;
            left: -40px;
            top: 16px;
            height: 32px;
            line-height: 32px;
            width: 32px;
            font-size:24px;
        }
    }
    .real-title{
        display:block;
        margin: 4px 0 0;
        padding: 8px 0 0;
        font-size:20px;
        h2{
            font-weight: 600;
            margin: 0 0 8px;
            font-size: 20px;
            line-height: 24px;
        }
    }
    .little-title{
        cursor: default;
        display: inline-block;
        margin: 4px 8px 4px 2px;
        font-size:14px;
        p{
            display:inline-block;
            margin-bottom: 0;
            padding-bottom: 0;      
        }
    }
    
    @media (max-width:767px){
        .board-title{
            position:relative;
            min-height:32px;
            padding:8px 0;
            color: #172b4d;
            span{
                position:absolute;
                left: -28px;
                top: 4px;
            }
        }
    }
`;
