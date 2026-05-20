// common/footer.js
// Drop-in site footer for every Vault page. Mirrors common/navbar.js:
// looks for a #footer-placeholder and replaces it; otherwise appends to <body>.
//
// It injects its own scoped styles (prefixed .vfooter-) so it renders
// consistently on any page regardless of that page's own CSS — landing,
// tools, Reading Room, and the legal pages all get the identical footer.
//
// Legal pages live in /app/. If you ever move them, change PRIVACY_URL /
// TERMS_URL below (the only two lines you'd need to touch).
(function() {
  var PRIVACY_URL = '/app/privacy.html';
  var TERMS_URL   = '/app/terms.html';
  var YEAR        = new Date().getFullYear();

  // Scoped styles — injected once.
  if (!document.getElementById('vfooter-styles')) {
    var style = document.createElement('style');
    style.id = 'vfooter-styles';
    style.textContent = [
      '.vfooter{border-top:1px solid #e8e6df;background:#faf9f5;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#12110f;}',
      '.vfooter *{box-sizing:border-box;}',
      '.vfooter-wrap{max-width:1080px;margin:0 auto;padding:44px 24px 40px;}',
      '.vfooter-top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-bottom:22px;}',
      '.vfooter-wordmark{font-weight:700;font-size:20px;letter-spacing:-0.01em;color:#12110f;text-decoration:none;}',
      '.vfooter-wordmark span{color:#b8f000;}',
      '.vfooter-nav{display:flex;flex-wrap:wrap;gap:22px;}',
      '.vfooter-nav a{font-size:14px;font-weight:500;color:#6b6a65;text-decoration:none;transition:color .15s ease;}',
      '.vfooter-nav a:hover{color:#12110f;}',
      '.vfooter-disclaimer{font-size:13px;color:#6b6a65;line-height:1.6;max-width:720px;margin:0 0 16px;}',
      '.vfooter-meta{font-size:13px;color:#6b6a65;}',
      '@media (max-width:540px){.vfooter-wrap{padding:32px 20px;}.vfooter-top{flex-direction:column;align-items:flex-start;gap:18px;}.vfooter-nav{gap:18px;}}'
    ].join('');
    document.head.appendChild(style);
  }

  var footer = document.createElement('footer');
  footer.className = 'vfooter';
  footer.innerHTML =
    '<div class="vfooter-wrap">' +
      '<div class="vfooter-top">' +
        '<a href="/" class="vfooter-wordmark">Vault<span>.</span></a>' +
        '<nav class="vfooter-nav" aria-label="Footer">' +
          '<a href="/tools/">Tools</a>' +
          '<a href="/learn/">The Reading Room</a>' +
          '<a href="' + PRIVACY_URL + '">Privacy</a>' +
          '<a href="' + TERMS_URL + '">Terms</a>' +
          '<a href="/app/">Launch Vault</a>' +
        '</nav>' +
      '</div>' +
      '<p class="vfooter-disclaimer">Vault is a personal finance tool, not financial advice. The figures and projections shown are estimates based on the data you enter and should not be relied on for tax, investment, or legal decisions. Please speak to a qualified professional for advice on your individual situation.</p>' +
      '<div class="vfooter-meta">Built with curiosity. &copy; Vault ' + YEAR + '.</div>' +
    '</div>';

  var placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.parentNode.replaceChild(footer, placeholder);
  } else {
    document.body.appendChild(footer);
  }
})();
