function generateQRCode(){
    const textInput = document.getElementById("textInput").value;

    if(!textInput){
        alert("Please enter text to generate a QR Code");
        return;
    }

    // Clear any existig QR Code
    document.getElementById("qrCode").innerHTML = "";

    // Generate QR Code
    new QRCode(document.getElementById("qrCode"), {
        text: textInput,
        width: 158,
        height: 158,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // add active Class
    document.getElementById("qrCode").classList.add('active');
}