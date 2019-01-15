-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.7.23-log - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para futebol
CREATE DATABASE IF NOT EXISTS `futebol` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `futebol`;

-- Copiando estrutura para tabela futebol.time
CREATE TABLE IF NOT EXISTS `time` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chave` varchar(10) DEFAULT NULL,
  `nomecompletodotime` text,
  `nomedotime` varchar(50) DEFAULT NULL,
  `datafundacao` date DEFAULT NULL,
  `cores` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `uf` varchar(10) DEFAULT NULL,
  `estadio` varchar(50) DEFAULT NULL,
  `valor` decimal(15,2) DEFAULT NULL,
  `votos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `chave` (`chave`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela futebol.time: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `time` DISABLE KEYS */;
INSERT INTO `time` (`id`, `chave`, `nomecompletodotime`, `nomedotime`, `datafundacao`, `cores`, `email`, `uf`, `estadio`, `valor`, `votos`) VALUES
	(1, 'SCCP1910', 'Sport Club Corinthians Paulista', 'Corinthians', '1910-09-02', 'Preto e Branco', 'corinthians@corinthians.com.br', 'SP', 'Arena Corinthians', 128000000.32, 22),
	(2, 'SEP1914', 'Sociedade Esportiva Palmeiras', 'Palmeiras', '1914-08-26', 'Verde e Branco', 'sep@palestraitalia.com.br', 'SP', 'Palestra Itália', 110000000.00, 2),
	(3, 'SFC1914', 'Santos Futebol Clube', 'Santos', '1912-04-14', 'Preto e Branco', 'santos@gmail.com', 'SP', 'Estádio Urbano Caldeira', 98000000.00, 2),
	(4, 'CRVG1889', 'Club de Regatas Vasco da Gama', 'Vasco da Gama', '1889-08-21', 'Preto e Branco', 'crvg@gmail.com', 'RJ', 'Estádio São Januário', 78000000.00, 0),
	(5, 'GEC1943', 'Goiás Esporte Clube', 'Goiás', '1943-04-06', 'Verde e Branco', 'goiasec@gmail.com', 'GO', 'Estádio Serra Dourada', 32000000.00, 0),
	(6, 'GEC1938', 'Goiânia Esporte Clube', 'Goiânia', '1938-05-27', 'Preto e Branco', 'goianinha@gmail.com', 'GO', 'Estádio Olímpico Pedro Ludovico', 5000000.00, 0),
	(7, 'CNC1901', 'Clube Náutico Capibaribe', 'Náutico', '1901-04-07', 'Vermelho e Branco', 'nautico@nau.com.br', 'PE', 'Arena Pernambuco', 65000000.00, 0),
	(8, 'SEG1975', 'Sociedade Esportiva do Gama', 'Gama', '1975-11-15', 'Verde e Branco', 'gama@seg.com.br', 'DF', 'Bezerrão', 3000000.45, 0),
	(9, 'PSC1914', 'Paysandu Sport Club', 'Paysandu ', '1914-02-02', 'Branco e Azul', 'papao@curuzu.com', 'PA', 'Estádio da Curuzu', 60000000.00, 1),
	(10, 'bfr1904', 'Botafogo de Futebol e Regatas', 'Botafogo', '1904-08-18', 'Preto e Branco', 'btg@gmail.com', 'RJ', 'Estádio Nilton Santos', 60000000.00, 2);
/*!40000 ALTER TABLE `time` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
