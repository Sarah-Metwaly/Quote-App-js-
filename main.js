var previousNumber = null;

function getRandomNumber(){
    var randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * 11); 
      } while (randomNumber === previousNumber){
    
      previousNumber = randomNumber;
      return randomNumber;
    }
}




function generateQuote(){
    var num=getRandomNumber();
    switch (num){
        case 0:
            document.getElementById("qoute").innerHTML="“Be yourself; everyone else is already taken.”";
            document.getElementById('author').innerHTML="― Oscar Wilde";
            break;
        case 1:
            document.getElementById('qoute').innerHTML="“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”";
            document.getElementById('author').innerHTML="― Marilyn Monroe";
            break;
        case 2:
            document.getElementById('qoute').innerHTML="“So many books, so little time.”";
            document.getElementById('author').innerHTML="― Frank Zappa";
            break;
        case 3:
            document.getElementById('qoute').innerHTML="“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
            document.getElementById('author').innerHTML="― Albert Einstein";
            break;
        case 4:
            document.getElementById('qoute').innerHTML="“A room without books is like a body without a soul.”";
            document.getElementById('author').innerHTML="― Marcus Tullius Cicero";
            break;
        case 5:
            document.getElementById('qoute').innerHTML="“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”";
            document.getElementById('author').innerHTML="― Bernard M. Baruch";
            break;
        case 6:
            document.getElementById('qoute').innerHTML="“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”";
            document.getElementById('author').innerHTML="― William W. Purkey";
            break;
        case 7:
            document.getElementById('qoute').innerHTML="“You only live once, but if you do it right, once is enough.”";
            document.getElementById('author').innerHTML="― Mae West";
            break;
        case 8:
            document.getElementById('qoute').innerHTML="“Be the change that you wish to see in the world.”";
            document.getElementById('author').innerHTML="― Mahatma Gandhi";
            break;
        case 9:
            document.getElementById('qoute').innerHTML="“In three words I can sum up everything I've learned about life: it goes on.”";
            document.getElementById('author').innerHTML="― Robert Frost";
            break;
        case 10:
            document.getElementById('qoute').innerHTML="“If you tell the truth, you don't have to remember anything.”";
            document.getElementById('author').innerHTML="― Mark Twain";
            break;
        case 11:
            document.getElementById('qoute').innerHTML="“A friend is someone who knows all about you and still loves you.”";
            document.getElementById('author').innerHTML="― Elbert Hubbard";
            break;
        default:
            document.getElementById('qoute').innerHTML="error";
            document.getElementById('author').innerHTML="";
    }

}