let userName = prompt("Вы кто?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == '1234') {
    alert( 'Верно!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверно' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}