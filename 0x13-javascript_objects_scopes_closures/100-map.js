able file 6 lines (5 sloc) 150 Bytes
#!/usr/bin/node

const list = require('./100-data').list;
console.log(list);
const newList = list.map((x, index) => x * index);
console.log(newList);
