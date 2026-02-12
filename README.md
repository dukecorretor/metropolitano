# Metropolitan by Lindenberg

## 🏢 Sobre o Projeto

Metropolitan by Lindenberg é um residencial de ultra-luxo localizado em Chácara Santo Antônio, São Paulo. Com 546 unidades de studios a 2 suítes, o empreendimento combina arquitetura internacional (Perkins & Will), segurança blindada, rooftop de 90m e piscina de 25m.

**Website:** https://metropolitanBy.ezteccorretor.com.br

---

## 📂 Estrutura do Projeto

```
metropolitano/
├── index.html                      # Página principal
├── quem-somos.html                 # Página Quem Somos
├── codigo-de-etica.html            # Código de Ética
├── obrigado.html                   # Página de obrigado
├── metropolitanBy.css              # Estilos principais
├── metropolitanBy.js               # Scripts principais
├── netlify.toml                    # Configuração do Netlify
├── netlify/
│   └── functions/
│       ├── cadastro.js             # Função para formulário de cadastro
│       └── comentario.js           # Função para comentários
├── sitemap.xml                     # Mapa do site para SEO
├── robots.txt                      # Arquivo de robots
├── package.json                    # Dependências do Node
├── .env.example                    # Exemplo de variáveis de ambiente
├── .gitignore                      # Arquivo git ignore
└── .netlifyignore                  # Arquivo netlify ignore
```

---

## 🚀 Deployment no Netlify

### 1. Pré-requisitos

- Conta no [Netlify](https://app.netlify.com)
- GitHub com o repositório do projeto
- Node.js 18.x ou superior

### 2. Conectar ao Netlify

**Opção A: Via CLI**

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login no Netlify
netlify login

# Deploy do projeto
netlify deploy --prod
```

**Opção B: Via GitHub**

1. Faça push do repositório para GitHub
2. Acesse [Netlify](https://app.netlify.com)
3. Clique em "New site from Git"
4. Selecione GitHub e autorize
5. Escolha o repositório `metropolitano`
6. Clique em "Deploy site"

### 3. Configurar Variáveis de Ambiente

No painel do Netlify:

1. Site Settings → Build & Deploy → Environment
2. Clique em "Edit variables"
3. Adicione as seguintes variáveis:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
SMTP_FROM=seu-email@gmail.com
ADMIN_EMAIL=contatoequipecorretores@gmail.com
GOOGLE_ANALYTICS_ID=G-QGLQBKLD4D
```

### 4. Configurar Domínio Customizado

1. Site Settings → Domain management
2. Clique em "Add custom domain"
3. Digite: `metropolitanBy.ezteccorretor.com.br`
4. Siga as instruções para configurar DNS no registrador

---

## 📧 Email (SMTP)

As Netlify Functions usam SMTP para enviar emails. Recomendamos:

### Gmail (Grátis)

1. Ative 2FA na sua conta Google
2. Gere uma [Senha de App](https://myaccount.google.com/apppasswords)
3. Use essa senha no `SMTP_PASS`

### SendGrid, Mailgun, etc.

Você pode usar qualquer provedor SMTP padrão. Atualize `SMTP_HOST` e `SMTP_PORT` conforme necessário.

---

## 🔧 Desenvolvimento Local

### Instalar Dependências

```bash
npm install
```

### Rodar o Netlify Dev

```bash
netlify dev
```

Este comando:
- Inicia um servidor local em `http://localhost:3000`
- Executa as Netlify Functions localmente
- Sincroniza variáveis de ambiente

### Testar as Functions

```bash
# Cadastro
curl -X POST http://localhost:3000/.netlify/functions/cadastro \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test","telefone":"11999999999","email":"test@example.com"}'

# Comentário
curl -X POST http://localhost:3000/.netlify/functions/comentario \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test","email":"test@example.com","comentario":"Great property!"}'
```

---

## 🌐 SEO & Metadados

O projeto inclui:

- ✅ Meta tags otimizadas para Metropolitan by Lindenberg
- ✅ Open Graph para compartilhamento em redes sociais
- ✅ Twitter Card
- ✅ JSON-LD Schema estruturado
- ✅ Sitemap XML
- ✅ Robots.txt otimizado
- ✅ Cache headers otimizados

---

## 📱 Responsividade

O site é totalmente responsivo para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

---

## 🔒 Segurança

- Headers de segurança configurados no `netlify.toml`
- HTTPS automático
- Proteção contra XSS, Clickjacking, etc.
- Validação de formulários server-side

---

## 📊 Analytics

Google Analytics já está configurado com ID: `G-QGLQBKLD4D`

Para customizar, edite a tag no `<head>` do `index.html`.

---

## 🤝 Contato

**Email:** contatoequipecorretores@gmail.com  
**Telefone:** +55 11 95460-6125  
**Endereço:** Rua Bento de Matos, 241 - Chácara Santo Antônio, São Paulo - SP

---

## 📄 Licença

MIT License - 2025 Metropolitan by Lindenberg