const grim = require('./grimauth')
const key1 = 'GRIM-DFCA0-6D071-A9EB6-85C06' // Get Key From user

 grim.grimauth(key1,(err , status)=> {
    if(err){
        //Handle Error
    }
    if(status > 0){
        //Do your Code
    }
  })
  
