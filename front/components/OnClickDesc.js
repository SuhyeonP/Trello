import { CloseOutlined } from '@ant-design/icons';
import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { buttonBar, InputText } from '../css/single';
import useInput from '../exp/useInput';

const OnClickDesc = ({ setInputDesc, inputDesc, onToggleDesc }) => {
  const [inputDescText, onChangeDesc, setInputDescText] = useInput('');
  const onSubmitDescription = useCallback(() => {
    console.log(inputDescText);
    setInputDescText('');
    setInputDesc((prev) => !prev);
  }, [inputDescText]);

  return (
    <div>
      <Form onFinish={onSubmitDescription} css={buttonBar}>
        <InputText placeholder="Add a more detailed description..." onChange={onChangeDesc} autoFocus={inputDesc} />
        <button type="submit" className="save-button">
          Save
        </button>
        <button type="button" className="x-button">
          <CloseOutlined style={{ fontSize: '20px' }} onClick={onToggleDesc} />
        </button>
      </Form>
    </div>
  );
};

OnClickDesc.propTypes = {
  onToggleDesc: PropTypes.func.isRequired,
  inputDesc: PropTypes.bool.isRequired,
  setInputDesc: PropTypes.func.isRequired,
};

export default memo(OnClickDesc);
