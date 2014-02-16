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
	
	function get_xLength()
		{
			var xLength=document.getElementById("x_length").value;
			
			for(i=0;i<=xLength;i++)
				{
					var input[];
					input[i] = document.createElement("input");
					input[i].type = "text";
					document.getElementById("x_form").appendChild(input); // put it into the DOM
				}
		}
		
	function get_yLength()
		{
			var yLength=document.getElementById("y_length").value;
		}

	
	
	
