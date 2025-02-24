console.log('\n-------------Proxy-------------\n ');

class Country {
    constructor(name) {
        this.name = name;
    }

    getDetails() {
        if (this.name === 'egypt')
            return 'Egypt\'s capital is Cairo';
        else if (this.name === 'united states')
            return 'Washington, D.C. is the capital of the USA';
        else
            return 'No country data recorded';
    }
}

class ProxCountry{
    constructor(){
        this.cache={};
    }

    getCountry(name){
        if(!this.cache[name])
            this.cache[name] = new Country(name).getDetails();
        return this.cache[name]
    }
}

let countries = new ProxCountry()
let egy = countries.getCountry('egy');
let usa = countries.getCountry('united states')
let egypt = countries.getCountry('egypt')


// const CountryProxy = new Proxy({}, {
//     cache: {},
//     get(name) {
//         if (!this.cache[name]) 
//             this.cache[name] = new Country(name).getDetails();
//         return this.cache[name];
//     }
// });


// let egypt = CountryProxy['egypt'];
// let usa = CountryProxy['united states'];
// let egy = CountryProxy['egy'];

console.log(egypt);   
console.log(usa);     
console.log(egy); 
