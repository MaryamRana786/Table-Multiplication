var generateTable = function(number) {
    var tableHTML = '<table>';
    for (var i = 1; i <= 10; i++) {
      tableHTML += '<tr><td>' + number + ' x ' + i + '</td><td>'+ "=" + (number * i) + '</td></tr>';
    }
    tableHTML += '</table>';
    return tableHTML;
  };

  var handleInput = function() {
    var inputNumber = document.getElementById('inputNumber').value.trim();
    var tableContainer = document.getElementById('tableContainer');
    if ( inputNumber !== "") {
      tableContainer.innerHTML = generateTable(inputNumber);
    } else {
      tableContainer.innerHTML = '';
    }
  };

  document.getElementById('inputNumber').addEventListener('input', handleInput);
