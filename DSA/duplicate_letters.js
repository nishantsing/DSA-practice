function duplicateLetter(o) {
  var arr = o.toUpperCase().split("");
  var obj = {};

  for (var v in arr) {
    obj[arr[v]] = obj[arr[v]] || 0;
    obj[arr[v]]++;
  }

  for (var v in obj) {
    console.log(o + ", the letter '" + v + "' => " + obj[v] + " times.");
  }
}

duplicateLetter("Captain America");


//Printing a to z
// for (let i = 0; i < 26; i++) {
//   var chr = String.fromCharCode(97 + i);
//   var alpha = (i+10).toString(36)
//   console.log(chr, alpha);
// }



