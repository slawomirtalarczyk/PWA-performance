


let testPerformance = function(){
    document.getElementById("runTest").disabled = true;
    let arrayLengths = [100, 1000, 5000, 10000, 20000];
    // arrayLengths = [100, 1000];
    // arrayLengths = [5000];
    let numberOfArrays4eachSort = 20;
    let numberOfSorts4eachArray = 1;
    // document.getElementById("runTest").disabled = true;
    // document.getElementById("runTest").innerHTML = "Running test";
    for(let o=0; o<arrayLengths.length; o++){
        elem = arrayLengths[o];
    // arrayLengths.forEach( (elem) => {
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
        let resultTable = document.getElementById("results").getElementsByTagName('tbody')[0];
        let resultRow = document.createElement("tr");
        let elementsCell = document.createElement("td");
        let timeCell = document.createElement("td");
        elementsCell.appendChild(document.createTextNode(elem));
        timeCell.appendChild(document.createTextNode(avgTime));
        resultRow.appendChild(elementsCell);
        resultRow.appendChild(timeCell);
        resultTable.appendChild(resultRow);
        // timeDiv.innerHTML = elem + " elements, avg time: " + avgTime + " ms";
        // document.body.appendChild(timeDiv);
        console.log("Array Length: ", elem, ", Avg Time:", avgTime, " ms")
    // });
    };
}