$(document).ready(function() {

  $(".start_button").click(function() {
    $(".intro_page").hide();
    $(".question_1").show();
  });

  $(".submit_answer1").click(function() {
    $(".question_1").hide();
    $(".question_2").show();
  });

  $(".submit_answer2").click(function() {
    $(".question_2").hide();
    $(".question_3").show();
  });

  $(".submit_answer3").click(function() {
    $(".question_3").hide();
    $(".question_4").show();
  });

  $(".submit_answer4").click(function() {
    $(".question_4").hide();
    $(".question_5").show();
  });

  $(".submit_answer5").click(function() {
    $(".question_5").hide();
    $(".end_page").show();
  })
});