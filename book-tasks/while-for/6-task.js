let num;

do {
  num = prompt("Введите число больше 100", 0);
} while (num <= 100 && num);

alert("Вы ввели число больше 100, молодец!");