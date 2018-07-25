// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        // type: "PUT"
        type: "PUT",
        data: true
      }).then(
        function() {
          console.log("updated burger #" + id);
          // Reload the page to get the updated list
          $(".gif-display").append("<img src='./assets/images/pulp_fiction_burger.gif'>")
          setTimeout(function() {
            location.reload();
          }, 3000);
          // location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#new-burger").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });

