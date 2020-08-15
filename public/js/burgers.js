
$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});


// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   $(".devour").on("click", function(event) {
//     var id = $(this).data("id");
//     var eaten = $(this).data("eaten");

//     var newEatenState = {
//       devoured: eaten
//     };


// // Send the PUT request.
// $.ajax("/api/burgers/" + id, {
//     type: "PUT",
//     data: newEatenState
//   }).then(
//     function() {
//       console.log("changed eaten to", eaten);
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });

//  $(".create-form").on("submit", function(event) {
//     //Make sure to preventDefault on a submit event.
//       event.preventDefault();

//       var newBurger = {
//           name: $("#bg").val().trim(),
//           devoured: $("#add-burger [name=burgers]").val().trim() //place to check!*****
//            };

// $("#add-burger").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

// // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });

//     // ////////// DEVOUR STARTS HERE
//     $(".devour").on("click", function(event) {
//         // Get the ID from the button.
//         // This is shorthand for $(this).attr("data-planid")
//         var id = $(this).data("burger_id");  //is "burger_id" correct?
    
//         // Send the DELETE request.
//         $.ajax("/api/burgers/" + id, {
//           type: "DELETE"
//         }).then(
//           function() {
//             console.log("deleted id ", id);
//             // Reload the page to get the updated list
//             location.reload();
//           }
//         );
//       });
    





    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newBurger = {
    //     name: $("#ca").val().trim(),
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newBurger
    //   }).then(
    //     function() {
    //       console.log("created new burger");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted burger", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }

    //   );
    // });
  
  