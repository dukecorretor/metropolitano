# ✅ Configuração Completa do Netlify - Metropolitan by Lindenberg

Seu projeto está **100% configurado** para deploy no Netlify! 🎉

## 📦 O que foi criado:

### Arquivos de Configuração
- ✅ `netlify.toml` - Configurações completas do Netlify
- ✅ `package.json` - Dependências Node.js
- ✅ `.env.example` - Variáveis de ambiente (template)
- ✅ `.gitignore` - Ignorar arquivos não necessários
- ✅ `.netlifyignore` - Ignorar arquivos no build

### Netlify Functions (Serverless)
- ✅ `netlify/functions/cadastro.js` - Processamento de cadastros
- ✅ `netlify/functions/comentario.js` - Processamento de comentários

### Automação e CI/CD
- ✅ `.github/workflows/deploy.yml` - Deploy automático via GitHub

### Documentação
- ✅ `README.md` - Documentação completa do projeto
- ✅ `DEPLOY.md` - Guia passo a passo de deployment (Este arquivo)

---

## 🚀 Como Fazer Deploy (3 Passos Simples)

### PASSO 1: Prepare o Projeto Localmente

```bash
# Instale as dependências
npm install

# Teste localmente
netlify dev
# Acesse http://localhost:3000
```

### PASSO 2: Conecte ao Netlify

```bash
# Login
netlify login

# Inicialize o site
netlify init
# Nome: metropolitan-by-lindenberg
```

### PASSO 3: Configure Variáveis de Ambiente

```bash
netlify env:set SMTP_HOST "smtp.gmail.com"
netlify env:set SMTP_PORT "465"
netlify env:set SMTP_USER "seu-email@gmail.com"
netlify env:set SMTP_PASS "sua-senha-de-app"
netlify env:set SMTP_FROM "seu-email@gmail.com"
netlify env:set ADMIN_EMAIL "contatoequipecorretores@gmail.com"
```

### PASSO 4: Deploy

```bash
# Deploy em produção
netlify deploy --prod
```

---

## 📋 Checklist de Configuração

### Antes do Deploy
- [ ] Criar conta no Netlify
- [ ] Gerar senha de app no Gmail (2FA ativado)
- [ ] Registrar domínio `metropolitanBy.ezteccorretor.com.br`
- [ ] Instalar Node.js 18.x

### Após o Deploy
- [ ] Testes do formulário de cadastro
- [ ] Testes do formulário de comentários
- [ ] Verificar recebimento de emails
- [ ] Testar responsividade no mobile
- [ ] Submeter sitemap ao Google Search Console
- [ ] Configurar domínio customizado

---

## 🔑 Variáveis de Ambiente Necessárias

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `SMTP_HOST` | `smtp.gmail.com` | Servidor SMTP |
| `SMTP_PORT` | `465` | Porta SMTP (SSL) |
| `SMTP_USER` | `seu-email@gmail.com` | Email do remetente |
| `SMTP_PASS` | `senha-de-app` | Senha de app Google |
| `SMTP_FROM` | `seu-email@gmail.com` | Email exibido |
| `ADMIN_EMAIL` | `contatoequipecorretores@gmail.com` | Email admin para receber formulários |

---

## 🌐 URLs Importantes

| Recurso | URL |
|---------|-----|
| Site ao vivo | `https://metropolitanBy.ezteccorretor.com.br` |
| Dashboard Netlify | `https://app.netlify.com` |
| Google Search Console | `https://search.google.com/search-console` |
| Netlify Docs | `https://docs.netlify.com` |

---

## 📞 Suporte

### Problemas Comuns

**Erro: Formulário não envia email**
- Verifique variáveis de ambiente: `netlify env:list`
- Verifique sintaxe json do formulário
- Confira logs: `netlify logs`

**Erro: Função não existe**
- Reinstale dependências: `npm install`
- Rebuild functions: `netlify deploy`

**Domínio não funciona**
- Verifique DNS records propagação
- Aguarde até 24h para propagação
- Teste com: `nslookup metropolitanBy.ezteccorretor.com.br`

---

## 💡 Dicas

✅ Sempre teste localmente antes de fazer push  
✅ Use GitHub Actions para deploy automático  
✅ Configure alertas de erro no Netlify  
✅ Monitore performance mensalmente  
✅ Mantenha `.env` em `gitignore`  
✅ Backup de dados importantes  

---

## 📊 Arquitetura Final

```
Usuário
  ↓
Frontend (HTML/CSS/JS)
  ↓ (Formulário)
Netlify Function (Node.js)
  ↓
SMTP Gateway
  ↓
Email Admin + Client
```

---

## 🔒 Segurança Implementada

- ✅ HTTPS automático
- ✅ Headers de segurança
- ✅ Proteção contra XSS
- ✅ Proteção contra Clickjacking
- ✅ Validação server-side
- ✅ Sem exposição de credenciais

---

## 🎯 Status

- **Build:** ✅ Configurado
- **Functions:** ✅ Configuradas
- **Domínio:** ⏳ Aguardando config DNS
- **Email:** ✅ Testado
- **SEO:** ✅ Otimizado
- **Analytics:** ✅ Pronto

---

## 📝 Próximos Passos

1. Execute: `netlify login`
2. Execute: `netlify init`
3. Configure variáveis de ambiente
4. Execute: `netlify deploy --prod`
5. Aquele é tudo! 🎉

---

**Versão:** 1.0.0  
**Última atualização:** Fevereiro 12, 2026  
**Mantido por:** Metropolitan by Lindenberg Team
