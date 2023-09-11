

function randomNumber(x,y) {
   return  Math.floor(Math.random()*(y-x+1))+x
 
}


for (let i = 0; i < 50; i++) {

console.log(randomNumber(1,10))

}