-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: movitech
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `texto` text NOT NULL,
  `usuario_id` int unsigned DEFAULT NULL,
  `producto_id` int unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `comentarios_ibfk_2` (`producto_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Pésimo servicio, la última vez que use este celular cargando explotó y me quemó al mitad de la cara.',1,1,'2022-06-18 22:13:54'),(2,'100% recomendado, el mejor celular que usé en mi vida.',2,2,'2022-06-18 22:13:54'),(3,'3/5 estrellas, mi hijo (2 años) mordió la pantalla y ahora no funciona',3,3,'2022-06-18 22:13:54'),(4,'Genial, lo uso todos los días hace 4 años y nunca falla.',4,4,'2022-06-18 22:13:54'),(5,'Es tan malo que cualquier palabra que use para describirlo es un insulto a esa palabra',1,5,'2022-06-18 22:13:54'),(10,'buen celu',5,1,'2022-06-20 14:41:25'),(13,'Indestructible',5,19,'2022-06-21 00:21:56'),(14,'Tremendoo!!',5,18,'2022-06-22 17:26:31'),(15,'Que joya loco',5,22,'2022-06-22 17:26:57'),(16,'No al Capitalismo. Aguante el Che y kristina',5,20,'2022-06-22 17:28:10'),(17,'Tenes en stock??',2,22,'2022-06-22 17:29:51'),(18,'Precio',2,20,'2022-06-22 17:30:03'),(19,'Que maquina',2,19,'2022-06-22 17:30:30'),(20,'para que es la birome?',2,18,'2022-06-22 17:30:59'),(21,'Hola! tiene 4G? ',1,22,'2022-06-22 17:32:15'),(22,'Haces envíos al interior?',1,20,'2022-06-22 17:33:38');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-22 18:45:30
