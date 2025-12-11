function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function loadGoogleAnalytics() {
  var gaId = document.getElementById('cookie-consent-banner').getAttribute('data-ga-id');
  if (!gaId) return;
  
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
  document.head.appendChild(script);
  
  script.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaId, {
      'anonymize_ip': true
    });
  };
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  var banner = document.getElementById('cookie-consent-banner');
  if (!banner) return;
  
  // Check if consent cookie exists
  var cookieConsent = getCookie('cookie_consent');

  if (!cookieConsent) {
    // Show banner if no consent has been given
    banner.style.display = 'block';
  } else if (cookieConsent === 'accepted') {
    // Load Google Analytics if previously accepted
    loadGoogleAnalytics();
  }

  // Handle accept button
  var acceptBtn = document.getElementById('cookie-accept');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function() {
      setCookie('cookie_consent', 'accepted', 365);
      banner.style.display = 'none';
      loadGoogleAnalytics();
    });
  }

  // Handle decline button
  var declineBtn = document.getElementById('cookie-decline');
  if (declineBtn) {
    declineBtn.addEventListener('click', function() {
      setCookie('cookie_consent', 'declined', 365);
      banner.style.display = 'none';
    });
  }
  
  // Handle reset button on privacy page
  var resetBtn = document.getElementById('reset-cookie-consent');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      // Delete the consent cookie
      document.cookie = 'cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax';
      // Reload the page to show the banner again
      window.location.reload();
    });
  }
});
