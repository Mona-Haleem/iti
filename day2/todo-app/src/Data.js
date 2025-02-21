let data = [];
  
for (let i = 1; i < 30 ; i++){
  data.push({
    id:i.toString(),
    title :`item ${i}`,
    done:Math.round(Math.random()) == 1,
    desc: `item ${i} description: \n ${"_".repeat(500)}`,
  })
}


export default data