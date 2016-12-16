// function is called 'action creator', that returns the action
export const selectUser = (user) => {
  // this is the actual action
  return {
    type: 'USER_SELECTED', // string that explains what happened
    payload: user // information that you want to give your component
  }
};
