// No Optimization

    function bubbleSort(arr){
        for(var i = 0; i<arr.length;i++){
            for(var j =0; j<arr.length;j++){
                if(arr[j]>arr[j+1]){
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
                console.log('ONE LOOP COMPLETE', arr);
        }
        return arr
    }

    bubbleSort([2,1,6,4,8,5]) //6 Steps

// Optimization
    // 1. Remove Unnecessary comparisons. (Changing looping conditions)
    // 2. If array is sorted stop. (Using noSawap variable)

    // function bubbleSort(arr) {
    //     for (var i = arr.length; i > 0; i--) {
    //         var noSwap = true;
    //         for (var j = 0; j < i-1; j++) {
    //             if (arr[j] > arr[j + 1]) {
    //                var temp = arr[j]
    //                 arr[j] = arr[j + 1]
    //                 arr[j + 1] = temp
    //                 noSwap = false
    //             }
    //         }
    //         console.log('ONE LOOP COMPLETE',arr);
    //         if(noSwap) break;
            
    //     }
    //     return arr
    // }

// bubbleSort([2, 1, 6, 4, 8, 5]) //3 Steps