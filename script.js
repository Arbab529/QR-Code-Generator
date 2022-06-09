const QRcode = document.querySelector(".qr-code"),
generatedBtn = document.querySelector("button"),
qrInput = document.querySelector("input"),
qrImage = document.querySelector(".qr-code img")

generatedBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generatedBtn.innerText = "Generating QR Code...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    QRcode.classList.add("active");
    qrImage.addEventListener("load", ()=>{
        generatedBtn.innerText = "Generate";
    })
 });

 qrInput.addEventListener("keyup",()=>{
     if(!qrInput.value){
         QRcode.classList.remove("active");
     }
 })
