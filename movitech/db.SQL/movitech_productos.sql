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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `color` text NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `usuario_id` int unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Samsung A52','Smartphone Samsung Galaxy A52: Procesador Snapdragon 720G Octa Core (hasta 2.3 GHz), Memoria RAM de 8GB, Almacenamiento de 128GB, Pantalla Super AMOLED de 6.3\" FHD+, Red, Bluetooth, Wi-Fi, Cámara principal de 64MP, Android 11.','black','/images/productos/A52.jpg',1,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(2,'Redmi 10','Smartphone Xiaomi Redmi Note 10 5G: Procesador MediaTek Dimensity 700 (hasta 2.20 GHz) Memoria RAM de 6GB, Almacenamiento de 128GB, Pantalla LED Multi Touch de 6.5\" FHD+, Bluetooth 5.1, Wi-Fi 5, Cámara Principal de 48MP, Android 11.','black','/images/productos/Redmi10.jpg',2,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(3,'Moto G50','Smartphone Motorola Moto G50 5G: Procesador Qualcomm Snapdragon 480 (hasta 2.00 GHz), Memoria RAM de 4GB, Almacenamiento de 128GB, Pantalla LED Multi Touch de 6.5\" HD+, Bluetooth 5.0, Wi-Fi, Cámara Principal de 48MP, Android 11.','red','/images/productos/MotoG50.jpg',3,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(4,'Moto E20','Smartphone Motorola Moto E20: Procesador Unisoc T606 Octa Core (1.6 GHz), Memoria RAM de 2GB, Almacenamiento de 32GB, Pantalla LED Multi Touch de 6.5\" HD+, Bluetooth, Wi-Fi, Cámara principal de 13MP, Android 11.','red','/images/productos/MotoE20.jpg',3,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(5,'Galaxy A12','Smartphone Samsung Galaxy A12: Procesador Octa-Core (hasta 2.3 GHz), Memoria RAM de 4GB, Almacenamiento de 64GB, Pantalla LED Multi Touch de 6.4\", Bluetooth, Wi-Fi, Cámara principal de 48MP, Android 10.','white','/images/productos/GalaxyA12.jpg',1,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(6,'Moto E7i','Smartphone Motorola Moto E7i Power: Procesador Unisoc SC9863A Octa-Core (hasta 1.60 GHz), Memoria RAM de 2GB, Almacenamiento de 32GB, Pantalla LED Multi Touch de 6.5\", Bluetooth, Wi-Fi, Cámara Principal de 13MP, Android 10.','white','/images/productos/MotoE7i.jpg',3,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(7,'Galaxy S20','Smartphone Samsung Galaxy S20 FE: Procesador Snapdragon 865 5G (Hasta 2.8 GHz), Memoria RAM de 6GB, Almacenamiento de 128GB, Pantalla Super AMOLED de 6.3\" FHD+, Batería 4500 mAh, Bluetooth, Wi-Fi, Cámara Principal de 12MP, Android 10.','yellow','/images/productos/GalaxyS20.jpg',1,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(8,'Galaxy A22','Smartphone Samsung Galaxy A22: Procesador MediaTek Helio G80, Memoria RAM de 4GB, Almacenamiento de 128GB, Pantalla LED de 6.4\", Bluetooth 5.0, Wi-Fi, Cámara principal de 48MP, Android 11.','yellow','/images/productos/GalaxyA22.jpg',1,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(9,'Galaxy A32','Smartphone Samsung Galaxy A32: Procesador Mediatek Helio G80 Octa Core (hasta 2.0 GHz), Memoria RAM de 4GB, Almacenamiento de 128GB, Pantalla Super AMOLED de 6.2\" FHD+, Bluetooth 5.0, Wi-Fi 5, Cámara principal de 64MP, Android 11.','pink','/images/productos/GalaxyA32.jpg',1,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(10,'iPhone X','Apple iPhone X: Procesador A11 Bionic, Memoria RAM de 3GB, Almacenamiento de 64GB, Pantalla OLED de 5.8\" Super Retina HD, Bluetooth 5.0, Wi-Fi, 4G, Cámara principal de 12 MP, iOS 11. ','pink','/images/productos/iPhoneX.jpg',5,'2022-06-18 22:13:14','2022-06-18 22:13:14'),(18,'Samsung s22 Ultra','Este celular es mejor que el de apple','Black','\\images\\uploads\\1a5ef282bb2f750591bae2827285af7b',5,'2022-06-21 00:21:05','2022-06-21 00:58:28'),(19,'Caterpillar Cat S60','Mas duro que el Nokia 1100','Black','\\images\\uploads\\4bfdc888fcb72f037ce3026dbd7ef0ec',5,'2022-06-21 00:21:18','2022-06-21 00:56:35'),(20,'Iphone 13','ultimo celular del mercado','gris','\\images\\uploads\\f05c475250c4d26e8ea28fa8e4e40c92',5,'2022-06-21 00:58:40',NULL),(22,'Nokia 1100','Mas duro que el martillo de Thor','Blanco','\\images\\uploads\\5186c2a9b00b0ce9ca30e2758f67e26f',5,'2022-06-21 13:50:41','2022-06-22 14:04:05');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
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
