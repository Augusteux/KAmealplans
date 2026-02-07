window.onload = updateBodyClassByWidth;
window.addEventListener("resize", updateBodyClassByWidth);

function updateBodyClassByWidth(){
    const windowWidth = window.innerWidth;
    const body = document.body;
    body.classList.remove("phone","tablet","desktop");
    if (windowWidth<768) {
        body.classList.add("phone");
    } else if (windowWidth<1023) {
        body.classList.add("tablet");
    } else{
        body.classList.add("desktop");
    }
}