function setCookie(name, value, month) {
    console.log("setCookie called");
    var expires = "";
    if (month) {
        var date = new Date();
        date.setMonth(date.getMonth() + month);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + ";";
}

function getCookies() {
    let AllCookies = document.cookie.split(';');
    for (let i = 0; i < AllCookies.length; i++) {
        AllCookies[i] = AllCookies[i].trim();
        AllCookies[i] = AllCookies[i].split('=');
    }
    return AllCookies;
}

function getCookieName(cookieName) {
    let AllCookies = document.cookie.split(';');
    for (let i = 0; i < AllCookies.length; i++) {
        AllCookies[i] = AllCookies[i].trim();
        AllCookies[i] = AllCookies[i].split('=');
    }
    for (let i = 0; i < AllCookies.length; i++) {
        if (AllCookies[i][0] == cookieName) {
            return AllCookies[i][1];
        }
    }
}


function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}








