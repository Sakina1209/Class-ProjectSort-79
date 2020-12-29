var students_array =[];

function submit() {

    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value; 

    students_array.push(name_1);
    students_array.push(name_2);
    students_array.push(name_3);
    students_array.push(name_4);

    console.log(students_array);

    document.getElementById("display_name").innerHTML = students_array;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block"; 

    

}
function sort1() {
    students_array.sort();

    console.log(students_array);

    document.getElementById("display_name").innerHTML = students_array;
  }