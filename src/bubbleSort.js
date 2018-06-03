bubbleSort = function(arr) {
    let swapped = true;
    let j = 0;
    let tmp;
    while(swapped){
        swapped = false;
        arr.forEach(function (element, index, array){
            if (element > array[index+1]) {
              array[index] = array[index+1];
              array[index+1] = element;
              swapped = true;
            }
          });

        // j++;
        // for (let i = 0; i > arr.length - j; i++){
        //     if (arr[i] > arr[i+1]) {
        //         tmp = arr[i];
        //         arr[i] = arr[i+1];
        //         arr[i+1] = tmp;
        //         swapped = true;
        //     }
        // }
    }
    return arr;
}