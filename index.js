(function () {
  const screenEl = document.querySelector(".screen");
  const buttonsEl = document.querySelectorAll(".btn");
  const clearEl = document.querySelector(".clear");
  const equalEl = document.querySelector(".equal");

  // add event listeners to all buttons with class name "btn"
  buttonsEl.forEach(function (button) {
    button.addEventListener("click", function (e) {
      const value = e.target.dataset.num;
      // check if input is a number
      if (!isNaN(value)) {
        screenEl.value += value;
      }
    });
  });

  // add event listener to equal button
  equalEl.addEventListener("click", function (e) {
    const input = screenEl.value.trim(); // remove leading/trailing whitespace
    if (input === "") {
      screenEl.value = "";
      return;
    }
    // check if the input is a valid mathematical expression
    const validExpressionRegex =
      /^(\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*|\((\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*\))([+\-*/]\((\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*\)))*\))$/;
    if (!validExpressionRegex.test(input)) {
      screenEl.value = "Invalid expression";
      return;
    }
    try {
      const answer = eval(input);
      screenEl.value = answer;
    } catch (error) {
      console.error(error);
      screenEl.value = "Error";
    }
  });

  // add event listener to clear button
  clearEl.addEventListener("click", function (e) {
    screenEl.value = "";
  });
})();
