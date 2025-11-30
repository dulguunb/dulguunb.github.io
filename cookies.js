// Cookie Consent Management
(function() {
    const CONSENT_KEY = 'cookieConsent';
    const consentBanner = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    // Check if user has already made a choice
    function hasConsent() {
        return localStorage.getItem(CONSENT_KEY) !== null;
    }

    // Get consent status
    function getConsent() {
        return localStorage.getItem(CONSENT_KEY) === 'accepted';
    }

    // Show banner if no consent has been given
    function showBanner() {
        if (!hasConsent()) {
            consentBanner.style.display = 'block';
        }
    }

    // Hide banner
    function hideBanner() {
        consentBanner.style.display = 'none';
    }

    // Accept cookies
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        hideBanner();

        // You can initialize analytics or other tracking here
        console.log('Cookie consent accepted');
    });

    // Decline cookies
    declineBtn.addEventListener('click', function() {
        localStorage.setItem(CONSENT_KEY, 'declined');
        hideBanner();

        // Clear any existing tracking data
        console.log('Cookie consent declined');

        // Note: Theme preference will still work as it's essential functionality
    });

    // Initialize on page load
    showBanner();

    // If user declined, ensure no tracking happens
    if (hasConsent() && !getConsent()) {
        console.log('User has declined cookies - analytics disabled');
    }
})();
