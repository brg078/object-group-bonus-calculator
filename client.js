// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
//function to determine bonus for given employee array
function processBonuses(staffArray) {
  let outputArray = [];
  for (let worker of staffArray) {
    //console.log('Processing bonus for: ', worker.name);
    console.log(bonusCalculation(worker));
    outputArray.push(bonusCalculation(worker));
  }
  //document.getElementById("results").textContent=outputArray; STRETCH GOAL ATTEMPT
  return outputArray;
}

//window.onload = processBonuses(employees); ATTEMPT TO STRETCH INTO HTML

function bonusCalculation(employee) {
  let bonusCalc = {name: employee.name};
  //console.log('Bonus Calc for:', employee.name);
  if(employee.reviewRating <= 2){
    //console.log(employee.name, 'does not get a bonus.');
    bonusCalc.bonusPercentage = 0;
    bonusCalc.totalBonus = 0;
    bonusCalc.totalCompensation = parseInt(employee.annualSalary);
    //console.log(employee.name + `'s annual salary is:`, bonusCalc.totalCompensation);
    //console.log(bonusCalc);
    return bonusCalc;
  }
  else if (employee.annualSalary > 65000){
    //console.log(employee.name, 'only one percent!?, even with this solid review');
    bonusCalc.bonusPercentage = 1;
    bonusCalc.totalBonus = Math.floor(employee.annualSalary * (bonusCalc.bonusPercentage / 100));
    //console.log(bonusCalc.totalBonus, ' is my bonus, very weak I quit');
    bonusCalc.totalCompensation = parseInt(employee.annualSalary) + bonusCalc.totalBonus;
    //console.log(employee.annualSalary, 'this is what i was making');
    //console.log(bonusCalc.totalCompensation, 'i guess this is how much you make now')
    //console.log(bonusCalc);
    return bonusCalc;
  }
  else {
    let baseBonus = 4;
    //console.log('higher performers');
    if(employee.reviewRating === 4){
      baseBonus += 2;
      //console.log('My review score is 4');
    } else if(employee.reviewRating === 5){
      baseBonus += 6;
      //console.log('My review score is 5');
    }
    if(employee.employeeNumber.length == 4){
      //console.log('I have a 4 digit Employee ID');
      baseBonus += 5;
    }
    if(baseBonus > 13){
      baseBonus = 13;
      //console.log('I am too good, reduce my bonus to 13%');
    }
    bonusCalc.bonusPercentage = baseBonus;
    bonusCalc.totalBonus = Math.floor(employee.annualSalary * (bonusCalc.bonusPercentage / 100));
    bonusCalc.totalCompensation = parseInt(employee.annualSalary) + bonusCalc.totalBonus;
    //console.log(bonusCalc);
    return bonusCalc;
  }
}

//calling function
processBonuses(employees);

//function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  
  
  // return new object with bonus results

//}  We made our own function name.