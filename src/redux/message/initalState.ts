type MessageProps = {
  value: {
    message: string;
    messageType: 'success' | 'error';
  };
};

const initialState: MessageProps = {
  value: {
    message: '',
    messageType: 'success',
  },
};

export default initialState;
