window.onload = function()
{
		document.getElementById("prompt").focus();
}
var domChanger  = {
	    consoleOutputCount : 0,
		consoleOutputArr : [],
	    

		domChanger : function()
		{

		},
		changeBackground : function(imagename)
		{
			document.body.style.background = "url("+"'" + imagename + "'"+ ")";
			document.body.style.backgroundAttachment = "fixed";
			document.body.style.backgroundPosition = "center";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundSize = "cover";
		},
		createImportant : function(important,elementName,{className = true,id = false,classNo = 0} = {})
		{
			var p = document.createElement("p");
			var node = document.createTextNode(important);
			p.className = "important_";
			p.appendChild(node);

			if(className){
				var consoleHead = document.getElementsByClassName(elementName)[classNo];
				consoleHead.appendChild(p);
			}
			else if(id)
			{
				var consoleHead = document.getElementById(elementName);
				consoleHead.appendChild(p);
			}
			
		},
		createNewInput : function()
		{

		},
		consolOutputInit : function(consoleOutputTxt,boo)
		{
			    this.consoleOutputCount++;
				var headConsole = document.getElementsByClassName("consoleoutputHead")[0];
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
var consoleAppInit = 
{
	init : function(backgroundImage,consoleLog,argumentInstruction)
	{
		domChanger.changeBackground(backgroundImage);
		domChanger.consolOutputInit(consoleLog,false);
		domChanger.createImportant(argumentInstruction,"consoleoutputHead");
		document.getElementById("promptHead").innerHTML = "<input type='text' id='prompt2' class='window-input js-prompt-input'/>";
		document.getElementById("prompt2").addEventListener('keypress',this.applicationArgument);
		document.getElementById("prompt2").focus();
	},
	applicationArgument : function(e)
	{
		var key = e.which || e.keyCode;
    	if (key === 13) { // 13 is enter
				var promptValue = document.getElementById("prompt2").value;
					
			}
	}

}	

var app = {
	initalize : function()
	{
	document.getElementById('prompt').addEventListener('keypress',this.enterInitialEvent);
	},
	enterInitialEvent : function(e)
	{
		  var key = e.which || e.keyCode;
    	if (key === 13) { // 13 is enter
				var promptValue = document.getElementById("prompt").value;
					if(promptValue == 'Y' || promptValue == '' || promptValue == 'y'){
						consoleAppInit.init("assets/gif/cool.gif","HTTP request sent, awaiting response... 302 Found;HTTP request sent, awaiting response... 200 OK;Changing Background Image ... Complete;Getting Shwifty ... Oh Yes!;","(--portfolio) to see portfolio (still working on it :) stay tuned )");
					}
					else if (promptValue=="exit()") {

					}
					else {
						domChanger.changeBackground("assets/gif/notcool.gif");
						var output = "boooNotCool;Not cool;";
						domChanger.consolOutputInit(output,true);
						document.getElementById('prompt').detachEvent('keypress',this.enterInitialEvent);
					}
			}
	},
	enterArguments : function(e)
	{
		alert("aww yes");
	}
};

app.initalize();
