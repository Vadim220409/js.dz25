function showValues() {
    const form = document.getElementById("myForm");
    const formData = new FormData(form);

    let result = "Введені значення:<br>";
    for (const [name, value] of formData) {
        result += `${name}: ${value}<br>`;
    }

    const noteText = formData.get("note");
    const dateText = formData.get("date");
    const additionalDateText = formData.get("additionalDate");
    
    const allDates = `${noteText} ${dateText} ${additionalDateText}`;
    const datePattern = /\d{2}\.\d{2}\.\d{4}/g;
    const matchedDates = allDates.match(datePattern);

    let datesResult = "Перелік дат:<br>";
    if (matchedDates) {
        datesResult += matchedDates.join(", ");
    } else {
        datesResult += "Дати не знайдено.";
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("dates").innerHTML = datesResult;
}