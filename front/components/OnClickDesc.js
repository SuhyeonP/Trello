import React, { memo } from "react";
import { OpenLinkSingle } from "../css/single";
import { Input } from "antd";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CloseOutlined } from "@ant-design/icons";
const InputText = styled(Input.TextArea)`
  height: 108px;
  overflow: hidden;
  padding: 8px 12px;
  min-height: 108px;
  margin-bottom: 8px;
`;
const buttonBar = css`
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

const OnClickDesc = ({ onToggleDesc }) => {
  return (
    <div>
      <InputText placeholder="Add a more detailed description..." />
      <div css={buttonBar}>
        <button type="submit" className="save-button">
          Save
        </button>
        <button className="x-button">
          <CloseOutlined style={{ fontSize: "20px" }} onClick={onToggleDesc} />
        </button>
      </div>
    </div>
  );
};

export default OnClickDesc;
