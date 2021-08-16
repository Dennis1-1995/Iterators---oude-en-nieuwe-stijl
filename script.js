let colors = ['yellow', 'blue', 'red', 'orange'];
let i =0;

while(i<colors.length){
    console.log(colors[i]);
    i++;
};


for (i=0; i<colors.length; i++ ){
    console.log(colors[i]);
}

colors.forEach(Element => console.log(Element));

// Antwoorden:
// 1. For = 3, While = 4 regels.
// 2. 1 regels 
// 3. Het is korter / schoner. 
//    Zelf vind ik de for loop beter leesbaar. Is duidelijker te lezen wat er gaat gebeuren.
// 4. Antwoord: Ja, je bent aan het itereren.

const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}