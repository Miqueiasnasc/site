function nextPage() {
 
    window.location.href = "yes.html";
}

// Função para mover o botão "No" aleatoriamente
document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 100);

    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
