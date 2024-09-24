// Переводы на разные языки
const translations = {
  ru: {
      title: "Калькулятор корней",
      numberLabel: "Введите выражение или число:",
      precisionLabel: "Количество знаков после запятой:",
      calculateButton: "Вычислить",
      helpTitle: "Поддержка",
      number_value: "Например, 25",
      supportButton: "Поддержка" // Перевод для кнопки поддержки
  },
  en: {
      title: "Root Calculator",
      numberLabel: "Enter expression or number:",
      precisionLabel: "Number of decimal places:",
      calculateButton: "Calculate",
      helpTitle: "Help",
      number_value: "For example, 25",
      supportButton: "Support" // Перевод для кнопки поддержки
  },
  zh: {
      title: "根计算器",
      numberLabel: "输入表达式或数字：",
      precisionLabel: "小数点后的位数：",
      calculateButton: "计算",
      helpTitle: "帮助",
      number_value: "例如，25",
      supportButton: "支持" // Перевод для кнопки поддержки
  },
  es: {
      title: "Calculadora de raíces",
      numberLabel: "Ingrese expresión o número:",
      precisionLabel: "Número de decimales:",
      calculateButton: "Calcular",
      helpTitle: "Ayuda",
      number_value: "Por ejemplo, 25",
      supportButton: "Soporte" // Перевод для кнопки поддержки
  }
};

// Функция для перевода страницы
function translatePage(language) {
  const translation = translations[language];

  document.getElementById("title").innerText = translation.title;
  document.getElementById("number-label").innerText = translation.numberLabel;
  document.getElementById("precision-label").innerText = translation.precisionLabel;
  document.getElementById("calculate-button").innerText = translation.calculateButton;
  
  // Перевод текста кнопки помощи
  document.getElementById("help-title").innerText = translation.helpTitle;
  
  // Перевод текста кнопки поддержки
  document.getElementById("help-button").innerText = translation.supportButton;

  // Перевод плейсхолдера в поле ввода
  document.getElementById("number").placeholder = translation.number_value;
}

// Обработчик для смены языка
document.getElementById("language-select").addEventListener("change", function() {
  const selectedLanguage = this.value;
  
  if (selectedLanguage === "other") {
    // Перенаправление на страницу с выбором других языков
    window.location.href = "https://t.me/TechnicalSupportCalculatorBot"; // Замените на нужную ссылку
  } else {
    translatePage(selectedLanguage);
  }
});

// Устанавливаем функцию обработки кнопки после загрузки библиотек
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#calculate-button").addEventListener("click", calculateRoot);
  
  // Переводим на начальном этапе
  translatePage(document.getElementById("language-select").value);
});
