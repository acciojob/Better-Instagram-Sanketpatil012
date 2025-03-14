//your code here
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");

    let draggedElement = null;

    images.forEach((image) => {
        // Make the element draggable
        image.addEventListener("dragstart", (event) => {
            draggedElement = event.target;
            event.dataTransfer.setData("text/plain", event.target.id);
            event.target.classList.add("selected");
        });

        // Remove selection on drag end
        image.addEventListener("dragend", () => {
            draggedElement.classList.remove("selected");
        });

        // Prevent default behavior to allow dropping
        image.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        // Handle drop event
        image.addEventListener("drop", (event) => {
            event.preventDefault();
            
            if (draggedElement && draggedElement !== event.target) {
                // Swap background images
                let tempBg = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = event.target.style.backgroundImage;
                event.target.style.backgroundImage = tempBg;
            }
        });
    });
});
