import {capitalizeTextFirstChar,createArray,random,timeConversion} from "../extraFunctions.js";


describe("testing function capitalizeTextFirstChar",()=>{
    
    it("should return a string if passed a string",()=>{
        expect(capitalizeTextFirstChar("hello wolrd")).toBeInstanceOf(String);
    })

    it("should return a capetalized version of the passed a string",()=>{
        expect(capitalizeTextFirstChar("hello world")).toBe("Hello World");
    })

})

describe("testing function createArray",()=>{
    it("should return an array",()=>{
        expect(createArray(3)).toBeInstanceOf(Array);
    })

    it("should return an array of the same length as the passed value starting with 0",()=>{
        expect(createArray(2)).toHaveSize(2);
        expect(createArray(2)).toContain(0);
    })

    it("should return an array of the same length as the passed value not including the value",()=>{
        expect(createArray(3)).toHaveSize(3);
        expect(createArray(3)).not.toContain(3);
    })
    
})


describe("testing function random",()=>{
    
    it("should return a number",()=>{
        expect(random(1,5)).toBeInstanceOf(Number);
    })

    it("should return a number betwwen the passed values",()=>{
        let value = random(5,7); 
        expect(value).toBeGreaterThanOrEqual(5);
        expect(value).toBeLessThanOrEqual(7);
    })

    it("should return a NaN if passed only one value",()=>{ 
        expect(random(3)).toBeNaN();
    })

})

describe("testing function timeConversion",()=>{
    it("should return a string",()=>{
        expect(timeConversion("07:45:54PM")).toBeInstanceOf(String);
    })    

    it("should correctly return the converted time string from 12h to 24h",()=>{
        expect(timeConversion("07:45:54PM")).toBe("19:45:54");
    }) 

    it("should convert 12:00:00AM correctly to 00:00:00",()=>{
        expect(timeConversion("12:00:00AM")).toBe("00:00:00");
    }) 


})