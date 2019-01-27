$(document).ready(function () {

  $(function () {
    $(".devour").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      console.log('hey');

      var burgerState = {
        devoured: 1
      }

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerState
      }).then(
        function () {
          console.log("devoured burger");
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function (event) {
      event.preventDefault();

      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };

      console.log('submitting', newBurger);

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
});