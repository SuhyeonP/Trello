import {
  ArrowRightOutlined,
  CheckSquareOutlined,
  DeleteOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const BoardSideBar = ({ openChangeCover }) => (
  <div className="sidebar">
    <h3>ADD TO CARD</h3>
    <div className="card-bar">
      <p>
        <CheckSquareOutlined /> Checklist
      </p>
      <p className="modal-cover" onClick={openChangeCover}>
        <DesktopOutlined /> Cover
      </p>
    </div>
    <br />
    <h3>ACTIONS</h3>
    <div className="card-bar">
      <p>
        <ArrowRightOutlined />
        Move
      </p>
      <p>
        <DeleteOutlined />
        Delete
      </p>
    </div>
  </div>
);
BoardSideBar.propTypes = {
  openChangeCover: PropTypes.func.isRequired,
};

export default memo(BoardSideBar);
