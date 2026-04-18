const qrInput = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const qrContainer = document.getElementById("qrcode");

let qrCodeObject = null;

generateBtn.addEventListener("click", () => {
    const text = qrInput.value.trim();

    if (text === "") {
        alert("กรุณาใส่ข้อความก่อนครับ!");
        return;
    }

    qrContainer.innerHTML = "";

    qrCodeObject = new QRCode(qrContainer, {
        text: text,       
        width: 200,       
        height: 200,     
        colorDark : "#000000",  
        colorLight : "#ffffff", 
    });
});