const shembetengInjections = {
    'a':'mbata',
    'e':'mbete',
    'i':'mbiti',
    'o':'mboto',
    'u':'mbutu',
}


export const shembeteng = (sentence) => {
    // split sentence into array of words
    const words = sentence.split(' ');
 
    // loop through each word
    const shembetengedSentence = words.map(word => {
        let shembetengPart = '';
        // split each word into array of letters
        const wordSplitOnFirstVowel = word.split(/([aeiou].*)/)

        if(wordSplitOnFirstVowel.length > 1){
            // the word has a vowel
            
            // get the specific vowel
            const vowel = wordSplitOnFirstVowel[1][0];
         
            // get the shembeteng injection
            const injection = shembetengInjections[vowel];
            // get the rest of the word
            const restOfWord = wordSplitOnFirstVowel[1].slice(1);
            // return the word with the injection
            shembetengPart = vowel + injection + restOfWord;
            return  wordSplitOnFirstVowel[0] + shembetengPart;
        }

        // the word has no vowel
        return word;

    })

    return shembetengedSentence.join(' ')
}

