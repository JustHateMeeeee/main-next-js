-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

COMMENT ON SCHEMA public IS 'standard public schema';

-- DROP SEQUENCE public.notes_id_seq;

CREATE SEQUENCE public.notes_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- public.notes definition

-- Drop table

-- DROP TABLE public.notes;

CREATE TABLE public.notes (
	id serial4 NOT NULL,
	title varchar(30) NULL,
	"text" varchar(300) NULL,
	"time" date NULL,
	author text NULL,
	CONSTRAINT notes_pkey PRIMARY KEY (id)
);
