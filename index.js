

// vct

const secretMessangeArray = [["Quelle est la partie préférée d’un astronaute sur un clavier?"], 
["J’ai offert un frigo en cadeau à ma fille pour son anniversaire."], 
["Pourquoi fait-il si chaud dans le stade après un match de soccer?"], 
["Qu’est-ce qui commence par E, se termine par E et ne contient qu’une seule lettre?"],
["Tu veux entendre une blague de construction?"]];
function Mixed() {
Math.floor((Math.random) * secretMessangeArray.length)
secretMessangeArray = Mixed(secretMessangeArray);
};
console.log(Mixed);

