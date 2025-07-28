// forin loop only keys appear 
// forof loop directly give the value

const myObject ={
    js: 'javascript',
    cs: 'c++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
   // console.log(`${key} shortcut for ${myObject[key]}`);
    
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {    
    console.log(programming[key]);
    
}