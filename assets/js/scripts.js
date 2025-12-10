var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

// Open all external links in new tab
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="http"]');
    var host = window.location.hostname;
    
    links.forEach(function(link) {
        var linkHost = link.hostname;
        // Check if link is external
        if (linkHost !== host && linkHost !== '') {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
