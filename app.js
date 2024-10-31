window.addEventListener('DOMContentLoaded', () => {
    const loaderContainer = document.querySelector('.loader-container');

    setTimeout(() =>{
        loaderContainer.computedStyleMap.display = 'none';
    },2000)
})