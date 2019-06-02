// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-if-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");  
    // var newDevoured = $(this).data("newDevoured"); ---------------------------> HERE

    var newSleepState = {
      sleepy: newSleep  
      // devoured: newDevoured ---------------------------> HERE
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newSleepState 
      // data: newDevouredState  ---------------------------> HERE 
    }).then(
      function() {
        console.log("changed sleep to", newSleep);  
        // console.log("changed sleep to", newDevoured); ---------------------------> HERE

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
      // devoured: $("[name=devoured]:checked").val().trim()   ---------------------------> HERE
   
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      // data: newCat  ---------------------------> HERE
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
