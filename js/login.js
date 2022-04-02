let frmMain = document.getElementById("frmMain");
let user= document.getElementById("username");
let passwd = document.getElementById("passwd");
const URL_MAIN ='http://localhost:8080/api/login/';
const data ={username:"", password:""};

frmMain.addEventListener("submit", function(e){
    e.preventDefault();
    data.username=user.value;
    data.password=passwd.value;
    console.table(data);
    fetch(URL_MAIN, {
      method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
.then(response => response.text())
.then(data => {
  console.log('Success:', data);
  // Aquí se mete el if de data para saber si es igual a "OK" para dar acceso, de lo contrario mandar un mensaje que son incorrectos
})
.catch((error) => {
  console.error('Error:', error);
});
});
