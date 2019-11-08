const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titleCasedTutorials = []

  //look at each string of the tutorials array one at a time
  for (const tutorial of tutorials) {
    //separates each of the words into an array ['to', 'look', 'like', 'this']
    let words = tutorial.split(" ")

    //capitolizes each of the first letters then joins the rest of the word back on the end of it
    let title = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))

    //joins each of the words back together with a space and pushes them onto the titleCasedTutorials array
    titleCasedTutorials.push(title.join(" "))
  }
  return titleCasedTutorials
}
