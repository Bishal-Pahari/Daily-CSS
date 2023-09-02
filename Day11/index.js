let dogList = [
  "Tommy",
  "Puppy",
  "Scooby",
  "Simba",
  "Tommy",
  "Puppy",
  "Scooby",
  "Simba",
];

// Add key value pai in local storage
localStorage.setItem("myCat", "Tom");
localStorage.setItem("myDog", "Mac");
localStorage.setItem("dogNames", JSON.stringify(dogList));

// Retrieve item from local storage
let name = localStorage.getItem("dogNames");

// Clears LocalStorage
// localStorage.clear();

// clear particular key value pair
localStorage.removeItem("myCat");

sessionStorage.setItem("myCat", "Tom");
sessionStorage.setItem("dogNames", JSON.stringify(dogList));
sessionStorage.setItem("myDog", "Mac");

console.log(name);
