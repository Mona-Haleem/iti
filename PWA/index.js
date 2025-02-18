
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./SW.js')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}



if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
        if (permission !== 'granted') 
            console.log('permision Denied');         
    });
}

let notification = null;
let leaveTime = null;
let notifyTimer;
           
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState === "hidden"){
        if(!leaveTime)
            leaveTime =  new Date();
        
        //first warning message
        notification = new Notification("Warning",{
            body:`return within 5 seconeds`,
            tag:leaveTime
        });
      
        if(!notifyTimer){       
            notifyTimer = setInterval(()=>{
                    let RemaningTime = 5 - Math.round((new Date() - leaveTime)/1000)
                    notification = new Notification("come back",{
                    body:`${RemaningTime} seconds remainig`,
                    tag:RemaningTime
                })  
                
                if(RemaningTime <= 0){
                    clearNotificatione();  
                    new Notification("Warning",{
                        body:`Time is up`,
                        tag:leaveTime
                    });
                }
            },1000)          
        }         
    }else{
        console.log('done');
        clearNotificatione();        
    }
});



function clearNotificatione(){
    leaveTime = null;
    if(notification) notification.close();
        if(notifyTimer){
            clearInterval(notifyTimer);
            notifyTimer = null;
        }
}