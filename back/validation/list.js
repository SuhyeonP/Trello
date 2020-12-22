import Ajv from 'ajv';

const isValidListData = data => {
  const ajv = new Ajv();

  const schema = {
    properties: {
      boardId: { type: 'integer' },
      listTitle: { type: 'string' },
    },
    required: ['boardId', 'listTitle'],
  };

  const validate = ajv.compile(schema);
  return validate(data);
};

export default isValidListData;
