function createButton(containerId, url) {
    var button = document.createElement("p");
    button.innerText = "View Full Site >>";
    button.className = "btn";
    
    button.addEventListener("click", function() {
      window.open(url, "_blank");
    });
    
    document.getElementById(containerId).appendChild(button);
  }

  createButton("btncnt", "https://stream24.lat/total-sportek/");
  createButton("btncnt1", "https://stream24.lat/total-sportek/");
