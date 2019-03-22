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
