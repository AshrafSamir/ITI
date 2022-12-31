function setCookie(name, value, days) {
  try {
    if (typeof name != "string") {
      throw "Invalid data type for name should be string";
    }
    if (typeof days != "number" && days != undefined) {
      throw "Invalid data type for days should be Number";
    }
    if (arguments.length == 0) {
      throw "No arguments passed";
    }
    if (arguments.length == 1) {
      throw "Missing arguments";
    }
    if (arguments.length > 3) {
      throw "Too many arguments passed";
    }
  } catch (e) {
    console.log(e);
    return;
  }

  var expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  } else {
    expires = "";
  }

  document.cookie = name + "=" + (value || "") + expires + ";";
}

function getCookies() {
  try {
    if (arguments.length != 0) {
      throw "Too many arguments passed";
    }
  } catch (e) {
    console.log(e);
    return;
  }
  let AllCookies = document.cookie.split(";");
  for (let i = 0; i < AllCookies.length; i++) {
    AllCookies[i] = AllCookies[i].trim();
    AllCookies[i] = AllCookies[i].split("=");
  }
  return AllCookies;
}

function getCookieName(cookieName) {
  try {
    if (typeof cookieName != "string") {
      throw "Invalid data type for name should be string";
    }
    if (arguments.length == 0) {
      throw "No arguments passed";
    }
    if (arguments.length > 1) {
      throw "Too many arguments passed";
    }
  } catch (e) {
    console.log(e);
    return;
  }
  try {
    let AllCookies = document.cookie.split(";");
    for (let i = 0; i < AllCookies.length; i++) {
      AllCookies[i] = AllCookies[i].trim();
      AllCookies[i] = AllCookies[i].split("=");
    }
    let flag = false;
    for (let i = 0; i < AllCookies.length; i++) {
      if (AllCookies[i][0] == cookieName) {
        flag = true;
        return AllCookies[i][1];
      }
    }
    if (!flag) {
      throw "No cookie found with name " + cookieName;
    }
  } catch (e) {
    console.log("No cookie found with name " + cookieName);
  }
}

function deleteCookie(name) {
  try {
    if (typeof name != "string") {
      throw "Invalid data type for name should be string";
    }
    if (arguments.length == 0) {
      throw "No arguments passed";
    }
    if (arguments.length > 1) {
      throw "Too many arguments passed";
    }
  } catch (e) {
    console.log(e);
    return;
  }
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
