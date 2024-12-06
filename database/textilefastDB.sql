-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: textilefast
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avaliacoes_fornecedores`
--

DROP TABLE IF EXISTS avaliacoes_fornecedores;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE avaliacoes_fornecedores (
  avaliacao_id int(11) NOT NULL AUTO_INCREMENT,
  comprador_id int(11) DEFAULT NULL,
  fornecedor_id int(11) DEFAULT NULL,
  qualidade int(11) DEFAULT NULL CHECK (qualidade between 1 and 5),
  condicoes_financeiras int(11) DEFAULT NULL CHECK (condicoes_financeiras between 1 and 5),
  pontualidade int(11) DEFAULT NULL CHECK (pontualidade between 1 and 5),
  prazo_entrega int(11) DEFAULT NULL CHECK (prazo_entrega between 1 and 5),
  comentario text DEFAULT NULL,
  data_avaliacao timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (avaliacao_id),
  KEY comprador_id (comprador_id),
  KEY fornecedor_id (fornecedor_id),
  CONSTRAINT avaliacoes_fornecedores_ibfk_1 FOREIGN KEY (comprador_id) REFERENCES empresas (empresa_id) ON DELETE SET NULL,
  CONSTRAINT avaliacoes_fornecedores_ibfk_2 FOREIGN KEY (fornecedor_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacoes_fornecedores`
--

