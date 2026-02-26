function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

document.getElementById("closeBtn").onclick = function () {
    document.getElementById("lightbox").style.display = "none";
};

// Close when clicking outside image
document.getElementById("lightbox").onclick = function (e) {
    if (e.target.id === "lightbox") {
        this.style.display = "none";
    }
};