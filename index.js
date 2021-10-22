const APIKEY = '76dd4c1dc445cb0154357fcb225b0398';

/*Appel aux données de l'API openweathermap*/

let apiCALL = function (city) {

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=fr&units=metric&dt=mp`;

    fetch(url)
            .then((response) => response.json()
            .then((data) => {
            console.log(data)
            document.querySelector("#city").innerHTML = '<i class="fas fa-map-marker-alt"></i> ' +  data.name ;
            document.querySelector("#weather").innerHTML = '<i class="fas fa-poo-storm"></i> ' + data.main.temp  + '°C';
            document.querySelector("#wind-air").innerHTML = '<i class="fas fa-wind"></i> Vent: ' +  data.wind.speed + ' km/h';
            document.querySelector("#air").innerHTML = '<i class="fas fa-cloud-rain"></i> ' + data.weather[0].description;
            })
            )
    
    .catch((err) => console.log("Erreur : " + err));

}

/* Récuperation de la valeur saisir par l'utisateur */

document.querySelector("form").addEventListener("submit", function (evenement) {
    evenement.preventDefault();

let ville = document.querySelector("#choix").value;

apiCALL(ville);

});

apiCALL('Rosario');

