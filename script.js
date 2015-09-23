$(document).ready(function(){

	//if(localStorage.getItem("con"))
///	{
	//	$('#conheader').append(localStorage.getItem("con"));
//	}

	var x=1;
	var col=['#e77e23','#27ae61','#2a80b9','#d64a4b','#f39c11'];
	
	$('input').keypress(function (e) {
	  if (e.which == 13) {

	  	var rno = Math.floor(Math.random()*(5));
	  	var txt="<div id=x"+x+" class='cardholder dre' draggable='true' ondragstart='drag(event)' style='background-color:"
	  			+col[rno]+"' >"+$('#usr').val()+"<button class='pre' id='"+x+"' onclick='func(this.id)' style='background-color:"
	  			+col[rno]+"; border:transparent!important;'>x</button></div>";
	    $('#conheader').append(txt);
	     $("#usr").val("");
	   // var temp=localStorage.getItem("con");
	    // localStorage.setItem("con",temp+txt );
	     x=x+1;
	    return false;  

	  }
	});




});

function func(x){

		var element = document.getElementById("x"+x);
		element.parentNode.removeChild(element);
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
