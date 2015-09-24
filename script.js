$(document).ready(function(){

	if(localStorage.getItem("con"))
	{
		$('#conheader').append(localStorage.getItem("con"));
	}

	var x=1;
	var col=['#3498db','#2ecc71','#e67e22','#c0392b','#2c3e50','#d35400','#e74c3c','#1abc9c','#2c3e50','#7f8c8d'];
	
	$('input').keypress(function (e) {
	  if (e.which == 13) {

	  	var rno = Math.floor(Math.random()*(10));

	  	var txt="<div id=x"+x+" class='cardholder dre' draggable='true' ondragstart='drag(event)' style='background-color:"
	  			+col[rno]+"' >"+$('#usr').val()+"<button class='pre' id='"+x+"' onclick='func(this.id)' style='background-color:"
	  			+col[rno]+"; border:transparent!important;'>x</button></div>";

	    $('#conheader').append(txt);
	    $('#x'+x).addClass('animated bounceInLeft');
	    $("#usr").val("");

	    var temp=localStorage.getItem("con");
	    localStorage.setItem("con",temp+txt );

	     x=x+1;
	    return false;  

	  }
	});




});

function func(x){

		$('#x'+x).addClass('animated flipOutX').remove();


	}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
