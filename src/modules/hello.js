
const HELLO = 'hello/HELLO';

const initialState = {
  param: false
};

export default function reducer(state = initialState, action = {}) {
  console.log(state);
  switch (action.type) {
    case HELLO:
      return {
        ...state,
        param: true
      };

    default:
      return state;
  }
} 

export function helloAction(val) {
  console.log(val);
  return {
    type: HELLO,
    text: 'text',
  };
}