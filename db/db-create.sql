DROP DATABASE IF EXISTS bibliotech ;
CREATE DATABASE bibliotech ;
USE bibliotech ;

CREATE TABLE `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255),
  `password` varchar(255),
  `role` varchar(255)
);

CREATE TABLE `blogs` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `blog_title` varchar(255),
  `blog_author` varchar(255),
  `description` varchar(255),
  `content` text,
  `category` varchar(255),
  `created_at` datetime,
  `user_id` int
);

CREATE TABLE `books` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `isbn` int,
  `title` varchar(255),
  `author` varchar(255),
  `editor` varchar(255),
  `year_of_publication` year
);

ALTER TABLE `blogs` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
