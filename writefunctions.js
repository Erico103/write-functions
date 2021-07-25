//function declarations = function add(){return num1,num2}
//function expression = const add =function(){return num1 = num2};
//arrow function = const add =() => {return num1 + num2};
//squard = N2 = N * N

function squaredDeclaration(num1, num2) {
    let sum = (num1 * num1 + num2 * num2) * (num1 * num1 + num2 * num2)
    return sum
}
console.log("This is a Function declaration, "+squaredDeclaration(3, 2))

const squaredExpression= function(num1,num2){
   let sum = (num1 * num1 + num2 * num2) * (num1 * num1 + num2 * num2)
   return sum
};

console.log("This is a Function expression, " + squaredExpression(3,2))

const squaredFatArrow =(num1,num2) => {
    let sum = (num1 * num1 + num2 * num2) * (num1 * num1 + num2 * num2)
return sum
};

console.log("This is a Funcion with a fat arrow,"+squaredFatArrow(2,3))

