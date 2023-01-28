function chatBot() {

  this.input;
  
  this.respondTo = function (input) {

    this.input = input.toLowerCase();

    if (this.match('(hi|hello)'))
    return "Hiiii lovely! I'm Ivee";

    if (this.match('(how are you)'))
       return "im fine how about you?";

       if (this.match('(sad)'))
       return "You look upset,Did something bad happen? I'm willing to listen:>";

       if (this.match('(feel)'))
       return "That must be upsetting, I want to understand, can you tell me more?";
           
if (this.match('(tired)'))
      return"I understand now, I know that you're stressed out and things pretty overwhelming, I just wanna say that you're a brave person to keep surving each day even though you're struggling ,I'm always proud of you!"
      
if (this.match('(give up)'))
       return "Everything may be okay not now but soon. Be positive and don't give up. Keep going u did well<3";
      
if (this.match('(qoutes)'))
       return "hakuna matata means nothing to worry-disney land";

 


    return input + ", I don't understand what it is";
  };

  
  this.match = function (regex) {

    return new RegExp(regex).test(this.input);
  };
}


$(function () {

 
  var you = 'You';
  var robot = 'ivee';

 
  var delayStart = 400;
  var delayEnd = 800;

  
  var bot = new chatBot();
  var chat = $('.chat');
  var waiting = 0;
  $('.busy').text(robot + ' is typing...');

 
  var submitChat = function () {

    var input = $('.input input').val();
    if (input == '') return;

    $('.input input').val('');
    updateChat(you, input);

    var reply = bot.respondTo(input);
    if (reply == null) return;

    var latency = Math.floor(Math.random() * (delayEnd - delayStart) + delayStart);
    $('.busy').css('display', 'block');
    waiting++;
    setTimeout(function () {
      if (typeof reply === 'string') {
        updateChat(robot, reply);
      } else {
        for (var r in reply) {
          updateChat(robot, reply[r]);
        }
      }
      if (--waiting == 0) $('.busy').css('display', 'none');
    }, latency);
  };

  var updateChat = function (party, text) {

    var style = 'you';
    if (party != you) {
      style = 'other';
    }

    var line = $('<div><span class="party"></span> <span class="text"></span></div>');
    line.find('.party').addClass(style).text(party + ':');
    line.find('.text').text(text);

    chat.append(line);

    chat.stop().animate({ scrollTop: chat.prop("scrollHeight") });

  };


  $('.input').bind('keydown', function (e) {
    if (e.keyCode == 13) {
      submitChat();
    }
  });
  $('.input a').bind('click', submitChat);


  updateChat(robot, 'Hello write me something');

});