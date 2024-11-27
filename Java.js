// 5. Create a Fitness Tracker Application to manage user details, add user and exercise entries,
// track calories burned, and set fitness goals

let fitness=[]

while (true) {
option=prompt("Main menu \n choose an action \n 1. Add Users \n 2. Display Users \n 3. Update Users \n 4. Delete Users");


if (option==1){
    name=prompt("Enter a User Name");
    age=Number(prompt("Enter a Age"));
    weight=parseFloat(prompt("Enter a Weight"));
    height=Number(prompt("Enter a Height"));
    meter=height/100;
    let bmi=0;
    bmi=(weight) / (meter * meter);
    console.log(name+ " added successfully with" +bmi);
    let id=Math.floor(Math.random()*100);
    fitness.push({id,name,age,weight,height,bmi});
if (bmi < 18.5) {
    console.log ("Goal:Increase calorie intake and gain weight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log ("Goal:Maintain your current activity and diet.");
} else {
    console.log("Goal:Aim to burn more calories through exercise.");
}
}
else if (option==2){
    for (let i=0;i<fitness.length;i++){
        console.log("Unique ID:" +this.id+ " Name:" +name+ " Age:" +age+ " Weight:" +weight+ " Height:" +height+ " BMI:" +this.bmi)
  }

}
else if (option==3){
    name=prompt("Enter the User name to update Weight and Height:");
        newWeight=Number(prompt("Enter the new Weight:"));
        newHeight=Number(prompt("Enter the new Height:"));
        for (let i=0;i<fitness.length;i++){
            if(fitness[i].name==name){
                fitness[i].weight=newWeight;
                fitness[i].height=newHeight;
            }
        console.log(name+ " Updated Successfully "+newWeight+ "Kg Weight,"+newHeight+ " Cm Height");

}
}
else if (option == 4) {
    let name = prompt("Enter the User name to Remove details");
    let found = false; 
    
    for (let j = 0; j < fitness.length; j++) {
        if (fitness[j].name == name) {
            fitness.splice(j, 1); 
            console.log("User Name " + name + " deleted successfully!");
            found = true;
            break;  
        }
    }
    if (!found) {
        console.log("User with Name " + name + " not found.");
    }
}

else{
        console.log("Invalid input")
        break;
    }
}

