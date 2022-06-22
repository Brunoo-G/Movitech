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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `nacimiento` date NOT NULL,
  `documento` int NOT NULL,
  `foto` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'bobbyfischer@gmail.com','Bobby_43','$2a$10$1rl1RbUXXjG1Vw6PI9788O8C2X/YvBPsN.syv/.IOUYrzaOxdDrC2','1943-09-03',15738990,'/images/perfilUsuario.jpg','2022-06-18 22:12:27','2022-06-18 22:12:27'),(2,'mhoffmannbreustedt@udesa.edu.ar','Matute12','$2a$10$1rl1RbUXXjG1Vw6PI9788O8C2X/YvBPsN.syv/.IOUYrzaOxdDrC2','2002-09-12',43934786,'/images/perfilUsuario2.jpg','2022-06-18 22:12:27','2022-06-18 22:12:27'),(3,'jmendivil@udesa.edu.ar','Gogo0192','$2a$10$1rl1RbUXXjG1Vw6PI9788O8C2X/YvBPsN.syv/.IOUYrzaOxdDrC2','2003-04-01',44759281,'/images/perfilUsuario3.jpg','2022-06-18 22:12:27','2022-06-18 22:12:27'),(4,'bgonzalez@udesa.edu.ar','Brunenger','$2a$10$1rl1RbUXXjG1Vw6PI9788O8C2X/YvBPsN.syv/.IOUYrzaOxdDrC2','2001-08-22',43482467,'/images/perfilUsuario4.jpg','2022-06-18 22:12:27','2022-06-18 22:12:27'),(5,'SoyBatman@gmail.com','Bruce Wayne','$2a$10$1rl1RbUXXjG1Vw6PI9788O8C2X/YvBPsN.syv/.IOUYrzaOxdDrC2','2022-06-18',1741545,'\\images\\uploads\\75539797c2eb366ee91caaf94a32980a','2022-06-19 02:03:02','2022-06-21 01:52:50');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
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
