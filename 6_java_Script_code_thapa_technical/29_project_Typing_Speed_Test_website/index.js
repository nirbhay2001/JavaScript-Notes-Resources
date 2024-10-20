/*

 Dynamic typing test
    1. when user pressed start button tghen only active the textarea else disabled it and vice-versa
    2. Every time a new set of lines on top. whenever a start button is pressed. Not the Done one.
    3.get the time and change the button text to Done.
    4. get the end time when user clicked on Done button. find the total time taken.
    5. find the total words on the setofwords.
    6. Find the speed of the user and show it on top when user clicked on Done.
    7. then call the comparewords fun and find how many of the words are matching and how many not. Display the result on top with speed.

*/

const setofwords = [
    "My name is vinod bahadur thapa and I am a youtuber.",
    "Hope you are having fun this is a simple game you can make.",
    "If you want the source code then link is given in thedescription. so you can create your own version of this challenge."
]

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setofwords.length);
    msg.innerText = setofwords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);
    let totalstr = typeWords.value;
    let wordCount = wordCounter(totalstr);
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMsg = "You typed total at " +speed+ " words per minutes";
    finalMsg += compareWords(msg.innerText,totalstr);
    msg.innerText = finalMsg;
}

const compareWords = (str1,str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    // arrayName then foreach then it will take whole function with value and index no. of that array
    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
        }
    }) 
    let errorWords = (words1.length - cnt);
    return (cnt + "correct out of" + words1.length + " words and the total number of error are " + errorWords + "." );
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})

/*

Event Handler: In event handlers, such as when handling a button click, this refers to the element that triggered the event. It allows the event handler function to access and manipulate the properties and attributes of the element.

*/