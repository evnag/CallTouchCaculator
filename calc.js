
//Функция принимает выбранные значения в качестве параметра
//и возвращает их в текстовое поле. Значением может быть цифра,
//десятичная точка или оператор, за исключением «=».
function display(val){

    document.getElementById('result').value += val;

    return val;

}

//Вызывается, когда пользователь нажимает оператор «=».
//Переменная x принимает математическое выражение, предоставленное пользователем.
//Это выражение вычисляется и сохраняется в переменной y. Результат отображается в текстовом поле.
function solve(){

    let x = document.getElementById('result').value;

    let y = eval(x);

    document.getElementById('result').value = y;

    return y;

}

//Вызывается, когда пользователь нажимает кнопку C или кнопку очистки.s
//Значение результата устанавливается в пустую строку.
function clearScreen(){

    document.getElementById('result').value = '';

}

