const request = require("request");
var async = require("async");

describe("test end point", () => {
  var server;
  beforeAll(() => {
    server = require("../app");
  });
  afterAll(() => {
    server.close();
  });

  it("should return hello world", (done) => {
    async.parallel(
      [
        function (callback) {
          request.get("http://localhost:3000/endpoint3", (err, res, body) => {
            callback(null, body);
          });
        },
        function (callback) {
          request.get("http://localhost:3000/endpoint2", (err, res, body) => {
            callback(null, body);
          });
        },
      ],
      function (err, results) {
        expect(results[0]).toBe("hello world");
        expect(results[1]).toBe("hello world 2");
        done();
      }
    );
  });
});
