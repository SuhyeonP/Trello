import React, { useCallback, useState } from 'react';
import useInput from '../exp/useInput';

const ModifyDescription = () => {
  const [modiDescript, setModiDescript] = useState(true);
  const [inputModi, onChangeModi, setModi] = useInput('');
  const [focusModi, setFocusModi] = useState(false);

  const changeDescription = useCallback(() => {
    if (!modiDescript) {
      setModi('');
    }
    setFocusModi((prevState) => !prevState);
    setModiDescript((prevState) => !prevState);
  }, [inputModi, modiDescript, focusModi]);

  return (
    <>
      {modiDescript ? <p onDoubleClick={changeDescription}>hi</p>
        : (
          <input
            className="ant-input css-1b6b4gj-InputText e3c7br30"
            autoFocus={focusModi}
            value={inputModi}
            onChange={onChangeModi}
            onBlur={changeDescription}
          />
        )}
    </>
  );
};

export default ModifyDescription;
// todo input placeholder would be description like
// placeholder={content}
