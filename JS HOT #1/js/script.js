let movies =['Forest Gump', 'Red Tails', 'Flushed Away'];


function displayMovies() {
    var originalName = document.getElementById("txtInputData").value;
    document.getElementById("show_movies").innerHTML = "Our Favorite Movies are:" + movies + ", " + originalName;
 }

