const initialState = {
  userCount: 0,
};

const rootReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'INCREMENT_USER_COUNT':
      return {
        ...state,
        userCount: state.userCount + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
