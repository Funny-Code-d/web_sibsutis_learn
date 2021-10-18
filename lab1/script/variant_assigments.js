var flagMouseHover = false


$(document).ready(function(){

    let randomNumber = Math.random() * (45 - 1) + 1

    $("#numberChar").text("Введите текст не менее " + randomNumber.toFixed(0) + " символов")


    $("#changeText").click(function(){

        if (document.getElementById("lenthTextareaWarning")){
            $("#lenthTextareaWarning").remove()
        }

        let textareaValue = $("#inputLengtText").val()
        console.log(textareaValue.length)
        if (textareaValue.length <= randomNumber)
        {
            $("#point_8_solution").append("<p class='warning' id='lenthTextareaWarning'>Длинна строки менее " + randomNumber.toFixed(0) + "</p>")
        }
        else {
            str = ''
            for (let i = 0; i < textareaValue.length; i++)
            {
                if( (i + 1) % 2 == 0)
                    str += textareaValue[i].toUpperCase()
                else
                    str += textareaValue[i].toLowerCase()
            }
            $("#inputLengtText").val(str)
        }
    })




    //----------------------------------------------------------------------------------------------------------------
    $("#getPromt").click(function(){
        while (true){
            let inputNumber = prompt("Введите число от 15 до 90")
            if (inputNumber == null)
                break

            let text = prompt("Введите текст не менее 10 символов")
            if (text == null)
                break
            
            
            if (inputNumber > 100 || inputNumber < 15 || text.length < 10)
                continue
            else
                break
            
        }
    })


    //-------------------------------------------------------------------------------------------------------
    str = ''
    let firstDivider = 5
    let secondDivider = 11
    let residue = 2
    let startNumber = 1
    let endNumber = 1000
    $("#dividerNumber").text("Числа от " + startNumber + " до " + endNumber + " которые делятся на " + firstDivider + " и на " + secondDivider + " с остатком " + residue)
    for (let i = startNumber; i < endNumber + 1; i++){
        if ( (i % firstDivider == residue) && (i % secondDivider == residue) )
            str += i + ' '
    }
    $("#outNumber").text(str)


    //------------------------------------------------------------------------------------------------------------
    $("#inputTimeCheck").mask("99:99")

    $("#checkTimeButton").click(function(){
        let time = $("#inputTimeCheck").val()
        time = time.split(":")
        
        let hours = Number(time[0])
        let minutes = Number(time[1])

        let firstPartTime = {
            start: 7 * 60,
            end: 12 * 60,
            time: "Утро"
        }

        let secondPartTime = {
            start: 12 * 60,
            end: 17 * 60,
            time: "День"
        }

        let thirdPartTime = {
            start: 17 * 60,
            end: 21 * 60,
            time: "Вечер"
        }
        let fourthPartTime1 = {
            start: 21 * 60,
            end: 24 * 00,
            time: "Ночь"
        }
        let fourthPartTime2 = {
            start: 0,
            end: 7 * 60,
            time: "Ночь"
        }

        let arrayPartTime = [firstPartTime, secondPartTime, thirdPartTime, fourthPartTime1, fourthPartTime2]

        if (hours > 24 || minutes > 60)
        {
            $("#outTimeCheck").text("Некоректное время")
        }
        else
        {

            writenTime = Number(time[0]) * 60 + Number(time[1])
            
            let currentTime = ''
            for (let i = 0; i < arrayPartTime.length; i++){
                if (writenTime >= arrayPartTime[i]['start'] && writenTime < arrayPartTime[i]['end'])
                    currentTime = arrayPartTime[i]["time"]
            }

            $("#outTimeCheck").text("Сейчас " + currentTime)
        }
    })

    //---------------------------------------------------------------------------------------------------------------------
    // 
    let resultProduct;
    $(".mouseHover").mouseover(function(){
        //if (flagMouseHover == false){
            flagMouseHover = true
            while (true){
                firstNumber   = Math.random() * (10 - 1) + 1
                secondsNumber = Math.random() * (10 - 1) + 1

                resultProduct = prompt("Введиет результат произведения " + firstNumber.toFixed(0) + " и " + secondsNumber.toFixed(0))

                if (Number(resultProduct) == Number(firstNumber.toFixed(0)) * Number(secondsNumber.toFixed(0))){
                    break
                }
            }
        
        //}
    })

    $(".mouseHover").mouseout(function(){
        $(".mouseHoverText").text("Курсор вне зоны надписи")
        flagMouseHover = false
    })

    //--------------------------------------------------------------------------------------------------------------------
    //
    $("#clickProductArray").click(function(){
        arrayProduct = []

        while (true){
            unitProduct = prompt("Введите число")
            
            if (unitProduct == '')
                break

            arrayProduct.push(unitProduct)
        }

        if (arrayProduct.length == 0){

        }
        else{
            resultProduct = 1
            for (let i = 0; i < arrayProduct.length; i++)
                resultProduct *= Number(arrayProduct[i])


            
            $("#answerProdactArray").text("Произведение равно " + resultProduct)
        }   
    })

    //-----------------------------------------------------------------------------------------------------------------------

    $("#createMatrix").click(function(){

    
        let numberLine = $("#numberLineInput").val()
        let numberColumn = $("#numberColumnInput").val()
        let matrix = []

        for (let line = 0; line < numberLine; line++)
        {
            matrix.push([])
            $("#point_14_solution").append("<tr>")
            for( let column = 0; column < numberColumn; column++)
            {
                matrix[line].push((Math.random() * (-9) + 9).toFixed(0))
                $("#point_14_solution").append("<th>" + matrix[line][column] + "</th>")
            }
            $("#point_14_solution").append("</tr>")
        }

        
    })

    //------------------------------------------------------------------------------------------------------------------------
    $("#startNumberWords").click(function(){
        let text = $("#toNumberWords").val()

        let numberWords = text.split(" ")

        $("#outNumberWords").text("В данном предложении количество слов равно  " + numberWords.length)
    })

    //-----------------------------------------------------------------------------------------------------------------------
    $("#toChangeUpper").click(function(){
        let str = $("#toUpperCaseFirstChar").val()
        let newText = First(str)
        $("#info_point16").text("Измененная строка:")
        $("#outUpperChar").text(newText)
    })

})

function First(str){
    let upperChar = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++)
        upperChar += str[i]
    return upperChar
}