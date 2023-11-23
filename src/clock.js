setInterval(()=>{
  const time = document.querySelector(".clock #time")
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  
  if(s < 10){
    s = "0" + s
  }

  if(m < 10){
    m = "0" + m
  }

  if(h < 10){
    h = "0" + h
  }
  time.textContent = h + ":" + m + ":" + s
})