function modify() {
    window.event.returnValue = false;
    var number = document.getElementById("modifyInfo").value
    for (var j =0;j<localStorage.length;j++){
        if (localStorage.getItem(localStorage.key(j))===number){
            var a = document.getElementById("form").getElementsByTagName("input");
            a[0].value = localStorage.getItem(localStorage.key(j - 7));
            a[1].value = localStorage.getItem(localStorage.key(j));
            a[2].value = localStorage.getItem(localStorage.key(j - 1));
            a[3].value = localStorage.getItem(localStorage.key(j - 4));
            a[4].value = localStorage.getItem(localStorage.key(j - 2));
            a[5].value = localStorage.getItem(localStorage.key(j - 5));
            a[6].value = localStorage.getItem(localStorage.key(j - 3));
            a[7].value = localStorage.getItem(localStorage.key(j + 1));
        }
    }
}