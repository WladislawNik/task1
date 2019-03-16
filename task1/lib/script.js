let money = prompt("Ваш буджет за месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    money : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");
appData.expenses[answer1] = answer2;
alert(money/30);