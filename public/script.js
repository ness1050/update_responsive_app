
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("date");
    const currentDate = new Date();

    const opition = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateElement.textContent = currentDate.toLocaleDateString(undefined, opition);
});