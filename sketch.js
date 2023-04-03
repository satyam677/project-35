//Create variables here
var dog
var happyDog
var foodS
var foodStock
var database


function preload()
{
	//load images here
  loadImage(doglmg.png);
  loadImage(doglmg1.png);
}

function setup() {
	createCanvas(500,500);
 database=firebase.database();
 foodStock=database.ref('Food');
 foodStock.on("value",readStock);
  
}


function draw() {  


  drawSprites();
  //add styles here
  backgroond(46,139,87)
  if(KeyWentDown(UP_ARROW)){
    writeStocks(food);
    dog.addImage(dogHappy);
  }

}



