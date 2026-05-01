// common/navbar.js
(function() {
  // Create the header element exactly matching your original structure
  const header = document.createElement('header');
  header.className = 'site-header';

  header.innerHTML = `
    <div class="wrap">
      <a href="/" class="wordmark">Vault<span class="dot">.</span></a>
      <nav class="header-nav" aria-label="Primary">
        <a href="/tools/">Tools</a>
        <a href="/learn/">The Reading Room</a>
      </nav>
      <a href="/app" class="btn btn-primary">Launch Vault</a>
    </div>
  `;

  // Find the placeholder (or fallback to prepending to body)
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.parentNode.replaceChild(header, placeholder);
  } else {
    // If no placeholder, insert at the very top of the page
    document.body.insertBefore(header, document.body.firstChild);
  }
})();
