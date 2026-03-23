
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("numerologyForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const birth = document.getElementById("birthdate").value;

            if (!name || !birth) {
                alert("Vui lòng nhập đủ thông tin!");
                return;
            }

            const digits = birth.replace(/-/g, "").split("");
            let total = digits.reduce((sum, d) => sum + Number(d), 0);

            function reduce(num) {
                if (num === 11 || num === 22) return num;
                while (num > 9) {
                    num = num.toString().split("").reduce((s, d) => s + Number(d), 0);
                }
                return num;
            }

            const lifePath = reduce(total);

            localStorage.setItem("numerology_name", name);
            localStorage.setItem("numerology_birth", birth);
            localStorage.setItem("numerology_lifePath", lifePath);

            window.location.href = "result.html";
        });
    }
});

if (window.location.pathname.includes("result.html")) {

    let number = localStorage.getItem("numerology_lifePath");

    document.getElementById("resultNumber").innerHTML =
        "Số chủ đạo: " + number;

    const personalityData = {
        1: "Bạn mạnh mẽ, độc lập, có khả năng dẫn dắt.",
        2: "Bạn tinh tế, nhẹ nhàng, giỏi hợp tác.",
        3: "Bạn sáng tạo, vui vẻ, thích thể hiện.",
        4: "Bạn kỷ luật, thực tế, đáng tin cậy.",
        5: "Bạn tự do, linh hoạt, thích khám phá.",
        6: "Bạn trách nhiệm, giàu tình cảm, biết chăm sóc.",
        7: "Bạn sâu sắc, trực giác mạnh.",
        8: "Bạn có tư duy kinh doanh và quyết đoán.",
        9: "Bạn nhân ái, bao dung và trưởng thành."
    };

    const careerData = {
        1: ["Lãnh đạo", "Startup", "Quản lý"],
        2: ["Nhân sự", "Tư vấn", "Giáo viên"],
        3: ["Marketing", "MC", "Content Creator"],
        4: ["Engineer", "IT", "Kế toán"],
        5: ["Du lịch", "Sales", "Tổ chức sự kiện"],
        6: ["Y tế", "Giáo dục"],
        7: ["Nghiên cứu", "Phân tích dữ liệu"],
        8: ["Tài chính", "Đầu tư"],
        9: ["Nghệ thuật", "Từ thiện"]
    };

    document.getElementById("personality").innerHTML =
        personalityData[number];

    let html = "";
    careerData[number].forEach(job => html += `<li>${job}</li>`);
    document.getElementById("career").innerHTML = html;

    document.getElementById("cycle").innerHTML =
        "• 0–27: Học hỏi<br>• 28–54: Phát triển mạnh<br>• 55+: Gặt hái & cống hiến";
}
