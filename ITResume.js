const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
    document.body.dataset.theme = toggle.checked ? 'dark' : '';
});
