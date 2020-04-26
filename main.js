//$ is like a jQuery sign to select things
$(document).ready(function(){   // upon running the HTML file, the function is called

	// Get location using geolocation
	navigator.geolocation.getCurrentPosition(success, error); //Geolocation is the location coordinates of your current device
	// By calling this your current coordinates are automatically assigned to the variable called pos
	function success(pos){
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;	
		weather(lat, lon); // This gets the data of ur current location from API and display them in the console
	}
	
	function error(){
		console.log('error');
	}
	
	function weather(lat, lon){
	    var URL = `https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon; //API address
	
	    $.getJSON(URL, function(data){
		//updateDOM(data);
		console.log(data);    //after entering into the URL, we assign all the data to the variable data variable. And use console.log to run all the data in the browser
	    });
	}  //function end does not need a semicolon

	
//	function updateDOM(data){
//		var city = data.name; //assign the city name to the variable city
//		var icon = data.weather[0].icon;
//		var temp = Math.round(data.main.temp);
//		var desc = data.weather[0].description;
		
//		$('#city').html(city);
//		$('#icon').attr('src', icon);  //need to change the attribute"src" within the img tab
//		$('#temp').html(temp);
//		$('#desc').html(desc);  
///	}
	
});
