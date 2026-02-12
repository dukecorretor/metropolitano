const nodemailer = require('nodemailer');

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
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método não permitido' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { nome, email, telefone, comentario } = data;

    if (!nome || !email || !comentario) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Campos obrigatórios faltando' })
      };
    }

    const emailAdmin = {
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL || 'contatoequipecorretores@gmail.com',
      subject: '💬 Novo comentário - Metropolitan by Lindenberg',
      html: `
        <h2>Novo comentário recebido!</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
        <p><strong>Comentário:</strong></p>
        <p>${comentario.replace(/\n/g, '<br>')}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
      `
    };

    await transporter.sendMail(emailAdmin);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Comentário enviado com sucesso!'
      })
    };

  } catch (error) {
    console.error('Erro ao processar comentário:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Erro ao enviar comentário.',
        details: error.message
      })
    };
  }
};
