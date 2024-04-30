const todo = document.querySelector("h1");
setTimeout(() => {
  const newH1 = document.createElement("h1");
  newH1.innerText = "my to-do list";
  todo.appendChild(newH1);
}, 2000);

const addProduct = () => {
  const inputValue = document.querySelector("input").value;

  if (inputValue !== "") {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    listItem.textContent = inputValue;

    listItem.prepend(checkbox);
    document.querySelector("ul").appendChild(listItem);

    document.querySelector("input").value = "";
  }
};
