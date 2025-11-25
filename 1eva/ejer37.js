window.onload = function() {
      let table = document.getElementById("myTable");

      //nueva fila
      let newRow = table.insertRow();
      let cell1 = newRow.insertCell();
      let cell2 = newRow.insertCell();
      cell1.textContent = "New row cell1";
      cell2.textContent = "New row cell2";

      //nueva columna
      for (let i = 0; i < table.rows.length; i++) {
        let newCell = table.rows[i].insertCell();
        newCell.textContent = "New column";
      }
    };