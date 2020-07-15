// // console.log("connected")
// var initial = prompt("what would you like to do");
// var array=[];
// // if (initial==="new"){
// // 	var todo=prompt("add a new Todo")
// // 	array.push(todo)	
// // } else if (initial==="list"){
// // 	console.log(array)

// // }else {
// // 	console.log("quit")
// // }
// while (initial != "quit"){
// 	if (initial==="list"){
// 		console.log(array)
// 	} else if (initial==="new"){
// 		var todo=prompt("add new todo")
// 		array.push(todo)
// 	}
// }
// console.log("you quit")

// var colors =["red","yellow","green"]
// for (var i=0;i<colors.length;i++){
// 	console.log(colors[i])
// }
// const printReverse =(array)=>{
// 	for (let i=array.length;i>=0;i--){
// 		console.log(array[i])
// 	}
// }

// const isUniform=(array)=>{
// 	for (let i=0;i<array.length;i++){
// 		var first=array[0]
// 		if (array[i]!=first){
// 			return false
// 		}
// 	}return true

// } 
// const sumArray=(array)=>{
// 	array.reduce((acc,ind)=>{
// 		return acc+index
// 	}0,
// }
// var max=0
// const maxi=array){
// 	for (let i=0;i<array.length;i++){
// 		if (array[i]>max){
// 			var max=array[i]
// 		}
// 	}return max
// }
// const maxi =(array)=>{
// 	var max=array[0]
// 	for (i=0;i<array.length;i++){
// 		if (array[i]>max){
// 			max=array[i];
// 		}
// 	} return max
// }

// var btn = document.querySelector("button")
// var body = document.querySelector("body")
// const toggler=()=>{
// 	if (btn.style.backgroundColor != body.style.backgroundColor){
// 		btn.style.backgroundColor=body.style.backgroundColor
// 	}else {
// 		btn.style.backgroundColor="yellow"
// 		body.style.backgroundColor="green"

// 	}	
// }
// btn.addEventListener("click",toggler)






// var score1 = document.getElementById("s1")
// var score2 = document.getElementById("s2")
// var player1 = document.getElementById("p1")
// var player2 = document.getElementById("p2")
// var input = document.querySelector("input")
// var max = document.getElementById("max")
// var scoreOne =0
// var scoretwo =0

// const onePoint=()=>{
// 	scoreOne++
// 	score1.textContent=scoreOne
// 	// score1.textContent=scoreOne;
// }
// player1.addEventListener("click",onePoint)
// const twoPoint=()=>{
// 	scoretwo++
// 	score2.textContent=scoretwo
// }
// player2.addEventListener("click",twoPoint)
// var count = -10;
// while (count < 20){
// 	console.log(count)
// 	count++
// }
// var count2 =10;
// while(count2<40) {
// 	count2 +=2
// 	console.log(count2)
// }
// var count3 = 3
// while (count3<50){
// 	count3++
// 	if(count3%3===0 && count3%5 ===0 ){
// 		console.log(count3)
// 	}
	

// }

 // "rgb(255, 0, 0)",
 // "rgb(0, 255, 0)",
 // "rgb(0, 0, 255)",
 // "rgb(255, 255, 0)",
 // "rgb(255, 0, 255)",
 // "rgb(0, 255, 255)"
// reset button for new colors

// var easy = document.querySelector("#easyBtn")
// var hard = document.querySelector("#hardBtn")
var numSquares =6
var colors= generateRandomColor(numSquares)
var reset = document.querySelector("#reset")
var bg= document.querySelector(".bgDisplay") 
var mode = document.querySelectorAll(".mode") 
// setup mode listeners
for (i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected")
		mode[1].classList.remove("selected")
		this.classList.add("selected")
		// figure out number of colors to show
		// pick new random colors
		// pick new picked color
		// update rgb to pickedColor
		this.textContent==="EASY" ? numSquares=3 : numSquares=6
		Reset();
	})
}
function Reset(){
	colors = generateRandomColor(numSquares)
	console.log(numSquares)
	pickedColor = pickColor()
	rgb.textContent=pickedColor
	reset.textContent="NEW COLORS"
	message.textContent=""
	for (i=0;i<box.length;i++){
		box[i].style.display="block"
		colors[i] ? box[i].style.background=colors[i]: box[i].style.display="none"
	}
	bg.style.background="steelblue"
	message.style.color="red"

}

