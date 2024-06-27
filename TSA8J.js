document.addEventListener("DOMContentLoaded", () => {
    const flexbox = document.querySelector(".flexbox");
    const gapInput = document.getElementById("gap");
    const box1Grow = document.getElementById("box1Grow");
    const box2Grow = document.getElementById("box2Grow");
    const box3Grow = document.getElementById("box3Grow");
 
    document.querySelectorAll("[data-flex-direction]").forEach(button => {
        button.addEventListener("click", () => {
            flexbox.style.flexDirection = button.getAttribute("data-flex-direction");
        });
    });
 
    document.querySelectorAll("[data-justify-content]").forEach(button => {
        button.addEventListener("click", () => {
            flexbox.style.justifyContent = button.getAttribute("data-justify-content");
        });
    });
 
    document.querySelectorAll("[data-align-items]").forEach(button => {
        button.addEventListener("click", () => {
            flexbox.style.alignItems = button.getAttribute("data-align-items");
        });
    });
 
    gapInput.addEventListener("input", () => {
        flexbox.style.gap = `${gapInput.value}px`;
    });
 
    document.getElementById("resetFlexbox").addEventListener("click", () => {
        flexbox.style.flexDirection = "row";
        flexbox.style.justifyContent = "flex-start";
        flexbox.style.alignItems = "flex-start";
        flexbox.style.gap = "0px";
        gapInput.value = 0;
        box1Grow.value = 0;
        box2Grow.value = 0;
        box3Grow.value = 0;
        document.querySelectorAll(".box").forEach(box => {
            box.style.flexGrow = "0";
        });
    });
 
    document.getElementById("resetGrow").addEventListener("click", () => {
        box1Grow.value = 0;
        box2Grow.value = 0;
        box3Grow.value = 0;
        document.querySelectorAll(".box").forEach(box => {
            box.style.flexGrow = "0";
        });
    });
 
    document.getElementById("growAll").addEventListener("click", () => {
        document.querySelectorAll(".box").forEach(box => {
            box.style.flexGrow = "1";
        });
        box1Grow.value = 1;
        box2Grow.value = 1;
        box3Grow.value = 1;
    });
 
    box1Grow.addEventListener("input", () => {
        document.getElementById("box1").style.flexGrow = box1Grow.value;
    });
 
    box2Grow.addEventListener("input", () => {
        document.getElementById("box2").style.flexGrow = box2Grow.value;
    });
 
    box3Grow.addEventListener("input", () => {
        document.getElementById("box3").style.flexGrow = box3Grow.value;
    });
});
