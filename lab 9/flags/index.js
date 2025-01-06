window.addEventListener('load', ()=>{
    const textInput = document.querySelector('input[name]');
    const submitBtn = document.querySelector('input[type=submit]');
    const parentDiv = document.querySelector('.container');

    submitBtn.onclick = async function(event){
        event.preventDefault();
        document.querySelector('.container').innerHTML = '';
        let countryData , border;
        try {
            //get required country data
            countryData = await getCountryData(textInput.value.trim().toLowerCase());
            displayCountryDate(countryData,parentDiv);
            //get random neighbours data by code
            if(countryData.borders){
                let borderIndex = Math.floor(Math.random() * countryData.borders.length);
                border = await getCountryData(countryData.borders[borderIndex],'alpha');
                displayCountryDate(border,parentDiv);
            }else{
                parentDiv.append('No borders Found');
            }
        } catch (error) {

            parentDiv.innerHTML ='Invalid country Name'
        }
    }    
});
