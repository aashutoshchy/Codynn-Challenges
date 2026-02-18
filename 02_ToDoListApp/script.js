const addBtn = document.getElementById("add-btn");
const taskContainer = document.querySelector(".task-container");

const manageTask = () => {
  const task = document.getElementById("task");
  userInput = task.value;

  if (userInput.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML += `${userInput} <i class="fa-solid fa-delete-left delBtn"></i>`;
  taskContainer.appendChild(li);

  task.value = "";

  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });

  const delBtn = li.querySelector(".delBtn");

  delBtn.addEventListener("click", () => {
    li.remove();
  });
};

addBtn.addEventListener("click", manageTask);
