// Переводы на разные языки
const translations = {
  ru: {
      title: "Калькулятор корней",
      numberLabel: "Введите выражение или число:",
      precisionLabel: "Количество знаков после запятой:",
      calculateButton: "Вычислить",
      helpTitle: "Поддержка",
      number_value: "Например, 25",
      supportButton: "Поддержка" 
  },
  en: {
      title: "Root Calculator",
      numberLabel: "Enter expression or number:",
      precisionLabel: "Number of decimal places:",
      calculateButton: "Calculate",
      helpTitle: "Help",
      number_value: "For example, 25",
      supportButton: "Support" 
  },
  zh: {
      title: "根计算器",
      numberLabel: "输入表达式或数字：",
      precisionLabel: "小数点后的位数：",
      calculateButton: "计算",
      helpTitle: "帮助",
      number_value: "例如，25",
      supportButton: "支持" 
  },
  es: {
      title: "Calculadora de raíces",
      numberLabel: "Ingrese expresión o número:",
      precisionLabel: "Número de decimales:",
      calculateButton: "Calcular",
      helpTitle: "Ayuda",
      number_value: "Por ejemplo, 25",
      supportButton: "Soporte" 
  }
};

// Функция для перевода страницы
function translatePage(language) {
  const translation = translations[language];

  document.getElementById("title").innerText = translation.title;
  document.getElementById("number-label").innerText = translation.numberLabel;
  document.getElementById("precision-label").innerText = translation.precisionLabel;
  document.getElementById("calculate-button").innerText = translation.calculateButton;
  document.getElementById("help-title").innerText = translation.helpTitle;
  document.getElementById("number").placeholder = translation.number_value;
  document.getElementById("help-button").innerText = translation.supportButton;
  
}

// Обработчик для смены языка
document.getElementById("language-select").addEventListener("change", function() {
  const selectedLanguage = this.value;
  
  if (selectedLanguage === "other") {
    window.location.href = "https://t.me/TechnicalSupportCalculatorBot"; 
  } else {
    translatePage(selectedLanguage);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#calculate-button").addEventListener("click", calculateRoot);
  

  translatePage(document.getElementById("language-select").value);
});
