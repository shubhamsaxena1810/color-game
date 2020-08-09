var level=6;
var colors= generaterandomcolor(level);
var h1= document.getElementById("h1");
var pick= pickcolor();
var squares= document.querySelectorAll(".square");
var coldis=document.getElementById("coldis");
var reset = document.querySelector("#reset");
var mssg=document.querySelector("#mssg")
coldis.textContent=pick;
var modeBut = document.querySelectorAll(".mode");

for(var i=0;i< modeBut.length;i++)
{
	modeBut[i].addEventListener("click",function(){
		modeBut[0].classList.remove("selected");
		modeBut[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy")
		{
			level=3;
		}
		else{
			level=6;
		}
		resetlev();
	});
}

function resetlev(){
	colors= generaterandomcolor(level);
	pick= pickcolor();
	coldis.textContent=pick;
	reset.textContent="New Colors";
	mssg.textContent="";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}

	h1.style.backgroundColor="steelblue";

}
/*easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	level=3;
	colors=generaterandomcolor(level);
	pick=pickcolor();
	coldis.textContent=pick;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	level=6;
	colors=generaterandomcolor(level);
	pick=pickcolor();
	coldis.textContent=pick;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}

})*/


reset.addEventListener("click",function(){
	resetlev();

})
for(var i=0; i< squares.length;i++)
{
	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pick){
			mssg.textContent="Correct!";
			changecolor(clickedcolor);
			h1.style.backgroundColor=pick;
			reset.textContent="Play Again?";

		}
		else{
			this.style.backgroundColor = "#232323";
			mssg.textContent="Try Again";
		}
	})
}
function changecolor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generaterandomcolor(num){
	var arr = [];
	for(var i=0; i<num; i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", " + b + ")";
}