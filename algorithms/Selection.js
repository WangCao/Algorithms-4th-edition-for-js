// 1. 运行时间和输入无关，相同长度是恒定的
// 2. 数据移动最小的排序

const tools = require("../utils");
/**
 * 选择排序
 * @param {*} arr 
 */
function selection(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let k = i+1; k < len; k++) {
      // 从小到大排列
      if (arr[k] < arr[min]) {
        min = k;
      }
    }
    if (min !== i) {
      tools.swap(arr, i, min);
    }
  }
  return arr;
}

module.exports = selection;
