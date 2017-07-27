/**
 * Created by root on 7/18/17.
 */

    function grades(collection) {
    var gradelist = "";
    collection.map(function (x) {
        for(var i =0;i<students.length;i++){
            if (x === students[i].number){
                 gradelist = gradelist+students[i].name + "|"+students[i].math + "|"+students[i].chinese + "|"+students[i].english + "|"+students[i].programming + "|"+students[i].average + "|"+students[i].total + "\n";
                 return gradelist;
            }
        }
    });return gradelist;
}
var students = [];
    var main = "1. add students' information\n2. generate grades_list\n3. exit\nPlease select an option(1-3)";
var arr;
var readlineSync = require("readline-sync");

function chooice_1() {
    var information = readlineSync.question("Please input student's information(format:name,number,nation,class,subject:score...),press enter to submit：");
    arr = information.split(",");
    if (typeof arr[0] === "string" && typeof arr[1] === "string" && typeof arr[2] === "string" && typeof arr[3] === "string") {
        console.log( arr[0] + "'s grade has been added");
    }
    else {
        console.log("Please enter the information with the correct format(format:name,number,nation,class,subject:score...):");
    }
    students.push({
        name: arr[0],
        number: arr[1],
        kind: arr[2],
        class: [3],
        math: arr[5],
        chinese: arr[7],
        english: arr[9],
        programming: arr[11],
        average: (Number(arr[5]) + Number(arr[7]) + Number(arr[9]) + Number(arr[11])) / 4,
        total: Number(arr[5]) + Number(arr[7]) + Number(arr[9]) + Number(arr[11])
    });
    return information;
}

function chooice_2() {
    var information1 = readlineSync.question("Please input the number(format:number...),press enter to submit");
    arr = information1.split(",");
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].length !== arr[i + 1].length) {
            console.log("Please input the number with correct format(format:number,number...),press enter to submit");
            break;
        }
        else if (arr[arr.length - 2].length === arr[arr.length - 1].length) {
            console.log("grades_list\nname|math|chinese|english|programming|average|total\n========================\n" + grades(arr) + "========================\n" + "total average：xxx\n" + "total middle：xxx");
        }
    }
    return {information1: information1, i: i};
}
while(true) {
    var selection = readlineSync.questionInt(main);
    if (selection === 1) {
        var information = chooice_1();
    }
    else if (selection ===2){
        var __ret = chooice_2();
        var information1 = __ret.information1;
        var i = __ret.i;
    }
    else if (selection ===3){
        break;
    }
}

