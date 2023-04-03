// make logger middleware
export const logger = (store) => (next) => (action) => {
  console.log("your previuos store was ", store.getState());
  console.log("Action fired", action);
  next(action);
};
