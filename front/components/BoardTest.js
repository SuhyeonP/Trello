import React from 'react';
import { List } from 'antd';
import {
  boardSection,
  boardHead,
  boardBase,
  listBox,
  listData,
} from '../css/mainboard';

export default function BoardTest() {
  return (
    <>
      <div css={boardSection}>
        <div css={boardHead}>head</div>
        <div css={boardBase}>
          <List
            grid={{ gutter: 8, column: 4 }}
            dataSource={listData}
            renderItem={(item) => (
              <List.Item>
                <div css={listBox} title={item.title}>
                  Card content
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}
