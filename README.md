# PrimeConnect IA - Automação de WhatsApp & Chatbots

Site institucional e landing page de alta conversão da **PrimeConnect IA**.

---

## 🚀 Como hospedar no GitHub Pages

O projeto já está **100% configurado** para o GitHub Pages com caminhos relativos (`base: './'`), suporte a rotas e fluxo automatizado com **GitHub Actions**.

### Opção 1: Implantação Automática via GitHub Actions (Recomendado)

1. Envie o código para o seu repositório no GitHub:
   ```bash
   git add .
   git commit -m "Configuração para GitHub Pages"
   git push origin main
   ```
2. No seu repositório no GitHub, acesse:
   **Settings** (Configurações) > **Pages** (no menu lateral esquerdo).
3. Em **Build and deployment** > **Source**, selecione:
   **`GitHub Actions`**.
4. Pronto! O workflow `.github/workflows/deploy.yml` será executado automaticamente e publicará o site. Em poucos segundos, o link estará disponível (ex: `https://seu-usuario.github.io/nome-do-repositorio/`).

---

### Opção 2: Publicar a pasta `dist` manualmente ou via Branch `gh-pages`

Se preferir gerar os arquivos estáticos e enviar apenas a pasta de build:

1. Gere a pasta compilada:
   ```bash
   npm run build
   ```
2. O Vite gerará todos os arquivos prontos na pasta `dist/` (incluindo `index.html`, `404.html`, `.nojekyll` e assets otimizados com caminhos relativos).
3. Você pode publicar o conteúdo da pasta `dist/` diretamente na branch `gh-pages` ou em `docs/`.

---

## 🛠️ Comandos Locais

- `npm install`: Instala as dependências.
- `npm run dev`: Inicia o servidor local de desenvolvimento.
- `npm run build`: Compila o projeto otimizado para produção na pasta `dist/`.
- `npm run preview`: Visualiza o build de produção localmente.
