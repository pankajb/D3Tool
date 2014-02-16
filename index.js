var margin = {top: 130, right: 20, bottom: 30, left: 40},	
				width = 700 - margin.left - margin.right,					// SVG Width
				height = 300 - margin.top - margin.bottom;					// SVG Height



var svg = d3.select("body").append("svg")									 // Painting SVG
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");      

				
var scaleForOrdinal_x=d3.scale.ordinal().rangeRoundBands([0, width], .1);	
var scaleForOrdinal_y=d3.scale.ordinal().rangeRoundBands([height,0], .1);   

var scaleForLinear_x=d3.scale.linear().range([0, width]);
var scaleForLinerr_y=d3.scale.linear().range([height, 0]);   

var temp_x;
var temp_y;
var orient="bottom";
var lenght;

var xAxis = d3.svg.axis().scale(temp_x).orient(orient);
var yAxis = d3.svg.axis().scale(temp_y).orient("left").ticks(length);






/*	
		

			

														// Dynamically creating ticks for y axis..
		
			  

				x.domain(data[0].data1.map(function(d) { return d.Year; }));							// Declaring domain range for x and y scale
				y.domain([0, d3.max(data[0].data1, function(d) { return Math.round( d.Dollar ); })]); 		// Dynamically getting domain 0 to math.round(max) 

				svg.append("g")									// Painting X Axis
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis)
				.append("text")			
				.attr("x", 890)
				.attr("dx", ".71em")
				.style("text-anchor", "start")
				.text("Year");									

				svg.append("g")									// Painting Y Axis
				.attr("class", "y axis")
				.call(yAxis)
				.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end");
			
				
		

		
		
				var a=svg.selectAll(".bar")						// Painting bar for chart
				.data(data[0].data1)
				.enter().append("rect")
				.on("mouseover", hover)
				.on("mouseout", hoverOut)
				.attr("id", "bar1")			
				.attr("class", "bar")
				 .attr("x", function(d) { return x(d.Year); })
				.attr("width", x.rangeBand())
				.attr("y", 500)
				.transition().duration(1000).ease("elastic").delay(function(d, i) { return i * 100; })				// Dynamic transition of each bar one after another..
				.attr("y", function(d,i) { return y(d.Dollar); })
				.attr("height", function(d) { return height - y(d.Dollar); });
			
				
				
				*/