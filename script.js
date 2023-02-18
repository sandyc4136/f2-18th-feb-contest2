

let issuedBooks = [];

      function issueBook() {
    
        const bookName = document.getElementById("book_name").value;
        const issuedTo = document.getElementById("issued_to").value;
        const issuedTime = new Date();
        const bookId = issuedBooks.length + 1;
        const bookStatus = "not returned";

        issuedBooks.push({
          id: bookId,
          book_name: bookName,
          issued_to: issuedTo,
          issued_time: issuedTime,
          status: bookStatus,
        });
       
        refreshTable();
        bookName.value="";
        issuedTo.value="";
      }

      function refreshTable() {
        const tableBody = document.getElementById("issued-books");
        tableBody.innerHTML = "";
        issuedBooks.forEach((book) => {
          const row = document.createElement("tr");
          row.innerHTML = `
					<td>${book.id}</td>
					<td>${book.book_name}</td>
					<td>${book.issued_to}</td>
					<td>${book.issued_time}</td>
					<td class="status ${book.status.replace(" ", "-")}">${book.status}</td>
				`;
               
          row.onclick = () => editBookStatus(book);
          tableBody.appendChild(row);
          
        });
      }

      function editBookStatus(book) {
        if (book.status === "not returned") {
          book.status = "returned";
        } else {
          book.status = "not returned";
        }
        refreshTable();
        
      }