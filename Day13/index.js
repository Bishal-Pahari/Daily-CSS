const regex = /very/g; //(g = global) => it replaces wherever pattern is found
// const regex = "very"; => replaces only the first occurence of the pattern
const regex2 = /.rray/g;
const regex3 = /rray/g;

const text = "This is a very very nice text.";
console.log(text.replace(regex, "extremely"));

const text2 = "This is a array within array....rray";
console.log(text2.replace(regex2, "notArr"));

const text3 = "This is a array within array...rray";
console.log(text3.replace(regex3, "notArr"));
