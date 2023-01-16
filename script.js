let string = {
    whoShould: ['I should', 'You should', 'We should', 'They should', 'He should', 'She should'],
    motto: ['go big or go home', 'never settle for less', 'Live, Laugh, Love', 'work hard, play harder', 'seize the day', 'no guts, no glory', 
'shoot for the moon, even if you miss, you\'ll just died', 'dream big, work hard, stay true to yourself', 
'life is short, make the most of it', 'stay hungry, stay foolish'],
    suffix: ['got it?', 'for sure!', 'you go girl!', 'K dude?']
}

let newArr = [];

for (who of string.whoShould) {
    for (mot of string.motto) {
        for (suf of string.suffix) {
            newArr.push(`${who} ${mot}, ${suf}`);
        }
    }
}

const randomize = Math.floor(Math.random() * newArr.length);

console.log(newArr[randomize]);