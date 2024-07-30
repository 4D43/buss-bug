function toggleBox(boxId) {
    // Obtén todos los cuadros y botones
    var boxes = document.querySelectorAll('.box');
    var buttons = document.querySelectorAll('.menu button');
    
    // Itera sobre todos los cuadros para ocultar todos
    boxes.forEach(function(box) {
        if (box.id === boxId) {
            // Si el cuadro actual es el seleccionado, alterna su visibilidad
            if (box.style.display === "none" || box.style.display === "") {
                box.style.display = "block"; // Mostrar el cuadro
            } else {
                box.style.display = "none"; // Ocultar el cuadro
            }
        } else {
            // Ocultar todos los cuadros que no son el seleccionado
            box.style.display = "none";
        }
    });
    
    // Restaura el estado de todos los botones
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Activa el botón correspondiente al cuadro seleccionado
    var selectedButton = document.querySelector('.menu button[onclick="toggleBox(\'' + boxId + '\')"]');
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

// Inicializa todos los cuadros como ocultos
document.querySelectorAll('.box').forEach(function(box) {
    box.style.display = 'none';
});
