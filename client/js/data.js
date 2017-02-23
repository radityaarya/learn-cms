$(document).ready(function() {

    $.ajax({
        url: "http://localhost:3000/api/data",
        method: "GET",
        beforeSend: function(request) {
            request.setRequestHeader("token", localStorage.getItem("token"));
        },
        success: function(data) {
          var temp = ""
          for (var i = 0; i < data.length; i++) {
            temp +=   `
            <tr id="${data[i]._id}">
            <th scope="row">${i+1}</th>
            <td>${data[i].letter}</td>
            <td>${data[i].frequency}</td>
            <td>
                <button data-toggle="modal" data-target="#modal-update" type="button" class="btn btn-outline-info">Update</button>
                <button onclick="deleteList('${data[i]._id}')" type="button" class="btn btn-outline-danger">Delete</button>
            </tr>
            `
          }
          $('#list-data').append(temp)
        }
    })
})

function deleteList(id) {
  // $(document).ready(function() {
    $.ajax({
      url  :  `http://localhost:3000/api/data/${id}`,
      type : "DELETE",
      beforeSend: function(request) {
          request.setRequestHeader("token", localStorage.getItem("token"));
      },
      success: function(result) {
        $(`#${id}`).remove()
      }
    })
  // })
}
