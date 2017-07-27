"use strict";
function deletea(){
    window.event.returnValue = false;
    var r =confirm("确定删除学号为" + document.getElementById("deleteInfo").value + "的学生的所有信息？");
    if (r == true){
        var number = document.getElementById("deleteInfo").value
        for (var j = 0; j < localStorage.length; j++) {
            if (localStorage.getItem(localStorage.key(j)) === number) {
                localStorage.removeItem(localStorage.key(j - 7));
                localStorage.removeItem(localStorage.key(j));
                localStorage.removeItem(localStorage.key(j - 1));
                localStorage.removeItem(localStorage.key(j - 4));
                localStorage.removeItem(localStorage.key(j - 2));
                localStorage.removeItem(localStorage.key(j - 5));
                localStorage.removeItem(localStorage.key(j - 3));
                localStorage.removeItem(localStorage.key(j + 1));
            }
    }
    }else return;
}
