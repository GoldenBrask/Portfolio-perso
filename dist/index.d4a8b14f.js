document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-button");
    cards.forEach((card)=>{
        card.addEventListener("click", function() {
            const project = card.getAttribute("data-project");
            const modal = document.getElementById(`modal-${project}`);
            if (modal) modal.style.display = "block";
        });
    });
    closeButtons.forEach((button)=>{
        button.addEventListener("click", function() {
            modals.forEach((modal)=>{
                modal.style.display = "none";
            });
        });
    });
    // Ferme la modale lorsque l'on clique à l'extérieur de celle-ci
    window.addEventListener("click", function(event) {
        modals.forEach((modal)=>{
            if (event.target === modal) modal.style.display = "none";
        });
    });
});
document.getElementById("copy-email").addEventListener("click", function() {
    const email = this.getAttribute("data-email");
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert('"contact@brask.me" copi\xe9 dans le presse-papiers');
});
function fillProgressBar(element, targetValue) {
    let currentValue = 0;
    const increment = 1; // Toujours positif car nous commençons toujours de 0
    const interval = setInterval(()=>{
        if (currentValue === targetValue) clearInterval(interval);
        else {
            currentValue += increment;
            element.parentElement.style.setProperty("--p", currentValue);
        }
    }, 20);
}
document.querySelectorAll("progress").forEach((progress)=>{
    let targetValue = parseFloat(progress.parentElement.style.getPropertyValue("--p"));
    fillProgressBar(progress, targetValue);
});

//# sourceMappingURL=index.d4a8b14f.js.map
