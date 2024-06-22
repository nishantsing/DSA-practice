// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let friends = ["Ryan", "Kieran", "Mark"]

function friend(friends) {
  //your code here
  const filter = friends.filter((ele) => ele.length === 4);
  return filter;
}

console.log(friend(friends));


//M2. 
// function friend(friends) {
//   //your code here
//   var realFriends = [];
//   for (i = 0; i < friends.length; i++) {
//     if (friends[i].length == 4 && isNaN(friends[i])) {
//       realFriends.push(friends[i]);
//     }
//   }

//   return realFriends;
// }



//M3.
// const friend = (f) => f.filter((n) => (isNaN(n) && n.length == 4));