import React from 'react';
import PropTypes from 'prop-types';
import { singleBoard } from '../css/single';

const InnerCard = ({ iframeSrc, onCloseFrame }) => (
  <div css={singleBoard}>
    <div className="fix-center">
      <div className="haveTo-close">
        <iframe title="test" src={iframeSrc} />
        <i className="close-frame" onClick={onCloseFrame}>X</i>
      </div>
    </div>
  </div>
);

InnerCard.propTypes = {
  iframeSrc: PropTypes.string.isRequired,
  onCloseFrame: PropTypes.func.isRequired,
};

export default InnerCard;
