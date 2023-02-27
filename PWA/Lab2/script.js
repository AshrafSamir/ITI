let tasks = [];

let getTasks = () => {
  idbApp.getTasks().then((tasks) => {
    tasks.forEach((task) => {
      tasks.push(task);
      showTask(task);
    });
  });
};
let processTask = (
  taskTitle,
  taskMin,
  taskHour,
  taskDay,
  taskMonth,
  taskYear
) => {
  if (
    taskTitle === "" ||
    taskMin === "" ||
    taskHour === "" ||
    taskDay === "" ||
    taskMonth === "" ||
    taskYear === ""
  ) {
    throw new Error("Please fill in all fields");
  } else {
    let task = {
      title: taskTitle,
      min: taskMin,
      hour: taskHour,
      day: taskDay,
      month: taskMonth,
      year: taskYear,
      done: false,
    };
    tasks.push(task);
    return task;
  }
};
let showTask = (task) => {
  let taskList = document.getElementById("App__taskList");
  let taskItem = document.createElement("li");
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.addEventListener("click", () => {
    idbApp.deleteTask(task.title);
    taskList.removeChild(taskItem);
  });

  taskItem.innerHTML = `
    <span class="App__taskItem">
    ${task.title}  -->  Date:${task.day}.${task.month}.${task.year} Time:${task.hour}:${task.min}
    </span>
    `;
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
};
let handleAddTask = () => {
  let taskTitle = document.getElementById("title").value;
  let taskMin = document.getElementById("min").value;
  let taskHour = document.getElementById("hour").value;
  let taskDay = document.getElementById("day").value;
  let taskMonth = document.getElementById("month").value;
  let taskYear = document.getElementById("year").value;

  let task = processTask(
    taskTitle,
    taskMin,
    taskHour,
    taskDay,
    taskMonth,
    taskYear
  );

  idbApp.addTask(task);
  showTask(task);

  let date = new Date(taskYear, taskMonth, taskDay, taskHour, taskMin);
  let milliseconds = date.getTime();
  console.log(milliseconds);
  var dateAct = new Date(milliseconds);
  console.log(dateAct);

  const options = {
    body: taskTitle,
    data: {
      dateOfArrival: milliseconds,
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Go to the site",
      },
      {
        action: "close",
        title: "close the notification",
      },
    ],
  };
  displayNotification(options);
};
function displayNotification(options) {
  // TODO 2.3 - display a Notification
  if (Notification.permission == "granted") {
    navigator.serviceWorker.getRegistration().then((reg) => {
      reg.showNotification("Hello World", options);
    });
  }
}

document.getElementById("App__addTask").addEventListener("click", () => {
  handleAddTask();
});

const app = (() => {
  "use strict";

  let swRegistration = null;

  // TODO 2.1 - check for notification support
  if (!("Notification" in window)) {
    console.log("This browser does not support notification");
    return;
  }
  // TODO 2.2 - request permission to show notifications
  document.getElementById("notify").addEventListener("click", () => {
    Notification.requestPermission((status) => {
      console.log("Notification permission status:", status);
    });
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      // console.log('Service Worker and Push is supported');

      navigator.serviceWorker
        .register("sw.js")
        .then((swReg) => {
          console.log("Service Worker is registered", swReg);

          swRegistration = swReg;

          // TODO 3.3a - call the initializeUI() function
        })
        .catch((err) => {
          console.error("Service Worker Error", err);
        });
    });
  } else {
    console.warn("Push messaging is not supported");
  }
})();

var idbApp = (function () {
  "use strict";

  // TODO 2 - check for support
  if (!("indexedDB" in window)) {
    console.log("This browser does not support indexedDB");
    return;
  }
  //var dbPromise = idb.open("todo"); //open or create
  var dbPromise = idb.open("todo", 2, function (upgradeDB) {
    switch (upgradeDB.oldVersion) {
      case 0:
      case 1:
        console.log("creating tasks table");
        upgradeDB.createObjectStore("tasks", { keyPath: "title" });
        break;
    }
  });

  function addTask(task) {
    // TODO 3.3 - add objects to the products store
    dbPromise.then(function (db) {
      var tx = db.transaction("tasks", "readwrite");
      var store = tx.objectStore("tasks");

      return store
        .add(task)
        .catch(function (e) {
          tx.abort();
        })
        .then(function () {
          console.log("Task added successfully");
        });
    });
  }

  function getTasks() {
    // TODO 5.4 - get all objects from 'orders' object store
    return dbPromise.then(function (db) {
      var tx = db.transaction("tasks", "readonly");
      var store = tx.objectStore("tasks");
      return store.getAll();
    });
  }

  function deleteTask(taskTitle) {
    dbPromise
      .then(function (db) {
        var tx = db.transaction("tasks", "readwrite");
        var store = tx.objectStore("tasks");
        store.delete(taskTitle);
        return tx.complete;
      })
      .then(function () {
        console.log("Task deleted");
      });
  }

  return {
    addTask: addTask,
    getTasks: getTasks,
    deleteTask: deleteTask,
  };
})();

getTasks();
