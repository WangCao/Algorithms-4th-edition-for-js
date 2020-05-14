const selection = require('./algorithms/Selection');
const insertion = require('./algorithms/Insertion');
const tools = require('./utils/index');

let times = 10;

tools.intervalTime(()=> {
  console.log(selection(tools.generateAandomArray(times)));
})

tools.intervalTime(()=> {
  console.log(insertion(tools.generateAandomArray(times)));
})
