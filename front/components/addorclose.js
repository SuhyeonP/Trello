import React, { memo } from 'react';
import PropTypes from 'prop-types';

const AddOrClose = ({ addText, onClickToClose }) => (
  <>
    <div className="twoButtonSetting">
      <button type="submit" className="addButton">{addText}</button>
      <button className="closeBtn" onClick={onClickToClose} type="button">Close</button>
    </div>
  </>
);

AddOrClose.propTypes = {
  addText: PropTypes.string.isRequired,
  onClickToClose: PropTypes.func.isRequired,
};

export default memo(AddOrClose);
