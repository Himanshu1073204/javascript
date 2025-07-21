// Immediately Invoked Function Expression (IIFE)
// we use iife when we do not want to our function to get polluted by global scopes


(function chai (){
    // named IIFE
    console.log(`DB Connected`);
    
})();

//  () () one for parameter and other for argument

( (name) => {
    console.log(`DB Connected ${name}`);
    
})("hitesh")

