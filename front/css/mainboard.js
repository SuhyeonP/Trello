import { css } from '@emotion/react';

const boardSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const boardHead = css`
  width: 100%;
  height: 8vh;
  text-align: center;
  background-color: #0079bf;
  * {
    margin: 0;
    padding: 0;
  }
`;

const boardBase = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;
`;

const listBox = css`
  background-color: #e8e8e8;
  width: 300px;
`;

const listData = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

export { boardSection, boardHead, boardBase, listBox, listData };
