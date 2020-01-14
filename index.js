document.onreadystatechange = function() {
  if (document.readyState === "interactive") {
    var button = document.getElementById("btn");
    button.addEventListener("pointerup", function(event) {
      navigator.bluetooth
        .requestDevice({ filters: [{ services: ["battery_service"] }] })
        .then(device => {
          /* ... */
          console.log("suses");
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
};
