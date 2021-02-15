//SERVICIOS VARIOS

//GET Training types
//https://trainning-rest-api.herokuapp.com/v1/training-types
var myHeaders = new Headers();
myHeaders.append("Authorization", "e0755d89bd8e0b787f7028c6e2ca1399");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://trainning-rest-api.herokuapp.com/v1/training-types", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //Get trainings by user id
  //https://trainning-rest-api.herokuapp.com/v1/users/31/trainings
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "e0755d89bd8e0b787f7028c6e2ca1399");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://trainning-rest-api.herokuapp.com/v1/users/31/trainings", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//Save training
//https://trainning-rest-api.herokuapp.com/v1/trainings
var myHeaders = new Headers();
myHeaders.append("Authorization", "e0755d89bd8e0b787f7028c6e2ca1399");

var raw = {
    "minutes": 15,
    "trainning_type": 1,
    "user_id": 31,
    "weight": 10
};

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://trainning-rest-api.herokuapp.com/v1/trainings", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //Delete training
//https://trainning-rest-api.herokuapp.com/v1/users/31/trainings/21
var myHeaders = new Headers();
myHeaders.append("Authorization", "e0755d89bd8e0b787f7028c6e2ca1399");

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://trainning-rest-api.herokuapp.com/v1/users/31/trainings/21", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));