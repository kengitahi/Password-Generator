const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwordLength = 15

let generatePasswordBtn = document.getElementById("generate-password")
let passwordFields = document.querySelectorAll("#password-field")

function generatePassword() {
    for (let k = 0; k < passwordFields.length; k++) {
        function randomPassword() {
            let password = ""
            for (let i = 0; i < passwordLength; i++) {
                let randomCharacter = Math.floor(Math.random() * characters.length)
                password += characters[randomCharacter]
            }
            return password
        }
        passwordFields[k].textContent = randomPassword()
    }
}

generatePasswordBtn.addEventListener("click", generatePassword)

function newPasswordLength() {
    passwordLength = parseInt(window.prompt('Please choose a password length', passwordLength))
}