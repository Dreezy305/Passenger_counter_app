let count_El = document.getElementById("counter");
console.log(count_El);

let save_El = document.getElementById("save-el");
console.log(save_El);

let count = 0;
function increment() {
  count += 1;
  count_El.innerHTML = count;
  console.log("button was clicked : ", count, " time(s)");
}

//create a function for save button
function save() {
  console.log(count);
  // create a variable that contains both count and dash separator
  // render the variable in the save-el using the inner text
  // make sure to not delete the existing content of the paragraph
}
save();

//render a welcome message
