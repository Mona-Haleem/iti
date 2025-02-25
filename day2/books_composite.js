console.log('\n-------------Composite-------------\n ');

class Box{
    constructor(title){
        this.title = title;
        this.items = []
    }

    add(item){
        this.items.push(item);
    }

    getitem(i){
        return this.items[i]
    }

}

class Book{
    constructor(title,pages){
        this.title = title;
        this.pages = pages;
    }
}


function traverse(indent, node){
    let pages = (node.pages)?' pages :' + node.pages:''
    console.log(Array(indent++).join("-- ") + node.title + pages );
    if(node.items){
        for(let i=0;i<node.items.length;i++){
            traverse(indent,node.getitem(i))
        }
    }
}


let bookBox = new Box("my books");
let favBox = new Box("fav books");
let importantBox = new Box("important books");

bookBox.add(favBox);
bookBox.add(importantBox)

for(let i = 0; i< 6; i++){
    let newBook = new Book(`book ${i}` ,Math.ceil(Math.random() * 100))
    let box = Math.ceil(Math.random() * 3);
    switch (box){
        case 1:
            bookBox.add(newBook);
            break;
        case 2:
            favBox.add(newBook);
            break;
        default:
            importantBox.add(newBook);

    }
}

traverse(1,bookBox)
