require ('dotenv') .config();

 function conectarBanco(arquivoNovo) {
    
    if(process.env.NODE_ENV ===development){
        console.log(" [MODO DESENVOLVIMENTO] Conectando ao banco local em: localhost:5432 com LOGS DETALHADOS.")
    }else if (process.env.NODE_ENV ===production) {
        console.log(" [MODO PRODUÇÃO] Conexão segura estabelecida. Logs detalhados desativados")
    }

}



