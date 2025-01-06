
const createStdRow = function(std){
    let stdRow = document.createElement('tr');
    for (let property in std){
        if (property == 'dept')
            stdRow.classList.add(std[property])
        else{
            let stdData = document.createElement('td');
            stdData.innerHTML = std[property];
            stdRow.append(stdData);
        }
    }
    stdRow.innerHTML+=`<td class="deleteBtn">🗑️</td>`

    return stdRow;
}

