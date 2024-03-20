

    
document.addEventListener("click",(e)=>{
        
    function send(tabs){
        removeoldanswer()
        let pass=document.getElementById("password").value
        console.log(pass)
        console.log(tabs[0])
        browser.tabs.sendMessage(tabs[0].id,{ action: "fetch",passw:pass })
            
    }

    function removeoldanswer(){
        console.log("remove")
        const existinganswers=document.querySelectorAll(".answer")
        for(const answer of existinganswers){
            answer.remove()
        }
    }

    if (e.target.id==="BUTTON"){
        browser.tabs.query({active:true,currentWindow:true}).then(send)
    }else{
        console.log("returned")
        return
    }
})

browser.runtime.onMessage.addListener((message)=>{
    if (message.action === 'dataReceived'){
        const answer=document.createElement("p")
        answer.className="answer"
        answer.innerHTML=message.data.level
        document.body.appendChild(answer)
    }
})


browser.tabs.executeScript({ file: "/content-scripts/eval.js" }).then(()=>{
    console.log("injected")
})
  