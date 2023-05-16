let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){  
  const tutorialsCopy = Object.assign([], tutorials)
  let tutorialsCased = tutorialsCopy.map(function(sentence){
          let words = sentence.split(' ')
          let wordsArray = words.map(function(word){
              let firstCharacter = word.substring(0,1).toUpperCase()
              let restOfWord = word.substring(1)
              return(firstCharacter+restOfWord)
  })

          return wordsArray.join(" ")
  })
     tutorials = []
     tutorials = tutorialsCased
     return tutorials
}
                            
                                                      


