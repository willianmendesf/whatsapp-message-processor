const express = require('express');
const logger = require('./utils/logger');

const { setupAppRoutes } = require('./routes/appRoutes');
const { setupAuthRoutes } = require('./routes/authRoutes');
const { setupApiRoutes } = require('./routes/routes');
const { setupMiddlewares } = require('./config/middleware');
const { initializeWhatsApp, startServer } = require('./config/server');

// Log de inicialização
logger.info('🚀 Aplicação iniciando...');

const app = express();
const PORT = process.env.PORT || 3200;

// Inicializa o cliente WhatsApp primeiro
initializeWhatsApp();

// Configura middlewares
setupMiddlewares(app);

// Rotas da API
setupApiRoutes(app);

// Rotas principais da aplicação
setupAppRoutes(app);

// Rotas de autenticação
setupAuthRoutes(app);

startServer(app, 3200)