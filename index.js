function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const result = weight / (height / 100) ** 2;
  let commit;
  let normalRange;
  // if (result < 18.5) {
  //   alert("Your BMI is : " + result + " and is UnderWeight");
  // } else if (result >= 18.5 && result <= 24.9) {
  //   alert("Your BMI is : " + result + " and is Healthy Weight");
  // } else if (result >= 25 && result <= 29.9) {
  //   alert("Your BMI is : " + result + " and is Overweight");
  // } else if (result >= 30) {
  //   alert("Your BMI is : " + result + " and is Above Obesity");
  // }

  if (result < 18.5) commit = "UnderWeight";
  else if (result >= 18.5 && result <= 24.9) commit = "Healthy Weight";
  else if (result >= 25 && result <= 29.9) commit = "Overweight";
  else if (result >= 30) commit = "Above Obesity";

  if (age >= 19 && age <= 24) {
    normalRange = [19, 24];
  } else if (age >= 25 && age <= 34) {
    normalRange = [20, 25];
  } else if (age >= 35 && age <= 44) {
    normalRange = [21, 26];
  } else if (age >= 45 && age <= 54) {
    normalRange = [22, 27];
  } else if (age >= 55 && age <= 64) {
    normalRange = [23, 28];
  } else if (age >= 65) {
    normalRange = [24, 29];
  } else {
    alert("Age is out of range for this BMI chart");
    return;
  }

  if (result >= normalRange[0] && result <= normalRange[1]) {
    alert(`Your BMI is ${result.toFixed(1)} ${commit} and you are Healthy.`);
  } else {
    alert(
      `Your BMI is ${result.toFixed(1)} ${commit} and you are Not Healthy.`
    );
  }
}
