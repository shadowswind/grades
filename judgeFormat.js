"use strict";
function judge(){
    window.event.returnValue = false;
    localStorage.setItem(form.number.value,form.name.value);
    localStorage.setItem(form.number.value + "average",""+(parseInt(form.math.value)+parseInt(form.chinese.value)+parseInt(form.english.value)+parseInt(form.programming.value))/4);
    localStorage.setItem(form.number.value + "chinese",form.chinese.value);
    localStorage.setItem(form.number.value + "class",form.class.value);
    localStorage.setItem(form.number.value + "english",form.english.value);
    localStorage.setItem(form.number.value + "math",form.math.value);
    localStorage.setItem(form.number.value + "nation",form.nation.value);
    localStorage.setItem(form.number.value + "number",form.number.value);
    localStorage.setItem(form.number.value + "programming",form.programming.value);
    localStorage.setItem(form.number.value+ "total",""+(parseInt(form.math.value)+parseInt(form.chinese.value)+parseInt(form.english.value)+parseInt(form.programming.value)));
    alert ("添加成功")
}

