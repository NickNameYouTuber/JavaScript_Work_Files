function Calculator(){

    this.methods = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b    
    };

    this.calculate = function(str) {
        
        let split = str.split(" ");

        return this.methods[(split[1])](+split[0], +split[2]);

    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;  
    };

}



let calc = new Calculator;

alert(calc.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);