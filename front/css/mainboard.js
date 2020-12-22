import { css } from '@emotion/react';
<<<<<<< HEAD
import styled from '@emotion/styled';

export const MainBoardSection = styled.div`
 background-color:${(props) => props.color || '#0079bf'};
=======

export const mainBoardSection = css`
 background-color: #0079bf;
>>>>>>> master
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
<<<<<<< HEAD
    background-color:#0a0a0a52;
=======
    background-color:#0067a3;
>>>>>>> master
    padding:10px 20px;
    z-index:1;
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
<<<<<<< HEAD
            background-color: hsla(202, 47%, 52%, 0.55);
=======
            background-color:hsl(202, 47%, 52%);
>>>>>>> master
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
 .twoButtonSetting{
    height: 32px;
    display:inline-block;
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
    .board-header-title{
        height: auto;
        padding: 8px 4px 4px 8px;
        position: relative;
        display:flex;
        justify-content:space-between;
<<<<<<< HEAD
        background: #34343459;
=======
        background: #0079bf;
>>>>>>> master
        transition: padding .1s ease-in;
    }
    .project-title{
        background: transparent;
        cursor: default;
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
        padding: 0;
        text-decoration: none;
        max-width: calc(100% - 24px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 32px;
        h1{
            font-size: 18px;
            font-weight: 700;
            line-height: 32px;
            padding: 0 12px;
            color:#fff;
            position:relative;
            &::after{
                position:absolute;
                content:"";
                width:1px;
                height:18px;
                background-color:white;
                top:9px;
                margin-left:5px;
            }
        }
    }
    .showMenu-btn{
        transition: .1s ease;
        .showMenu-Button{
            display:inline-flex;
            background-color: hsla(0,0%,100%,.24);
            border:0;
            border-radius: 3px;
            color: #fff;
            cursor: default;
            float: left;
            font-size: 14px;
            height: 32px;
            line-height: 32px;
            margin: 0 4px 4px 0;
            max-width: 400px;
            overflow: hidden;
            padding:0 10px 0 32px;
            position: relative;
            text-decoration: none;
            text-overflow: ellipsis;
            &::before{
                position:absolute;
                content:"...";
                left:5px;
                letter-spacing:1px;
                top:-6px;
                font-size:17px;
            }
            &:active{
                outline:0;
            }
        }
    }
    .showing-board-inList{
        display:block;
        .display-board{
            display:flex;
            padding-left:5px;
        }
    }
    .moving-list{
        position:absolute;
        bottom:5px;
        right:5px;
    }
`;

export const listWrapper = css`
    width: 272px;
    margin: 0 4px;
    height: 100%;
    position:relative;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    .list{
<<<<<<< HEAD
        margin:8px 4px 0;
=======
        margin-top:8px;
>>>>>>> master
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
        z-index:2;
        h2{
            height: 28px;
            min-height: 20px;
        }
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
    .add-card-form{
        overflow: hidden;
        position: relative;
        z-index: 10;
        margin-bottom: 8px;
        textarea{
            overflow: hidden;
            overflow-wrap: break-word;
            resize: none;
            height: 54px;
            border: none;
            background-color: #fff;
            border-radius: 3px;
            box-shadow: 0 1px 0 rgba(9,30,66,.25);
            margin-bottom: 12px;
            max-height: 162px;
            min-height: 54px;
            padding: 4px 2px;
            width:100%;
            box-sizing: border-box;
            -webkit-appearance: none;
            display: block;
            line-height: 20px;
            transition-property: background-color,border-color,box-shadow;
            transition-duration: 85ms;
            transition-timing-function: ease;
            &:focus{
                outline:0;
            }
        }
    }
    .list-card{
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgba(9,30,66,.25);
        cursor: pointer;
        display: flex;
        justify-content:space-between;
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
            display:inline-block;
            z-index:15;
        }
        .moving-card{
            display:inline-block;
            padding:4px 4px 4px 0;
        }
    }
    .wrap-board{
        display:inline-block;
    }
    .input-list-title{
        display:inline-block;
        z-index:5;
        height: 28px;
        min-height: 20px;
        padding:4px 8px;
    }
    .add-card{
        min-height: 38px;
        max-height: 38px;
        div{
            border-radius: 3px;
            color: #5e6c84;
            display: block;
            flex: 1 0 auto;
            margin: 2px 0 8px 8px;
            padding: 4px 8px;
            position: relative;
            text-decoration: none;
            -webkit-user-select: none;
            user-select: none;
            span{
                cursor:pointer;
            }
        }
    }
    .sorting-button{
        display:inline-block;
        position:absolute;
        top:10px;
        right:0;
        padding:5px 10px 5px;
        font-weight:700;
    }
    .sort-setting{
        z-index:20;
        display:inline-block;
        position:absolute;
        top:28px;
        right:-77px;
        list-style:none;
        width:97px;
        padding:5px;
        background:#ffffffcf;
        border-radius:4px;
        li{
            padding:2px;
            position:relative;
            &::after{
                content:"";
                bottom:3px;
                left:0;
                width:80px;
                position:absolute;
                height:1px;
                background-color:black;
            }
        }
        button{
            background:inherit;
            border:0;
            outline:0;
            &:active{
                outline:0;
                color:blue;
            }
        }
    }
    .origin-title{
        z-index:14;
    }
`;

export const makeBoard = css`
<<<<<<< HEAD
    .same-line{
        margin-top:8px;
        border-radius: 3px;
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        max-height: 40px;
        position: relative;
        white-space: normal;
        background-color: hsla(0,0%,100%,.24);
        cursor: pointer;
        display:inline-block;
    }
=======
    margin-top:8px;
    border-radius: 3px;
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    max-height: 40px;
    position: relative;
    white-space: normal;
    background-color: hsla(0,0%,100%,.24);
    cursor: pointer;
    display:inline-block;
>>>>>>> master
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
`;

export const boardMenu = css`
    position:absolute;
    z-index:50;
    top:0;
    right:0;
    width:339px;
    height:100vh;
    background-color:#f4f5f7;
    transition-property: transform,width;
    transition-duration: .1s;
    transition-timing-function: ease-in;
    box-shadow: 0 12px 24px -6px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    transform: translateX(0);
    .logout-btn,.hi-user{
        display:block;
        padding: 6px 6px 6px 40px;
        &>button{
            display:inline-block;
            font-size: 16px;
            color: #172b4d;
            font-weight:600;
            border:0;
            outline:0;
            &:active{
                outline:0;
            }
            &:hover{
                transform:scale(1.1);
            }
        }
        h2{
            font-size:16px;
        }
    }
    .close-menu{
        font-size:14px;
        color:black;
        background:inherit;
        border:0;
        &:active{
            outline:0;
        }
    }
    
    .menu-title-div{
        box-sizing: border-box;
        flex: 0 0 auto;
        height: 48px;
        padding: 0 6px 0 12px;
        position: relative;
        div{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
    .menu-title{
        line-height: 20px;
        margin: 14px 32px;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        transition: margin .12s ease-in;
        white-space: nowrap;
        flex: 1;
        font-size: 16px;
        color: #172b4d;
        font-weight:600;
    }
    .menu-underline{
        background-color: rgba(9,30,66,.13);
        border: 0;
        height: 1px;
        margin: 2px 0;
        padding: 0;
        width: 100%;
    }
    .inner-menu{
        box-sizing: border-box;
        flex: 1 1 auto;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 12px 6px 12px 12px;
        width: 100%;
        height: 100%;
        span{
            font-size: 20px;
            height: 20px;
            line-height: 20px;
            width: 20px;
            position: absolute;
            top: 6px;
            left: 12px;
        }
    }
    .change-background{
        width:100%;
        padding-bottom:7px;
        .change-bc{
            border-radius: 3px;
            display: block;
            font-weight: 600;
            line-height: 20px;
            text-decoration: none;
            padding: 6px 6px 6px 40px;
            position: relative;
            width:100%;
            &:hover{
                background-color: rgba(9,30,66,.08);
            }
        }
    }
    .timeline-title{
        border-radius: 3px;
        display: block;
        line-height: 20px;
        padding: 6px 6px 6px 40px;
        position: relative;
        text-decoration: none;
        h2{
            font-weight:700;
            color: #172b4d;
            font-size:14px;
        }
    }
    .timeline-onBoard{
        margin-top:7px;
    }
    .timeline-oneline{
        min-height: 32px;
        padding: 8px 0;
        position: relative;
        margin-left:40px;
    }
    .background-holder{
        display:table;
        width:100%;
        text-align:center;
        height:80vh;
        &>div{
            display:table-cell;
            vertical-align:middle;
        }
    }
    .background-is{
        height:45%;
        display:block;
        margin:4% 0;
        &>div{
            display:inline-block;
            &>p,&>img{
                width:10vw;
                height:10vw;
            }
            &>img{
                background-color:white;
            }
            &>p{
                overflow-y:hidden;
                overflow-x:scroll;
            }
        }
    }
    
`;
