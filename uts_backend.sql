-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2026 at 06:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uts_backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `method` varchar(10) NOT NULL,
  `endpoint` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `username`, `method`, `endpoint`, `created_at`) VALUES
(1, 'Guest', 'GET', '/api-docs', '2026-07-01 07:13:00'),
(2, 'Guest', 'GET', '/api-docs/', '2026-07-01 07:13:00'),
(3, 'Guest', 'GET', '/api-docs/swagger-ui-init.js', '2026-07-01 07:13:00'),
(4, 'Guest', 'GET', '/api-docs/swagger-ui.css', '2026-07-01 07:13:00'),
(5, 'Guest', 'GET', '/api-docs/swagger-ui-standalone-preset.js', '2026-07-01 07:13:00'),
(6, 'Guest', 'GET', '/api-docs/swagger-ui-bundle.js', '2026-07-01 07:13:00'),
(7, 'Guest', 'GET', '/api-docs/favicon-32x32.png', '2026-07-01 07:13:01'),
(8, 'Guest', 'GET', '/api-docs/', '2026-07-01 07:16:34'),
(9, 'Guest', 'GET', '/api-docs/swagger-ui-init.js', '2026-07-01 07:16:34'),
(10, 'Guest', 'GET', '/api-docs/swagger-ui.css', '2026-07-01 07:16:34'),
(11, 'Guest', 'GET', '/api-docs/swagger-ui-bundle.js', '2026-07-01 07:16:34'),
(12, 'Guest', 'GET', '/api-docs/swagger-ui-standalone-preset.js', '2026-07-01 07:16:34'),
(13, 'Guest', 'GET', '/api-docs/favicon-32x32.png', '2026-07-01 07:16:35'),
(14, 'Guest', 'GET', '/api-docs/favicon-32x32.png', '2026-07-01 07:16:43'),
(15, 'Guest', 'GET', '/api-docs/favicon-32x32.png', '2026-07-01 07:16:44'),
(16, 'Guest', 'GET', '/api-docs/favicon-32x32.png', '2026-07-01 07:16:47'),
(17, 'Guest', 'GET', '/api-docs/favicon-32x32.png', '2026-07-01 07:18:35'),
(18, 'Guest', 'POST', '/api/auth/register', '2026-07-01 08:46:22'),
(19, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:46:22'),
(20, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:46:22'),
(21, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:48:31'),
(22, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:48:31'),
(23, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:54:42'),
(24, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:54:42'),
(25, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:55:24'),
(26, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:55:24'),
(27, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:55:28'),
(28, 'tes123', 'GET', '/api/health-summary', '2026-07-01 08:55:28'),
(29, 'tes123', 'GET', '/api/health-summary', '2026-07-01 09:07:21'),
(30, 'tes123', 'GET', '/api/health-summary', '2026-07-01 09:07:21'),
(31, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:07:25'),
(32, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:07:25'),
(33, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:09:25'),
(34, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:09:25'),
(35, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:09:58'),
(36, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:09:58'),
(37, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:10:48'),
(38, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:10:48'),
(39, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:11:04'),
(40, 'tes123', 'GET', '/api/auth/users', '2026-07-01 09:11:04'),
(41, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:11:26'),
(42, 'figofigofigofigo', 'GET', '/api/health-summary', '2026-07-01 09:11:26'),
(43, 'figofigofigofigo', 'GET', '/api/health-summary', '2026-07-01 09:11:26'),
(44, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:11:27'),
(45, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:11:27'),
(46, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:12:00'),
(47, 'tes1234', 'GET', '/api/health-summary', '2026-07-01 09:12:00'),
(48, 'tes1234', 'GET', '/api/health-summary', '2026-07-01 09:12:00'),
(49, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:12:04'),
(50, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:12:04'),
(51, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:13:14'),
(52, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:13:14'),
(53, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:13:15'),
(54, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:13:15'),
(55, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:17'),
(56, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:18'),
(57, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:18'),
(58, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:18'),
(59, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:18'),
(60, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:18'),
(61, 'tes1234', 'GET', '/api/health-summary', '2026-07-01 09:13:19'),
(62, 'tes1234', 'GET', '/api/health-summary', '2026-07-01 09:13:19'),
(63, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:20'),
(64, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:20'),
(65, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:58'),
(66, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:13:58'),
(67, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:13:58'),
(68, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:13:58'),
(69, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:03'),
(70, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:03'),
(71, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:03'),
(72, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:03'),
(73, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:04'),
(74, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:04'),
(75, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:05'),
(76, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:05'),
(77, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:06'),
(78, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:06'),
(79, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:06'),
(80, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:06'),
(81, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:08'),
(82, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:08'),
(83, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:08'),
(84, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:08'),
(85, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:11'),
(86, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:14:11'),
(87, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:11'),
(88, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:14:11'),
(89, 'Guest', 'GET', '/api/auth/users', '2026-07-01 09:15:05'),
(90, 'Guest', 'GET', '/favicon.ico', '2026-07-01 09:15:05'),
(91, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:18:58'),
(92, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:18:58'),
(93, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:21:10'),
(94, 'figofigofigofigo', 'GET', '/api/auth/users', '2026-07-01 09:21:10'),
(95, 'figofigofigofigo', 'GET', '/api/medications', '2026-07-01 09:21:12'),
(96, 'figofigofigofigo', 'GET', '/api/medications', '2026-07-01 09:21:12'),
(97, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:30'),
(98, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:31'),
(99, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:34'),
(100, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:35'),
(101, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:38'),
(102, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:40'),
(103, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:41'),
(104, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:42'),
(105, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:42'),
(106, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:45'),
(107, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:45'),
(108, 'Guest', 'POST', '/api/auth/register', '2026-07-01 09:21:49'),
(109, 'john123', 'GET', '/api/health-summary', '2026-07-01 09:21:49'),
(110, 'john123', 'GET', '/api/health-summary', '2026-07-01 09:21:49'),
(111, 'john123', 'GET', '/api/auth/users', '2026-07-01 09:21:50'),
(112, 'john123', 'GET', '/api/auth/users', '2026-07-01 09:21:50'),
(113, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:25:00'),
(114, 'tes1234', 'GET', '/api/auth/users', '2026-07-01 09:25:00'),
(115, 'Guest', 'POST', '/api/auth/register', '2026-07-03 07:16:49'),
(116, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:16:49'),
(117, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:16:49'),
(118, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:16:50'),
(119, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:16:50'),
(120, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:19:20'),
(121, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:19:20'),
(122, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:21:39'),
(123, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:21:39'),
(124, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:22:10'),
(125, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:22:10'),
(126, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:23:04'),
(127, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:23:04'),
(128, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:23:36'),
(129, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:23:36'),
(130, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:25:10'),
(131, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:25:10'),
(132, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:25:31'),
(133, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:25:31'),
(134, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:44'),
(135, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:44'),
(136, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:47'),
(137, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:48'),
(138, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:48'),
(139, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:48'),
(140, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(141, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(142, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(143, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(144, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(145, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(146, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(147, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(148, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(149, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(150, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:25:49'),
(151, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:26:00'),
(152, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:26:00'),
(153, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:27:12'),
(154, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:27:12'),
(155, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:27:52'),
(156, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:27:52'),
(157, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:28:00'),
(158, 'Guest', 'GET', '/api/auth/users', '2026-07-03 07:28:00'),
(159, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:28:15'),
(160, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:28:15'),
(161, 'Guest', 'POST', '/api/auth/register', '2026-07-03 07:29:09'),
(162, 'mikroskil', 'GET', '/api/health-summary', '2026-07-03 07:29:09'),
(163, 'mikroskil', 'GET', '/api/health-summary', '2026-07-03 07:29:09'),
(164, 'mikroskil', 'GET', '/api/auth/users', '2026-07-03 07:29:10'),
(165, 'mikroskil', 'GET', '/api/auth/users', '2026-07-03 07:29:10'),
(166, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:29:30'),
(167, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:29:30'),
(168, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:29:38'),
(169, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:29:38'),
(170, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:29:39'),
(171, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:29:39'),
(172, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:29:56'),
(173, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:30:07'),
(174, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:30:09'),
(175, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:30:10'),
(176, 'mikroskil', 'GET', '/api/auth/users', '2026-07-03 07:30:46'),
(177, 'mikroskil', 'GET', '/api/auth/users', '2026-07-03 07:30:46'),
(178, 'figo12345678', 'POST', '/api/logs', '2026-07-03 07:35:27'),
(179, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:35:32'),
(180, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:35:32'),
(181, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:35:35'),
(182, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:35:35'),
(183, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:35:39'),
(184, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:35:39'),
(185, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:35:45'),
(186, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:35:54'),
(187, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:35:54'),
(188, 'figo12345678', 'GET', '/api/medications', '2026-07-03 07:35:56'),
(189, 'figo12345678', 'GET', '/api/medications', '2026-07-03 07:35:56'),
(190, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:35:58'),
(191, 'figo12345678', 'GET', '/api/auth/users', '2026-07-03 07:35:58'),
(192, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:36:00'),
(193, 'figo12345678', 'GET', '/api/health-summary', '2026-07-03 07:36:00'),
(194, 'Guest', 'GET', '/api/health-summary', '2026-07-03 08:30:40'),
(195, 'Guest', 'GET', '/api/health-summary', '2026-07-03 08:30:40'),
(196, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:45'),
(197, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:45'),
(198, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:48'),
(199, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:48'),
(200, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:49'),
(201, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:49'),
(202, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:49'),
(203, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:49'),
(204, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:49'),
(205, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:49'),
(206, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:49'),
(207, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:49'),
(208, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:55'),
(209, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:55'),
(210, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:56'),
(211, 'Guest', 'GET', '/api/auth/users', '2026-07-03 08:30:56'),
(212, 'Guest', 'GET', '/api/medications', '2026-07-03 08:30:59'),
(213, 'Guest', 'GET', '/api/medications', '2026-07-03 08:30:59'),
(214, 'Guest', 'GET', '/api/health-summary', '2026-07-03 08:31:00'),
(215, 'Guest', 'GET', '/api/health-summary', '2026-07-03 08:31:00'),
(216, 'Guest', 'POST', '/api/logs', '2026-07-03 08:31:06'),
(217, 'Guest', 'POST', '/api/logs', '2026-07-03 08:31:11'),
(218, 'Guest', 'POST', '/api/auth/register', '2026-07-03 08:33:27'),
(219, 'paul', 'GET', '/api/health-summary', '2026-07-03 08:33:27'),
(220, 'paul', 'GET', '/api/health-summary', '2026-07-03 08:33:27'),
(221, 'Guest', 'POST', '/api/auth/login', '2026-07-03 08:33:37'),
(222, 'Guest', 'POST', '/api/auth/register', '2026-07-03 08:33:40'),
(223, 'paul1', 'GET', '/api/health-summary', '2026-07-03 08:33:40'),
(224, 'paul1', 'GET', '/api/health-summary', '2026-07-03 08:33:40'),
(225, 'paul', 'POST', '/api/logs', '2026-07-03 08:33:54'),
(226, 'paul', 'GET', '/api/health-summary', '2026-07-03 08:33:56'),
(227, 'paul', 'GET', '/api/health-summary', '2026-07-03 08:33:56'),
(228, 'paul', 'GET', '/api/medications', '2026-07-03 08:33:58'),
(229, 'paul', 'GET', '/api/medications', '2026-07-03 08:33:58'),
(230, 'paul', 'GET', '/api/auth/users', '2026-07-03 08:33:59'),
(231, 'paul', 'GET', '/api/auth/users', '2026-07-03 08:33:59'),
(232, 'paul', 'GET', '/api/health-summary', '2026-07-03 08:34:03'),
(233, 'paul1', 'GET', '/api/auth/users', '2026-07-03 08:34:09'),
(234, 'paul1', 'GET', '/api/auth/users', '2026-07-03 08:34:09'),
(235, 'paul', 'GET', '/api/health-summary', '2026-07-03 08:34:18'),
(236, 'paul', 'GET', '/api/medications', '2026-07-03 08:34:34'),
(237, 'paul', 'GET', '/api/medications', '2026-07-03 08:34:34'),
(238, 'paul', 'POST', '/api/medications', '2026-07-03 08:34:43'),
(239, 'paul', 'GET', '/api/medications', '2026-07-03 08:34:43'),
(240, 'paul', 'PUT', '/api/medications/3', '2026-07-03 08:34:45'),
(241, 'paul', 'GET', '/api/medications', '2026-07-03 08:34:45'),
(242, 'paul', 'GET', '/api/health-summary', '2026-07-03 08:34:51'),
(243, 'paul', 'GET', '/api/health-summary', '2026-07-03 08:34:51'),
(244, 'paul', 'GET', '/api/auth/users', '2026-07-03 08:34:53'),
(245, 'paul', 'GET', '/api/auth/users', '2026-07-03 08:34:53'),
(246, 'paul', 'GET', '/api/health-summary', '2026-07-03 09:31:40'),
(247, 'paul', 'GET', '/api/health-summary', '2026-07-03 09:31:40'),
(248, 'Guest', 'POST', '/api/auth/register', '2026-07-03 09:32:02'),
(249, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:02'),
(250, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:02'),
(251, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:08'),
(252, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:08'),
(253, 'tes123456789', 'POST', '/api/logs', '2026-07-03 09:32:28'),
(254, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:30'),
(255, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:30'),
(256, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:52'),
(257, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:52'),
(258, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:55'),
(259, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:55'),
(260, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:58'),
(261, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:32:58'),
(262, 'tes123456789', 'GET', '/api/medications', '2026-07-03 09:33:03'),
(263, 'tes123456789', 'GET', '/api/medications', '2026-07-03 09:33:03'),
(264, 'tes123456789', 'GET', '/api/auth/users', '2026-07-03 09:33:04'),
(265, 'tes123456789', 'GET', '/api/auth/users', '2026-07-03 09:33:04'),
(266, 'tes123456789', 'GET', '/api/medications', '2026-07-03 09:33:07'),
(267, 'tes123456789', 'GET', '/api/medications', '2026-07-03 09:33:07'),
(268, 'tes123456789', 'GET', '/api/medications', '2026-07-03 09:33:11'),
(269, 'tes123456789', 'GET', '/api/medications', '2026-07-03 09:33:11'),
(270, 'tes123456789', 'GET', '/api/auth/users', '2026-07-03 09:33:19'),
(271, 'tes123456789', 'GET', '/api/auth/users', '2026-07-03 09:33:19'),
(272, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:33:35'),
(273, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:33:36'),
(274, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:33:36'),
(275, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:33:36'),
(276, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:33:36'),
(277, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:33:37'),
(278, 'tes123456789', 'GET', '/api/health-summary', '2026-07-03 09:33:37'),
(279, 'Guest', 'POST', '/api/auth/register', '2026-07-03 09:41:11'),
(280, 'username', 'GET', '/api/health-summary', '2026-07-03 09:41:11'),
(281, 'username', 'GET', '/api/health-summary', '2026-07-03 09:41:11'),
(282, 'username', 'POST', '/api/logs', '2026-07-03 09:41:26'),
(283, 'username', 'GET', '/api/health-summary', '2026-07-03 09:41:28'),
(284, 'username', 'GET', '/api/health-summary', '2026-07-03 09:41:28'),
(285, 'username', 'GET', '/api/medications', '2026-07-03 09:41:30'),
(286, 'username', 'GET', '/api/medications', '2026-07-03 09:41:30'),
(287, 'username', 'POST', '/api/medications', '2026-07-03 09:41:48'),
(288, 'username', 'GET', '/api/medications', '2026-07-03 09:41:48'),
(289, 'username', 'GET', '/api/auth/users', '2026-07-03 09:41:56'),
(290, 'username', 'GET', '/api/auth/users', '2026-07-03 09:41:56'),
(291, 'paul1', 'GET', '/api/auth/users', '2026-07-03 09:42:09'),
(292, 'paul1', 'GET', '/api/auth/users', '2026-07-03 09:42:09'),
(293, 'Guest', 'POST', '/api/auth/register', '2026-07-03 09:42:28'),
(294, 'username1', 'GET', '/api/health-summary', '2026-07-03 09:42:28'),
(295, 'username1', 'GET', '/api/health-summary', '2026-07-03 09:42:28'),
(296, 'username1', 'GET', '/api/auth/users', '2026-07-03 09:42:31'),
(297, 'username1', 'GET', '/api/auth/users', '2026-07-03 09:42:31'),
(298, 'username', 'GET', '/api/auth/users', '2026-07-03 09:42:44'),
(299, 'username', 'GET', '/api/auth/users', '2026-07-03 09:42:45'),
(300, 'username', 'GET', '/api/health-summary', '2026-07-03 09:43:05'),
(301, 'username', 'GET', '/api/health-summary', '2026-07-03 09:43:17');

-- --------------------------------------------------------

--
-- Table structure for table `health_logs`
--

CREATE TABLE `health_logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `weight` float NOT NULL,
  `blood_pressure` varchar(20) DEFAULT NULL,
  `blood_sugar` int(11) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `health_logs`
--

INSERT INTO `health_logs` (`id`, `user_id`, `weight`, `blood_pressure`, `blood_sugar`, `notes`, `created_at`) VALUES
(1, 1, 100, '120', 110, 'tidak tau', '2026-05-01 15:35:20'),
(2, 5, 65, '120', 110, 'tidak', '2026-05-02 05:56:16'),
(3, 6, 65, '110', 100, 'tidak', '2026-05-02 05:58:57'),
(4, 7, 65, '90', 110, '', '2026-05-02 06:12:19'),
(5, 12, 1, '1', 1, '', '2026-07-03 07:35:27'),
(6, 14, 80, '12', 12, '', '2026-07-03 08:33:54'),
(7, 16, 20, '120', 110, '', '2026-07-03 09:32:28'),
(8, 17, 70, '120', 110, '', '2026-07-03 09:41:26');

-- --------------------------------------------------------

--
-- Table structure for table `medications`
--

CREATE TABLE `medications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `med_name` varchar(255) NOT NULL,
  `dosage` varchar(100) NOT NULL,
  `schedule_time` time NOT NULL,
  `is_taken` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medications`
--

INSERT INTO `medications` (`id`, `user_id`, `med_name`, `dosage`, `schedule_time`, `is_taken`, `created_at`) VALUES
(1, 2, 'esfsf', '2', '14:21:00', 1, '2026-05-02 03:10:54'),
(2, 7, 'panadol', '2', '09:12:00', 1, '2026-05-02 06:13:34'),
(3, 14, 'papra', '1', '15:35:00', 1, '2026-07-03 08:34:43'),
(4, 17, 'para', '1', '16:42:00', 0, '2026-07-03 09:41:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'tes@gmail.com', '$2b$10$JiSpCI9OEU.N9Hh5HH.r7uVeBtiKycaM1ZjarifWZZEH/H8hR.fRG', '2026-05-01 15:34:51'),
(2, 'testes', '$2b$10$MFbx/ptpJcY.a3y8G6qGLOZbfqwGISSAtWINoPHfXWOLox/eVzuAi', '2026-05-02 03:03:15'),
(3, 'figo', '$2b$10$VSeZGvG1h1jmmayUk9Zx2.IY/YLCyY79a2oQBkMcqMeL65ykTbnNe', '2026-05-02 05:53:17'),
(4, 'figo1', '$2b$10$AfYt7CqLqK3ha7TADDpGH.kAozpWDHMSudv9hTpqNZ7c8tUWaQD3K', '2026-05-02 05:54:52'),
(5, 'figo123', '$2b$10$xmiGS1J6TRgQZnkU/L6EnuYmkRV5JF/264K5QCWNrS5sPNkYBa5PW', '2026-05-02 05:55:43'),
(6, 'figo12345', '$2b$10$bWxPdBnvjv6yyNTwHt8WkOw9/tPH.0Pe6pknCpZhPzvzZ8TBc0dhy', '2026-05-02 05:58:14'),
(7, 'figo123456', '$2b$10$Ppg7fG2XRo8JjCqIn/ov0eesTVlvDSqyFU2GAb9KSgQ0NpUhQ2te.', '2026-05-02 06:11:15'),
(8, 'tes123', '$2b$10$ji1lfOfDbUjg6Y/7bpvn1OczRb7ZN6fT6SO5NSuI4lAKKx0hf5auC', '2026-07-01 08:46:21'),
(9, 'figofigofigofigo', '$2b$10$2pi./oZMjTsyS44fJ1J3BuOPz0AbgoJ1wgOyGMA3cT6cCE1r8qViK', '2026-07-01 09:11:26'),
(10, 'tes1234', '$2b$10$TqfFpkB4K4l6tk4S7A4Yy.nk52IiP9FzAUpCP14St5rrdpWVZs5Xq', '2026-07-01 09:12:00'),
(11, 'john123', '$2b$10$tKdC/4d7NfmYVOxYl6/U3e7tYW/IeZgZ9yo.HNb/MAcUfBA9E/vXC', '2026-07-01 09:21:49'),
(12, 'figo12345678', '$2b$10$LesFfaEDf3qmqXCGq541Aul8V/EwR2NNChWpjUaRLSYqNQbe87nY6', '2026-07-03 07:16:48'),
(13, 'mikroskil', '$2b$10$GKM64QiweQmbABNPEYym1O8vs/ENI8BHKQaPWorOQGa2jJZjXSR.C', '2026-07-03 07:29:08'),
(14, 'paul', '$2b$10$v0i8yGiVfN8nCmBIJj8Xsu6sHPmJGveAxM85QiSvqHrQTka7rmhVi', '2026-07-03 08:33:27'),
(15, 'paul1', '$2b$10$uuCka9IOwJD4yZ5viqQYG.6VePSLFhrZteQymUVOvDCCJntCy/R5q', '2026-07-03 08:33:40'),
(16, 'tes123456789', '$2b$10$pzvJzQ/K/BlroUNe8vEEhe9xf5qzKsbm2UQgA4YYlUEX1BxsiJiBK', '2026-07-03 09:32:02'),
(17, 'username', '$2b$10$rm3HgeUBoOihRcdJxyZK5eUCZNP1DkyYpeVvKXtu4LAXi5K8g7zzO', '2026-07-03 09:41:11'),
(18, 'username1', '$2b$10$3mIpDjydlKhrPIBKGJ6HPeG.GDVMqg0s2Bi0avVUhiPJFtuvTyTCG', '2026-07-03 09:42:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `health_logs`
--
ALTER TABLE `health_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `medications`
--
ALTER TABLE `medications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=302;

--
-- AUTO_INCREMENT for table `health_logs`
--
ALTER TABLE `health_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `medications`
--
ALTER TABLE `medications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `health_logs`
--
ALTER TABLE `health_logs`
  ADD CONSTRAINT `health_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
