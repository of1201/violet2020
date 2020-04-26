//$ is like a java symbol
$(document).ready(function(){   // upon running the HTML file, the function is called

	function weather(){
	    var URL = 'https://fcc-weather-api.glitch.me/api/current?lat=53.70&lon=-1.24'; //API address
	
	    $.getJSON(URL, function(data){
		console.log(data);    //after entering into the URL, we assign all the data into the data variable. And use console.log to run all the data in the browser
	    });
	}  //function end does not need a semicolon

	weather();
});
