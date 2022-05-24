// logger middleware

/**
 *
 * @param {*} getState 获取状态
 * @param {*} dispatch 派发动作
 */
function logger({ getState, dispatch }) {
  // 如果仓库只有一个中间件的情况，next指的sotre原始的dispatch方法
  return function (next) {
    // 为了后面级联，可以同时使用多个中间件
    return function (action) {
      // 改选后的新的dispatch方法
      console.log(getState());
      next(action);
      console.log(getState());
    };
  };
}

export default logger;
