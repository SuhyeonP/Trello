import React from 'react';
import { css } from '@emotion/react';

const divStyle = css`
  background-color: black;
  font-size: 24px;
`;

export default function BoardTest() {
  return (
    <>
      <div
        css={css`
          background-color: blue;
        `}
      >
        head
      </div>
      <div css={divStyle}>
        base
        <div>lists</div>
      </div>
    </>
  );
}
