const title = "Best reads of 2023";
const author = "amarrrrio";
const likes = 30;

// concatenation way
//let result = likes
// "The blog called " + title + " by " + author + " has " + likes + " likes";
//console.log(result);

//template string way (aka template literal)
//let result = `The blog called ${title} by ${author} has ${likes} likes.`;
//console.log(result);

//creating html templates
let html = `
<h2> ${title} </h2>
<p> By ${author} </p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);
