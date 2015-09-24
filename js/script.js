$(document).ready(function(){

	if(localStorage.getItem("xval")){

	  x = localStorage.getItem("xval");
	  flag=0;

	  for (i=1;i<=x;i=parseInt(i)+1)
		{
			if(localStorage.getItem("x"+i))
			{
				var dinp=localStorage.getItem("x"+i);
	    		var dcol=localStorage.getItem("x"+i+"col");
	    		var dinfo = crediv(i,dcol,dinp);
	    		
	    		if(localStorage.getItem("x"+i+"pla")=="todo")
	    			$('#conheader').append(dinfo);
	    		else
	    			$('#done').append(dinfo);
	    		flag=1;
			}

		}

	  if(flag==0)
	  	x=1;

	}
	else
	{
	  x=1;	
	}
	
	var col=['#3498db','#2ecc71','#e67e22','#c0392b','#16a085','#d35400','#e74c3c','#1abc9c','#8e44ad','#7f8c8d'];
	var anim=['flipInY','wobble','tada','bounce','lightSpeedIn','slideInLeft','zoomInLeft','rollIn','shake','fadeInLeft'];
	
	$('input').keypress(function (e) {
	  if (e.which == 13) {

	  	var rno = Math.floor(Math.random()*(10));
	  	var inp = $('#usr').val();

	  	if(inp=="")
	  	{
	  		$('#usr').addClass("has-error");
	  	}
	  	else
	  	{
	  		var txt1=crediv(x,col[rno],inp);

		    $('#conheader').append(txt1);
		    $('#x'+x).addClass('animated '+anim[rno]);
		    $("#usr").val("");

		    localStorage.setItem("x"+x,inp);
		    localStorage.setItem("x"+x+"col",col[rno]); 
		    localStorage.setItem("x"+x+"pla","todo");   
		    x=parseInt(x)+1;
		    localStorage.setItem("xval",x);
	  	}
	  	
 
	    return false;  

	  }
	});

});

function crediv(x, col, valu){
		var temp="<div id=x"+x+" class='cardholder dre' draggable='true' ondragstart='drag(event)' style='background-color:"
		  			+col+"' >"+valu+"<button class='pre' id='"+x+"' onclick='func(this.id)' style='background-color:"
		  			+col+"; border:transparent!important;'>x</button></div>";
		return temp;
}	

function func(x){
		$('#x'+x).addClass('animated flipOutX').remove();
		localStorage.removeItem("x"+x);
		localStorage.removeItem("x"+x+"col");
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
    localStorage.setItem(data+"pla","done"); 
}
