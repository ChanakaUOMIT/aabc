var api ={
    //getNotices(){
        showNotice() {
            console.log('ShowNotice')
             const url = 'https://ems.aladinlabs.com/api/notice/get';
             console.log(url);
            try {
            // fetch('http://192.168.43.148:3000/users/authenticate',{
                fetch(url,{
                method:'POST',
                headers: {
                'Accept':'application/json',
                'Content-Type' : 'application/json',
                },
                body:JSON.stringify({
                    access_token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZW1zLmFsYWRpbmxhYnMuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTM3Mjk1NTU1LCJleHAiOjE1MzcyOTkxNTUsIm5iZiI6MTUzNzI5NTU1NSwianRpIjoiNEFqNFlka3FyVmY4a1FEYiIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.blINxdH0avG_AJivZALIgbWie6arSycTM02I7FQjHY0",
                    email : "student@ems.com",
                })
            })
            
            } 
            catch (error) {
                alert('No network Connection Found');
            }
        
        }

   // }
};

module.exports = api; 

// .then((response) => response.json())
//             .then((response) => {
//                 console.log(response);
//                 let len= response.length;
//                 console.log(len);
//                 //console.log(response.notice);
//                 var notices=[];
//                 var i;
//                 for(i=0; i< len; i++ ){
//                     console.log(response[i])
//                     console.log(response[i].notice)
//                     notices.push(response[i].notice)
//                 }
        
//                 console.log("Notices");
//                 for(i=0; i<len; i++){
//                     console.log("Notice Number : "+(i+1))
//                     console.log(notices[i])
                    
//                     //console.log('')
//                 }
        
//                 //Alert.alert(notices.toString())
//                 let note=notices.toString();
//                 Alert.alert(note)
        
//                 //Alert.alert(notices)
//                //Alert.alert(notices[3])
               
//             })
//             .done();