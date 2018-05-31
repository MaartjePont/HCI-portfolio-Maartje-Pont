$(function() {
	listeners();
});

function listeners() {

	$("#home").click(function(){
		navigate("index.html");
	});
	$("#topics").click(function(){
		navigate("topics.html");
	});
	$("#workshops").click(function(){
		navigate("workshops.html");
	});
	$("#excursion").click(function(){
		navigate("excursion.html");
	});
	$("#lab-weeks").click(function(){
		navigate("lab-weeks.html");
	});
	$(".exertion-games").click(function(){
		navigate("exertion-games.html");
	});
	$(".ar-vr").click(function(){
		navigate("ar-vr.html");
	});
	$(".wearables").click(function(){
		navigate("wearables.html");
	});
	$(".arti").click(function(){
		navigate("arti.html");
	});
	$(".computer").click(function(){
		navigate("computer.html");
	});
	$(".unity").click(function(){
		navigate("unity.html");
	});
	$(".arduino").click(function(){
		navigate("arduino.html");
	});
}

function navigate(page) {
	window.location = page;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}