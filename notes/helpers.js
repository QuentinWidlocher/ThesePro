function generateFalseValues(firstNumber, offset, numbersToGenerate) {
    var current = firstNumber;
    var generatedNumbers = [];

    function getNewNumber() {
        var offsetToApply = ((Math.random() * offset) - (offset / 2)) + 1;
        current = current * offsetToApply;
        return current;
    }

    for (let i = 0; i < numbersToGenerate; i++) {
        generatedNumbers.push(getNewNumber());
    }

    return generatedNumbers;
}

function roundToDigit(digit = 1) {
    return function(x) {
        var factor = (Math.pow(10,digit))
        return Math.round(x * factor)/factor
    }
}
var roundToTwoDigits = roundToDigit(2)

function sum(values) {
    return values.reduce((acc, x) => acc + x)
}

function avg(values) {
    return sum(values)/values.length
}

function range(max) {
    return [...Array(max).keys()]
}

function getRandomValues() {

    var rows = []

    function createRow() {
        var row = generateFalseValues(0.9, 0.3, 5).sort()
        rows.push(row)
        return row
    }

    function avgCol(colNo) {
       var colRows = []
       for (var i = 0; i < rows.length; i++)  {
           colRows.push(rows[i][colNo])
       }
        return avg(colRows)
    }

    console.log(['L', 'A', 'W', 'Mac', 'iOS', 'AVG']);
    for (var i = 0; i < 8; i++) {
        var row = createRow()
        row.push(avg(row))
        console.log(row.map(roundToTwoDigits))
    }
    console.log(range(row.length).map(avgCol).map(roundToTwoDigits));
}

function getInfos() {
    var values = [
        0.64 , 0.72 , 0.83 , 0.70 , 0.77
    ]

    console.log('average', roundToTwoDigits(avg(values)))
    console.log('sum', roundToTwoDigits(sum(values)))
}

getInfos()