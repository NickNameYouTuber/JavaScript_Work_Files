let age = prompt('Сколько тебе лет?', 100);

if (!age>=14 && !age<=90){
    alert("Ваш возраст не в диапозоне от 14 до 90");
} else{ 
    alert("Ваш возраст в диапозоне от 14 до 90");
}

if (age<=14 || age>=90){
    alert("Ваш возраст не в диапозоне от 14 до 90");
} else{ 
    alert("Ваш возраст в диапозоне от 14 до 90");
}