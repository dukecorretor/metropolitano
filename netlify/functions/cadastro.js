const nodemailer = require('nodemailer');

// Configurar transportador de email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

exports.handler = async (event) => {
  // Apenas aceitar POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método não permitido' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { nome, telefone, email } = data;

    // Validação básica
    if (!nome || !telefone || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Campos obrigatórios faltando' })
      };
    }

    // Email para o administrador
    const adminEmail = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL || 'contatoequipecorretores@gmail.com',
      subject: '🏢 Novo cadastro - Metropolitan by Lindenberg',
      html: `
        <h2>Novo cadastro recebido!</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        <hr>
        <p>Acesse o painel do Netlify para gerenciar inscrições.</p>
      `
    };

    // Email de confirmação para o cliente
    const clientEmail = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Cadastro recebido - Metropolitan by Lindenberg',
      html: `
        <h2>Obrigado por se cadastrar!</h2>
        <p>Olá <strong>${nome}</strong>,</p>
        <p>Seu cadastro foi recebido com sucesso. Nossa equipe entrará em contato em breve pelo telefone <strong>${telefone}</strong>.</p>
        <p>Qualquer dúvida, nos procure em <strong>contatoequipecorretores@gmail.com</strong></p>
        <hr>
        <p>Metropolitan by Lindenberg<br>Lindenberg & EZTEC</p>
      `
    };

    // Enviar ambos os emails
    await transporter.sendMail(adminEmail);
    await transporter.sendMail(clientEmail);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Cadastro realizado com sucesso!'
      })
    };

  } catch (error) {
    console.error('Erro ao processar cadastro:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Erro ao processar seu cadastro. Tente novamente.',
        details: error.message
      })
    };
  }
};
