//javascript.js 53.613600, -2.167748
//set map options
var myLatLng = { lat: 53.66276327412252, lng: -2.1750667379538857 };
var mapOptions = {
    center: myLatLng,
    zoom: 9,
 
    mapTypeId: google.maps.MapTypeId.ROADMAP

};
var marker = new google.maps.Marker({
    position: myLatLng,
    title:"Start",
  
});
const cityCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    center: myLatLng,
    radius: Math.sqrt(myLatLng) * 100,
  });


//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

var directionsDisplay = new google.maps.DirectionsRenderer();


directionsDisplay.setMap(map);
marker.setMap(map);
//cityCircle.setMap(map);

function calcRoute() {

    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, 
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

 
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

   
            const output = document.querySelector('#output');
            let cost =  ((result.routes[0].legs[0].distance.value * 0.000621371192)*1.0);
            let costn = cost.toFixed();
            
            output.innerHTML = "<div class='row'>"+"<p class='bookNowHeaderCallYouWillBe'>YOU WILL BE CHARGED AN ADDITIONAL: " +"</p>"+"<div class='col'>" +"<p class='calculateIntScriptBook'>"+ '&pound'+(costn *0.5)+ "</p>"+ "</div>"+"<div class='col'>"+ "<p class='calculateStringScriptBook'>The fee will be added to the overall cost  of the service</p>"+"</div>"+ "</div>";

            directionsDisplay.setDirections(result);
        } else {
  
            directionsDisplay.setDirections({ routes: [] });
   
            map.setCenter(myLatLng);

            output.innerHTML = "<div class='alertMaps'><p class='bookNowHeaderCallYouWillBe'>Could not retrieve driving distance.</p></div>";
        }
    });

}


var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);