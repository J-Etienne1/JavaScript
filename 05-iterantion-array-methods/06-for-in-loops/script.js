
// Looping through an OBjects values can be done with a For In Loop
const colourObj = {
    colour1: "Red",
    colour2: "blue",
    colour3: "purple",
    colour4: "yellow"    
};


for (const key in colourObj) {
    console.log(key, colourObj[key])
        
    }




const colourArr = ["car", "bus","train", "plane"]
for (const key in colourArr) {
    console.log(colourArr[key])
}