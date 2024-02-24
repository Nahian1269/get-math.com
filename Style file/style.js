
    

// Calculations
// Calculations for Triangle
function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("Read").value);
    const height = parseFloat(document.getElementById("Read1").value); 
    const area = 0.5 * base * height; 
    document.getElementById("Res").textContent = area;
}

const triangleBtn = document.getElementById("btn-2");
triangleBtn.addEventListener("click", calculateTriangleArea);

// Calculations for Rectangle
function calculateRectangleArea() {
    const width = parseFloat(document.getElementById("Read2").value);
    const height = parseFloat(document.getElementById("Read3").value); 
    const area = width * height; 
    document.getElementById("Res1").textContent = area;
}

const rectangleBtn = document.getElementById("btn-3");
rectangleBtn.addEventListener("click", calculateRectangleArea);

// Calculate  Parallelogram

function calculateParallelogramArea() {
    const base = parseFloat(document.getElementById("Read4").value);
    const height = parseFloat(document.getElementById("Read5").value); 
    const area = base * height; 
    document.getElementById("Res2").textContent = area;
}

const ParallelogramBtn = document.getElementById("btn-4");
ParallelogramBtn.addEventListener("click",calculateParallelogramArea);

// Calculate Rhombus
function calculateRombasArea() {
    const p_Diagonal = parseFloat(document.getElementById("Read6").value);
    const q_Diagonal = parseFloat(document.getElementById("Read7").value); 
    const area = p_Diagonal * q_Diagonal/2; 
    document.getElementById("Res3").textContent = area;
}

const RhombusBtn = document.getElementById("btn-5");
RhombusBtn.addEventListener("click",calculateRombasArea);


// Calculate Pentagon

function calculatePentagonArea() {
    const a_Diagonal = parseFloat(document.getElementById("Read8").value); 
    const area = (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(a_Diagonal,2); 
    document.getElementById("Res4").textContent = area;
}

const PentagonBtn = document.getElementById("btn-6");
PentagonBtn.addEventListener("click", calculatePentagonArea);

document.getElementById('pentagonFormula').innerHTML = '\\[A = \\frac{1}{4} \\sqrt{5(5+2\\sqrt{5})} \\times s^2\\]';


document.getElementById("ellipse").innerHTML = '\\[A = \\pi \\times a \\times b\\]' 

// Calculate Ellipse
function calculateEllipsArea() {
    const a_Diagonal = parseFloat(document.getElementById("Read9").value); 
    const B = parseFloat(document.getElementById("Read10").value);
    const area =  Math.PI*a_Diagonal*B; 
    document.getElementById("Res5").textContent = area;
}

const ellipsBtn = document.getElementById("btn-7");
ellipsBtn.addEventListener("click", calculateEllipsArea);






// Get the save the hisotry !

// document.getElementById("btn-2").addEventListener("click",function(){
            
//     const hist = document.getElementById("Res"); 

    

// })