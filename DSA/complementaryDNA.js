function DNAStrand(dna) {
    var arr = dna.split('')
    var newStr = ''
    for (ele of arr) {
        if (ele === 'A') {
            newStr += 'T'
        } else if (ele === 'T') {
            newStr += 'A'
        } else if (ele === 'G') {
            newStr += 'C'
        } else if (ele === 'C') {
            newStr += 'G'
        }
    }

    return newStr
}

console.log(DNAStrand('ATTGC'));




//M1. function DNAStrand(dna) {
// return dna.replace(/./g, function (c) {
//     return DNAStrand.pairs[c]
// })
// }

// DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
// }



// M2. var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna) {
//     return dna.split('').map(function (v) { return pairs[v] }).join('');
// }


//M3. let pairs = {A:'T',T:'A',C:'G',G:'C'};
// const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);



//M4. function DNAStrand(dna) {
// return dna.split('').map(function (v) { return { A: 'T', T: 'A', C: 'G', G: 'C' }[v]; }).join('');
// }


//M5. function DNAStrand(dna){
// return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
// }



//M6. const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);