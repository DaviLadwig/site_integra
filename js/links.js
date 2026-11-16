// Configure os dois destinos antes de publicar este pacote.
const INTEGRA_LINKS = {
  instalador: 'https://github.com/DaviLadwig/integra_desktop/releases/download/v1.0.1/Integra_0.3.2_x64_en-US.msi', // Exemplo: https://seu-dominio.com/Integra-Setup.exe
  whatsapp: '5598981473574' // Somente DDI + DDD + número. Exemplo: 5598999999999
};

document.addEventListener('DOMContentLoaded', () => {
  const download = document.getElementById('integra-download');
  const downloadNote = document.getElementById('download-note');
  const whatsapp = document.getElementById('integra-whatsapp');
  const supportNote = document.getElementById('support-note');

  if (download) {
    const url = INTEGRA_LINKS.instalador.trim();
    if (/^https:\/\//i.test(url)) {
      download.href = url;
      download.setAttribute('rel', 'noopener noreferrer');
    } else {
      download.addEventListener('click', (event) => {
        event.preventDefault();
        if (downloadNote) downloadNote.textContent = 'O endereço do instalador ainda precisa ser configurado pelo responsável.';
      });
    }
  }

  if (whatsapp) {
    const numero = INTEGRA_LINKS.whatsapp.replace(/\D/g, '');
    if (numero.length >= 12 && numero.length <= 15) {
      const texto = encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre o Integra SIAPS.');
      whatsapp.href = `https://wa.me/${numero}?text=${texto}`;
      whatsapp.target = '_blank';
      whatsapp.rel = 'noopener noreferrer';
    } else {
      whatsapp.addEventListener('click', (event) => {
        event.preventDefault();
        if (supportNote) supportNote.textContent = 'O número de WhatsApp ainda precisa ser configurado pelo responsável.';
      });
    }
  }
});
