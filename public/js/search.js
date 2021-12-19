const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

let inFocus = false;

selected.addEventListener("click", () => {
  inFocus = !inFocus;
  optionsContainer.classList.toggle("active");
  if(inFocus){
    selected.innerText = "❌ Exit Search"
  }else{
    selected.innerText = "🔍 Search Speedline"
  }
  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    //selected.innerHTML = o.querySelector("label").innerHTML;
    if(optionsList.item == "services"){
      console.log("selected all services");
      window.location.replace("/public/services.html");
    }
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
