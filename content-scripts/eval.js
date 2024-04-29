(()=>{
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  
  chrome.runtime.onMessage.addListener((message)=>{
    
      if (message.action ==="fetch"){
        
        fetch("http://127.0.0.1:5000/check", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({"password":message.passw})
        })
        .then((response) => {
          console.log(response.body)
          response.json().then((data) => {
          chrome.runtime.sendMessage({ action: 'dataReceived', data: data })
        })}
        )
        .catch(error => {
          console.error('Err:', error);
        });
      }
  })

})()




