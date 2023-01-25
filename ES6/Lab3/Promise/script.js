let getData2 = async (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          resolve(response.json());
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let content = "";
let body = document.querySelector("tbody");
getData2("https://jsonplaceholder.typicode.com/users").then((data) => {
  for (let i in data) {
    content += `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].username}</td>
        <td>${data[i].email}</td>
        <td>${data[i].phone}</td>
      </tr>`;
    body.innerHTML = content;
  }
});
