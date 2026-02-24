document.addEventListener("DOMContentLoaded", function () {

  const myDiv = document.getElementById("myDiv");
  const button = document.getElementById("addItemBtn");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to DOM homework";
  heading.classList.add("highlight");

  const paragraph = document.createElement("p");
  paragraph.textContent = "This is your first DOM homework assignment";

  const ul = document.createElement("ul");

  const items = ["First item", "Second item", "Third item"];
  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  myDiv.appendChild(heading);
  myDiv.appendChild(paragraph);
  myDiv.appendChild(ul);

  let count = 1;

  button.addEventListener("click", function () {
    const newLi = document.createElement("li");
    newLi.textContent = `New List Item ${count}`;
    newLi.style.color = getRandomColor();

    ul.appendChild(newLi);
    count++;
  });

  myDiv.addEventListener("click", function () {
    myDiv.style.backgroundColor = getRandomColor();
  });

});