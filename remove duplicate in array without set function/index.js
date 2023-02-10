let person = ['Arjune', 'Bala', 'Arjune', 'Charu', 'Bala'];

//BY INDEXOF METHOD() AND FILTER METHOD:
let uniquePerson = person.filter((element, index) => {
    return person.indexOf(element) === index;
});
console.log(uniquePerson);
