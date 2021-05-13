// let allCars = [
//     {
//       type: "WV",
//       model: "Golf",
//       color: "Buzuazinis"
//     },
  
//     {
//       type: "WV",
//       model: "456",
//       color: "Rudziu"
//     },
  
//     {
//       type: "Ford",
//       model: "Siera",
//       color: "Zalia",
//       price: 230
//     },
//     {
//       invalid: false
//     }
  
//   ]

//   let arr = [7, 5, 10];


// for (let i = 0; i< allCars.length; i++) {
//     const car = allCars[i];
//     console.log( allCars[i]['type'] + " " + car.model)
//   }

//   for (let i = 0; i < allCars.length; i++) {
//     const car = allCars[i];
//     console.log(allCars[i]['type'] + " " + car['model'] + " " + car.color + " "+ car.price );
// }

 listOfCars = [
     { 
         type: "Fiat", 
         model: "500", 
         color: "white",
         price: 10000
     },

     { 
         type: "Fiat", 
         model: "600", 
         color: "white" 
     },

     {
         type: "Peugeot", 
         model: "406", 
         color: "Grey",
         price: 5000

     },

     {
        invalid: false
     },
     {

     }
 ];

 for (let i = 0; i < listOfCars.length; i++) {
     const car = listOfCars[i];
     console.log(listOfCars[i]['type'] + " " + car['model'] + " " + car.color + " "+ car.price );
 }


 for (let i = 0; i < listOfCars.length; i++) {
    const car = listOfCars[i];
    
    // if(car.type == null){
    //     car.type = "beduomenis";
    // }

    // if(car.model == null){
    //     car.model = "beduomenis";
    // }

    // if(car.color == null){
    //     car.color = "beduomenis";
    // }    
    
    // if(car.price == null){
    //     car.price = "Sutartine";
    // }
    
    if(car.type == null
        || car.model == null
        || car.color == null ){
            console.log("Klaidingi duomenys");
        }else if(car.price === undefined ){
            car.price = "sutartine";
            console.log(listOfCars[i]['type'] + " " + car['model'] + " " + car.color + " "+ car.price )
        }else {
            console.log(listOfCars[i]['type'] + " " + car['model'] + " " + car.color + " "+ car.price )
        }

}

// filtravimas
// listOfCars = listOfCars.filter((car) => car.type == "Fiat");

// cars = [];
// for (ley i = 0; i < listOfCars) 



//maps


//

document.getElementById("container").innerHTML = HTML;