// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score

    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
    var c4score = 0;
    var c5score = 0;
    
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c1') {
          c1score = c1score + 1;
        }
        if (choices[i].value == 'c2') {
          c2score = c2score + 1;
        }
        if (choices[i].value == 'c3') {
          c3score = c3score + 1;
        }
        if (choices[i].value == 'c4') {
          c4score = c4score + 1;
        }
        if (choices[i].value == 'c5') {
          c5score = c5score + 1;
        }

      }
      
    }
    
    // Find out which choice got the highest score.
    // If you add more choices and outcomes, you must add the variable here.
    var maxscore = Math.max(c1score,c2score,c3score,c4score,c5score);

    //alert("valor maxscore: " + maxscore);
    
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Categoría Ansiedad";
      window.location.href = "http://smind.atwebpages.com/ansiedad.php";
      alert("Categoría Ansiedad");
    }
    if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Categoría Depresión";
      window.location.href = "http://smind.atwebpages.com/depresion.php";
      alert("Categoría Depresión");
    }
    if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Categoría Transtorno de sueño";
      window.location.href = "http://smind.atwebpages.com/transtorno_sueno.php";
      alert("Categoría Transtorno de sueño");
    }
    if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Categoría TDAH";
      window.location.href = "http://smind.atwebpages.com/TDAH.php";
      alert("Categoría TDAH");
    }
    if (c5score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerbox.innerHTML = "Felicidades, no presentas ningún transtorno de sueño, de ansiedad, depresión o TDAH, pero te recomendamos visitar nuestra página para contactarte con nuestros especialistas";
      window.location.href = "http://smind.atwebpages.com/";
      alert("Felicidades, no presentas ningún transtorno de sueño, de ansiedad, depresión o TDAH, pero te recomendamos visitar nuestra página para contactarte con nuestros especialistas");
    }
  }
  
// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
}

