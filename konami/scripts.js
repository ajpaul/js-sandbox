//scripts.js
const output = document.querySelector(".keys");
const konami = [38,38,40,40,37,39,37,39,66,65];
const konamiChars = ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "B", "A"];
const status = document.querySelector(".status");
var index = 0;


window.addEventListener("keydown", e => {
        if(e.keyCode === konami[index]){
            output.innerHTML += `<span class="word">${konamiChars[index]} </span>`;
            index++;

            if (index === konami.length)
                status.innerText = "Status: HACKED!";
        } else {
            output.innerText = '';
            status.innerText = "Status: Noob";
            index = 0;
        }
    }
);

