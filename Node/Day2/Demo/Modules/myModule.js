//#region Var
// var x = 10;
// var y = 20;
//globla
// global.x = x;
// console.log(global);
// console.log(exports);//var obj = {} ==> obj.x = 10 ==> obj["y"] = 10 ==> Object.defineProperties("obj","z",{value})


// exports.x = x;///Module ==> {x:10}
// exports.y = y;///Module ==> {x:10}
// console.log(module.exports);
// module.exports.x = x;

// module.exports = {

// }

// exports = {x,y} //==>  XXXX ==> exports.prop = val
// module.exports = {x,y}
//#endregion

//#region Functions
    /// Items = []  &  addItem("name",price)  &  TotalPriceOrder() ==> sum

//     let Items = [];
//     function AddItem(itemName, price) { 
//         // {itemName, price} ==> push
//         let newItem = {itemName, price};
//         Items.push(newItem);
//      }
//      function TotalPrice() { 
//         var sum = 0;
//         for(let i=0; i<Items.length;i++){
//             sum += Items[i].price;
//         }
//         return sum;
//       }
// module.exports = {
//     AddItem,
//     TotalPrice
// }
//#endregion


//#region Class
class Sales{
    Items = [];
    AddItem(itemName, price){
        // {itemName, price} ==> push
        let newItem = {itemName, price};
        this.Items.push(newItem);
    }
    TotalPrice(){
        var sum = 0;
        for(let i=0; i<this.Items.length;i++){
            sum += this.Items[i].price;
        }
        return sum;
    }
}

module.exports = {
    Sales
}
//#endregion

//var myModule => {Sales} ===> new myModule.Sales()



// function MyClass(name, age, add) { 
//     this.name = name;
//     this.age = age;
//     this.add = add;
//  }

//  var m1 = new MyClass()
