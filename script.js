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
    
    if(car.type == null){
        car.type = "beduomenis.type";
    }

    if(car.model == null){
        car.model = "beduomenis.model";
    }

    if(car.color == null){
        car.color = "beduomenis.color";
    }    
    
    if(car.price == null){
        car.price = "Sutartine";
    }
    
    console.log(listOfCars[i]['type'] + " " + car['model'] + " " + car.color + " "+ car.price )

}