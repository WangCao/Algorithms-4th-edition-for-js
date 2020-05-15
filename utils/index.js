/**
 * 生成固定长度随机数组
 */
function generateAandomArray (len = 1000) {
  let arr = []
  for(let i = 0;i< len;i++) {
    arr.push(Math.round(Math.random()*len))
  }
  return arr;
}
/**
 * 交换数组内元素未知
 * @param {*} arr 
 * @param {*} i 
 * @param {*} k 
 */
function swap(arr,i,k) {
  let a = arr[i];
  arr[i] = arr[k];
  arr[k] = a;
}
/**
 * 函数执行器，可监控时间间隔
 * @param {*} fn 
 */
function intervalTime (fn) {
  let t1 = Date.now();
  fn();
  let t2 = Date.now();
  console.log("间隔时间为: "+ (t2-t1) + 'ms')
} 

module.exports = {
  generateAandomArray,
  swap,
  intervalTime
}