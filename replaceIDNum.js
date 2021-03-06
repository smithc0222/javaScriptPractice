
function reorder(arr){
document.write("Original input of numbers: " + arr + "<br>"+ "<br>");
var firstString=arr.toString(); // makes array arr into a string
var splitter = firstString.split('SP'); //Splits on SP and returns array of only numbers in string form
var drop = splitter.shift(); //Drops off first item in array which is ""

var result = [];
for(x=0;x<arr.length;x++) {     //takes elements to a number and stores in new array called result
  var toNumber = parseInt(splitter[x], 10);
  result.push(toNumber);
}

 for(i=1;i<arr.length;i++) {  //reorders the numbers in result in ascending order
    if(result[i]!==result[i+1]) {
      result[i] = result[i-1]+1;
    }
 }

var final = [];
var secondString = result.toString();         //takes reorded array and converts to string
var splitString = secondString.split(',');     // splits string back into array of strings
for(z=0;z<result.length;z++) { //take each item in result back to strings and concat SP to beginning
  final.push("SP" + splitString[z]); //puts SP on front of each
}
document.write("Ouput after reordering: " + final);
}

reorder(["SP12212","SP12332","SP15434","SP18434","SP32334242","SP"]);



//result of log
// replaceIDNum.html:4 ["SP12212", "SP12332", "SP15434", "SP18434", "SP32334242", "SP"]
// replaceIDNum.html:28 ["SP12212", "SP12213", "SP12214", "SP12215", "SP12216", "SP12217"]
