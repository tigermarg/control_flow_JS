// Part 1: Growing Pains------------------------------------------------------------------------------------------------

// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
    // Pruned, to stop them from exceeding the capacity of the garden.
        // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
    // Monitored, if they are growing at an acceptable rate.
        // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
    // Planted, if there is room to plant more plants.
        // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

// What we know:
    //Plants contained in circular, 5 meter radius
    //Area of circle: const PI= 3.1415; const area = PI * radius * radius
    //Each plant requires min. space of .8 sq meters
    //Start, week1 = 20 plants
    //Plants double in number every week

const radius = 5 //meters
const PI = 3.1415
const areaCircle = PI * radius * radius //sq meters
const plant = .8 //sq meters
const maxCapacity = areaCircle / plant //plant capacity of garden

// //Week 1 -- Planted
let week1 = 20 //number of plants

if(week1 > maxCapacity * .8) { //if plant count is greater than 80% of garden capacity
    console.log(`Pruned`, week1) //do this
} else if(maxCapacity * .5 < week1 && week1 < maxCapacity * .8) {  //if plant count is between 50% &  80% of garden capacity
    console.log(`Monitored`, week1) //do this 
} else if(week1 < maxCapacity * .5) {  //if plant count is less than 50% of garden capacity
    console.log(`Planted`, week1) // do this
} 

//Week 2 -- Planted
let week2 = week1 * 2 //number of plants

if(week2 > maxCapacity * .8) { 
    console.log(`Pruned`, week2 ) 
} else if(maxCapacity * .5 < week2 && week2 < maxCapacity * .8) {
    console.log(`Monitored`, week2) 
} else if(week2 < maxCapacity * .5) {  
    console.log(`Planted`, week2) 
} 

//Week 3 -- Pruned
let week3 = week2 * 2 //number of plants

if(week3 > maxCapacity * .8) { 
    console.log(`Pruned`, week3) 
} else if(maxCapacity * .5 < week3 && week13< maxCapacity * .8) {  
    console.log(`Monitored`, week1) 
} else if(week3 < maxCapacity * .5) { 
    console.log(`Planted`, week3) 
} 


// Part 2: Thinking Bigger ----------------------------------------------------------------------------------------
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:

let newWeek1 = 100 //number of plants
let newWeek10 = newWeek1 * (2**9) // 51200 plants
let newAreaCircle = newWeek10 * .8 // new area = 40960 sq meters

// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.

console.log(newAreaCircle - areaCircle); // 40881.4625 sq meters

// If the space remained circular, what would be the radius of this expanded garden?

    // console.log(newAreaCircle / (PI * x**2));


// Part 3: Errors in Judgement -----------------------------------------------------------------------------------------------
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

try {
	if (newAreaCircle < areaCircle) {
		console.log("Approved");
	} else {
		throw "Error - not enough space.";
	}
} catch (error) {
	console.log(error);
}
