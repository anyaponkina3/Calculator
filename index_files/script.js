// Функция для преобразования градусов в радианы
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  // Функция для удаления тригонометрических функций из выражения
  function removeTrigFunctions(expression) {
    return expression
        .replace(/sin\((.*?)\)/g, 'sin($1)')  
        .replace(/cos\((.*?)\)/g, 'cos($1)')  
        .replace(/tan\((.*?)\)/g, 'tan($1)'); 
  }
  
  // Функция для проверки наличия переменных в выражении
  function containsVariables(expression) {
    // Удаляем тригонометрические функции
    let cleanedExpression = removeTrigFunctions(expression);
    
    // Проверяем наличие переменных (английские буквы) в очищенном выражении
    return /[a-zA-Z]/.test(cleanedExpression); 
  }
  
  // Функция для вычисления корня
  function calculateRoot() {
    let expression = document.getElementById("number").value;
    let degree = 2; // Степень корня 
    let precision = parseInt(document.getElementById("precision").value); // Количество знаков после запятой
  
    if (!expression) {
        alert("Введите выражение");
        return;
    }
  
    // Замена ** на ^ для корректного вычисления возведения в степень в math.js
    let formattedExpression = expression.replace(/\*\*/g, '^');
  
    // Преобразование тригонометрических функций (sin, cos, tan) в радианы
    formattedExpression = formattedExpression
        .replace(/sin\((.*?)\)/g, (match, p1) => `sin(${toRadians(parseFloat(p1))})`)
        .replace(/cos\((.*?)\)/g, (match, p1) => `cos(${toRadians(parseFloat(p1))})`)
        .replace(/tan\((.*?)\)/g, (match, p1) => `tan(${toRadians(parseFloat(p1))})`);
  
    try {
        if (containsVariables(expression)) {
            // Если выражение содержит переменные, используем Algebrite
            let algebriteResult = Algebrite.run(`sqrt(${formattedExpression})`).toString();
            document.getElementById("result").innerHTML = `${algebriteResult}`;
        } else {
            // Вычисляем значение выражения с math.js
            let parsedExpression = math.evaluate(formattedExpression);
  
            // Извлечение корня
            let result = 0;
            if (degree === 2) {
                // Если результат отрицательный, выводим комплексное число
                if (parsedExpression < 0) {
                    result = `0 + ${Math.sqrt(Math.abs(parsedExpression)).toFixed(precision)}i`;
                } else {
                    result = Math.sqrt(parsedExpression);  // Квадратный корень
                }
            } 
  
            // Применение точности только к знакам после запятой, если это число
            if (typeof result === 'number') {
                result = parseFloat(result).toFixed(precision);
            }
  
            // Вывод результата
            document.getElementById("result").innerHTML = `${result}`;
        }
  
    } catch (e) {
        alert("Некорректный ввод");
        console.error(e);
    }
  }
  
  // Устанавливаем функцию обработки кнопки после загрузки библиотек
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", calculateRoot);
  });
  
