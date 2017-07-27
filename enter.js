"use strict";
function enterInfo() {
    window.event.returnValue = false;
    var tbody = document.getElementById("tbody");
    var arr = document.getElementById("studentsNumber").value.split(",");
    var arr1=[];
    if (tbody!==undefined){
        $(tbody).empty();
    }
    for (var i =0 ;i<arr.length;i++){
        for (var j =0;j<localStorage.length;j++){
            if (localStorage.getItem(localStorage.key(j))===arr[i]){
                tbody.innerHTML += "<tr>"+"<td>"+localStorage.getItem(localStorage.key(j-7))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j-1))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j-4))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j-2))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j-5))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j-3))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j+1))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j-6))+"</td>"
                    +"<td>"+localStorage.getItem(localStorage.key(j+2))+"</td>"
                    +"</tr>";
                arr1.push(localStorage.getItem(localStorage.key(j+2)));
            }
        }
    }
    debugger;

    var zongfen = arr1.reduce(function (x,y) {
        return parseInt(x)+parseInt(y);
    });
    tbody.innerHTML +="<tr>"+"<td>"+"总分平均分:"+zongfen/arr1.length+"</td>"+"</tr>"
    var middle;
    if (arr1.length%2===0){
        middle = (parseInt(arr1[arr1.length/2-1])+parseInt(arr1[arr1.length/2]))/2;
    }
    else middle = parseInt(arr1[(arr1.length+1)/2-1]);
    tbody.innerHTML +="<tr>"+"<td>"+"总分中位数:"+middle+"</td>"+"</tr>"


}
