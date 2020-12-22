import React, {useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import OnClickDesc from './OnClickDesc';

const ModalDescription = ({ setModalContent }) => {
  const [inputDesc, setInputDesc] = useState(false);

  const onToggleDesc = useCallback(() => {
    setInputDesc((prev) => !prev);
  }, [inputDesc]);

  return (
    <>
      {inputDesc ? (
        <OnClickDesc
          setModalContent={setModalContent}
          setInputDesc={setInputDesc}
          inputDesc={inputDesc}
          onToggleDesc={onToggleDesc}
        />
      ) : (
        <p onClick={onToggleDesc}>Add a more detailed description...</p>
      )}
    </>
  );
};
ModalDescription.propTypes = {
  setModalContent: PropTypes.any.isRequired,
};

export default ModalDescription;
