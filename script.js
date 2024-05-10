"use strict";
const todoContainer = document.querySelector(".container");
const labelInputTask = document.querySelector(".input-task");
const labelTasksContainer = document.querySelector(".tasks");
const addBttn = document.querySelector(".add-bttn");
const removebttn = document.querySelector(".remove-bttn");
let i = 1;

addBttn.addEventListener("click", function (e) {
  e.preventDefault();

  const inputTask = labelInputTask.value;
  const addedclass = `task-${i}`;
  i++;
  if (inputTask != "") {
    const html = document.createElement("div");
    html.classList.add("task", addedclass);
    html.innerHTML = `<p class="show-task">${inputTask}</p>
  <button class="bttn remove-bttn">remove</button>`;
    //   labeltasksContainer.insertAdjacentHTML("beforeend", html);
    labelTasksContainer.append(html);

    labelInputTask.value = "";
    labelInputTask.blur();
  }
});

// removebttn.addEventListener("click", function () {
//   //   task.remove();
//   console.log("remove");
// });

// document.querySelector(".remove.bttn").addEventListener("click", function () {
//   task.remove();
//   console.log("remove");
// });

labelTasksContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-bttn")) {
    const taskToRemove = event.target.parentElement;
    taskToRemove.remove();
  }
});
