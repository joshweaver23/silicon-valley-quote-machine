$(document).ready(function() {
  
  var quoteList = {
    0: ["I don't want to live in a world where someone else makes the world a better place... better than we do.", "Gavin Belson"],
    1: ["I could out-code you with a crumpled handful of unix punch cards, you f***in noob", "Erlich Bachman"],
    2: ["You'd like to f*** my code, wouldn't you?", "Bertram Gilfoyle"],
    3: ["Jobs was a poser. He didn't even write code.", "Richard Hendricks"],
    4: ["That's just the kind of guy Peter was: warm... generous... and NOT dissapointed in Snapchat.", "Evan Spiegel"],
    5: ["Mean jerk time. Time is equal to 400 total jerks at a two d*** rate.", "Dinesh Chugtai"],
    6: ["It's like when someone says they want to go birding with you, but really they just want to get you alone in the woods so they can take your binoculars.", "Donald 'Jared' Dunn"],
    7: ["If you keep screaming your name, it forces the assailant to acknowledge you as a human.", "Donald 'Jared' Dunn"],
    8: ["If we can make your audio and video files smaller, we can make cancer smaller. And hunger. And... AIDS.", "Gavin Belson"],
    9: ["It looks like a guy sucking a d***, with another d*** tucked behind his ear for later. Like a snack d***.", "Dinesh Chugtai"],
    10: ["Technically the measurement that we're looking for really is d*** to floor. Call that D2F.", "Bertram Gilfoyle"]
  }
  
  var number = 0;
  
  $("#new-quote").click(function() {
    var newNumber = number;
    while (newNumber === number) {
      var newNumber = Math.floor(Math.random() * 11);
    };
    number = newNumber;
    $("#quote").html(quoteList[number][0]);
    $("#quote-tag").html("- " + quoteList[number][1]);
    $("#twitter").html('<a href="http://twitter.com/home/?status=' + quoteList[number][0] + ' - ' + quoteList[number][1] + '" target="blank"> <i class="fa fa-twitter fa-3x"></i> </a>')
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})