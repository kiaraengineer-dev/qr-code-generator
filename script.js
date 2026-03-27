function gerarQR() {
  const valor = document.getElementById("qr-input").value;
  const qr = document.getElementById("qr-img");

  if (valor === "") {
    alert("Por favor, digite um link");
    return;
  }

  const encoded = encodeURIComponent(valor);

  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}`;
}
