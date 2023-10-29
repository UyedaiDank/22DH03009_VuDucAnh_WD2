function myFunction() {
    document.getElementById("demo").innerHTML = "my fisrt JS"
}
// < !--đẩy vào html-- >
//     < !--viết trong body và head-- >

function sum(x, y) {
    return x + y;
}
function rank(numGrade) {
    if (numGrade >= 8.5) {
        return "giỏi";
    }
    if (numGrade >= 7) {
        return "khá";
    }
    if (numGrade >= 5) {
        return "trung bình";
    }
    return "yếu";
}
function check() {
    let txtName = document.getElementById("txtName").value;
    let numGrade = document.getElementById("Mark").value;
    if (numGrade > 10 || numGrade < 0 || txtName == "" || numGrade == "") {
        alert("Dữ liệu nhập không hợp lệ!!!");
        return;
    }
    document.getElementById("sumit").innerHTML = "Bạn " + txtName + " đã đạt điểm " + numGrade + "; Bạn xếp loại: " + rank(numGrade);
}
