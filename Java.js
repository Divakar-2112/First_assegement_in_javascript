// 5. Create a Fitness Tracker Application to manage user details, add user and exercise entries,
// track calories burned, and set fitness goals

let fitness=[]

while (true) {
option=prompt("Main menu \n choose an action \n 1. Add Users \n 2. Display Users \n 3. Update Users \n 4. Delete Users \n 5.Exit");


if (option==1){
    uniqueId=Number(prompt("Enter a Unique Id"))
    name=prompt("Enter a User Name");
    if (name===""){
        console.log("Invalid Name (Name should not empty string)");
        break;
        
    }
    else{
    
        
    }
    age=Number(prompt("Enter a Age"));
    if (age>0){
        
    }
    else{
        console.log("Invalid age (must be positive number)");
        break;
    }
    weight=parseFloat(prompt("Enter a Weight"));
    height=Number(prompt("Enter a Height"));
    meter=height/100;
    bmi=(weight) / (meter * meter);
if (bmi < 18.5) {
    console.log (name+ " added successfully with" +bmi+ "|Goal:Increase calorie intake and gain weight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log (name+ " added successfully with" +bmi+ "|Goal:Maintain your current activity and diet.");
} else {
    console.log(name+ " added successfully with" +bmi+ "|Goal:Aim to burn more calories through exercise.");
}
fitness.push({uniqueId,name,age,weight,height,bmi});

}
else if (option==2){
    for (let i=0;i<fitness.length;i++){
        console.log("Unique ID:" +fitness[i].uniqueId+ " Name:" +fitness[i].name+ " Age:" +fitness[i].age+ " Weight:" +fitness[i].weight+ " Height:" +fitness[i].height+ " BMI:" +fitness[i].bmi)
  }

}
else if (option == 3) {
    let name = prompt("Enter the User name to update Weight and Height:");
    let newAge = Number(prompt("Enter the new Age:"));
    let newWeight = Number(prompt("Enter the new Weight:"));
    let newHeight = Number(prompt("Enter the new Height:"));
    let userFound = false;
    for (let i = 0; i < fitness.length; i++) {
        if (fitness[i].name == name) {
            fitness[i].age = newAge;
            fitness[i].weight = newWeight;
            fitness[i].height = newHeight;
            console.log(name + " Updated Successfully " + newAge + " Age, "  + newWeight + " Kg Weight, " + newHeight + " Cm Height");
            userFound = true;
            break;
        }
    }
    if (!userFound) {
        console.log("User with Name " + name + " not found.");
    }
}

else if (option == 4) {
    let id = prompt("Enter the User Id to Remove details");
    let found = false; 
    
    for (let j = 0; j < fitness.length; j++) {
        if (fitness[j].uniqueId == id) {
            fitness.splice(j, 1); 
            console.log("User Name " + id + " deleted successfully!");
            found = true;
            break;  
        }
    }
    if (!found) {
        console.log("User with Name " + id + " not found.");
    }
}

else if(option==5){
        console.log("Exit this site")
        break;
    }
    else{
        console.log("Invalid input")
        break;
    }
}



// 1. Given an array Arr[] of N integers, write a function to find the sum of the values at the even
// index positions and the odd index positions separately.

function sumEvenOdd(arr) {
    let evenIndex = 0;
    let oddIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        evenIndex += arr[i];
      } else {
        oddIndex += arr[i];
      }
    }
    console.log("Even index positions sum:", evenIndex);
    console.log("Odd index positions sum:", oddIndex);
  }
  let arr=[5,15,25,35,45];
  sumEvenOdd(arr);
  
// // 2. Given an array of numbers, write a function in JavaScript that removes all the duplicates from
// // the array and returns a new array with only the unique values. Ensure that your solution is
// // efficient in terms of time complexity. If there are no duplicates, return the array as is

function duplicates(arr1) {
    let array = []; 
    for (let i = 0; i < arr1.length; i++) {
        if (!array.includes(arr1[i])) { 
            array.push(arr1[i]);           
        }
    }
    return array; 
}
// Test case:1
let  arr1 = [1, 2, 2, 3, 9, 4, 5, 7, 9, 2];
console.log(duplicates(arr1));


// 3. Given a string, you need to remove only two consecutive duplicates from the
// string(removeConsecutiveDuplicates(str)). If no two consecutive characters are found, return
// the string as it is







// 4. Write a function sortBooleansAndIntegers(arr) that takes an array of booleans, integers
// and sorts the booleans first ( with false before the true), followed by the integers in ascending
// order




