function selectImage(id) {
    const imageId = id.id
    const thumbId = "thumb" + id.id
    //sets display for all slides to none, identifies selected slide, and sets display to block
    const slides = document.querySelectorAll(".slide");
    slides.forEach(image => image.classList.add('hidden'));
    const selected = document.getElementById(imageId);
    selected.classList.remove('hidden');
    //gets all thumbs, removes class of selected, then adds selected class to selected thumb
    const thumbs = document.querySelectorAll(".thumb");
    thumbs.forEach(image => image.classList.remove("selected"));
    const selectedThumb = document.getElementById(thumbId);
    selectedThumb.classList.add("selected");
}