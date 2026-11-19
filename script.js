document.getElementById("filtera-skog-bilder-images").addEventListener("click", function() {
    var images = document.querySelectorAll(".gallery img");
    images.forEach(function(img) {
        img.style.display = "none";
    });
    document.querySelectorAll(".skog").forEach(function(img) {
        img.style.display = "block";
    });
});
document.getElementById("filtera-sjon-bilder-images").addEventListener("click", function() {
     var images = document.querySelectorAll(".gallery img");
    images.forEach(function(img) {
        img.style.display = "none";
    });  
    document.querySelectorAll(".sjon").forEach(function(img) {
        img.style.display = "block";
     });  
});


document.getElementById("filtera-blommor-bilder-images").addEventListener("click", function() {
    var images = document.querySelectorAll(".gallery img");
    images.forEach(function(img) {
        img.style.display = "none";
    });
    document.querySelectorAll(".blommor").forEach(function(img) {
        img.style.display = "block";
    });
});

document.getElementById("kontakt-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
});