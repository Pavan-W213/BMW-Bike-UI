let redbike = document.getElementById("redbike");
let bluebike = document.getElementById("bluebike");
let blackbike = document.getElementById("blackbike");
let bike = document.getElementById("bike");

redbike.onclick = function () {
  bike.style.backgroundImage = "url(Images/BMW1.png)";
};

bluebike.onclick = function () {
  bike.style.backgroundImage = "url(Images/BMW2.png)";
};

blackbike.onclick = function () {
  bike.style.backgroundImage = "url(Images/BMW3.png)";
};
