import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { CloseSquareOutlined } from '@ant-design/icons';
import { modalBackground, ColorBox } from '../css/single';

const ModalCover = ({ colorIn, modalCover, setModalCover, colorArray }) => {
  const changeBackground = useCallback((color) => {
    console.log(modalCover);
    setModalCover(color);
  }, [modalCover]);
  const removeCover = useCallback(() => {
    setModalCover('#f4f5f7');
  }, [modalCover]);

  return (
    <div css={modalBackground}>
      <div className="cover-title">
        <span>Cover</span>
        {colorIn && <button onClick={removeCover} className="remove-cover" type="button"><CloseSquareOutlined /></button>}
      </div>
      <div>
        <ul className="palette">
          {colorArray.map((color, ind) => (
            <li key={ind}>
              <ColorBox color={color} onClick={() => changeBackground(color)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
ModalCover.propTypes = {
  setModalCover: PropTypes.any.isRequired,
  modalCover: PropTypes.any.isRequired,
  colorArray: PropTypes.array.isRequired,
  colorIn: PropTypes.bool.isRequired,
};

export default ModalCover;
