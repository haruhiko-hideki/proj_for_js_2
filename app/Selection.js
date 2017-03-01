define([], function () {
    function selectionSorting(b){
        var minInd,
            temp,
            n = b.length;
        for(var i = 0; i < n; i++){
            minInd = i;
            for(var  j = i + 1; j < n; j++){
                if(b[j] < b[minInd]){
                    minInd = j;
                }
            }
            temp = b[i];
            b[i] = b[minInd];
            b[minInd] = temp;
        }
        return b;
    }
    return selectionSorting;
});
