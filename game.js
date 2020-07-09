let arr1 = [
  "Handgel",
  "Water Bottle",
  "Face Mask",
  "Charger"
]
let arr2 = [
  "Victoria Line Northbound",
  "Victoria Line Southbound",
  "Piccadilly Line Northbound",
  "Piccadilly Line Southbound",
]
let arr3 = [
  "Change for the Overground",
  "Stay on the Victoria Line"
]
let arr4 = [
  "Handgel",
  "Bottle of Water",
  "Mars Bar",
  "Newspaper"
]
let arr5 = [
   "Hammersmith & City Eastbound",
   "Hammersmith & City Westbound",
   "Northern Line Southbound",
   "Northern Line Northbound",
   "Stay on Piccadilly Line",
   "Stay on Victoria Line"
   ]
let arr6 = [
  "Central Line Eastbound",
  "Central Line Westbound",
  "Stay on Piccadilly Line"
]
  let name
  let item1
  let item2
  let direction
  let direction2
  let direction3
function start() {
  name = prompt("What is your character's name?")
  alert(`Hello ${name}, welcome to 'Beat the Rush'!`)
  confirm("Please note: Answers are case-sensitive.")
  confirm("You are in a rush to get to an interview at Bank Train Station, will you make it in time?!")
  pickItem()
}
function pickItem() {
  item1 = prompt(`${name}, you need to pick 1 item to take with you on the underground: ${arr1[0]}, ${arr1[1]}, ${arr1[2]} or ${arr1[3]}.`)
  if(item1 != arr1[2]){
      alert(`${name}, no face mask, no entry. Start again.`)
      pickItem()
  }else if(item1 == arr1[2]){
    alert(`${name}, you have chosen the ${item1}, and the police let you on the train in line with government regulation.`)
    alert(`The ${item1} is now in your inventory.`)
    finsburyPark()
  }else{
    alert(`${name}, no face mask, no entry. Start again.`)
    pickItem()
  }
}
  function finsburyPark() {
  alert(`${name}, you are currently at Finsbury Park Train Station, where will you go?`)
  direction = prompt(`Pick a direction to go to: ${arr2[0]}, ${arr2[1]}, ${arr2[2]}, ${arr2[3]}.`)
  if(direction == arr2[1]){
      alert(`${name}, you choose to take the ${direction}. Great work!`)
      highbury()
  }else if(direction == arr2[3]){
      alert(`${name}, you choose to take the ${direction}. Great work!`)
      shopItem()
  }else{
      (direction != arr2[1] || direction != arr2[2])
      alert(`${name} you are going the wrong direction. You're now late, and you miss your interview. Start again.`)
      pickItem()
  }
}
  function highbury(){
  direction = prompt(`${name}, you reach Highbury and Islington Train Station. Pick a direction to go to: ${arr3[0]} or ${arr3[1]}.`)
  alert(`you have picked to ${direction}.`)
  if (direction == arr3[1]){
      alert (`${name}, you arrive at King's Cross Station. Well done.`)
      shopItem()
  }else{
      (direction == arr3[0])
      alert(`${name} you chose to ${direction}. You are now going in the wrong direction. You're late for the interview. Start again.`)
      pickItem()
  }
}
  function shopItem(){
  item2 = prompt(`${name}, you become dehydrated at King's Cross Station. You can only afford one item from the shop, what do you pick? ${arr4[0]}. ${arr4[1]}, ${arr4[2]}, ${arr4[3]}.`)
  if (item2 != arr4[1]){
      alert(`${name}, you chose poorly, and you pass out from dehydration! You miss your job interview! Start again.`)
      pickItem()
  }else if (item2 == arr4[1]){
      alert(`you have picked the ${item2}.`)
      alert(`${name}, you rehydrate yourself with the ${item2} and can continue on your journey. Phew!`)
      console.log(item2)
      kingsCross()
  }else{
      alert(`Uh oh ${name}, you chose the ${item2}. You pass out from dehydration! Start again.`)
      pickItem()
  }
}
  function kingsCross(){
  direction2 = prompt(`${name}, you're at King's Cross Station and must now decide which direction to go: ${arr5[0]}, ${arr5[1]}, ${arr5[2]}, ${arr5[3]}, ${arr5[4]}, ${arr5[5]}.`)
  if (direction2 == arr5[2]){
    alert (`${name}, congratulations! You made it to Bank where you nail your interview and live happily ever after.`)
  }else if (direction2 == arr5 [4]) {
    alert (`${name}, you stay on the Piccadilly Line and arrrive at Holborn Station.`)
    holbornStation()
  }else if (direction2 == arr5 [0]|| arr5 [1]|| arr5 [3]|| arr5 [5]) {
    alert (`${name}, you've gone the wrong way! This route takes too long and you miss your interview. Start again.`)
    pickItem()
  }else{
    alert(`${name}, you miss your interview! Start again.`)
    pickItem()
  }
}
  function holbornStation(){
  direction3 = prompt(`${name}, you're almost there! You've made it to Holborn Station and must decide which way to go: ${arr6[0]}, ${arr6[1]}, ${arr6[2]}.`)
  if (direction3 == arr6[0]) {
    alert (`${name}, congratulations! You have made it to Bank where you nail your interview and live happily ever after.`)
  }else if (direction3 == arr6[1]) {
    alert (`${name}, you've gone the wrong way and you miss your interview. Start again.`)
  }else if (direction3 == arr6 [2]) {
    alert (`${name}, you've gone the wrong way and you miss your interview! Start again.`)
    pickItem()
  }else{
    alert (`${name}, you've gone the wrong way and you miss your interview! Start again.`)
    pickItem()
  }
}