LOCK TABLES avaliacoes_fornecedores WRITE;
/*!40000 ALTER TABLE avaliacoes_fornecedores DISABLE KEYS */;
/*!40000 ALTER TABLE avaliacoes_fornecedores ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrinho`
--

DROP TABLE IF EXISTS carrinho;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE carrinho (
  carrinho_id int(11) NOT NULL AUTO_INCREMENT,
  comprador_id int(11) NOT NULL,
  data_criacao timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (carrinho_id),
  KEY comprador_id (comprador_id),
  CONSTRAINT carrinho_ibfk_1 FOREIGN KEY (comprador_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho`
--

LOCK TABLES carrinho WRITE;
/*!40000 ALTER TABLE carrinho DISABLE KEYS */;
/*!40000 ALTER TABLE carrinho ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS categorias;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE categorias (
  categoria_id int(11) NOT NULL AUTO_INCREMENT,
  nome_categoria varchar(100) NOT NULL,
  descricao text DEFAULT NULL,
  PRIMARY KEY (categoria_id),
  UNIQUE KEY nome_categoria (nome_categoria)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES categorias WRITE;
/*!40000 ALTER TABLE categorias DISABLE KEYS */;
INSERT INTO categorias VALUES (1,'Roupas','Vestuário em geral, incluindo camisetas, uniformes e similares.'),(2,'Banho','Produtos para uso em banheiros, como toalhas.'),(3,'Cama','Itens para cama, como lençóis e cobertores.'),(4,'Cortinas','Cortinas para bloquear luz e decorar ambientes.'),(5,'Uniformes','Conjuntos de uniformes escolares ou profissionais.'),(6,'Cozinha','Produtos têxteis para uso em cozinhas, como aventais.'),(7,'Tapetes','Tapetes para salas, quartos e outros ambientes.'),(8,'Acessórios','Itens como bolsas, mochilas e similares.'),(9,'Cobertores','Cobertores e mantas para aquecer e decorar.'),(10,'Praia','Itens específicos para uso na praia, como bolsas impermeáveis.'),(11,'Fecho','Itens de fechamento, botôes, zippers, velcros, etc.');
/*!40000 ALTER TABLE categorias ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuracoes_empresa`
--

DROP TABLE IF EXISTS configuracoes_empresa;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE configuracoes_empresa (
  configuracao_id int(11) NOT NULL AUTO_INCREMENT,
  empresa_id int(11) NOT NULL,
  chave varchar(100) NOT NULL,
  valor text DEFAULT NULL,
  PRIMARY KEY (configuracao_id),
  KEY empresa_id (empresa_id),
  CONSTRAINT configuracoes_empresa_ibfk_1 FOREIGN KEY (empresa_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracoes_empresa`
--

LOCK TABLES configuracoes_empresa WRITE;
/*!40000 ALTER TABLE configuracoes_empresa DISABLE KEYS */;
/*!40000 ALTER TABLE configuracoes_empresa ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuracoes_seguranca`
--

DROP TABLE IF EXISTS configuracoes_seguranca;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE configuracoes_seguranca (
  seguranca_id int(11) NOT NULL AUTO_INCREMENT,
  usuario_id int(11) NOT NULL,
  dois_fatores tinyint(1) DEFAULT 0,
  pergunta_seguranca varchar(255) DEFAULT NULL,
  resposta_seguranca varchar(255) DEFAULT NULL,
  PRIMARY KEY (seguranca_id),
  KEY usuario_id (usuario_id),
  CONSTRAINT configuracoes_seguranca_ibfk_1 FOREIGN KEY (usuario_id) REFERENCES usuarios (usuario_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracoes_seguranca`
--

LOCK TABLES configuracoes_seguranca WRITE;
/*!40000 ALTER TABLE configuracoes_seguranca DISABLE KEYS */;
/*!40000 ALTER TABLE configuracoes_seguranca ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentos_fiscais`
--

DROP TABLE IF EXISTS documentos_fiscais;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE documentos_fiscais (
  documento_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  pedido_id int(11) DEFAULT NULL,
  numero_nota_fiscal varchar(50) NOT NULL,
  caminho_documento text DEFAULT NULL,
  data_emissao timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (documento_id),
  KEY pedido_id (pedido_id),
  CONSTRAINT documentos_fiscais_ibfk_1 FOREIGN KEY (pedido_id) REFERENCES pedidos (pedido_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos_fiscais`
--

LOCK TABLES documentos_fiscais WRITE;
/*!40000 ALTER TABLE documentos_fiscais DISABLE KEYS */;
/*!40000 ALTER TABLE documentos_fiscais ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS empresas;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE empresas (
  empresa_id int(11) NOT NULL AUTO_INCREMENT,
  cnpj varchar(14) NOT NULL,
  razao_social varchar(255) NOT NULL,
  nome_fantasia varchar(255) DEFAULT NULL,
  tipo_empresa enum('comprador','fornecedor') NOT NULL,
  email varchar(255) NOT NULL,
  telefone varchar(20) DEFAULT NULL,
  endereco text DEFAULT NULL,
  reclameaqui text DEFAULT NULL,
  senha text DEFAULT NULL,
  data_cadastro timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (empresa_id),
  UNIQUE KEY cnpj (cnpj),
  UNIQUE KEY email (email)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES empresas WRITE;
/*!40000 ALTER TABLE empresas DISABLE KEYS */;
INSERT INTO empresas VALUES (1,'44.444.444/000','AAAAAAAAA','CASAS BAHIA','fornecedor','baianino@gmail.com','','','https://www.reclameaqui.com.br/empresa/casas-bahia-loja-online/','$2b$10$Az5EgAoQ4ecLexC9wlmIG.3T/BYbD.s9UpOjQmReia93o4wbnVGnS','2024-11-24 12:07:45'),(5,'55.555.555/000','magalu fds kkkkkkk','MAGAZINE LUIZA','fornecedor','magalu@gmail.com','','','https://www.reclameaqui.com.br/empresa/magazine-luiza-loja-online/','$2b$10$.vMmTF8b4SXRmkKcWylxA.LFOGDZeq7CrDtuST1HHar.rReyUprHG','2024-11-28 13:06:36'),(6,'99.999.999/000','pq sim','DAPHINY STORE','fornecedor','daphstore@gmail.com','','',NULL,'$2b$10$TcNWYBa9etlhkpzenvWNDOi.VsVfIUMaETdupJBTb9jW2z5.8cF9y','2024-12-01 14:17:39');
/*!40000 ALTER TABLE empresas ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS enderecos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE enderecos (
  endereco_id int(11) NOT NULL AUTO_INCREMENT,
  empresa_id int(11) NOT NULL,
  tipo enum('comercial','entrega','faturamento') NOT NULL,
  endereco text NOT NULL,
  cidade varchar(100) NOT NULL,
  estado varchar(100) NOT NULL,
  cep varchar(10) NOT NULL,
  pais varchar(100) NOT NULL,
  PRIMARY KEY (endereco_id),
  KEY empresa_id (empresa_id),
  CONSTRAINT enderecos_ibfk_1 FOREIGN KEY (empresa_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES enderecos WRITE;
/*!40000 ALTER TABLE enderecos DISABLE KEYS */;
/*!40000 ALTER TABLE enderecos ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historico_precos`
--

DROP TABLE IF EXISTS historico_precos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE historico_precos (
  historico_id int(11) NOT NULL AUTO_INCREMENT,
  produto_id int(11) NOT NULL,
  preco_anterior decimal(10,2) NOT NULL,
  preco_novo decimal(10,2) NOT NULL,
  data_alteracao timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (historico_id),
  KEY produto_id (produto_id),
  CONSTRAINT historico_precos_ibfk_1 FOREIGN KEY (produto_id) REFERENCES produtos (produto_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_precos`
--

LOCK TABLES historico_precos WRITE;
/*!40000 ALTER TABLE historico_precos DISABLE KEYS */;
/*!40000 ALTER TABLE historico_precos ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagens_produtos`
--

DROP TABLE IF EXISTS imagens_produtos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE imagens_produtos (
  imagem_id int(11) NOT NULL AUTO_INCREMENT,
  produto_id int(11) NOT NULL,
  url_imagem text NOT NULL,
  descricao text DEFAULT NULL,
  data_upload timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (imagem_id),
  KEY produto_id (produto_id),
  CONSTRAINT imagens_produtos_ibfk_1 FOREIGN KEY (produto_id) REFERENCES produtos (produto_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens_produtos`
--

LOCK TABLES imagens_produtos WRITE;
/*!40000 ALTER TABLE imagens_produtos DISABLE KEYS */;
/*!40000 ALTER TABLE imagens_produtos ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itens_carrinho`
--

DROP TABLE IF EXISTS itens_carrinho;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE itens_carrinho (
  item_carrinho_id int(11) NOT NULL AUTO_INCREMENT,
  carrinho_id int(11) NOT NULL,
  produto_id int(11) NOT NULL,
  quantidade int(11) NOT NULL,
  data_adicionado timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (item_carrinho_id),
  KEY carrinho_id (carrinho_id),
  KEY produto_id (produto_id),
  CONSTRAINT itens_carrinho_ibfk_1 FOREIGN KEY (carrinho_id) REFERENCES carrinho (carrinho_id) ON DELETE CASCADE,
  CONSTRAINT itens_carrinho_ibfk_2 FOREIGN KEY (produto_id) REFERENCES produtos (produto_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itens_carrinho`
--

LOCK TABLES itens_carrinho WRITE;
/*!40000 ALTER TABLE itens_carrinho DISABLE KEYS */;
/*!40000 ALTER TABLE itens_carrinho ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itens_pedido`
--

DROP TABLE IF EXISTS itens_pedido;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE itens_pedido (
  item_id int(11) NOT NULL AUTO_INCREMENT,
  pedido_id int(11) DEFAULT NULL,
  produto_id int(11) DEFAULT NULL,
  quantidade int(11) NOT NULL,
  preco_unitario decimal(10,2) NOT NULL,
  PRIMARY KEY (item_id),
  KEY pedido_id (pedido_id),
  KEY produto_id (produto_id),
  CONSTRAINT itens_pedido_ibfk_1 FOREIGN KEY (pedido_id) REFERENCES pedidos (pedido_id) ON DELETE CASCADE,
  CONSTRAINT itens_pedido_ibfk_2 FOREIGN KEY (produto_id) REFERENCES produtos (produto_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itens_pedido`
--

LOCK TABLES itens_pedido WRITE;
/*!40000 ALTER TABLE itens_pedido DISABLE KEYS */;
/*!40000 ALTER TABLE itens_pedido ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs_acesso`
--

DROP TABLE IF EXISTS logs_acesso;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE logs_acesso (
  log_id int(11) NOT NULL AUTO_INCREMENT,
  usuario_id int(11) DEFAULT NULL,
  acao varchar(255) NOT NULL,
  detalhes text DEFAULT NULL,
  data_acesso timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (log_id),
  KEY usuario_id (usuario_id),
  CONSTRAINT logs_acesso_ibfk_1 FOREIGN KEY (usuario_id) REFERENCES usuarios (usuario_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs_acesso`
--

LOCK TABLES logs_acesso WRITE;
/*!40000 ALTER TABLE logs_acesso DISABLE KEYS */;
/*!40000 ALTER TABLE logs_acesso ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensagens`
--

DROP TABLE IF EXISTS mensagens;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE mensagens (
  mensagem_id int(11) NOT NULL AUTO_INCREMENT,
  remetente_id int(11) NOT NULL,
  destinatario_id int(11) NOT NULL,
  conteudo text NOT NULL,
  data_mensagem timestamp NOT NULL DEFAULT current_timestamp(),
  lida tinyint(1) DEFAULT 0,
  PRIMARY KEY (mensagem_id),
  KEY remetente_id (remetente_id),
  KEY destinatario_id (destinatario_id),
  CONSTRAINT mensagens_ibfk_1 FOREIGN KEY (remetente_id) REFERENCES usuarios (usuario_id) ON DELETE CASCADE,
  CONSTRAINT mensagens_ibfk_2 FOREIGN KEY (destinatario_id) REFERENCES usuarios (usuario_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensagens`
--

LOCK TABLES mensagens WRITE;
/*!40000 ALTER TABLE mensagens DISABLE KEYS */;
/*!40000 ALTER TABLE mensagens ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificacoes`
--

DROP TABLE IF EXISTS notificacoes;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE notificacoes (
  notificacao_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  empresa_id int(11) DEFAULT NULL,
  mensagem text DEFAULT NULL,
  lida tinyint(1) DEFAULT 0,
  data_notificacao timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (notificacao_id),
  KEY empresa_id (empresa_id),
  CONSTRAINT notificacoes_ibfk_1 FOREIGN KEY (empresa_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificacoes`
--

LOCK TABLES notificacoes WRITE;
/*!40000 ALTER TABLE notificacoes DISABLE KEYS */;
/*!40000 ALTER TABLE notificacoes ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamentos`
--

DROP TABLE IF EXISTS pagamentos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE pagamentos (
  pagamento_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  pedido_id int(11) DEFAULT NULL,
  valor_pago decimal(10,2) NOT NULL,
  data_pagamento timestamp NOT NULL DEFAULT current_timestamp(),
  metodo_pagamento enum('boleto','cartao_credito','transferencia') NOT NULL,
  PRIMARY KEY (pagamento_id),
  KEY pedido_id (pedido_id),
  CONSTRAINT pagamentos_ibfk_1 FOREIGN KEY (pedido_id) REFERENCES pedidos (pedido_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamentos`
--

LOCK TABLES pagamentos WRITE;
/*!40000 ALTER TABLE pagamentos DISABLE KEYS */;
/*!40000 ALTER TABLE pagamentos ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS pedidos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE pedidos (
  pedido_id int(11) NOT NULL AUTO_INCREMENT,
  comprador_id int(11) DEFAULT NULL,
  fornecedor_id int(11) DEFAULT NULL,
  total decimal(10,2) NOT NULL,
  data_pedido timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('pendente','pago','enviado','concluido','cancelado') NOT NULL,
  PRIMARY KEY (pedido_id),
  KEY comprador_id (comprador_id),
  KEY fornecedor_id (fornecedor_id),
  CONSTRAINT pedidos_ibfk_1 FOREIGN KEY (comprador_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE,
  CONSTRAINT pedidos_ibfk_2 FOREIGN KEY (fornecedor_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES pedidos WRITE;
/*!40000 ALTER TABLE pedidos DISABLE KEYS */;
/*!40000 ALTER TABLE pedidos ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preferencias_notificacao`
--

DROP TABLE IF EXISTS preferencias_notificacao;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE preferencias_notificacao (
  preferencia_id int(11) NOT NULL AUTO_INCREMENT,
  empresa_id int(11) NOT NULL,
  tipo_notificacao enum('email','sms','in-app') NOT NULL,
  ativo tinyint(1) DEFAULT 1,
  PRIMARY KEY (preferencia_id),
  KEY empresa_id (empresa_id),
  CONSTRAINT preferencias_notificacao_ibfk_1 FOREIGN KEY (empresa_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferencias_notificacao`
--

LOCK TABLES preferencias_notificacao WRITE;
/*!40000 ALTER TABLE preferencias_notificacao DISABLE KEYS */;
/*!40000 ALTER TABLE preferencias_notificacao ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS produtos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE produtos (
  produto_id int(11) NOT NULL AUTO_INCREMENT,
  nome_produto varchar(255) NOT NULL,
  descricao text DEFAULT NULL,
  preco decimal(10,2) NOT NULL,
  estoque int(11) NOT NULL,
  fornecedor_id int(11) NOT NULL,
  categoria_id int(11) NOT NULL,
  data_cadastro timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (produto_id),
  KEY fornecedor_id (fornecedor_id),
  KEY categoria_id (categoria_id),
  CONSTRAINT produtos_ibfk_1 FOREIGN KEY (fornecedor_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE,
  CONSTRAINT produtos_ibfk_2 FOREIGN KEY (categoria_id) REFERENCES categorias (categoria_id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES produtos WRITE;
/*!40000 ALTER TABLE produtos DISABLE KEYS */;
INSERT INTO produtos VALUES (1,'Camiseta 100% Algodão','Camiseta básica de algodão, ideal para personalização.',29.90,150,6,1,'2024-11-26 14:32:08'),(2,'Toalha de Banho Luxo','Toalha macia e absorvente, disponível em várias cores.',49.90,75,6,2,'2024-11-26 14:32:08'),(3,'Lençol de Casal','Lençol de casal 300 fios, em algodão egípcio.',199.90,30,6,3,'2024-11-26 14:32:08'),(4,'Cortina Blackout','Cortina de tecido grosso, bloqueia luz e ruídos.',89.90,50,6,4,'2024-11-26 14:32:08'),(5,'Uniforme Escolar','Conjunto completo de uniforme escolar (camisa e calça).',99.90,200,6,5,'2024-11-26 14:32:08'),(6,'Avental de Cozinha','Avental resistente a manchas, com bolso frontal.',39.90,100,5,6,'2024-11-26 14:32:08'),(7,'Tapete de Algodão','Tapete macio, ideal para salas e quartos.',79.90,40,5,7,'2024-11-26 14:32:08'),(8,'Mochila de Tecido','Mochila prática e leve, com compartimentos internos.',129.90,60,5,8,'2024-11-26 14:32:08'),(9,'Cobertor de Microfibra','Cobertor quente e leve, fácil de lavar.',99.90,90,1,3,'2024-11-26 14:32:08'),(10,'Bolsa de Praia','Bolsa de tecido impermeável, ideal para praia.',49.90,120,1,8,'2024-11-26 14:32:08'),(25,'camisa de linho','uma camisa feita de linho',50.00,100,5,1,'2024-12-04 14:25:02'),(26,'calça jogger','uma calça que é jogger',45.00,100,5,1,'2024-12-04 15:13:30'),(27,'calça de algodão','calça macia e delicada',65.00,100,5,1,'2024-12-05 22:34:40');
/*!40000 ALTER TABLE produtos ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promocoes`
--

DROP TABLE IF EXISTS promocoes;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE promocoes (
  promocao_id int(11) NOT NULL AUTO_INCREMENT,
  codigo varchar(50) NOT NULL,
  descricao text DEFAULT NULL,
  desconto_percentual decimal(5,2) DEFAULT NULL,
  desconto_valor decimal(10,2) DEFAULT NULL,
  data_inicio date NOT NULL,
  data_fim date NOT NULL,
  quantidade_disponivel int(11) DEFAULT NULL,
  ativo tinyint(1) DEFAULT 1,
  PRIMARY KEY (promocao_id),
  UNIQUE KEY codigo (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promocoes`
--

LOCK TABLES promocoes WRITE;
/*!40000 ALTER TABLE promocoes DISABLE KEYS */;
/*!40000 ALTER TABLE promocoes ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reclamacoes_fornecedores`
--

DROP TABLE IF EXISTS reclamacoes_fornecedores;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE reclamacoes_fornecedores (
  reclamacao_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  comprador_id int(11) DEFAULT NULL,
  fornecedor_id int(11) DEFAULT NULL,
  descricao text NOT NULL,
  `status` enum('pendente','resolvida','fechada') DEFAULT 'pendente',
  data_reclamacao timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (reclamacao_id),
  KEY comprador_id (comprador_id),
  KEY fornecedor_id (fornecedor_id),
  CONSTRAINT reclamacoes_fornecedores_ibfk_1 FOREIGN KEY (comprador_id) REFERENCES empresas (empresa_id) ON DELETE SET NULL,
  CONSTRAINT reclamacoes_fornecedores_ibfk_2 FOREIGN KEY (fornecedor_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reclamacoes_fornecedores`
--

LOCK TABLES reclamacoes_fornecedores WRITE;
/*!40000 ALTER TABLE reclamacoes_fornecedores DISABLE KEYS */;
/*!40000 ALTER TABLE reclamacoes_fornecedores ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relatorios`
--

DROP TABLE IF EXISTS relatorios;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE relatorios (
  relatorio_id int(11) NOT NULL AUTO_INCREMENT,
  empresa_id int(11) DEFAULT NULL,
  tipo_relatorio enum('vendas','estoque','avaliacoes') NOT NULL,
  dados longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(dados)),
  data_geracao timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (relatorio_id),
  KEY empresa_id (empresa_id),
  CONSTRAINT relatorios_ibfk_1 FOREIGN KEY (empresa_id) REFERENCES empresas (empresa_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relatorios`
--

LOCK TABLES relatorios WRITE;
/*!40000 ALTER TABLE relatorios DISABLE KEYS */;
/*!40000 ALTER TABLE relatorios ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxas_impostos`
--

DROP TABLE IF EXISTS taxas_impostos;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE taxas_impostos (
  taxa_id int(11) NOT NULL AUTO_INCREMENT,
  descricao varchar(255) NOT NULL,
  percentual decimal(5,2) NOT NULL,
  tipo enum('imposto','taxa') NOT NULL,
  PRIMARY KEY (taxa_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxas_impostos`
--

LOCK TABLES taxas_impostos WRITE;
/*!40000 ALTER TABLE taxas_impostos DISABLE KEYS */;
/*!40000 ALTER TABLE taxas_impostos ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS usuarios;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE usuarios (
  usuario_id int(11) NOT NULL AUTO_INCREMENT,
  empresa_id int(11) NOT NULL,
  nome varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  senha_hash varchar(255) NOT NULL,
  papel enum('administrador','operador_triagem','especialista','comprador') NOT NULL,
  data_criacao timestamp NOT NULL DEFAULT current_timestamp(),
  ultimo_login timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (usuario_id),
  UNIQUE KEY email (email),
  KEY empresa_id (empresa_id),
  CONSTRAINT usuarios_ibfk_1 FOREIGN KEY (empresa_id) REFERENCES empresas (empresa_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES usuarios WRITE;
/*!40000 ALTER TABLE usuarios DISABLE KEYS */;
/*!40000 ALTER TABLE usuarios ENABLE KEYS */;
UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
