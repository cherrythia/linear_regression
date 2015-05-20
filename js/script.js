document.addEventListener('DOMContentLoaded', function(){
	var xInput = document.getElementById('xInput');
	var yInput = document.getElementById('yInput');
	var Output = document.getElementById('Output');
	var enterButton = document.getElementById('enterButton');
	var plotGraph = document.getElementById('plotGraph');
	var count = 0;
	var i;
	var myarray = [['variablex','variabley']];

	function addInputs () {

		if(xInput.value && yInput.value){
			count++;
			var p = document.createElement('p');
			p.textContent = "x" + count + " = " + xInput.value + "	" + "y" + count + " = " + yInput.value;
			Output.appendChild(p);

			// Append value to myarray
			myarray.push([parseFloat(xInput.value),parseFloat(yInput.value)]);
        	console.log(myarray);

			xInput.value = "";
			yInput.value = "";
			}
		
		//alert user to input both variables
		else{
			alert("Please make sure values of x and y are input!");
		}

	};

	enterButton.addEventListener('click',addInputs);

	// Graph starts here
	plotGraph.addEventListener('click',graphPlot);

	function graphPlot () {

		google.setOnLoadCallback();
		console.log("Graph is plotted!");
		 var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
		 var data = google.visualization.arrayToDataTable(myarray);
		 
		 var options = {
          title: 'Linear Regression Chart',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

		chart.draw(data, options);
	}
});

	

// function ButtonClicked(xInput,yInput){
	// var p = document.createElement('p');
	// p.textContent = x  + '= ' + xInput + y + '= ' + yInput;
	// Output.insertBefore(p,xOutput,firstChild);
	//yOutput.insertBefore(p,yOutput,firstChild);
// 	console.log("button is clicked!!!");
// 	document.Output.value = "x  + '= ' + xInput + y + '= ' + yInput";
// };