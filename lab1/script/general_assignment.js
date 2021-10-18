

$(document).ready(function(){

	//------------------------------------------------------------------------------------------------
	// Пункт 1

	$("#outFormInput").click(function(){
		

		
		
		let numberPeople = $("#input_number_people").val()
		// очистка блока
		$("#get_name").empty()

		// добавление полей в блок
		for( let iter = 0; iter < numberPeople; iter++){
			let firstName = document.createElement("input")
			$(firstName).attr("placeholder", "Введите имя")

			let lastNmae = document.createElement("input")
			$(lastNmae).attr("placeholder", "Введите фамилию")

			let containerForName = document.createElement("div")
			$(containerForName).attr("class", "lastFirstName")

			$(containerForName).append(firstName)
			$(containerForName).append(lastNmae)

			$("#get_name").append(containerForName)
		}

		$("#get_name").append("<a href='#' class='button'>Отправить</a>")
		

		// откртыть блок
		$("#get_name").slideToggle("slow")

	})


	//--------------------------------------------------------------------------------------------------
	// Пункт 2
	$("#add_unit").click(function(){
		
		if (document.getElementById("empty_input")){
			$("#empty_input").remove()
		}

		let firstName = $("#point_2_first_name").val()
		let lastName = $("#point_2_last_name").val()

		if (firstName == '' || lastName == ''){
			$("#point_2_solution").append("<p class='warning' id='empty_input'>Заполните все поля</p>")
		}
		else {
			let str = "<p>" + firstName + "<br/>" + lastName + "</p>"

			$(".list_users").append(str)
		}
	})

	$("#cancel_appending").click(function(){
		$(".form_for_input").remove()
		$("#task_unit_2").text("Ввод завершен, вы ввели:")
	})


	//----------------------------------------------------------------------------------------------------
	// Пункт 3

	// Вывод линий разной длинны
	let numberLines = 3

	for (let i = 0; i < numberLines; i++)
	{
		$("#point_3_solution").append("<div class='out_lines' id='line" + i + "'></div>")
		let sizeHight = Math.random() * (500 - 200) + 200
		$("#line" + i).css('width', sizeHight)
	}

	//------------------------------------------------------------------------------------------------------
	// Пункт 4

	let numberLine = 10
	let numberColumn = 10

	
	for (let i = 1; i < numberLine; i++){
		$("#point_4_solution").append("<tr>")
		for (let j = 1; j < numberColumn; j++){
			$("#point_4_solution").append("<th>" + j + " x " + i + " = " + i * j + "</th>")
		}
		$("#point_4_solution").append("</tr>")
	}

	//----------------------------------------------------------------------------------------------------
	// Пункт 5
	let lineCelc = 30
	$("#point_5_solution").append("<tr>")
	$("#point_5_solution").append("<th>Сelsius</th>")
	$("#point_5_solution").append("<th>Fahrenheit</th>")
	$("#point_5_solution").append("</th>")
	for (let i = 0; i < lineCelc + 1; i++)
	{
		$("#point_5_solution").append("<tr>")
		$("#point_5_solution").append("<th>" + i + "</th>")
		$("#point_5_solution").append("<th>"+ (Number(1.8) * Number(i) + Number(32)).toFixed(1)  + "</th>")
		$("#point_5_solution").append("<tr>")
	}

	//------------------------------------------------------------------------------------------------------
	// Пункт 6
	let endPoint = 2
	let step = 0.1
	$("#point_6_solution").append("<tr>")
	$("#point_6_solution").append("<th>X</th>")
	$("#point_6_solution").append("<th>Y</th>")
	$("#point_6_solution").append("</th>")
	for (let x = 0; x <= endPoint; x = x + step){
		let y = 4 * x * 2 - 5.5 * x + 2
		$("#point_6_solution").append("<tr>")
		$("#point_6_solution").append("<th>"+ x.toFixed(1) +"</th>")
		$("#point_6_solution").append("<th>" + y.toFixed(1) + "</th>")
		$("#point_6_solution").append("</th>")
	}

	//----------------------------------------------------------------------------------------------------
	// Пункт 7
	let factEnd = 30
	$("#point_7_solution").append("<tr>")
	$("#point_7_solution").append("<th>N</th>")
	$("#point_7_solution").append("<th>Factorial</th>")
	$("#point_7_solution").append("</th>")
	for (let i = 0; i < factEnd; i++)
	{
		let f = factorial(i)
		$("#point_7_solution").append("<tr>")
		$("#point_7_solution").append("<th>"+ i +"</th>")
		$("#point_7_solution").append("<th>" + f + "</th>")
		$("#point_7_solution").append("</th>")
	}
})

function factorial(n) {
	if (n == 0)
		return 1
	return (n != 1) ? n * factorial(n - 1) : 1;
  }