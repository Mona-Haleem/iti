window.addEventListener('load',function(){
    let main = document.querySelector('main');
    let displaySec = document.querySelector('section div');
    let [displayMap , displayDetail] = document.querySelectorAll('button');
    main.onclick = function(event){
        if (navigator.geolocation) {
            let pos =  navigator.geolocation.getCurrentPosition(
                (pos)=>{
                    lat = pos.coords.latitude;
                    lon = pos.coords.longitude;
                    console.log(lat,lon)
                 
                    if (event.target == displayMap){
                        displaySec.className = 'map';
                        var location = new google.maps.LatLng(lat, lon);
                        var specs = { zoom: 17, center: location };
                        new google.maps.Map(displaySec, specs);
                    }else if(event.target == displayDetail){
                        displaySec.className = 'details';
                        displaySec.innerHTML = `  
                                <p>Latitude</p>
                                <input value=${lat}>
                                <p>Longitude</p>
                                <input value=${lon}>
                                <p>Accuracy</p>
                                <input value=${pos.coords.accuracy}>
                                <p>TimeStamp (Current TimeStamp)</p>
                                <input value="${new Date(pos.timestamp)}">
                           
                        `
                    }
                },
                ()=> displaySec.innerText = "Sorry , Can't display your Data");
        }else{
            displaySec.innerText = "Sorry , Can't accesses your location";
        }
    }
    

   
  
})

