// Create your own module that can be used in flight tickets reservation
//  Let the flight ticket contains info about
//  seat num,
//  flight num,
//  departure and arrival airports
//  Travelling date.
//  User can display, get and update info of his ticket

class Flight {
  tickets = [];
  constructor() {
    this.tickets = [];
  }
  addTicket(ticket) {
    this.tickets.push(ticket);
  }
  getTicket(index) {
    return this.tickets[index];
  }
  updateTicket(index, ticket) {
    this.tickets[index] = ticket;
  }
  displayTicket(index) {
    this.tickets[index].displayTicket();
  }
}
class Ticket {
  constructor(seatNum, flightNum, departure, arrival, date) {
    this.seatNum = seatNum;
    this.flightNum = flightNum;
    this.departure = departure;
    this.arrival = arrival;
    this.date = date;
  }
  displayTicket() {
    console.log(`Your ticket details are:
    Seat number: ${this.seatNum}
    Flight number: ${this.flightNum}
    Departure: ${this.departure}
    Arrival: ${this.arrival}
    Date: ${this.date}`);
  }
}

module.exports = { Flight, Ticket };
