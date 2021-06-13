CREATE TABLE registeruser (
	user_id serial PRIMARY KEY,
	firstname text NOT NULL,
	lastname text  NOT NULL,
	email text UNIQUE NOT NULL,
	organization_name VARCHAR ( 255 ) NOT NULL,
	password text UNIQUE NOT NULL,
	created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subjectslist (
	subject_id serial PRIMARY KEY,
	subject_code text NOT NULL,
	subject_name text  NOT NULL,
);

CREATE TABLE adminuser (
	admin_id serial PRIMARY KEY,
	firstname text NOT NULL,
	lastname text  NOT NULL,
	email text UNIQUE NOT NULL,
	organization_name VARCHAR ( 255 ) NOT NULL,
	password text UNIQUE NOT NULL,
	created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questions (
	question_id serial PRIMARY KEY,
	subject_code text NOT NULL,
	subject_name text  NOT NULL,
	question VARCHAR(1000) NOT NULL,
	option1 VARCHAR ( 500 ) NOT NULL,
	option2 VARCHAR ( 500 ) NOT NULL,
	option3 VARCHAR ( 500 ) NOT NULL,
	option4 VARCHAR ( 500 ) NOT NULL,
	answer VARCHAR ( 500 ) NOT NULL,
	active text NOT NULL,
	created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);