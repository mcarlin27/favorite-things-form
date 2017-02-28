$(Document).ready(function(){
  $("form#favorite-things").submit(function() {
    event.preventDefault();

    var name = ($("input#person1").val());
    var animal = ($("input#animal").val());
    var food = ($("input#food").val());
    var music = ($("input#music").val());
    var movie = ($("input#movie").val());

    var favoriteThings = [name, animal, food, music, movie];

      // alert(favoriteThings);
    $("#outputList").text(favoriteThings[3]);
  });
});
