function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let brackets = 0;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == '(') {  // проверяем открытую скобку
            brackets++; // увеличиваем счет скобок на 1
        }

        if (expr[i] == ')') {  // проверяем закрытую скобку
            brackets--; // уменьшаем кол-во скобок на 1
        }
    }

    if (brackets !== 0 ) { // если кол-во скобок больше 0, то где-то не было закрывающей скобки
        throw new Error ('ExpressionError: Brackets must be paired');
    }

    if (expr.indexOf('/ 0') != -1 || expr.indexOf('/0') != -1) {
        throw new Error ('TypeError: Division by zero.'); // проверяем, есть ли деление на ноль
    }

    expr = expr.replace(/ /g, '') && new Function(`return ${expr}`); // убираем пробелы и вызываем функцию, которая считает результат и возвращает его
    return expr();
}

module.exports = {
    expressionCalculator
}