$(document).ready(function() {

  // Global variables
  var questions = [
    {
      number: 1,
      photo: "pictures/dog1.jpg",
      choices: { a: "Chihuahua",
                 b: "Pug",
                 c: "Bulldog",
                 d: "Boston Terrier"},
      answer: "b"
    },
    {
      number: 2,
      photo: "pictures/dog2.JPG",
      choices: { a: "Bulldog",
                 b: "Boxer",
                 c: "Pitbull",
                 d: "Pug"},
      answer: "a"
    },
    {
      number: 3,
      photo: "pictures/dog3.jpeg",
      choices: { a: "Yorkie",
                 b: "Chihuahua",
                 c: "Corgi",
                 d: "Dachshund"},
      answer: "b" 
    },
    {
      number: 4,
      photo: "pictures/dog4.jpg",
      choices: { a: "Chow Chow",
                 b: "Great Dane",
                 c: "Golden Retriever",
                 d: "Collie"},
      answer: "c" 
    },
    {
      number: 5,
      photo: "pictures/dog5.jpg",
      choices: { a: "Dachshund",
                 b: "Bloodhound",
                 c: "Foxhound",
                 d: "Basset Hound"},
      answer: "a"
    }
  ];

  var questionNumber = 0;
  
  var userScore = 0;


  // Start game
  $("#start_game").click(function() {

    // Append header
    $(".header").append("<p class=intro>Can you guess what kind of dog I am?</p>");
    $(".main_text").remove();

    // Add first picture
    $(".picture").attr("src", questions[0].photo);
    $(".choices").show();
    $(".submit_answer").show();
  });

  // User submits their answer
  $(".submit_answer").click(function() {

    // 1. see what choice they made
    var submitAnswer = $("input[type=radio]:checked").attr("class").slice(-1);

    // this gives the correct answer for the current question
    var correctAnswer = questions[questionNumber].answer;

    // 2. check to see if they are right
    var userCorrect = submitAnswer === correctAnswer;

    // 3. give the user feedback-whether they are right or wrong. Keep track of score.
    feedback();

    if (userCorrect) {
      $(".feedback").fadeIn("slow").append("<p>" + "Your guess is correct! I'm a " + questions[questionNumber].choices[correctAnswer] + "." + "</p>");
      userScore = userScore + 1;
    } else {
      $(".feedback").fadeIn("slow").append("<p>" + "Sorry, your guess is wrong. I'm a " + questions[questionNumber].choices[correctAnswer] + "." + "</p>");
    };

  });


  // When user clicks for the next question
  $(".next").click(function() {
    $("input[type=radio]").attr("checked", false);
    $(".next").hide();
    $(".feedback").hide();
    $(".feedback p").remove();
    $(".intro").show();
    $(".choices").show();
    $(".submit_answer").show();
    nextQuestion();
  });

  // When the user clicks play again, refresh the page
  $(".again").click(function() {
    location.reload();
  })


  // This function will transition to the next question
  var nextQuestion = function () {
    questionNumber = questionNumber + 1
    if (questionNumber > questions.length - 1) {
      $(".picture").attr("src", "pictures/endpage.jpg");
      $(".submit_answer").hide();
      $(".choices").hide();
      $(".intro").text("Thanks for playing.");
      $(".header").append("<p>" + "You got " + userScore + " out of " + questions.length + " correct!" + "</p>");
      $(".again").fadeIn("slow");
    } else {
      $(".picture").attr("src", questions[questionNumber].photo);
      $(".dog_a").text(questions[questionNumber].choices["a"]);
      $(".dog_b").text(questions[questionNumber].choices["b"]);
      $(".dog_c").text(questions[questionNumber].choices["c"]);
      $(".dog_d").text(questions[questionNumber].choices["d"]);
    }
  };
  
  // This function will give the user feedback
  var feedback = function() {
    $(".intro").hide();
    $(".submit_answer").hide();
    $(".choices").hide();
    $(".next").show()
  };


});














