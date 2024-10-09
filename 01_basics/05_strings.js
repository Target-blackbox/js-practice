const name = "akhil"
const repocnt = 12

console.log(name+repocnt+"value"); //outdated syntax

console.log(`hello my name is ${name} and my repo count is ${repocnt}`); //backticks `` for writing new form for string

const gamename = new String('java-script')

console.log(gamename[0]);
console.log(gamename.__proto__);//you can keep any prototypes in place of proto
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("t"));
const newgname = gamename.substring(0,4) 
console.log(newgname);

const anewstring = gamename.slice(-10,4)
console.log(anewstring);

const newstrone = "    akhil   "
console.log(newstrone);
console.log(newstrone.trim());

const url = "https://mticket.free.nf/akhil%20reddy"
url.replace("%20","-")
console.log(url.replace("%20","-"));

console.log(url.includes("akhil")); //either tells true or false

console.log(gamename.split('-'));

 







