$(document).ready(function(){
            
        var numbers = [];
        numbers = ["#zero", "#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#plus", "#minus", "multiply", "#divide", "#modulo", "#decimal"];
        var keys = [];
        keys = ["zero", "one","two","three","four","five", "six", "seven", "eight", "nine","plus", "minus", "multiply", "divide", "modulo", "decimal"];
        var total = "";
        var total_arr = [];
        
        for (var i = 0; i < numbers.length; i++) {
                        
            (function(i) {
               document.getElementById(keys[i]).onclick=function() {
                total =  total + (document.getElementById(keys[i]).innerHTML);
                document.getElementById("result").innerHTML = total;
               };
               
               document.getElementById("ce").onclick=function() {
                total =  "";
                document.getElementById("result").innerHTML = total;
               };
               
            })(i);
        }
        
        document.getElementById("equal").onclick=function(){
            
        document.getElementById("result").innerHTML = eval(total);
};
        
});