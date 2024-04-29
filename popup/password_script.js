

    
document.addEventListener("click",(e)=>{
        
    function send(tabs){
        removeoldanswer()
        let pass=document.getElementById("password").value
        console.log(pass)
        console.log(tabs[0])
        chrome.tabs.sendMessage(tabs[0].id,{ action: "fetch",passw:pass })
            
    }

    function removeoldanswer(){
        console.log("remove")
        const existinganswers=document.querySelectorAll(".answer")
        for(const answer of existinganswers){
            answer.remove()
        }
    }

    if (e.target.id==="BUTTON"){
        chrome.tabs.query({active:true,currentWindow:true},send)
    }else{
        console.log("returned")
        return
    }
})

chrome.runtime.onMessage.addListener((message)=>{
    if (message.action === 'dataReceived'){
        const answer=document.createElement("p")
        answer.className="answer"
        answer.innerHTML=message.data.level
        document.body.appendChild(answer)
    }
})


chrome.tabs.executeScript({ file: "/content-scripts/eval.js" }).then(()=>{
    console.log("injected")
})
  