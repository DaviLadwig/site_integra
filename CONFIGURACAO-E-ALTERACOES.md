# Integra SIAPS — site estático

## Alterações desta entrega

- `index.html`: remove o preço de cartão, mantém Pix de R$ 157,00, substitui o download desabilitado por botão amarelo maior e adiciona botão verde de dúvidas com o ícone do WhatsApp.
- `css/style.css`: estilos dos novos botões, estados de foco e adaptação a telas pequenas.
- `js/links.js` (novo): centraliza o endereço HTTPS do instalador e o número WhatsApp, sem depender de backend.
- `js/app.js`: preservado; controla o tema claro/escuro.
- `assets/` e `favicon.svg`: preservados.

## Configuração obrigatória dos botões

Abra `js/links.js` e preencha os campos do objeto `INTEGRA_LINKS`:

```js
const INTEGRA_LINKS = {
  instalador: 'https://seu-dominio.com/Integra-Setup.exe',
  whatsapp: '5598999999999'
};
```

Use o endereço HTTPS **real** do instalador Windows e o seu número de atendimento com DDI (55), DDD e telefone, apenas números. Os valores acima são exemplos e não devem ser publicados literalmente.

Enquanto os campos estiverem vazios, os botões são visíveis mas exibem uma mensagem explicativa, sem abrir um link inexistente. Isso evita páginas 404 e mensagens para números incorretos.

## Instalação

1. Extraia o ZIP em uma pasta vazia da hospedagem estática.
2. Configure `js/links.js`.
3. Abra `index.html` ou publique seu conteúdo na raiz da hospedagem.
4. Teste o download do instalador e o direcionamento do WhatsApp em celular e computador.

Não existem arquivos de checkout, painel administrativo, APIs ou banco de dados neste pacote.
