// apply singleton pattern to a class` constructor

class DBConnection {
  constructor(url) {
    this.url = url;
    if (DBConnection.instance) {
      return DBConnection.instance;
    }
    DBConnection.instance = this;
  }

  connect() {
    console.log(`DB ${this.url} has been connected!`);
  }
  disconnect() {
    console.log("DB disconnected");
  }
}

const connection = new DBConnection("mySQL://...");
connection.connect();
const connection2 = new DBConnection("mongodb://...");
connection2.connect();

connection.disconnect();
