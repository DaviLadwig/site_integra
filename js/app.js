(() => {
  'use strict';
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('integra_download_theme');
  const initial = saved === 'dark' || saved === 'light' ? saved : 'light';
  function applyTheme(theme) {
    root.dataset.theme = theme;
    button?.setAttribute('aria-pressed', String(theme === 'dark'));
    button?.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#121c27' : '#ffffff');
  }
  applyTheme(initial);
  button?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('integra_download_theme', next);
    applyTheme(next);
  });
})();
