import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Input } from 'antd';

export const singleBoard = css`
  z-index: 999;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: table;
  margin: 0;
  padding: 0;
  background-color: #0000004a;
  .fix-center {
    display: table-cell;
    vertical-align: middle;
    position: relative;
  }
  iframe {
    display: inline-block;
    width: 768px;
    height: 90vh;
    border: 0;
  }
  .haveTo-close {
    display: inline-block;
    position: relative;
  }
  .close-frame {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    iframe {
      display: inline-block;
      width: 90vw;
      border: 0;
    }
  }
`;

export const OpenLinkSingle = css`
  background-color: #f4f5f7;
  width: 100vw;
  height: 100vh;
  .main {
    display: flex;
    .main-col {
      margin: 0 0 4px 40px;
      width: 512px;
      p {
        background-color: rgba(9, 30, 66, 0.04);
        box-shadow: none;
        border: none;
        border-radius: 3px;
        font-size: 14px;
        min-height: 56px;

        padding: 8px 12px;
        text-decoration: none;
        margin: 0;
        &:hover {
          background-color: rgba(9, 30, 66, 0.14);
          cursor: pointer;
        }
      }
    }
    .sidebar {
      padding: 0 16px 8px 8px;
      width: 168px;
      overflow: hidden;
      z-index: 10;
      h3 {
        color: #5e6c84;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.04em;
        line-height: 16px;
        margin-top: 16px;
        text-transform: uppercase;
        line-height: 20px;
        margin-bottom: -4px;
      }
      p {
        background-color: rgba(9, 30, 66, 0.04);
        color: #172b4d;
        box-shadow: none;
        box-sizing: border-box;
        border: none;
        border-radius: 3px;
        font-size: 14px;
        height: 32px;
        padding: 6px 12px;
        text-decoration: none;
        margin: 8px 0 0 0;
        &:hover {
          background-color: rgba(9, 30, 66, 0.14);
          cursor: pointer;
        }
      }
      .card-bar{
        span{
            margin-right:8px;
        }
      }
    }
  }
  .board-title {
    position: relative;
    min-height: 32px;
    padding: 8px 0 8px;
    font-size: 0;
    color: #172b4d;
    margin: 0 40px 8px 56px;
    span {
      position: absolute;
      left: -40px;
      top: 16px;
      height: 32px;
      line-height: 32px;
      width: 32px;
      font-size: 24px;
    }
  }
  .real-title {
    display: block;
    width: 512px;
    margin: 4px 0 0;
    padding: 8px 0 0;
    font-size: 20px;
    h2 {
      font-weight: 600;
      margin: 0 0 8px;
      font-size: 20px;
      line-height: 24px;
    }
  }
  .little-title {
    cursor: default;
    display: inline-block;
    margin: 4px 8px 4px 2px;
    font-size: 14px;
    p {
      display: inline-block;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    .board-title {
      position: relative;
      min-height: 32px;
      padding: 8px 0;
      color: #172b4d;
      span {
        position: absolute;
        left: -28px;
        top: 4px;
      }
    }
  }
`;

export const InputText = styled(Input.TextArea)`
  height: 108px;
  overflow: hidden;
  padding: 8px 12px;
  min-height: 108px;
  margin-bottom: 8px;
`;
export const buttonBar = css`
  height: 32px;
  font-size: 14px;
  .save-button {
    width: 52px;
    height: 32px;
    background-color: #5aac44;
    box-sizing: border-box;
    box-shadow: none;
    border: none;
    color: #fff;
    margin-right: 4px;
    line-height: 20px;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
    padding: 6px 12px;
    text-decoration: none;
  }
  .x-button {
    height: 32px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    vertical-align: bottom;
    width: 32px;
    background-color: #f4f5f7;
    border: none;
  }
`;
