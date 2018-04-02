'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(word) {
    let sentence = word.toLowerCase();
    let tab = sentence.split(' ');
    let temp = "";
    for (let i = 0; i < tab.length; i++) {
        tab[i] = tab[i][0].toUpperCase() + tab[i].slice(1);
        temp = tab.join(' ');
    }
    return temp
}

//* Begin of tests
const assert = require('assert')
jadenCase("Parce que c'est notre projet");
jadenCase("le lion ne s'associe pas avec le cafard");
assert.strictEqual(jadenCase("hello world"), "Hello World")
assert.strictEqual(jadenCase("to be or not to be"), "To Be Or Not To Be")