// easy.addEventListener("click",function(){
// 	// alert("clicked")
// 	numSquares=3
// 	easy.classList.add("selected")
// 	hard.classList.remove("selected")
// 	colors = generateRandomColor(numSquares)
// 	pickedColor=pickColor()
// 	rgb.textContent= pickedColor;
// 	for (i=0;i<box.length;i++){
// 		if(colors[i]){
// 			box[i].style.background=colors[i]
// 		}else {
// 			box[i].style.display="none"
// 		}
// 	}
// 	bg.style.background="steelblue"

// })
// hard.addEventListener("click",function(){
// 	hard.classList.add("selected")
// 	easy.classList.remove("selected")
// 	colors=generateRandomColor(numSquares)
// 	pickedColor=pickColor()
// 	for (i=0;i<box.length;i++){
// 		box[i].style.background=colors[i]
// 		box[i].style.display="block"
// 	}
// 	bg.style.background="steelblue"
// })

// setting the picked color
const pickColor=()=>{
	var randomC=Math.floor(Math.random()*colors.length)
	return colors[randomC]
}
var pickedColor= pickColor();
// looping through all the colores and assingning to individual boxes
var box = document.querySelectorAll(".box")
var message =document.querySelector("#message")
message.style.color="red"
// dom manipulation
// const isCorrect =()=>{
// 	alert (box[i].style.background) 
// }

for( i=0; i<box.length;i++){
	// changing backgroundColor of the top
	box[i].style.background=colors[i]
	
	// event listener to boxes and verify
	box[i].addEventListener("click",function(){
		var clickedC = this.style.background
		// grabbed color is clickedC
		if(clickedC===pickedColor) {
			// alert("correct");
			message.textContent="CORRECT :)"
			message.style.color="green" 
			changeColor()
			updateBackground()
			reset.textContent="PLAY AGAIN?"
			// message.textContent=""
		} else {
			this.style.background="black";
			message.textContent="TRY AGAIN:("
		}
	});
	// alert backgroundColor



}
// sellecting the RGB value
var rgb = document.querySelector("#pickedC")
rgb.textContent = pickedColor;
// selecting to update bg color
function updateBackground (){
	
	bg.style.backgroundColor = pickedColor;	
}

// change color of all boxes to correct color
const changeColor =()=>{
	for (i=0;i<box.length;i++){
		box[i].style.background=pickedColor;
	}
}
function generateRandomColor (num){
	// make an array 
	var arr = []
	// genenrate num times of colors
	for (i=0;i < num; i++){
		// red value
		var r=Math.floor(Math.random()*256)
		// green value
		var g=Math.floor(Math.random()*256)
		// blue value
		var b=Math.floor(Math.random()*256)
		arr[i]="rgb("+ r + ", "+ g +", "+ b+")"
	}
	// return that array
	return arr;
}
reset.addEventListener("click",Reset)
// generateRandomColor with param of 6 generates an array of rgb colors six times
// reset.addEventListener("click",function(){
// 	// console.log("new color")
// 	// generateRandomColor
// 	colors=generateRandomColor(numSquares);
// 	// get picked color
// 	pickedColor=pickColor();
// 	// update rgb to picked color
// 	rgb.textContent = pickedColor;
// 	// change colors of boxes
// 	for (var  i=0; i<box.length; i++){
// 	box[i].style.backgroundColor=colors[i]
// 	}
// 	bg.style.background="steelblue"
// 	message.textContent=""
// 	this.innerHTML="NEW COLORS"
// })





