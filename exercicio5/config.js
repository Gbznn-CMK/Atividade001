
require('dotenv').config();

const variaveisObrigatorias = [
    'PAYMENT_API_KEY',
    'JWT_SECRET'
];

const variaveisFaltando = variaveisObrigatorias.filter(
    (variavel) => !process.env[variavel]?.trim()
);

if (variaveisFaltando.length > 0) {
    console.error('ERRO: Configurações obrigatórias ausentes:');
    variaveisFaltando.forEach((variavel) => {
        console.error(`- ${variavel}`);
    });

    process.exit(1);
}

const config = {
    app: {
        port: Number(process.env.PORT) || 5000,
        env: process.env.NODE_ENV || 'development'
    },

    db: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT) || 5432
    },

    auth: {
        paymentApiKey: process.env.PAYMENT_API_KEY,
        jwtSecret: process.env.JWT_SECRET
    }
};

module.exports = config;