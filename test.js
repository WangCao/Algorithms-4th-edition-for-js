const selection = require('./algorithms/Selection');
const insertion = require('./algorithms/Insertion');
const shell = require('./algorithms/Shell');
const tools = require('./utils/index');

let times = 20;

tools.intervalTime(()=> {
  console.log('selection',selection(tools.generateAandomArray(times)));
})

tools.intervalTime(()=> {
  console.log('insertion',insertion(tools.generateAandomArray(times)));
})

tools.intervalTime(()=> {
  console.log('shell',shell(tools.generateAandomArray(times)));
})

