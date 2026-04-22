const textarea = document.querySelector("textarea");
const textCount = document.querySelector(".text-count");
const maxCharacters = 250;

const updateCounter = () => {
    if (textarea.value.length >= maxCharacters) {
        textarea.value = textarea.value.slice(0, maxCharacters);
    }
    const used = textarea.value.length;
    textCount.textContent = `${used}/${maxCharacters}`;
    textarea.classList.toggle('restricted' , used >= maxCharacters);
    textCount.classList.toggle('restricted' , used >= maxCharacters);
};

textarea.addEventListener("input", updateCounter);
updateCounter();
