const counter = document.getElementById('counter');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const heartBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.querySelector('.comments');

let count = 0;
let intervalId;
let isPaused = false;

function incrementCounter() {
  count++;
  counter.textContent = count;
}

function startCounter() {
  intervalId = setInterval(incrementCounter, 1000);
}

function togglePause() {
  if (isPaused) {
    startCounter();
    pauseBtn.textContent = 'pause';
    minusBtn.disabled = false;
    plusBtn.disabled = false;
    heartBtn.disabled = false;
  } else {
    clearInterval(intervalId);
    pauseBtn.textContent = 'resume';
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    heartBtn.disabled = true;
  }
  isPaused = !isPaused;
}

function addLike() {
  const likeItem = document.createElement('li');
  likeItem.textContent = `Number ${count} has been liked!`;
  likesList.appendChild(likeItem);
}

function addComment(event) {
  event.preventDefault();
  const commentText = commentInput.value;
  const commentItem = document.createElement('p');
  commentItem.textContent = commentText;
  commentList.appendChild(commentItem);
  commentInput.value = '';
}

minusBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

plusBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

heartBtn.addEventListener('click', addLike);
pauseBtn.addEventListener('click', togglePause);
commentForm.addEventListener('submit', addComment);

window.addEventListener('load', startCounter);