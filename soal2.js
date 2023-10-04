const fs = require('fs')

fs.readFile('homework.log', 'utf8', (err, data) => {
 if (!err) { 
  fs.writeFile('log.txt', data, (err) => {
   if (!err) {
    console.log ('done bangg :)')
   }
  })
 }
})
