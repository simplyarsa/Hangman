let words = ['forecast',
    'chauvinist',
    'warning',
    'situation',
    'incredible',
    'contrast',
    'continuous',
    'tight',
    'barrel',
    'alcohol',
    'pledge',
    'viable',
    'witch',
    'analysis',
    'candidate',
    'first',
    'requirement',
    'bill',
    'doubt',
    'integration',
    'digital',
    'patient',
    'thought',
    'stool',
    'correspond',
    'bike',
    'pure',
    'understanding',
    'pumpkin',
    'spine',
    'relation',
    'systematic',
    'suburb',
    'coup',
    'pass',
    'direction',
    'advocate',
    'musical',
    'youth',
    'chair',
    'hammer',
    'shelf',
    'faith',
    'latest',
    'anticipation',
    'salvation',
        
]
const inputel=document.getElementById("input")
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let lettersused = []
let word = words[Math.floor(Math.random() * words.length)];

let temp = ""
for (let i = 0; i < word.length; i++) {
    temp += "-"
}
let len = word.length
let n = 8;
var messageDisplay = document.querySelector(".display");
var messageDisplay2 = document.querySelector(".display2");
var messageDisplay3 = document.querySelector(".display3");
messageDisplay.innerHTML = "You have " + n + " chances left."
messageDisplay2.innerHTML = temp

inputel.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        submit();
        console.log("yes", n)
    }
})

function setCharAt(temp, index, chr) {
    if (index > temp.length - 1) return temp;
    return temp.substring(0, index) + chr + temp.substring(index + 1);
}

function remove_array_element(array, n) {
    var index = array.indexOf(n);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

function submit() {
    if (n>0){
    let count = 0
    let letter = inputel.value;
    if (letters.includes(letter)) {
        letters=remove_array_element(letters,letter)
        lettersused.push(letter)
        messageDisplay3.innerHTML = "Letters used: " + lettersused
        for (let i = 0; i < len; i++) {
            if (letter == word[i]) {
                temp = setCharAt(temp, i, letter);
            }
            else if (letter != word[i]) {
                count++;
            }
        }

        if (count == len) {
            n--;
            messageDisplay.innerHTML = "You have " + n + " chances left."
            visibile(8 - n)
        }
        messageDisplay2.innerHTML = temp
        if (n <= 0) {
            messageDisplay2.innerHTML = word
            messageDisplay3.innerHTML = "You LOSE! The correct word was "+word +" Press CTRL+R to replay"
            
            word = temp;
            window.location.reload;
        }
        else if (temp == word) {
            messageDisplay3.innerHTML = "You WIN! Press CTRL+R to replay"
            console.log("you win")
        }
    }
}
    inputel.value = ''
}

function visibile(n) {
    let b = [];
    b[0] = document.querySelector(".head")
    b[1] = document.querySelector(".torso")
    b[2] = document.querySelector(".leftarm")
    b[3] = document.querySelector(".rightarm")
    b[4] = document.querySelector(".leftleg")
    b[5] = document.querySelector(".rightleg")
    b[6] = document.querySelector(".leftfoot")
    b[7] = document.querySelector(".rightfoot")

    for (let a = 0; a < n; a++) {
        b[a].style.visibility = "visible"
    }
}