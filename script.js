document.getElementById("numerologyForm").addEventListener("submit", function(e){
    e.preventDefault();

    let birthdate = document.getElementById("birthdate").value; 

 
    function reduceNumber(num) {
        if (num === 11 || num === 22) return num; // giữ master

        while (num > 9) {
            num = num
                .toString()
                .split("")
                .reduce((a,b) => parseInt(a) + parseInt(b), 0);
        }
        return num;
    }

 
    let digits = birthdate.replaceAll("-", "").split("");

    let total = digits.reduce((a,b) => a + parseInt(b), 0);

    let lifePath = reduceNumber(total);

  
    localStorage.setItem("lifePath", lifePath);

 
    window.location.href = "result.html";
});
