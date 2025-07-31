const logger = require('../utils/logger');

/**
 * Inicia o servidor na porta especificada
 * @param {Express} app - Instância do Express
 * @param {number} port - Porta do servidor
 */
function startServer(app, port) {
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
    logger.info(`🚀 Servidor iniciado na porta ${port}`);
  });
}

/**
 * Inicializa o cliente WhatsApp
 */
function initializeWhatsApp() {
  logger.info('📱 Inicializando cliente WhatsApp...');
  require('../services/client');
}

module.exports = { 
  initializeWhatsApp,
  startServer 
};
