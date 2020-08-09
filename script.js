// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields required!");
       
      };
      if (!(isNaN(pilotName.value)) || !(isNaN(copilotName.value)) || isNaN(fuelLevel.value) || isNaN(cargoMass.value) ){
         alert("Make sure to enter valid information for each field");
      };

      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready!`;
      document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready!`;
      if (fuelLevel.value< 10000){
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch.";
         document.getElementById("faultyItems").style.visibility = "visible"; 
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";

      } else {
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch.";

      }

      if (cargoMass.value> 10000){
         document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch.";
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
      } else {
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch.";
      }
      if (fuelLevel.value> 10000 && cargoMass.value< 10000){
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
      }
   })
});

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
      let planets = json;
      let missionDestinationData = `<h2>Mission Destination</h2>
      <ol>
         <li>Name:  ${planets[2].name}</li>
         <li>Diameter: ${planets[2].diameter}</li>
         <li>Star: ${planets[2].star}</li>
         <li>Distance from Earth: ${planets[2].distance}</li>
         <li>Number of Moons: ${planets[2].moons}</li>
      </ol>
      <img src="${planets[2].image}">`;
      document.getElementById("missionTarget").innerHTML = missionDestinationData;
   })
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
