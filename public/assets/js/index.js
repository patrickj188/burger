let addBurger = () => {

  let input = document.getElementById("name")

  fetch("http://localhost:3005/burgers", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      name: input.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((burger) => {
    location.reload();
    console.log('derger', burger)
  })


}


document.addEventListener("DOMContentLoaded", () => {
  let elementsArray = document.querySelectorAll(".devour-btn");

  elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {
      let id= elem.getAttribute("data-id");

      var newEatenState = {
        devoured: true
      };
      fetch("http://localhost:3005/burger/" + id, {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify(newEatenState),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(
        function () {
          location.reload();

        }
      );
    });

  });
});
