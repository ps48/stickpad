$(document).ready(function(){

/*	if(localStorage.getItem("xval")){

		var xval = localStorage.getItem("xval");

		for (i=1;i<=xval;i++)
		{
			if(localStorage.getItem(""));

		}
	}*/

	

	var x=1;
	var col=['#3498db','#2ecc71','#e67e22','#c0392b','#16a085','#d35400','#e74c3c','#1abc9c','#8e44ad','#7f8c8d'];
	
	$('input').keypress(function (e) {
	  if (e.which == 13) {

	  	var rno = Math.floor(Math.random()*(10));
	  	var inp = $('#usr').val();
	  	var txt1=crediv(x,col[rno],inp);

	    $('#conheader').append(txt1);
	    $('#x'+x).addClass('animated bounceInLeft');
	    $("#usr").val("");

	    x=x+1;
	  //  localStorage.setItem("xval",x);


	    
	    return false;  

	  }
	});

});

function crediv(x, col, valu)
	{
		var temp="<div id=x"+x+" class='cardholder dre' draggable='true' ondragstart='drag(event)' style='background-color:"
		  			+col+"' >"+valu+"<button class='pre' id='"+x+"' onclick='func(this.id)' style='background-color:"
		  			+col+"; border:transparent!important;'>x</button></div>";
		return temp;
	}	

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
