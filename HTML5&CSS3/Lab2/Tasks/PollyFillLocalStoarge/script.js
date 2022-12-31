//  PollyFillLocalStoarge
(function () {
  //if (!!window.localStorage) return;
  (function () {
    function Storage(type) {
      function setData(data) {
        data = JSON.stringify(data);
        if (type === "session") {
          setCookie(getSessionName(), data);
        } else {
          setCookie("localStorage", data, 365);
        }
      }

      function clearData() {
        if (type === "session") {
          setCookie(getSessionName(), "");
        } else {
          setCookie("localStorage", "", 365);
        }
      }

      function getData() {
        var data = getCookieName(
          type === "session" ? getSessionName() : "localStorage"
        );
        return data ? JSON.parse(data) : {};
      }

      function getSessionName() {
        if (!window.name) {
          window.name = Math.random() + "-" + new Date().getTime();
        }
        return "sessionStorage-" + window.name;
      }

      // Initialize if there's already data.
      var data = getData();

      var obj = {
        size: 0,
        clear: function () {
          data = {};
          this.size = 0;
          clearData();
        },
        getItem: function (key) {
          return Object.prototype.hasOwnProperty.call(data, key)
            ? data[key]
            : null;
        },
        removeItem: function (key) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            delete data[key];
            this.size--;
            setData(data);
          }
        },
        setItem: function (key, value) {
          this.size++;
          data[key] = "" + value;
          setData(data);
        },
      };
      return obj;
    }

    var localStorage = new Storage("local");
    var sessionStorage = new Storage("session");

    window.myLocalStorage = localStorage;
    window.mySessionStorage = sessionStorage;
  })();
})();

// local storage

window.myLocalStorage.setItem("name", "John");
window.myLocalStorage.setItem("age", 30);
window.myLocalStorage.setItem("city", "New York");
//clear all
//window.myLocalStorage.clear();
//remove item
//window.myLocalStorage.removeItem("name");
console.log(window.myLocalStorage.getItem("city")); // New York

// session storage

window.mySessionStorage.setItem("name", "John");
window.mySessionStorage.setItem("age", 30);
window.mySessionStorage.setItem("city", "New York");
//clear all
//window.mySessionStorage.clear();
//remove item
//window.mySessionStorage.removeItem("name");
console.log(window.mySessionStorage.getItem("city")); // New York

console.log(window.myLocalStorage.size);
console.log(window.mySessionStorage.size);
