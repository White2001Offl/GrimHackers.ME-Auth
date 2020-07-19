```javascript
//To Check Premium+ Auth

const fetch = require('node-fetch'); // Needed for a Request
module.exports = {
    grimauth: async function(key,callback){
        var authgroup = ['4', '18', '3', '5', '6', '7', '8', '12', '13'] // User Groups
        const options = {
            method: 'GET',
        }
        var status = 0
        await fetch(`https://grimhackers.me/auth/verify?auth_code=${key}`, options) // Sent a Request to 
            .then(res => res.json())
            .then(async json => {
                
                if(json.error){
                    console.log('Invalid Auth Key')
                    status = -1
                    return await callback(null, -1);
                }
                else {
                    var len = json.secondarygroup.length
                    for(var i=0; i<len; i++){
                        if(authgroup.includes(`${json.secondarygroup[i].toString()}`)){
                            console.log('Auth Verified')
                            status = 1
                            return
                        }
                        
                    }
                }
            }) .catch(async err => {
                console.log(err)
                console.log('Grimhackers Auth is down')
                return await callback(null, -2);
            })
            if(status > 0){
                return await callback(null, 1);
            }
            else if(status === 0){
                console.log('You\'re Not a premium+ user')
                return await callback(null, 0);
            }
    }
}
```
