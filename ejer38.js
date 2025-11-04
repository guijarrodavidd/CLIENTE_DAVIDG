function updateCell() {
      let table = document.getElementById("myTable");

      // Verificar si la tabla existe
      if (!table) {
        let error = document.createElement("p");
        error.textContent = "Error: no table found!";
        error.style.color = "red";
        document.body.appendChild(error);
        return;
      }

      // Pedimos fila, columna y nuevo texto
      let row = parseInt(prompt("Enter the row number (starting from 1):"));
      let col = parseInt(prompt("Enter the column number (starting from 1):"));
      let text = prompt("Enter the new text for that cell:");

      // Comprobamos si la fila y columna existen
      if (
        row < 1 || col < 1 ||
        row > table.rows.length ||
        col > table.rows[0].cells.length
      ) {
        let error = document.createElement("p");
        error.textContent = "Error: cell out of range!";
        error.style.color = "red";
        document.body.appendChild(error);
        return;
      }

      // Si todo está bien, cambiamos el texto
      table.rows[row - 1].cells[col - 1].textContent = text;
    }

    window.onload = updateCell;