const config = require('./config');
console.log('Aplicação inicializada com sucesso!');
console.log('Configurações carregadas:');
console.log('Aplicação:');
console.log('Porta:', config.app.port);
console.log('Ambiente:', config.app.env);
console.log('Banco de dados:');
console.log('Host:', config.db.host);
console.log('Porta:', config.db.port);
console.log('Segurança:');
console.log(
    'Chave da API de pagamentos:',
    config.auth.paymentApiKey ? '****CONFIGURADA****' : 'NÃO CONFIGURADA'
);
console.log(
    'Segredo JWT:',
    config.auth.jwtSecret ? '****CONFIGURADO****' : 'NÃO CONFIGURADO'
);