// 1. 使数组中任意间隔为h的数组都是有序的
// 2. 对于每个H，用插入排序的算法将h个子数组单独的排序
// 3. 希尔比插入更高效的原因是权衡了子数组的规模有序性，子数组都很短，子数组都是部分有序的，适合使用插入排序
// 4. 希尔排序是插入排序的优化，对于大规模乱序数组，插入排序效率很慢

// 通过提升速度来解决其他方式无法解决的问题是研究算法的设计和性能的主要原因

const tools = require("../utils");
/**
 * 希尔排序
 * @param {*} arr
 */
function shell(arr) {
  let len = arr.length;
  let h = 1;
  while (h < Math.floor(len / 3)) h = 3 * h + 1;

  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        tools.swap(arr, j, j - h);
      }
    }
    h = Math.floor(h / 3);
  }
  return arr;
}

module.exports = shell;
