var random = Math.floor((Math.random() * 100)) + 1;
var guess = parseInt(guess);
var tries = 5;

function calc() {
    if (guess = random) {
        alert('You guessed the number!');
        end;
    } else if (guess > random + 56 || guess < random - 56) {
        alert('Very Cold! Try again.');
    } else if (random + 55 > guess > random + 41 || random - 41 < guess < random - 55) {
        alert('Cold! Try again.');
    } else if (random + 40 > guess > random + 31 || random - 31 < guess < random - 40) {
        alert('Very Cool! Try again.');
    } else if (random + 30 > guess > random + 21 || random - 21 < guess < random - 30) {
        alert('Cool! Try again.');
    } else if (random + 20 > guess > random + 16 || random - 16 < guess < random - 20) {
        alert('Warm! Try again.');
    } else if (random + 15 > guess > random + 9 || random - 9 < guess < random - 15) {
        alert('Very Warm! Try again.');
    } else if (random + 8 > guess > random + 6 || random - 6 < guess < random - 8) {
        alert('Hot! Try again.');
    } else if (random + 5 > guess > random - 5) {
        alert('Very Hot! So close!');
    }
}

function event_handle(evt) {
    console.log("event detected");
    evt.preventDefault();
    evt.stopPropagation();
    if (tries > 0) {
        while(tries > 0) {
            calc();
            tries --;
            var guess = prompt('You have ' + tries + ' guesses left.');
        }
    }
        else {
            alert('Out of guesses. Game over.');
            end;
        }
    }

    const form = document.getElementById("guess");
    form.addEventListener('submit', event_handle);
