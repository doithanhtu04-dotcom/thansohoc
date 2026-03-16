document.getElementById("numerologyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const birthdate = document.getElementById("birthdate").value.trim();
    if (!birthdate) {
        alert("Vui lòng nhập ngày sinh!");
        return;
    }

    function reduceNumber(num) {
        if (num === 11 || num === 22) return num;
        while (num > 9) {
            num = num
                .toString()
                .split("")
                .reduce((sum, digit) => sum + Number(digit), 0);
        }
        return num;
    }

    const digits = birthdate.replaceAll("-", "").split("");
    const total = digits.reduce((sum, digit) => sum + Number(digit), 0);
    const lifePath = reduceNumber(total);

    localStorage.setItem("lifePath", lifePath);
    localStorage.setItem("birthdate", birthdate);

    window.location.href = "result.html";
});
