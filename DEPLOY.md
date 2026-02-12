# 🚀 Guia de Deployment - Metropolitan by Lindenberg

## Pré-requisitos

- [ ] Conta no Netlify criada
- [ ] Repositório GitHub com o projeto
- [ ] Node.js 18.x instalado localmente
- [ ] Git configurado

---

## Passo 1: Preparar o Projeto Localmente

### 1.1 Instalar dependências

```bash
cd /workspaces/metropolitano
npm install
```

### 1.2 Testar localmente

```bash
netlify dev
```

Acesse `http://localhost:3000` e verifique se tudo funciona.

---

## Passo 2: Conectar ao Netlify

### 2.1 Instalar Netlify CLI (se não tiver)

```bash
npm install -g netlify-cli
```

### 2.2 Fazer login

```bash
netlify login
```

Isso abrirá o navegador para você autorizar a CLI.

### 2.3 Inicializar o site

```bash
netlify init
```

Siga as instruções:
- Escolha "Create & configure a new site"
- Selecione a equipe (se houver)
- Dê um nome do site: `metropolitan-by-lindenberg`
- Deixe as configurações padrão

---

## Passo 3: Configurar Variáveis de Ambiente

### Via CLI

```bash
netlify env:set SMTP_HOST "smtp.gmail.com"
netlify env:set SMTP_PORT "465"
netlify env:set SMTP_USER "seu-email@gmail.com"
netlify env:set SMTP_PASS "sua-senha-de-app"
netlify env:set SMTP_FROM "seu-email@gmail.com"
netlify env:set ADMIN_EMAIL "contatoequipecorretores@gmail.com"
```

### Via Dashboard Netlify

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Selecione seu site
3. Site settings → Build & Deploy → Environment
4. Clique em "Edit variables"
5. Adicione cada variável

---

## Passo 4: Configurar Domínio

### 4.1 Adicionar domínio customizado

1. Site Settings → Domain management
2. Clique em "Add custom domain"
3. Digite: `metropolitanBy.ezteccorretor.com.br`

### 4.2 Configurar DNS (no registro do domínio)

Você receberá uma instrução como:

```
Nome: metropolitanBy.ezteccorretor.com.br
Tipo: CNAME
Valor: metropolitan-by-lindenberg.netlify.app
```

Adicione este registro no seu provedor de domínio.

---

## Passo 5: Deploy

### Via CLI (Rápido)

```bash
# Deploy em staging (preview)
netlify deploy

# Deploy em produção
netlify deploy --prod
```

### Via GitHub (Automático)

1. Faça push para GitHub:

```bash
git add .
git commit -m "Setup Netlify deployment"
git push origin main
```

2. Vá para Netlify → Site settings → Build & Deploy → GitHub
3. Conecte seu repositório GitHub
4. Selecione `main` como branch principal
5. Salve

Agora, toda vez que você fazer push para `main`, o Netlify fará deploy automático!

---

## Passo 6: Testar Deploy

### 6.1 Testar formulários

Acesse seu site e teste:
- Formulário de cadastro
- Formulário de comentários

Você deve receber emails em seu `ADMIN_EMAIL`.

### 6.2 Testar SEO

Use estas ferramentas para validar:

- [Google Search Console](https://search.google.com/search-console)
```

Adicione seu sitemap:
```
https://metropolitanBy.ezteccorretor.com.br/sitemap.xml
```

- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Schema.org Validator](https://validator.schema.org)

---

## Passo 7: Configurar CNAME (Opcional)

Se quiser usar apenas `metropolitanBy.ezteccorretor.com.br` (sem www):

No seu provedor de DNS, crie:

```
Nome: metropolitanBy
Tipo: CNAME
Valor: metropolitan-by-lindenberg.netlify.app
TTL: 3600
```

---

## Troubleshooting

### Erro: "ENOENT: no such file or directory"

```bash
# Reinstale dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "SMTP connection timeout"

- Verifique credenciais SMTP
- Confirme que a senha de app foi gerada (Gmail)
- Teste com Telnet: `telnet smtp.gmail.com 465`

### Deploy não atualiza

```bash
# Force rebuild
netlify deploy --prod --trigger
```

### Formulários não enviam emails

- Verifique logs: `netlify logs`
- Verifique variáveis de ambiente
- Teste a função manualmente:

```bash
curl -X POST https://seu-site.netlify.app/.netlify/functions/cadastro \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test","telefone":"11999999999","email":"test@example.com"}'
```

---

## Status do Deployment

Após o deploy, você pode acompanhar:

1. **Logs de Build:** Site → Deploys → Clique no deploy
2. **Logs de Função:** Site → Functions → Clique na função
3. **Monitoramento:** Site → Analytics

---

## Próximos Passos

- [ ] Submeter sitemap ao Google Search Console
- [ ] Configurar Bing Webmaster Tools
- [ ] Adicionar Google Analytics 4
- [ ] Configurar backup automático
- [ ] Configurar alertas de erro
- [ ] Monitorar performance mensal

---

## Support

Para issues com Netlify: [support.netlify.com](https://support.netlify.com)

Última atualização: Fevereiro de 2026
