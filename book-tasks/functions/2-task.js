function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

checkAge(prompt("Age", 18));