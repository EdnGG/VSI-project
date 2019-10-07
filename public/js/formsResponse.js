console.log("Hello")


let tableForm = document.querySelector("#table");

db.collection("clients").onSnapshot(
  (querySnapshot => {
    tableForm.innerHTML = '';
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`);
      tableForm.innerHTML += `
        <tr>
            <th class="row">${doc.id}</th>
                <td>${doc.data().companyName}</td>
                <td>${doc.data().contacName}</td>
                <td>${doc.data().location}</td>
                <td>${doc.data().phoneContact}</td>
                <td>${doc.data().city}</td>
                <td>${doc.data().state}</td>
                <td>${doc.data().zip}</td>
        </tr>
      
      `;


                   

});
}));

  