window.onload = function()
{
		document.getElementById("prompt").focus();
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
						document.body.style.background = "url('assets/gif/cool.gif')";
						document.getElementsByClassName("consoleoutput")[0].innerHTML = "<p> Initilizing init.py </p> <p> </p> HTTP request sent, awaiting response... 200 OK <p> Changing background image </p> <p> Getting schwifty </p>";
					}
					else if (promptValue=="exit()") {

					}
					else {
						document.body.style.background = "url('assets/gif/notcool.gif')";
						document.getElementsByClassName("consoleoutput")[0].innerHTML = "<p> boooo not cool boo not cool  </p> <p> HTTP request sent , awaiting response ... 404 Not Found </p> <p> Changing background image to not cool</p>";
					}
			}
	}
};

app.initalize();
