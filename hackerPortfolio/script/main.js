window.onload = function()
{
		document.getElementById("prompt").focus();
}
var domChanger  = {
	  consoleOutputCount : 0,
		consoleOutputArr : [],

		changeBackground : function(imagename)
		{
			document.body.style.background = "url("+"'" + imagename + "'"+ ")";
			document.body.style.backgroundAttachment = "fixed";
			document.body.style.backgroundPosition = "center";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		},
		createNewInput : function()
		{

		},
		consolOutputInit : function(consoleOutputTxt,boo)
		{
			  this.consoleOutputCount++;
				var headConsole = document.getElementsByClassName("consoleoutputHead")[0]
				this.stringSeperate(consoleOutputTxt);
				console.log(this.consoleOutputArr);
				for(var i=this.consoleOutputCount-1;i<this.consoleOutputArr.length;i++){
					var p = document.createElement("p");
					p.className = "consoleOutput=" + this.consoleOutputCount;
					var node = document.createTextNode(this.consoleOutputArr[i]);
					p.appendChild(node);
					headConsole.appendChild(p);
				}

				if(!boo)
				{
					document.getElementById("runapp").innerHTML = "argument >> ";
				}
				else if(boo)
				{
					document.getElementById("runapp").innerHTML = "(Write Y) boo not cool!! >> ";
				}
		},
		stringSeperate : function(consoleOutputTxt)
		{// Recursive function that seperates semi culons
			// 0 till ; - 1
			if(consoleOutputTxt!=""){
				var indexOfOccurance = consoleOutputTxt.indexOf(";");
			  var string = consoleOutputTxt.substring(0,indexOfOccurance);
				var restString = consoleOutputTxt.substring(indexOfOccurance+1,consoleOutputTxt.length);
				this.consoleOutputArr.push(string);
				this.stringSeperate(restString);
			}

		}
}

var app = {
	initalize : function()
	{
	document.getElementById('prompt').addEventListener('keypress',this.enterEvent);
	},
	enterEvent : function(e)
	{
		  var key = e.which || e.keyCode;
    	if (key === 13) { // 13 is enter
				var promptValue = document.getElementById("prompt").value;
					if(promptValue == 'Y' || promptValue == '' || promptValue == 'y'){
						domChanger.changeBackground("assets/gif/cool.gif");
						var output = "getSchwifty;consoleAPplicationRemoval;";
						domChanger.consolOutputInit(output,false);
					}
					else if (promptValue=="exit()") {

					}
					else {
						domChanger.changeBackground("assets/gif/notcool.gif");
						var output = "boooNotCool;Not cool;";
						domChanger.consolOutputInit(output,true);
					}
			}
	}
};

app.initalize();
