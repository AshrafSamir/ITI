// SingletonDP

// class Database {
//     constructor(data) {
//         if (Database.exists) {
//             return Database.instance
//             // console.error("It exists")
//             // return;
//         }
//         this.data = data;
//         Database.instance = this;
//         Database.exists = true
//         return this
//     }
//     getData() {
//         console.log(this.data);
//     }
// }

// const mongo = new Database("mongo")
// mongo.getData()
// const db = new Database("db")
// db.getData()
//////////////////////////////////////////////////
// let dbConnection = null;

// class Database {
//     constructor(typeOfConnection) {
//         if (dbConnection) {
//             return dbConnection
//         } else {
//             this._typeOfConnection = typeOfConnection
//             dbConnection = this
//         }
//     }
//     getDBInfo() {
//         return dbConnection._typeOfConnection
//     }
// }
// const mongo = new Database("Mongo")
// console.log(mongo.getDBInfo());
// const mySQL = new Database("mySQL")
// console.log(mySQL.getDBInfo());

///////////////////////////////////////////////////
// factory DP
// var obj = {
//     fName: "mahmoud",
//     lNAme: "Mohamed",
//     createdDate: new Date().toLocaleDateString(),
//     // fullNAme: `${this.fName}${this.lNAme}`
// }
// var obj2 = {
//     fName: "mahmoud",
//     lNAme: "Mohamed",
//     createdDate: new Date().toLocaleDateString(),
//     // fullNAme: `${this.fName}${this.lNAme}`
// }

// var obj3 = {
//     fName: "mahmoud",
//     lNAme: "Mohamed",
//     createdDate: new Date().toLocaleDateString(),
//     // fullNAme: `${this.fName}${this.lNAme}`
// }


// console.log(obj, obj2, obj3);

////////////////using factory method///////////////////////////
// const createUser = (fName, lName) => ({
//     createdDate: new Date().toLocaleDateString(),
//     fName,
//     lName,
//     fullNAme: `${fName}${lName}`
// })

// let a = createUser("Ahmed", "Ayman")
// let a2 = createUser("Mahmoud", "Mohamed")
// let a3 = createUser("Zeyad", "Mohamed")
// console.log(a, a2, a3);
/////////////////////////////////Example2

// class BallFactory {
//     constructor() {
//         this.createBall = function (type) {
//             let ball;
//             if (type === "football") {
//                 ball = new Football()
//             } else if (type === "basketball") {
//                 ball = new Basketball()
//             }
//             ball.roll = function () {
//                 return `the ball type is ${this.type}`
//             }
//             return ball;
//         }
//     }
// }


// class Football {
//     constructor() {
//         this.type = "football";
//         this.kick = function () {
//             return "you Kicked the football"
//         };
//     }
// }

// class Basketball {
//     constructor() {
//         this.type = "basketball";
//         this.bounce = function () {
//             return "you bounced the basketball"
//         };
//     }
// }


// const factory = new BallFactory();
// const myfootball = factory.createBall("football")
// const mybasketball = factory.createBall("basketball")

///////////////////////////////////Prototype DP

// var car = {
//     numOfWheels: 4,
//     start() {
//         return "Started"
//     },
//     stop() {
//         return "stoped"
//     }
// }

// //Object.create(prototype,[prps_Of_Obj]) [Recommended by ES]
// const mycar = Object.create(car, { owner: { value: "Mahmoud" } })
// console.log(mycar.__proto__);
// console.log(car);
// console.log(mycar.__proto__ === car);

