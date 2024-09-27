var button = document.createElement("p");

button.innerText = "View Full Site >>";

button.className = "btn";

button.addEventListener("click", function() {
  
  window.open("https://stream24.lat/total-sportek/", "_blank");
});
document.getElementById("btncnt").appendChild(button);
