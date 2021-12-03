function menu(){
    console.log("menu pressed")
    var x = document.getElementById("menu-options");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
        
      }
}