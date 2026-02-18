const btns = document.querySelectorAll("button");
const output = document.querySelector(".output");

let operations = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    userInput = btn.textContent;

    if (userInput === "C") {
      output.value = "";
      operations = "";
      return;
    }

    if (userInput === "=") {
      output.value = eval(operations);
      operations = "";
      return;
    }

    operations += userInput;
    output.value = operations;
  });
});