//////////////////////////////////
// Flyweight DP
// class IceCreem {
//     constructor(flavour, price) {
//         this.flavour = flavour;
//         this.price = price
//     }
// }
// class IceCreamFactory {
//     constructor() {
//         this.iceCreams = [] //this array for cashing
//     }
//     createIceCream(flavour, price) {
//         //step one
//         //check casheing area
//         let iceCream = this.getIceCream(flavour)
//         if (iceCream) {
//             return iceCream;
//         } else {
//             //step tow create obj
//             const newIceCream = new IceCreem(flavour, price);
//             //step three
//             this.iceCreams.push(newIceCream);
//             return newIceCream
//         }
//     }
//     getIceCream(flavour) {
//         return this.iceCreams.find((iCream) => iCream.flavour === flavour)
//     }
// }
// let myIceCreamFactory = new IceCreamFactory();
// let i1 = myIceCreamFactory.createIceCream("chok", 100)
// let i2 = myIceCreamFactory.createIceCream("chok1", 100)
// let i3 = myIceCreamFactory.createIceCream("chok", 100)
// let i4 = myIceCreamFactory.createIceCream("chok1", 100)
// let i5 = myIceCreamFactory.createIceCream("chok2", 100)
// let i6 = myIceCreamFactory.createIceCream("chok", 100)

//////////////////////////////////////////////////////////////
//Proxy DP
// ES API => Proxy
// const myproxy = Proxy(target aka(Operation) , handler)
// const cache = [];
// const ProxedNetworkFetch = new Proxy(networkFetch, {
//     apply(target, thisargs, args) {
//         // console.log(target);
//         // console.log(args);
//         const urlParam = args[0];
//         if (cache.includes(urlParam)) {
//             return `${urlParam} from cach`
//         } else {
//             cache.push(urlParam)
//             return Reflect.apply(target, thisargs, args)
//             // return (function networkFetch(url) {
//             //     return `${url} from network`
//             // })()

//         }
//     }
// })

// function networkFetch(url) {
//     return `${url} from network`
// }

// console.log(ProxedNetworkFetch("dogPic.jpg"))
// console.log(ProxedNetworkFetch("dogPic.jpg"))

///////////////////////////////////
//////////////////
/////////////////Facade DP
///////////////////////////
// class FetchMusic {
//     get resource() {
//         return [
//             { id: 1, title: "Music 1" },
//             { id: 2, title: "Music 2" },
//             { id: 3, title: "Music 3" },
//         ]
//     }
//     fetch(id) {
//         return this.resource.find((item) => item.id === id)
//     }
// }

// class GetMovie {
//     constructor(id) {
//         return this.resource.find((item) => item.id === id)
//     }
//     get resource() {
//         return [
//             { id: 1, title: "myMovie 1" },
//             { id: 2, title: "myMovie 2" },
//             { id: 3, title: "myMovie 3" },
//         ]
//     }
// }

// const getTVshow = function (id) {
//     const resource = [
//         { id: 1, title: "TVshow 1" },
//         { id: 2, title: "TVshow 2" },
//         { id: 3, title: "TVshow 3" },
//     ]
//     return resource.find((item) => item.id === id)
// }

// const myBooks = [
//     { id: 1, title: "Book 1" },
//     { id: 2, title: "book 2" },
//     { id: 3, title: "book 3" },
// ]

// class ControlFacade {
//     findMusic(id) {
//         const db = new FetchMusic()
//         return db.fetch(id);
//     }

//     findMovies(id) {
//         return new GetMovie(id)
//     }

//     findTVShow(id) {
//         return new getTVshow(id)
//     }

//     findBooks(id) {
//         return myBooks.find((item) => item.id === id)
//     }
// }

// let myFacade = new ControlFacade();


// x = myFacade.findBooks(1)
// x2 = myFacade.findMovies(2)
// x3 = myFacade.findMusic(3)

// console.log(x);
// console.log(x2);
// console.log(x3);
//////////////////////////////////////Chain Of Resposibility Pattern (Behavioural DP)
class Addintion {
    constructor(initval = 0) {
        this.sum = initval;
    }

    add(val) {
        this.sum += val;
        return this;
    }
    checkval(val) {
        if (val > 10) {
            this.sum += val;
            return this;
        } else {
            throw "ERRORRRRRRRR"
        }

    }
}

