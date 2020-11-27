import React from 'react';
import { mainBoardSection } from '../css/mainboard';

export default function BoardTest() {
  return (
    <>
      <div css={mainBoardSection}>
        head
      </div>
      <div>
        base
        <div>lists</div>
      </div>
    </>
  );
}
