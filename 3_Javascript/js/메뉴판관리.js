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

 const menuName = document.querySelectorAll(".menu-name");

document.querySelector("#addMenu").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "checkbox"; 

  menuName.append(input);
  });

