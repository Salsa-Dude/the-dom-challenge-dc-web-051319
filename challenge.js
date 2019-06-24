
let seconds = 0;
let interval = setInterval(incrementSeconds, 1000);
let pause = false

let counterElement = document.getElementById('counter');
let pauseElement = document.getElementById('pause');
let downElement = document.getElementById('-');
let upElement = document.getElementById('+');
let likeElement = document.getElementById('<3');
let likes = document.querySelector('.likes')
let commentValue = document.getElementById('commentInput')
let commentForm = document.getElementById('comment-form')
let commentList = document.querySelector('#list.comments')
let allBtns = Array.from(document.querySelectorAll('button'));

function incrementSeconds() {
    seconds += 1;
    counterElement.innerText = seconds;
}

//Add Seconds Button
upElement.addEventListener('click', function() {
    seconds+= 1;
    counterElement.innerText = seconds
})

//Minus Seconds Button
downElement.addEventListener('click', function() {
    seconds-= 1;
    counterElement.innerText = seconds
})

likeElement.addEventListener('click', function() {
    let likeSentence = document.createElement('li');
    likeSentence.innerText = `The number: ${seconds} has been liked.`
    likes.appendChild(likeSentence)
})

pauseElement.addEventListener('click', function() {
    if (!pause) {
        pause = true
        pauseElement.innerText = "resume"
        allBtns.forEach(btn => {
            if (btn.id !== 'pause') {
              btn.disabled = true;
            }
          });
        setTimeout(function() {
            clearInterval(interval)
        });
    }
    else {
        pause = false
        pauseElement.innerText = "pause"
        allBtns.forEach(btn => {
            if (btn.id !== 'pause') {
              btn.disabled = false;
            } 
        });
        interval = setInterval(incrementSeconds, 1000)
    }
})

//Add Comment, prints comment as (<li>)
commentForm.addEventListener('submit', function(e) {
    event.preventDefault();
    let commentValue = e.target.children[0].value
    let newComment = document.createElement('li');
    newComment.innerText = commentValue
    commentList.appendChild(newComment)
    commentForm.reset()
  })