const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method return s the system uptime in seconds
console.log(`The System Uptime is ${os.uptime / 60 / 60} hrs`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freMem: os.freemem(),
}

console.log(currentOS)
