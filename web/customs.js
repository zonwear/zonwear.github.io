function createButton(containerId, url) {
    var button = document.createElement("p");
    button.innerText = "🔴 CLICK HERE 🌐==►► Download Now";
    button.className = "btn";
    
    button.addEventListener("click", function() {
      window.open(url, "_blank");
    });
    
    document.getElementById(containerId).appendChild(button);
  }

  createButton("btncnt", "https://v.mview.online/p/url.html?=VideoHD");
  createButton("btncnt1", "https://v.mview.online/p/url.html?=VideoHD");
