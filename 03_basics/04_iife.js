// Immediately Invoked Function Expressions (IIFE)

(function dot () {
    // Named IIFE this one
    console.log(`DB Connected`);
})();

((name) => {
    // Unnamed IIFE with perameter and arguments
    console.log(`DB Connected Two ${name}`); 
})("Manish")