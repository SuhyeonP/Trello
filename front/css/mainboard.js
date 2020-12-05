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
    .searching-zone{
        input{
            padding-left:9px;
            height:35px;
            border:0;
            outline:0;
            background-color:hsl(202, 47%, 52%);
            border-radius:4px;
            &:focus{
                background-color:white;
                color:black;
                width:125%;
            }
            &::placeholder{
                color:white;
            }
        }
    }
    .anticon-search{
        width:35px;
        height:35px;
        font-size:20px;
        color:white;
    }
 }
`;

const listWrapper = css`
    width: 272px;
    margin: 0 4px;
    height: 100%;
    position:relative;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    .list{
        margin-top:8px;
        background-color: #ebecf0;
        border-radius: 3px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        position: relative;
        white-space: normal;
    }
    .list-header{
        flex: 0 0 auto;
        padding: 10px 8px;
        position: relative;
        min-height: 20px;
    }
    .list-cards{
        flex: 1 1 auto;
        margin-bottom: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        margin: 0 4px;
        padding: 0 4px;
        z-index: 1;
        min-height: 0;
        max-height:87vh;  
    }
    .list-card{
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgba(9,30,66,.25);
        cursor: pointer;
        display: block;
        margin-bottom: 8px;
        max-width: 300px;
        min-height: 20px;
        position: relative;
        text-decoration: none;
        z-index: 0;
        p{
            color: #172b4d;
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
            padding-left:3px;
        }
    }
    .wrap-board{
        display:inline-block;
    }
`;

const makeBoard = css`
    margin-top:8px;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    white-space: normal;
    background-color: hsla(0,0%,100%,.24);
    cursor: pointer;
    display:inline-block;
    .making-board{
        width:272px;
        margin: 0 4px;
        box-sizing:border-box;
        vertical-align:top;
        white-space:nowrap;
    }
    .placeholder{
        display: block;
        color: #fff;
        padding: 6px 8px;
        transition: color 85ms ease-in;
    }
    .icon-add:before {
        content: " + ";
        font-size:17px;
    }
    .icon-sm{
        height: 20px;
        font-size: 16px;
        line-height: 20px;
        width: 20px;
    }
    .make-title{
        input{
            background-color: #fff;
            box-shadow: inset 0 0 0 2px #0079bf;
            display: block;
            margin: 0;
            transition: margin 85ms ease-in,background 85ms ease-in;
            width: 100%;
        }
    }
    .title-inputmode{
        background-color: #ebecf0;
        border-radius: 3px;
        height: auto;
        min-height: 32px;
        padding: 4px;
        transition: background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
        input{
            background-color: #fff;
            box-shadow: inset 0 0 0 2px #0079bf;
            display: block;
            margin: 0;
            transition: margin 85ms ease-in,background 85ms ease-in;
            width: 100%;
            border:0;
            padding:4px 2px;
            border-radius:4px;
            &:focus{
                outline:0;
            }
        }
    }
    .inputbutton-close{
        height: 32px;
        transition: margin 85ms ease-in,height 85ms ease-in;
        overflow: hidden;
        margin: 4px 0 0;
    }
    .closeBtn,.addButton{
        box-shadow: none;
        border: none;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-weight: 400;
        line-height: 20px;
        margin: 8px 4px 0 0;
        padding: 6px 12px;
        text-align: center;
        float: left;
        min-height: 32px;
        height: 32px;
        margin-top: 0;
        padding-top: 4px;
        padding-bottom: 4px;
        &:focus{
            outline:0;
            transform:scale(1.1);
        }
    }
    .addButton{
        background-color: #5aac44;
    }
    .closeBtn{
        background-color: #61616152;
    }
`;

export { mainBoardSection, makeBoard, listWrapper };
