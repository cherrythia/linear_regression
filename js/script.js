document.addEventListener('DOMContentLoaded'), function(){
	var xInput = document.getElementById('xInput');
	var xOutput = document.querySelector('#xOutput');
	var yOutput = document.getElementById('yInput');
	var yOutput = document.querySelector('#yOutput');
	var xEnterKey = document.getElementsByTagName('button')[1];
	var yEneterKey = document.getElementsByTagName('button')[0];

function logToDom(xInput,yInput){
	var i = 1;
	i++;
	var p = document.createElement('p');
	p.textContent = x + i + ' ' + xInput;
	xOutput.insertBefore(p,xOutput,firstChild);
	p.textContent = y + y + ' ' + yInput;
	yOutput.insertBefore(p,yOutput,firstChild);
}

});