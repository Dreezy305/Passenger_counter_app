const SaveInput = document.getElementById("input-btn");

const myLeads = [];
const InputEl = document.getElementById("input-el");
let ListEl = document.getElementById("list-el");
let Links = document.createElement("a");

function renderLeads() {
  let ListItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    ListItems += "<li>" + myLeads[i] + "</li>";
  }
  ListEl.innerHTML = ListItems;
}

function clearInput() {
  document.getElementById("input-el").value = "";
}

SaveInput.addEventListener("click", function () {
  console.log("button clicked");
  myLeads.push(InputEl.value);
  console.log(myLeads);
  renderLeads();
  // clear out input field
  clearInput();
});
