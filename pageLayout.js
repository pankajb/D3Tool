	function chartSelect()
		{
			var mylist=document.getElementById("myList");
			document.getElementById("chart").value=mylist.options[mylist.selectedIndex].text;
		}
	
	function x_scaleSelect()
		{
			var x_scaleSelect=document.getElementById("x_scale").options[x_scale.selectedIndex].text;
		}
	
	function y_scaleSelect()
		{
			var y_scaleSelect=document.getElementById("y_scale").options[y_scale.selectedIndex].text;
		}	
	
	function x_scaleOrientationSelect()
		{
			var x_orientation=document.getElementById("x_scale_orientation").options[x_scale_orientation.selectedIndex].text;
		}	
	
	function y_scaleOrientationSelect()
		{
			var y_orientation=document.getElementById("y_scale_orientation").options[y_scale_orientation.selectedIndex].text;
		}
	
	var xData =new Array();
	
	function create_xLength()
		{
			var xLength=document.getElementById("x_length").value;
		//	var last_xLength=xLength;	
			for(i=1;i<=xLength;i++)
				{
					var input = new Array();
					input[i] = document.createElement("input");
					input[i].type = "text";
					input[i].id = "inputX"+i+"";
					document.getElementById("x_form").appendChild(input[i]); // put it into the DOM
				}
			document.getElementById("x_length").disabled=true;
			
			
	
		}
	
	function submit_x()
		{
		var xLength=document.getElementById("x_length").value;
		for(i=1;i<=xLength;i++)
				{
					xData[i]= document.getElementById("inputX"+i+"").value;
					console.log(xData[i]);
				}
				
			if(document.getElementById("myList").value=='Bar Chart')
				visualizeBarChart();
		}
	
	function create_yLength()
		{
			var yLength=document.getElementById("y_length").value;
		//	var last_yLength=yLength;	
			for(i=1;i<=yLength;i++)
				{
					var input1 = new Array();
					input1[i] = document.createElement("input");
					input1[i].type = "text";
					input1[i].id = "inputY"+i+"";
					document.getElementById("y_form").appendChild(input1[i]); // put it into the DOM
				}
			document.getElementById("y_length").disabled=true;
		}
		
	function remove_dataBoxes_xAxis()
		{
			var xLength=document.getElementById("x_length").value;
			for(i=1;i<=xLength;i++)
				{
					if(document.getElementById("inputX"+i+"")!=null)
					document.getElementById("inputX"+i+"").remove();
				}
			document.getElementById("x_length").value=0;
			document.getElementById("x_length").disabled=false;
		}
	
	function remove_dataBoxes_yAxis()
		{
			var yLength=document.getElementById("y_length").value;
			for(i=1;i<=yLength;i++)
				{
					if(document.getElementById("inputY"+i+"")!=null)
					document.getElementById("inputY"+i+"").remove();
				}
			document.getElementById("y_length").value=0;
			document.getElementById("y_length").disabled=false;
			
		}
		
	
		
	function get_yLength()
		{
			var yLength=document.getElementById("y_length").value;
		}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function visualizeBarChart()
	{
	
	
	var data = xData;


	
	
	
	
	
	
	
	
	
	
	// generate graph
	
	var margin = {top: 130, right: 20, bottom: 30, left: 40},	
				width = 700 - margin.left - margin.right,					// SVG Width
				height = 300 - margin.top - margin.bottom;					// SVG Height



	var svg = d3.select(".chart").append("svg")									 // Painting SVG
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");      

					
	var scaleForOrdinal_x=d3.scale.ordinal().rangeRoundBands([0, width], .1);	
	var scaleForOrdinal_y=d3.scale.ordinal().rangeRoundBands([height,0], .1);   

	var scaleForLinear_x=d3.scale.linear().domain([0, d3.max(data)]).range([0, width]);
	var scaleForLinear_y=d3.scale.linear().domain([0, d3.max(data)]).range([height, 0]);   

	var temp_x;
	var temp_y;
	var orient="bottom";
	var lenght;

	var xAxis = d3.svg.axis().scale(temp_x).orient(orient);
	var yAxis = d3.svg.axis().scale(temp_y).orient("left").ticks(length);

	
	
	d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(d) { return scaleForLinear_x(d) + "px"; }).text(function(d) { return d; });
	}