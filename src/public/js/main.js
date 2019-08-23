var pathImg = document.querySelector(".pathImg");
var imgUp = document.querySelector("#imgUp");

imgUp.addEventListener('change', () => {
    var value = imgUp.value;
    
    pathImg.textContent = value;
});