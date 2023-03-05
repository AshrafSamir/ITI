const { Ticket, Flight } = require("./myModule");

const myFlight = new Flight();
const myTicket1 = new Ticket(1, 123, "London", "Paris", "2020-12-12");
const myTicket2 = new Ticket(2, 152, "Egypt", "Cairo", "2022-3-12");
myFlight.addTicket(myTicket1);
myFlight.addTicket(myTicket2);
myFlight.displayTicket(0);
myFlight.displayTicket(1);
myFlight.updateTicket(0, new Ticket(1, 123, "Germany", "Berlin", "2020-12-12"));
myFlight.displayTicket(0);
