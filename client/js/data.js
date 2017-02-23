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
}

function newList(){
  $(document).ready(function(){
    $.ajax({
      url  : "http://localhost:3000/api/data",
      type : "POST",
      beforeSend: function(request) {
          request.setRequestHeader("token", localStorage.getItem("token"));
      },
      data: {
        letter: $('#input-letter').val(),
        frequency:$('#input-frequency').val()
      },
      success: function(data) {
        location.reload();
      }
    })
  })
}

// function preUpdate (arguments) {
//   $('#modal-update').append(`
//     <div class="modal-dialog">
//
//         <!-- Modal content-->
//         <div class="modal-content">
//             <div class="modal-header">
//                 <button type="button" class="close" data-dismiss="modal">&times;</button>
//                 <h4 class="modal-title">Masukkan update</h4>
//             </div>
//             <div class="modal-body">
//                 <form>
//                     <div class="form-group">
//                         <label for="title">Letter</label>
//                         <input type="text" class="form-control" id="update-letter">
//                     </div>
//
//                     <div class="form-group">
//                         <label for="title">Frequency</label>
//                         <input type="text" class="form-control" id="update-frequency">
//                     </div>
//
//                 </form>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" onclick="updateList('${id}')" class="btn btn-default" data-dismiss="modal">SUBMIT</button>
//             </div>
//         </div>
//
//     </div>
//     `)
// }
//
// function updateList(id){
//   $(document).ready(function(){
//     $.ajax({
//       url  : `http://localhost:3000/api/data/${id}`,
//       type : "PUT",
//       beforeSend: function(request) {
//           request.setRequestHeader("token", localStorage.getItem("token"));
//       },
//       data: {
//         letter: $('#update-letter').val(),
//         frequency:$('#update-frequency').val()
//       },
//       success: function(data) {
//         console.log(data);
//         $(`#${id} td`)[0].innerHTML = data.letter
//         $(`#${id} td`)[1].innerHTML = data.frequency
//       }
//     })
//   })
// }
