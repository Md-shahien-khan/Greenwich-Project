-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2023 at 03:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greenwich`
--

-- --------------------------------------------------------

--
-- Table structure for table `tour`
--

CREATE TABLE `tour` (
  `image_path` varchar(255) NOT NULL,
  `place_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tour`
--

INSERT INTO `tour` (`image_path`, `place_name`) VALUES
('tour/5829.1.jpg', 'Washroom | Advice Counselling Room  '),
('tour/5829.2.jpg', 'Advice Service Room'),
('tour/5829.3.jpg', 'Post Graduate Room | Mosque (Straight)'),
('tour/5837.1.jpg', 'Lift 1 | Rooms | Stair'),
('tour/5837.2.jpg', 'Sitting Area'),
('tour/5837.3.jpg', 'Walk Straight to Enter the Lift'),
('tour/5865part_1.jpg', 'Faculty of Education, Health & Human Sciences (FEHHS)|FEHHS Manager\'s Office 105a & 105b|FEHHS Staff Office|FEHHS Deputy Heads\' Office 103|FEHHS Research Office 101|FEHHS Professors and Readers Office 104'),
('tour/5865part_2.jpg', 'Sas leadership team room 111'),
('tour/5865part_3.jpg', 'Student and Academic Services(SAS)|SAS Offices 109, 111, 117b, 117c & 117d|FEHHS Postgraduate Doctoral Space 117a & 117e|FEHHS Post Graduate Space'),
('tour/5882part_1.jpg', '3rd Floor Lift'),
('tour/5882part_2.jpg', 'Information & Library Services(ILS)'),
('tour/5882part_3.jpg', 'IT lab 264 and Meeting room 266'),
('tour/5884part_1.jpg', 'Stairs'),
('tour/5884part_2.jpg', 'Sitting Area'),
('tour/5884part_3.jpg', 'Sitting Area|(If you go left) 264 IT lab and bookable group space 265|If you go straight IT Labs and Desks'),
('tour/5899part_1.jpg', 'Information & Library Services|Directors Office 211|Infrastructure 205|Switchboard 260|Networks 203|Head Offices 201,261,262|Toilets'),
('tour/5899part_2.jpg', '208 ILS'),
('tour/5899part_3.jpg', 'Information & Library Services|215 Class Room|Business Solutions 218|Project Space 226|Service Development(AV) 225'),
('tour/5906pcpart_1.jpg', 'Student and Academic Services SAS Offices 232 & 234|Information & Library Services|Desktop & Licensing 231|IT Teaching Lab 235 & 236|Workshop 230|Service Delivery 233|Project Space 226|Service Development(AV) 225|Washroom'),
('tour/5906pcpart_2.jpg', '245 ILS IT Service Desk'),
('tour/5906pcpart_3.jpg', 'Open Access IT Lab 250'),
('tour/four.jpg', 'Student Center Departement | It Support Desk'),
('tour/home.jpg', 'Entry of Dreadnought Greenwich'),
('tour/IMG_5818.jpg', 'Washroom | Advicing Rooms | Mosque'),
('tour/IMG_5820.jpg', 'Stairs to go Upstair'),
('tour/IMG_5822.jpg', 'Entry point of Lift 1'),
('tour/IMG_5858.jpg', 'Lab 166'),
('tour/left.jpg', 'Lift 1'),
('tour/next.jpg', 'Ground Floor'),
('tour/part_1.jpg', 'Sitting Area'),
('tour/part_2.jpg', 'Lift to Go Up or Down'),
('tour/part_3.jpg', 'SAS Rooms'),
('tour/pxpart_1.jpg', 'Faculty of Education, Health and Human Sciences|FEHHS social and development lab 125 & 128|Psychology store 130a|Observation office 130b|Lab 130c|Lab 131-133'),
('tour/pxpart_2.jpg', 'FRHHS Faculty Office 145'),
('tour/pxpart_3.jpg', 'FEHHS Library 160 | FEHHS Offices 150, 150C, 150F, 150G'),
('tour/right.jpg', 'Lift 2'),
('tour/scpart_1.jpg', 'FEHHS Breakout Room 1-4 162, 163a, 163b & 164'),
('tour/scpart_3.jpg', 'Lifts | FEHHS | FRHHS'),
('tour/three.jpg', 'The Galley Cafeteria'),
('tour/two.jpg', 'Ground Floor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`image_path`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
