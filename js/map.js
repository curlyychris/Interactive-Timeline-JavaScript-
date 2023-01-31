// Get the modal
var modal = document.getElementById('myModal');
var myModalContent = document.getElementById('myModalContent');

// Get the button that opens the modal
var myPopup = document.getElementById("myPopup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


$(".goodCircle").click(function (e) { 
	modal.style.display="block";
	myModalContent.style.display="block";

	var offsetX = document.getElementById("myModalContent").offsetWidth-150;	
	var offsetY = document.getElementById("myModalContent").offsetHeight + 70;	
	
	var coords = $(this).attr('coords').split(',');
	$('#myModalContent').css('left',(coords[0] - offsetX) + Number(coords[2])/2 );   
	$('#myModalContent').css('top',Number(coords[1] - offsetY*4.15) + coords[2]/2);  
	
	var alt = $(this).attr('alt');

	$('#theText').text(alt);
	
	e.preventDefault();
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	myModalContent.style.display = "none";
}

// Table making using JavaScript
var data = [
	{year : "1991", web: "HTML"},
	{year : "1994", web: "HTML2"},
	{year : "1996", web: "CSS1 + Javascript"},
	{year : "1997", web: "HTML4"},
	{year : "1998", web: "CSS2"},
	{year : "2000", web: "XHTML1"},
	{year : "2002", web: "Tableless Web Design"},
	{year : "2005", web: "AJAX"},
	{year : "2009", web: "HTML5"}
];
   
   function makeTable(){
		
	   var rows = document.createElement("tr");
	   table = document.getElementById("tbl");
	   
	   table.innerHTML = '';

	   var year = document.createElement("th");
	   var web = document.createElement("th");

	   year.innerHTML = "Year";

	   web.innerHTML = "Web Technology";
	   
	   rows.appendChild(year);
	   rows.appendChild(web);
	   
	   table.appendChild(rows);
	   
	   for (var i = 0; i < data.length; i++) {
		   var element = data[i];
		   var _row = document.createElement("tr");
		   var _year = document.createElement("td");
		   var _web = document.createElement("td");
		   _year.innerHTML = element.year;
		   _web.innerHTML = element.web;
		   _row.appendChild(_year);
		   _row.appendChild(_web);
		   table.appendChild(_row);
	   }
	   
   }
// Menu options
 $(document).ready(function(){
	$("#imgsss").click(function(){
		$("#tablemade").hide();
		$("#myPopup").show();
	});
});

$(document).ready(function(){
	$("#tablesss").click(function(){
		$("#myPopup").hide();
		$("#tablemade").show();
	});
});
