document.addEventListener('DOMContentLoaded', function() {
    const lang = navigator.language || 'en'; // Obtiene el idioma del navegador, por defecto 'en'
    const availableLangs = ['en', 'es']; // Idiomas disponibles
    const language = availableLangs.includes(lang) ? lang : 'en'; // Usa el idioma disponible o 'en' por defecto

    fetch('languages.json')
        .then(response => response.json())
        .then(data => {
            const texts = data[language];
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (texts[key]) {
                    element.textContent = texts[key];
                }
            });
        });
});
