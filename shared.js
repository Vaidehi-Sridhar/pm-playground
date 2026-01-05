// PM Playground - Shared JavaScript

// Focus management for accessibility
function moveFocus(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        const heading = el.querySelector('h1, h2');
        if (heading) {
            heading.setAttribute('tabindex', '-1');
            heading.focus();
            setTimeout(() => heading.removeAttribute('tabindex'), 100);
        }
    }
}

// Screen transition helper
function transitionScreen(hideId, showId) {
    document.getElementById(hideId).style.display = 'none';
    document.getElementById(showId).style.display = 'block';
    window.scrollTo(0, 0);
    setTimeout(() => moveFocus(showId), 100);
}

// Mark current case in navigation
function markCurrentCase() {
    const currentFile = window.location.pathname.split('/').pop();
    const caseNum = currentFile.match(/case(\d)/)?.[1];
    if (caseNum) {
        const dots = document.querySelectorAll('.nav-dot');
        dots[caseNum - 1]?.classList.add('current');
        
        // Mark completed cases
        for (let i = 1; i < caseNum; i++) {
            dots[i - 1]?.classList.add('completed');
        }
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markCurrentCase);
} else {
    markCurrentCase();
}
