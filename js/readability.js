(function( $ ){

    function syllables(word) {
        word = word.toLowerCase();
        if (word.length <= 3) {
            return  1;
        }
        if (word.length == 0) {
            return 0;
        }
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');

        if(word.match(/[aeiouy]{1,2}/g) == null)
            return 0
        else word = word.match(/[aeiouy]{1,2}/g).length;

        return word;
    }
    /**
     * @param {Function} f Function that handles the result.
     * 
     */
    $.fn.readability = function(f){

        let averageReadingTime = 250; // words per minute

        let text = $(this).text().trim(); //our text

        if(text.length == 0) //If the text is in a textarea or input field we can use .val();
            text = $(this).val().trim();

        let words = text.split(" "); //Let's split the words in an array
        
        let syllableCount = 0; //Initializing variables for syllables and sentances
        let sentencesCount = 0;

        for(let i = 0; i < words.length; i++){
            syllableCount += syllables(words[i]); //Using our function to calculate syllables in our word and increment our counter.

            //Longer words will have a longer read time
            if(words[i].length >= 15 && words[i].length < 20) 
                averageReadingTime--;
            else if(words[i].length >= 20)
                averageReadingTime -= 2;

            //If a word has a dot at the end, we can increment sentances
            if(words[i].charAt(words[i].length - 1) == "."){
                sentencesCount++;
            }

        }

        // The Flesch Reading Ease Readability Formula
        let readingEaseScore = 206.835 - 1.015*(words.length/sentencesCount) - 84.6*(syllableCount/words.length);

        //Our increment for the average reading time. Harder text = longer reading time
        let readingEase = 0;

        if(readingEaseScore <= 30){
            readingEase -= 30;
        } else if(readingEaseScore <= 60){
            readingEase -= 10;
        } else if(readingEaseScore <= 70){
            readingEase += 5 ;
        } else if(readingEaseScore <= 90){
            readingEase += 15;
        } else readingEase += 30;

        averageReadingTime += readingEase;
        let minutes = words.length/averageReadingTime; // minutes


        f({time:minutes, readingEase:readingEaseScore});
        return($(this));
    }

})( jQuery );