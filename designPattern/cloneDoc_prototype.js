class Document{
    constructor(header,footer,pages,text){
        this.header = header;
        this.footer = footer;
        this.pages = pages;
        this.text = text
    }

    display(){
        console.log(
            `
             ${this.header}
            -----------------------------
             ${this.text}
             ----------------------------
             ${this.footer} 

             Total Page = ${this.pages}
            `
        )
    }
}

class DocumentPrototype{
    constructor(proto){
        this.proto = proto;
    }

    clone(){
        let clonedDoc = new Document()
        Object.assign(clonedDoc, this.proto);
        return clonedDoc;
    }
}

console.log('-------------Prototype-------------');

const doc = new Document("test","end",1,"apply prototype design pattern to clone the document");
const docProto = new DocumentPrototype(doc);
const docClone = docProto.clone();
doc.display();

console.log('clonedDoc');
docClone.display();

console.log(doc == docClone);