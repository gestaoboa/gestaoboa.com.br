// Configurações para integração com Mercado Pago
// IMPORTANTE: Em um ambiente real, as chaves privadas devem ser mantidas APENAS no lado do servidor
export const MercadoPagoConfig = {
  // Esta chave pública pode ser exposta no frontend (usada para gerar tokens de cartão)
  publicKey: "TEST-8c4c2249-2dbf-434e-995b-9ba45dc110f0", // Substitua por sua Public Key real

  // Estas informações são apenas para referência e devem existir apenas no backend em um app real
  accessToken:
    "TEST-4726401245928053-092310-1d01f80f841f10d3a3dc618cad32793b-1229289203", // NUNCA exponha em código de front-end
  integratorId: "123456789", // ID opcional de integrador se você for um parceiro Mercado Pago
};

// URLs para ambiente de produção e teste
export const apiUrls = {
  sandbox: "https://api.mercadopago.com/v1",
  production: "https://api.mercadopago.com/v1",
};

// Tipos de documentos aceitos no Brasil
export const documentTypes = [
  { id: "CPF", name: "CPF" },
  { id: "CNPJ", name: "CNPJ" },
];
