import { ArrowRightOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import React, { memo } from 'react';

const BoardSideBar = () => (
  <div className="sidebar">
    <h3>ADD TO CARD</h3>
    <div className="card-bar">
      <p>
        <UserOutlined /> Members
      </p>
      <p>
        <UserOutlined /> Checklist
      </p>
    </div>
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

export default memo(BoardSideBar);
