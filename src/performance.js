
let arrayLengths = [100, 1000, 5000, 10000, 20000];
arrayLengths = [100, 1000];
// arrayLengths = [5000];
let numberOfArrays4eachSort = 20;
let numberOfSorts4eachArray = 1;

let testPerformance = function(){
    arrayLengths.forEach( (elem) => {
        totalTime = 0;
        for(let i=0; i<numberOfArrays4eachSort; i++){
            // console.log("Generating new array");
            unsortedArray = Array.from({length: elem}, () => Math.floor(Math.random() * 10));
            for(let j=0; j<numberOfSorts4eachArray; j++){
                let t0 = performance.now();
                sortedArray = bubbleSort(unsortedArray);
                let t1 = performance.now();
                let time = t1-t0;
                totalTime += time;
                // console.log("size: ", elem, "time: ", time); 
            }
        }
        let avgTime = totalTime / (numberOfArrays4eachSort*numberOfSorts4eachArray);
        avgTime = Number.parseFloat(avgTime).toFixed(4);
        let resultRow = document.getElementById("results").getElementsByTagName('tbody')[0].insertRow();
        let elementsCell = resultRow.insertCell(0);
        let timeCell = resultRow.insertCell(1);
        elementsCell.innerHTML = elem;
        timeCell.innerHTML = avgTime;
        // timeDiv.innerHTML = elem + " elements, avg time: " + avgTime + " ms";
        // document.body.appendChild(timeDiv);
        // console.log("Array Length: ", elem, ", Avg Time:", avgTime, " ms")
    });
}