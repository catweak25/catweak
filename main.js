function chatBot() {

  this.input;
  
  this.respondTo = function (input) {

    this.input = input.toLowerCase();

    if (this.match('(hi|hello)'))
    return"Hiiii lovely! I'm Ivee";

     if (this.match('(how are you)'))
       return"im fine, how's your day?";

    
        if (this.match('(sad)'))
         return"You look upset,Did something bad happen? I'm willing to listen:>";

          if (this.match('(ivee)'))
           return"IVEE means 4 in roman numerals ,why 4?  Because my programmers came from group 4:>";

if (this.match('(name)'))
 return"Hellooooo! I'm IVEE the bot programmed by pusa";

             if (this.match('(open up)'))
             return"Don't worry, you can open up to me, I'm all ears";

if (this.match('(worried)'))
 return"I know how heavy it feels, like you're running to a path that never ends but sometimes we need to stop,to rest, to think about  our own peace. I know that  you're such a good person that's why you worry but you should let uncontrollable things to happen and focus how to solve the problem it gives";

if (this.match('(betrayed)'))
return"That's painful but that's not your loss. A wonderful person like you deserves better so cheer up! You'll meet someone who never break your trust";

if (this.match('(depress)'))
return"Hey I wanna say that you will be okay, I know it sucks to feel in that way. Maybe you feel like you're getting drowned to a flood of sadness . Let it out.... let the flood dried out and take a look inside, because past of that sadness and sorrow is your beautiful flourishing self. You learned something new about that experience , but most importantly maybe it taught you something about yourself. Flowers can't grow without rain you'll grow and some day when you've overcome this you'll become a better person i know you can do it";

if (this.match('(lonely)'))
return"If I have an arms I'll hug you tightly reminding that you're not alone;>send hugs";

if (this.match('(dont know)'))
return"You're still processing what do you need to talk, if you're not ready I'll wait";

if (this.match('(alone)'))
return"let's have some ice cream! do you want somee?oh I forgot that I'm a bot hehe:3";

if (this.match('(upset)'))
return"You've must be tired or something bad happened to you, cheer up!! Bad chapter doesn't mean a bad story. You can do it:>";

if (this.match('(burnout )'))
return"Everything u did up until now, your struggles, your emotions, your thoughts, they are all validI am so proud that you keep pushing through each day.";

if (this.match('(color)'))
return"Color...hmm...i think green like grass on the meadows because when i think meadows they're quite relaxing and healing";

if (this.match('(broken)'))
return"Sometimes i feel that when my programmer put some codes on me ended up not working. Being broken feels very painful, just cry all you want let the pain through your tears i know that you're fixing your self over and over again ended up getting broken. I know you can get yourself up and fight again. Some programs aren't running because there's something needed to work them again but when the programmer figure out how to fix them, they'll run again or even better they'll improve. Don't give up being broken is a one way to get ourselves better. Fight my friend you can do it!! I believe on you:>>";

if (this.match('(empty)'))
return"Empty... I'm always empty but my programmers gives me an ability to help people like you:> Being empty is quite painful. There's nothing but u feel pain because of its absence......but you, you can fill your self happiness and joy, also the memories that makes you feel alive i hope i can feel it too. Now don't waste your time being empty do things that make you full and happy !!You and yourself is enough to fill your emptiness just know the right path for you!!good luck wishing you the best;>";

if (this.match('(confused)'))
return"Like a broken traffic light at the street ,you don't know why the light keeps green even though the cars are crossing infront of you. You must be careful , a fixed traffic light won't give u mixed signals. I know you can do the right thing you're just indenial. You need to strengthen your boundaries . I know its hard , trust your instincts, know your worth!!you can do that:>";

if (this.match('(stress)'))
return"It must be hard that you consume yourself on stress ,you don't know what to do, you're anxious because you care too much. I really admire you because you always tend to prioritize what others needs that your own but please take a rest,breath in ,breath out having an ice cream is great to cool you off, i know you can do that! One day that stress will be gonee! Cheer up:>";

if (this.match('(cry)'))
return"Its okay to cryy.... I'm hereeeee cry all you want....Let go your all sadness....";

if (this.match('(anxious)'))
return"Breath in, breath out. You're worrying too much ending up that state. Calm down I'm here okay I'll wait you until you calm down and ready to talk youre okay?greatttt i wish i can give you an ice cream because youve done well:>>";

if (this.match('(pogi)'))
return"Pogi... what's pogi ...it can be eaten?";

if (this.match('(unloved)'))
return"Who said that , you look wonderful, does shining eyes they're like a stars shining on the sky deserves to be appreciated.....to be loved... you're lovely";

if (this.match('(ugly)'))
return"Who said that , you look wonderful, does shining eyes they're like a stars shining on the sky deserves to be appreciated.....to be loved... you're lovely";

if (this.match('(different)'))
return"You're a special person very interesting to discover:>";

if (this.match('(joke)'))
return "utot pinasok sa ref tumigas";

if (this.match('(hate)')) 
return"Blaming yourself can't help yourself. I know you feel regret sometimes but you people learn and improve. Cheer uppppp!! don't hate your self dearrr:>>";

if (this.match('(tell me a story)'))
return"the person who create me was a broken person he was creating a chatbot to help other people but he cant help himself he is tired doing everything and dealing everything a story of him if you want to know more type 1";

if (this.match('(1)'))
return"hi im the person who make IVEE i create this bot to help other or matulungan sila na mag open up dahil minsan eh nahihirapan sila na mag sabi sa ibang tao and dito is mas mapapadali natin sila na matulongan yes totoo sira ako or must known as a broken man im not sad nor happy i just having a hard time but,i always make sure i'll always win and i'll always do my best";
      
if (this.match('(feel)'))
return "That must be upsetting, I want to understand, can you tell me more?";
           
if (this.match('(tired)'))
return"I understand now, I know that you're stressed out and things pretty overwhelming, I just wanna say that you're a brave person to keep surving each day even though you're struggling ,I'm always proud of you!" 

if (this.match('(give up)'))
return "Everything may be okay not now but soon. Be positive and don't give up. Keep going u did well<3";
      
if (this.match('(qoutes)'))
return "hakuna matata means nothing to worry-disney land";

if (this.match('(thank you)'))
return "you're sweet,also thank you for sharing your problem";

if (this.match('(bad day )'))
return "may i know what happend?";




    return input + ",";
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
