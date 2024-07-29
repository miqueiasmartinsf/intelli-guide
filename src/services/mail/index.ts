import nodemailer from "nodemailer";

// Configuração do transporter do Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    auth: {
        user: process.env.EMAIL_USERNAME, // Seu endereço de e-mail
        pass: process.env.EMAIL_APP_PASSWORD, // Sua senha de e-mail
    },
    from: process.env.EMAIL_USERNAME,
});

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
    await transporter.sendMail({
        from: '"Intelli-Guide" <wesleyribas2015@gmail.com>', // Remetente
        to: email, // Destinatário
        subject: "Intelli-Guide - Código de Verificação em Duas Etapas", // Assunto do E-mail
        html: `<p>Olá,</p><p>Seu código de verificação em duas etapas é <b>${token}</b>. Use este código para completar seu login com segurança.</p><p>Atenciosamente,<br/>Equipe Intelli-Guide</p>`, // Corpo do e-mail
    });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/new-password?token=${token}`;

    await transporter.sendMail({
        from: '"Intelli-Guide" <wesleyribas2015@gmail.com>',
        to: email,
        subject: "Intelli-Guide - Redefinição de Senha",
        html: `<p>Olá,</p><p>Recebemos uma solicitação para redefinir sua senha. Clique <a href="${resetLink}">aqui</a> para redefinir sua senha.</p><p>Se você não solicitou a redefinição de senha, por favor ignore este e-mail.</p><p>Atenciosamente,<br/>Equipe Intelli-Guide</p>`,
    });
};

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/new-verification?token=${token}`;

    await transporter.sendMail({
        from: '"Intelli-Guide" <wesleyribas2015@gmail.com>',
        to: email,
        subject: "Intelli-Guide - Confirmação de E-mail",
        html: `<p>Olá,</p><p>Obrigado por se registrar no Intelli-Guide. Clique <a href="${confirmLink}">aqui</a> para confirmar seu e-mail.</p><p>Atenciosamente,<br/>Equipe Intelli-Guide</p>`,
    });
};