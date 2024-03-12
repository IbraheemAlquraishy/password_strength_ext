

console.log("loaded")
document.addEventListener("click",(e)=>{
    console.log("clicked")
    function send(pass){
        removeoldanswer()

        console.log(pass)
        const answer=document.createElement("p")
        answer.innerText="strong"
        answer.className="answer"
        document.body.appendChild(answer)
    }

    function removeoldanswer(){
        console.log("remove")
        const existinganswers=document.querySelectorAll(".answer")
        for(const answer of existinganswers){
            answer.remove()
        }
    }

    if (e.target.id==="BUTTON"){
        send(document.getElementById("password").value)
    }else{
        console.log("returned")
        return
    }
})

