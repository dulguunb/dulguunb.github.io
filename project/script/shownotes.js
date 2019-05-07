$.get( "http://dulguun.000webhostapp.com/shownotes.php", function( data ) {
 
console.log(data);
/*
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-block">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
*/
var notes_b = document.getElementById("notes");
var card_h = document.createElement("div");
card_h.className = "card text-center";
var card_h_p = document.createElement("p");
card_h_p.appendChild(document.createTextNode("This page is dedicated to show you the notes that you've written"));
card_h.appendChild(card_h_p);
notes_b.appendChild(card_h);
//data = JSON.parse(data);
console.log(data);

/*
<div class="card card-inverse card-primary mb-3 text-center">
  <div class="card-block">
    <blockquote class="card-blockquote">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
*/
var body  = document.body;
if(data.length > 0)
{
for(var i=data.length-1;i>=0;i--)
{
	var cardNames = ["card-success","card-info","card-warning","card-danger","card-primary"];
	var randomNum =  Math.floor(Math.random()*(cardNames.length));

	var div_main = document.createElement("div");
	div_main.className = "card p-3 card-inverse mb-3 text-center " + cardNames[randomNum];

	var div_card = document.createElement("div");
	div_card.className = "card-block";
	
	div_main.appendChild(div_card);

	var blockquote = document.createElement("blockquote");
	blockquote.className = "card-blockquote";

	div_card.appendChild(blockquote);

	var header = document.createElement("h2");
	var title = document.createTextNode("Title: "+data[i].title);
	header.className = "card-title";
	header.appendChild(title);

	var par = document.createElement("h4");
	par.className = "card-text";
	var notes = document.createTextNode("Note: " + data[i].notes);
	par.appendChild(notes);
	var breaker = document.createElement("br");
	par.appendChild(breaker);

	var quotes = "I am sorry you had a bad day :( , Tomorrow will be better day for you :)" + " and I am feeling - " + data[i].feeling;
	var feeling = document.createTextNode(data[i].feeling);


	var par_legend  = document.createElement("small");
	par_legend.className = "card-text";
	

	if(data[i].day==0)
	{	
		var note_legend = document.createTextNode(quotes);
		par_legend.appendChild(note_legend);
	}
	else{
		var note_legend = document.createTextNode("I'm happy that you a had good day :) " + " and I am feeling - " +data[i].feeling);
		par_legend.appendChild(note_legend);
	}

	blockquote.appendChild(header);
	blockquote.appendChild(par);
	blockquote.appendChild(par_legend);
	notes_b.appendChild(div_main);
}
}

});