 define([], function(){
     function bubbleSorting(a) {
         var n = a.length;
         for( var j = 0; j < n; j++){
             for( var i =0; i < n - 1; i++ ){
                 if(a[i] > a[i + 1]){
                     var k = 0;
                     k = a[i];
                     a[i] = a[i + 1];
                     a[i + 1] = k;
                 }
             }
         }
         return a;
     }

     return bubbleSorting;


 });