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

function swap(arr,i,k) {
  let a = arr[i];
  arr[i] = arr[k];
  arr[k] = a;
}

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