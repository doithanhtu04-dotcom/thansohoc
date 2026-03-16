document.getElementById("numerologyForm").addEventListener("submit", function(e){
    e.preventDefault();

    let birthdate = document.getElementById("birthdate").value;

    if (!birthdate) {
        alert("Vui lòng nhập ngày sinh!");
        return;
    }

    function reduceNumber(num) {
        if (num === 11 || num === 22) return num; // Master numbers

        while (num > 9) {
            num = num
                .toString()
                .split("")
                .reduce((a, b) => parseInt(a) + parseInt(b), 0);
        }
        return num;
    }

    // Tách từng số trong YYYY-MM-DD
    let digits = birthdate.replaceAll("-", "").split("");

    // Tổng các số
    let total = digits.reduce((a, b) => a + parseInt(b), 0);

    // Số chủ đạo
    let lifePath = reduceNumber(total);

    // Lưu vào localStorage
    localStorage.setItem("lifePath", lifePath);

    // Chuyển trang
    window.location.href = "result.html";
});
