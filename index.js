const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "make dinner",
    date: "2022-12-22"
  },
];

document.querySelector(".js-add-button").addEventListener("click", () => {
  addTodo();
});

const addTodo = () => {
  const nameInput = document.querySelector(".js-todo-input");
  const dateInput = document.querySelector(".js-todo-date");

  const name = nameInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;

  if (name === "" || date === "") return;

  const newTodo = {
    name,
    date,
    time,
  };

  todoList.push(newTodo);

  nameInput.value = "";
  dateInput.value = "";

  displayTodo();
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const displayTodo = () => {
  const container = document.querySelector(".js-todo-display");
  container.innerHTML = "";

  todoList.forEach((todo, index) => {
    const { name, date, time } = todo;

    const todoRow = document.createElement("div");
    todoRow.className = "todo-grid";

    const nameEl = document.createElement("div");
    nameEl.textContent = name;
    nameEl.className = "name-space";

    const dateEl = document.createElement("div");
    dateEl.textContent = date;
    dateEl.className = "date-space";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-button";

    deleteBtn.addEventListener("click", () => {
      todoList.splice(index, 1);
      displayTodo();
      localStorage.setItem("todoList", JSON.stringify(todoList));
    });

    todoRow.append(nameEl, dateEl, deleteBtn);

    container.appendChild(todoRow);
  });
};

displayTodo();
