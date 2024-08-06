document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("button").addEventListener("click", (checkNumber) => {
        var a = document.querySelector(".we").value;

        function argu(b) {
            try {
                if (b < 0) {
                    throw new Error("negative number");
                }
                else {
                    // document.querySelector(".ans").innerText = "The number is positive ";
                    return "the number is positive"
                }
            } catch (error) {

                // var d = document.querySelector(".ans").innerHTML = error;
                 alert(error);
            }
        }
        var d = argu(a);
        document.querySelector(".ans").innerHTML = d;

    })
})
