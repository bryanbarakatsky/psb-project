-- MySQL dump 10.13  Distrib 8.0.43, for macos15 (arm64)
--
-- Host: 127.0.0.1    Database: tododatabase
-- ------------------------------------------------------
-- Server version	9.4.0

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
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(200) NOT NULL,
  `dateCreated` datetime NOT NULL,
  `isCompleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todos`
--

LOCK TABLES `todos` WRITE;
/*!40000 ALTER TABLE `todos` DISABLE KEYS */;
INSERT INTO `todos` VALUES (1,'Buy groceries','2025-10-01 10:00:00',0),(2,'Finish project report','2025-09-30 14:30:00',1),(3,'Call mom','2025-10-02 08:15:00',0),(4,'Schedule dentist appointment','2025-09-28 09:45:00',1),(5,'Read a book','2025-10-03 20:00:00',0),(6,'Clean the house','2025-10-04 11:00:00',0),(7,'Pay electricity bill','2025-09-29 16:00:00',1),(8,'Attend team meeting','2025-10-05 09:00:00',0),(9,'Workout at gym','2025-10-06 07:30:00',0),(10,'Submit timesheet','2025-10-01 17:00:00',1),(11,'Prepare dinner','2025-10-06 18:30:00',0),(12,'Update resume','2025-09-27 13:00:00',1),(13,'Book flight tickets','2025-10-02 15:45:00',0),(14,'Organize files','2025-10-03 10:30:00',0),(15,'Water the plants','2025-10-04 07:00:00',1),(16,'Write blog post','2025-10-05 21:00:00',0),(17,'Fix bug in code','2025-10-06 12:00:00',1),(18,'Plan weekend trip','2025-10-07 08:45:00',0),(19,'Respond to emails','2025-10-07 09:15:00',0),(20,'Backup laptop','2025-09-30 19:00:00',1);
/*!40000 ALTER TABLE `todos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-07 11:54:06
