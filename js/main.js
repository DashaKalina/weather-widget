
const promise = fetch("http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no");

promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector(".time").innerHTML = data.location.localtime;
    document.querySelector(".country").innerHTML = data.location.country;
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp_c").innerHTML = (data.current.temp_c) + '&deg';
    document.querySelector(".humidity").innerHTML = data.current.humidity + '%';
  });

    