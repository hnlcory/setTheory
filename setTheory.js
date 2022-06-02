function ranNum(num) {
  return Math.floor(Math.random() * num);
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.random() * (max - min + 1) + min;
}

function checkForDupe(num) {
  for (let i = 1; i < genNums.length; i++){
    if (genNums[i] === num){
      console.log("DUPE, Regen data");
      return true;
    }
    return false;
  }
}

const usrInp = prompt("number to go to or -1 for inf");
console.log(usrInp);
const genNums = [];

if (usrInp >= 0) {
  let i = 0;
  let dupeInList = false;

  while (i < usrInp && dupeInList == false){
    let num = randomIntFromInterval(0, 1);
    genNums.unshift(num);
    if (checkForDupe(num) == true){
      dupeInList = true;
    }
    else {
      console.log(`|number: ${i}|  |random 0 to 1: ${num}|`);
      i++;
    }
  }
}

else {
  let i = 0;
  let dupeInList = false;
  while (true && dupeInList == false) {
    let num = randomIntFromInterval(0, 1);
    genNums.unshift(num);
    if (checkForDupe(num) == true){
      dupeInList = true;
    }
    else {
      console.log(`|number: ${i}|  |random 0 to 1: ${num}|`);
      i++;
    }
  }
}

console.log(genNums);
