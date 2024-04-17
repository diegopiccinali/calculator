let input = document.getElementById("input");
let buttons = document.querySelectorAll(".calc-button");

document.addEventListener("click", (e) => {
  buttons.forEach((button) => {
    if (e.target === button) {
      input.value = `${input.value}` + `${button.textContent}`;
    }
  });
});

document.addEventListener("click", (e) => {
  if (input.value !== "") {
    if (e.target === document.querySelector(".calc-button-equal")) {
      try {
        let resultado = eval(input.value);
        input.value = resultado;
      } catch (e) {
        alert("Ingrese una operación válida");
        input.value = "";
      }
    }
  }
});
function resetHeight() {
  // reset the body height to that of the inner browser
  document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();
