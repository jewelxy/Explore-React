const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then(response => response.json())
.then(data => showUserList(data))

function showUserList(userData){
    let userHTML = '';

         userData.forEach(getUser => {
         userHTML += 
         `<div class="userDiv">
         <h2>${getUser.name}</h2>
         <p>${getUser.email}</p>
         <p>Street : ${getUser.address.street} <br/>
         suite:  ${getUser.address.suite} <br/>
         city : ${getUser.address.city} <br/>
         Zipcode: ${getUser.address.zipcode}</p>
         
         </div>`;

     });

    const displayUserDom = document.getElementById('userContainer');
    displayUserDom.innerHTML = userHTML;

    }
