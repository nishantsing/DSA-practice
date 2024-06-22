//Problem based on frequency count pattern
function validAnagram(first, second){
    if(first.length !== second.length){
        return false
    }
    const lookup = {}

    for(let val of first){
        //if letter exists, increment, otherwise set to 1
        // lookup[val] = (lookup[val] || 0) + 1
        lookup[val] ? lookup[val]+=1 : lookup[val] = 1
    }
    // console.log(lookup);
    for(let i = 0; i<second.length;i++){
        let val = second[i]
        // can't find letter or letter is zero then it's not an anagram
        !lookup[val] ? false : lookup[val]--
    }
    return true;
   
}

 
console.log(validAnagram('anagram','nagaram'));
console.log(validAnagram('',''));
console.log(validAnagram('anagram','nagaramss'));