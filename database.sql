CREATE DATABASE react-todo;

--set extention
CREATE TABLE users(
  id uuid SERIAL PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks(
  id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  user_id uuid,
  FOREIGN KEY (user_id) REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date_created DATE NOT NULL,
  important BOOLEAN NOT NULL
);


INSERT INTO users(name, email, password) VALUES ('john', 'john@gmail.com', '123456789');
INSERT INTO tasks(user_id, name, description, important) VALUES ('39c8e593-0fe7-4b4c-beab-98ac6b72d62b', 'Clean',  'I have to clean my basement', 'false');

-- \c d1t54v2p34mnch hxaabbiaeetlth ec2-18-214-195-34.compute-1.amazonaws.com 5432
-- 539514fa91c74edc97580b2a6b3a61c0266d25a918a68d25a602aec3bf51b13c
