
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

const navLinks = document.querySelectorAll('.nav_items a');
const footlinks = document.querySelectorAll('.footer a');
let current_index = 0;
let footer_index =0;

document.addEventListener('keydown', (e) => {
    const active = document.activeElement;

    if ([...navLinks].includes(active)) {
        if (e.key === 'ArrowRight') {
        current_index = (current_index + 1) % navLinks.length;
        navLinks[current_index].focus();
        e.preventDefault();
        } else if (e.key === 'ArrowLeft') {
            current_index = (current_index - 1 + navLinks.length) % navLinks.length;
            navLinks[current_index].focus();
            e.preventDefault();
        }
    }
    if ([...footlinks].includes(active)) {
        if (e.key === 'ArrowRight') {
        footer_index = (footer_index + 1) % footlinks.length;
        footlinks[footer_index].focus();
        e.preventDefault();
        } else if (e.key === 'ArrowLeft') {
        footer_index = (footer_index - 1 + footlinks.length) % footlinks.length;
        footlinks[footer_index].focus();
         e.preventDefault();
        }
       
    }
});