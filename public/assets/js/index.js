let addBurger = () =>{

   let input= document.getElementById("levon-burger")

   fetch("http://localhost:3005/burger/create", {
       method: "POST",
       mode: "cors",
       body: JSON.stringify({
        name: input.value
       }),
       headers: {
           "Content-Type": "application/json"
       }
   }).then((burger) => {
    console.log('derger', burger)
   })


}

$(function() {
    $(".devour-btn").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = $(this).data("devoured");
  
      var newEatenState = {
        devoured: eaten
      };
      $.ajax("/burger/update/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          location.reload();
        }
      );
    });

});