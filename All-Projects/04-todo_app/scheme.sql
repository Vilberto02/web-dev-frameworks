CREATE DATABASE todo_app;

show databases;

USE todo_app;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255),
);

show tables;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  completed BOOLEAN DEFAULT 0,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

show tables;

CREATE TABLE shared_todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  todo_id INT,
  user_id INT,
  shared_with_id INT,
  FOREIGN KEY (todo_id) REFERENCES todos(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (shared_with_id) REFERENCES users(id) ON DELETE CASCADE
);

show tables;

INSERT INTO users (name, email, password) VALUES ("Beto", "userBeto@example.com", "userBeto");
INSERT INTO users (name, email, password) VALUES ("Juan", "userJuan@example.com", "userJuan");

SELECT * FROM users;

INSERT INTO todos(title, user_id)
VALUES
("Ducharse", 1),
("Limpiar", 1),
("Cocinar", 1),
("Beber", 1),
("Comer", 1),
("Jugar", 1);

SELECT * FROM todos;

INSERT INTO shared_todos (todo_id, user_id, shared_with_id)
VALUES
(1,1,2),
(2,1,2),
(3,1,2);