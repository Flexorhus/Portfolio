const textElement = document.getElementById('text');
let textTypes = [" Your FRONTEND Developer     ", "Your BACKEND Developer    ", "Your FULLSTACK Developer     "];
let index = 0;
let textIndex = 0;
let direction = 1;

function typing() {
    let textType = textTypes[textIndex % textTypes.length]; // use modulo to loop back to 0 when textIndex exceeds textTypes.length
    if (index <= textType.length && index >= 0) {
        textElement.textContent = textType.slice(0, index);
        index += direction;
        if (index >= textType.length) {
            direction *= -1;
        } else if (index <= 0) {
            direction *= -1;
            textIndex++; // increment textIndex to move to the next text
        }
        setTimeout(typing, 90)
    }
}

typing()


