const helpers = require("./helper.js");

function main(){
    helpers.createFileIfNotExist();
    const [,,method,...params] = process.argv;
    const formatedParams = helpers.formatParams(params); 
    
    switch (method){
        case "add":
            helpers.addTodo(formatedParams);
        break
        case "edit":
            helpers.editItem(formatedParams);
        break
        case "list":
            helpers.listItems(params[0]);
        case "remove":
            helpers.removeItem(formatedParams.id);
        break
        case "check":
            helpers.toggleItemCheck(formatedParams.id , true);
        break
        case "uncheck":
            helpers.toggleItemCheck(formatedParams.id , false);
        break
        default:
            console.log('INVALID METHOD \navaliable methode: [add , edit , list , remove , check , uncheck ] ')
        break
    }
}



main()