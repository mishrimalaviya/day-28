document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("button").addEventListener("click",(checkvalue)=>{

        var nu=document.querySelector("#num").value;

        try{
            if(isNaN(nu))
            {
                throw new Error("its is not a number")
            }
            else if(nu < 0)
            {
                throw new Error("It is a negative number")
            }
            else
            {
                document.querySelector(".ans1").innerText=+nu;
            }
        }catch(error){
            // document.querySelector(".ans1").innerText=error
            alert(error)


        }
    })
})