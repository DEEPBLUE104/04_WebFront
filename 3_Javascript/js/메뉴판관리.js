const resname = document.getElementById("resName");
const resNameInput = document.getElementById("resNameInput");

document.querySelector("#resName").addEventListener("click", () => {

  resname.style.display = "none";
  resNameInput.style.display = "block";

  resNameInput.focus();

  resNameInput.addEventListener("blur", () => {
    resNameInput.style.border = "none";
  });
});

const update = document.querySelector("#updateBtn");

document.querySelector("#updateBtn").addEventListener("click", () => {
    document.querySelector(".b-hidden").style.display = "block";
    document.querySelector("#updateBtn").style.display = "none";
});


document.querySelector("#addMenu").addEventListener("click", () => {
  document.querySelectorAll(".menu").checked
  

});