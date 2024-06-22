//Finding First Largest Element i O(n) time as sorting reqquires O(N2) or O(nlogn) time

function firstLargest(arr){
  let n = arr.length
  let firstLargest = arr[0]

  for(let i =1;i<n;i++){
    if(arr[i]>firstLargest){
      firstLargest = arr[i]
    }
  }
   console.log(firstLargest)
}


//Finding second Largest Element in O(n) time without using sorting.
function secondLargest(arr){
  let n = arr.length
  let firstLargest = 0
  let secondLargest = 0


if(arr[0]<arr[1]){
      firstLargest = arr[1]
      secondLargest = arr[0]
    }else{
      firstLargest = arr[0]
      secondLargest = arr[1]
    }

  for(let i = 2; i< n ; i++){
    if(arr[i]> firstLargest){
      secondLargest = firstLargest
      firstLargest = arr[i]
      
    }else{
      if(arr[i]>secondLargest){
        secondLargest = arr[i]
      }
    }
  }

  console.log(firstLargest, secondLargest)

  
}


secondLargest([12, 35, 1, 10, 34, 1])
firstLargest([12, 35, 1, 10, 34, 1])



