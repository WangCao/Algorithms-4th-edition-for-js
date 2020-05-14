// 1. 插入排序所需的时间取决于输入中元素的初始顺序
// 2. 原理是构建有序数列，对未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入，从后向前排序中，需重复将已排序元素逐步向后移，为新元素提供插入空间

const tools = require("../utils");
/**
 * 插入排序
 * @param {*} arr
 */
function insertion(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    // 将 a[i] 插入到 a[i-1] a[i-2] a[i-3]
    for (let j = i; j > 0 && arr[j] < arr[j-1]; j--) {
      tools.swap(arr, j, j - 1);
    }
  }
  return arr;
}

module.exports = insertion;
