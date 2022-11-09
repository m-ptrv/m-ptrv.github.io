setTimeout(eraseCache, 1000);

function eraseCache() {
    window.location = window.location.href+'?eraseCache=true';
  }