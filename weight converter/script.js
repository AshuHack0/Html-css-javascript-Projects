let kgref = document.getElementById('kg'); 
let lbref = document.getElementById('lb'); 
let ozref = document.getElementById('oz'); 

let convertfromkg = () => {
    let kg = kgref.value; 
    lbref.value= (kg*2.205).toFixed(2); 
    ozref.value = (kg*35.274).toFixed(2); 
};
let convertfromlb = () => {
    let lb = lbref.value; 
    kgref.value= (lb/2.205).toFixed(2); 
    ozref.value = (lb*16).toFixed(2); 
}; 
let convertfromoz = () => {
    let oz = ozref.value; 
    lbref.value= (oz/2.205).toFixed(2); 
    kgref.value = (oz/35.274).toFixed(2); 
}; 

kgref.addEventListener("input" , convertfromkg); 
lbref.addEventListener("input" , convertfromlb);
ozref.addEventListener("input" , convertfromoz); 
window.addEventListener("load" , convertfromkg); 
