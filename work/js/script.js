//при фокусе на поле ввода data_go  вызываем сообщение с введенными данными

function showIt(theForm) {
	alert(theForm["data_go"].value);
};

//проверим введены ли данные в поле ввода data_go, если нет то напомним об этом

function validateNonEmpty(inputField, helpText) {
	//Проверка на наличие текста
	if (inputField.value.length == 0) {
		//Cooбщаем пользователю что данные не введены
		if (helpText != null)
			helpText.innerHTML = "Пожалуйста введите данные";
		return false;
	}
	else {
		//данные обнаружены убираем вспомогательный текст
		if (helpText !=null)
			helpText.innerHTML = "";
	

	return true;
}
}