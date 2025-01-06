const getCountryData = async function(countryName,endPoint='name'){
    //fetch data from servers
    let data = await fetch(`https://restcountries.com/v2/${endPoint}/${countryName}`);
    let countryData = await data.json();
    return Array.isArray(countryData)?countryData[0]:countryData;           
}

const displayCountryDate = function(data,parentDiv){
    parentDiv.style.display ='block';
    //create container for countries
    let countryCountainer = document.createElement('div');
    countryCountainer.classList.add('country');
    //organize the data to display
    let cardData = [
        {tagName:'img',value:data.flags.png},
        {tagName:'h1',value:data.name},
        {tagName:'h3',value:data.region},
        {tagName:'p',value:'🧑‍🤝‍🧑' + (data.population/1000000).toFixed(2) + 'M People'},
        {tagName:'p',value:'🗣️' + data.languages[0].nativeName},
        {tagName:'p',value:'💰' + data.currencies[0].name}
    ]
    //create elements and display data
    for(let element of cardData){
        let ele = document.createElement(element.tagName);
        if (element.tagName === 'img')
            ele.src = element.value;
        else
            ele.textContent = element.value;
        countryCountainer.append(ele)
    }
    parentDiv.append(countryCountainer);
}