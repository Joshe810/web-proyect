function Res()
{
	var r=document.getElementById("numero").value;
        document.write("<head>")
        document.write("<link rel='stylesheet' type='text/css' href='style.css'>")
        document.write("</head>")
        document.write("<div class='contenedor-tabla'>");
		document.write("<h1>TABLA DEL NUMERO "+r + "</h1>");
		document.write("<table>");
		document.write("</tr>");
	for (var i = 1; i <= 18; i++) {
		m=i*r;
		document.write("<tr>");
		document.write("<td>"+r);
		document.write("<td> x");
		document.write("<td>"+i);
		document.write("<td> =");
		document.write("<td>"+m);
		document.write("</tr>");
	};
	document.write("</table>");						
	document.write("<a href='index.html'><button> Atras </button></a>");
    document.write("</div>");
}