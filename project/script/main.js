//http://ip-api.com/json
var globalLongitude=1;
var globalLatitude=1;
var countryName;
var cityName;
var ip;
$.getJSON( "http://ip-api.com/json", function( data ) {
  	console.log(data.lat + " " + data.lon ) ;
  	globalLatitude = data.lat;
  	globalLongitude = data.lon;
    countryName = data.country;
    cityName = data.regionName;
    ip = data.query;
    initMap();
//    document.getElementById("titleForNote").value = "THIS NOTE was taken in , " + data.regionName + ", " + data.country;
 //   location = data.country;
});


function takeNotes(){
var title = document.getElementById("titleForNote").value;
var notes = document.getElementById("takeNote").value;
var radioButton = document.getElementsByClassName("radioButton");
console.log(radioButton);
var date = new Date();
var params;
var day = 0;
var feeling = document.getElementById("feeling").value;
var anonymous = document.getElementById("anonymous").value;
console.log(feeling);
console.log(anonymous);
for(var i=0;i<radioButton.length;i++)
{
  if(radioButton[i].checked)
  {
    if(radioButton[i].value==1)
    {

       params = "notes="+notes+"&title="+title + "&day=" + 1 + "&location=" + countryName + "&city=" + cityName + "&ip=" + ip + "&anonymous=" + anonymous + "&feeling=" + feeling;
    }
    else{
       params = "notes="+notes+"&title="+title + "&day=" + 0 + "&location=" + countryName + "&city=" + cityName + "&ip=" + ip + "&anonymous=" + anonymous + "&feeling=" + feeling; 
    }
  }
}

//console.log(params);
var http = new XMLHttpRequest();
var url = "http://dulguun.000webhostapp.com/notes.php";
http.open("POST", url, true);
//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
	if(http.readyState == 4 && http.status == 200) {
    	 
console.log(http.responseText);
    	 if(http.responseText)
       {
          document.getElementById("titleForNote").value = " ";
          var notes = document.getElementById("takeNote").value = " ";
       //   alert(http.responseText);
          $('#myModal').modal('toggle')
       }
       
	}
}
http.send(params);
}

function initMap() {
   var mylocation = {lat: globalLatitude, lng: globalLongitude};
   var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: mylocation
        });
        var marker = new google.maps.Marker({
          position: mylocation,
          map: map
        });
      }
	 

function findme()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positionFinder);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function formReset(){
  document.getElementById("myform").reset();
}

function positionFinder(position)
{
 globalLatitude = position.coords.latitude;
 globalLongitude = position.coords.longitude;
 document.getElementById("locationSpecficNote").value+= " ~I am standing , longitude: " + globalLongitude + " latitude : " + globalLatitude + "~";
 initMap();
}
function takeNoteFieldFocus(){
  document.getElementById("takeNote").rows = 8;
}

function takeNoteFieldBlur(){
  document.getElementById("takeNote").rows = 3;
}
function locationSpecificNote()
{
 // alert("called");
var title = document.getElementById("titleForNoteLocationSpecific").value;
var notes = document.getElementById("locationSpecficNote").value;
console.log(title);
console.log(notes);
var http = new XMLHttpRequest();
var url = "http://durtaiwebsite.comze.com/locationNotes.php";
var params = "notes="+notes+"&title=" + title + "&long=" + globalLongitude + "&lat=" + globalLatitude;
http.open("POST", url, true);
//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {//Call a function when the state changes.
  if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
  }
}
http.send(params);
}