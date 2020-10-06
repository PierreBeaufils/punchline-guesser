BEGIN;

DROP TABLE IF EXISTS "difficulty",
"answer",
"user",
"quiz",
"question";

-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "difficulty" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

-- Table "answer"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "answer" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

-- Table "user"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "user" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "username" text NULL,
  "role" text NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "quiz"
CREATE TABLE IF NOT EXISTS "quiz" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" text NOT NULL,
  "description" text NULL,
  "thumbnail" text NULL,
  "difficulty_id" integer NULL REFERENCES "difficulty" ("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "question"
CREATE TABLE IF NOT EXISTS "question" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "question" text NOT NULL,
  "difficulty_id" integer NOT NULL REFERENCES "difficulty" ("id"),
  -- 'Good answer',
  "answer_id" integer NOT NULL REFERENCES "answer" ("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);



  -----------------------------------------------------------
  -- SEEDING
  -----------------------------------------------------------

INSERT INTO "user" ("username", "email", "password", "role") VALUES
('admin', 'messon1@live.fr', 'monaco123', 'admin');

INSERT INTO "difficulty" ("name") VALUES
('Facile'),
('Intermédiaire'),
('Difficile');

INSERT INTO "quiz" ("title", "description", "thumbnail", "difficulty_id") VALUES
('Facile', 'Lyrics les plus connus du Rap Game', 'https://i.imgur.com/LF8utL8.jpg', 1),
('Intermédiaire', 'On rentre dans la cour des grands', 'https://i.imgur.com/kF6qG5E.jpg', 2),
('Difficile', 'Rimeurs d''élite', 'https://i.imgur.com/y3l9qbb.jpg', 3);

INSERT INTO "quiz" ("title", "description", "thumbnail") VALUES
('Mix', 'Toutes les punchlines réunies !', 'https://i.imgur.com/0mP0oxc.jpg');

INSERT INTO "answer" ("name") VALUES
('Booba'),
('Ninho'),
('Lefa'),
('Niska'),
('Kaaris'),
('SDM'),
('Orelsan'),
('Bosh'),
('Oxmo Puccino'),
('Kool Shen'),
('Dany Dan'),
('Ol''Kainry'),
('Laylow'),
('Josman'),
('Freeze Corleone'),
('K.Point'),
('Jul'),
('Shurik''n'),
('Kery James'),
('Rohff'),
('Escobar Macson'),
('Nubi'),
('Nessbeal'),
('Ali'),
('Lino'),
('Sefyu'),
('Salif'),
('LIM'),
('Zesau'),
('Hatik'),
('Nekfeu'),
('Ill'),
('Alpha Wann'),
('Seth Gueko');


INSERT INTO "question" ("question", "difficulty_id", "answer_id") VALUES
('Poids lourd contre trisomique, à la pesée des kilos, Tu vois flou, gant noir sur automatique au lever du rideau', 2, 5),
('J''écoute tes couplets ta zik, trop des barres... j''apporte des gobelets en plastique pour ton pot de départ.', 1, 5),
('Le monde fait flipper, mec tu sais plus rien ne m’atteint, et plus je connais les hommes plus j’aime mon chien.', 1, 1),
('On joue pas de la mandoline, j''ai le glaive de la garde prétorienne, J''te fume comme à Medellín et j''soulève deux, trois mongoliennes', 1, 5),
('Mon rap choque comme une nonne qui fume le crack à Vincennes, Tatouée, sapée très sexe, bafouée pour 20 cents', 1, 32),
('Tenir le coup, regard froid, fais pas le tocard, L''œil au beurre noir, vaut mieux le faire que l''avoir', 3, 18),
('Le cœur meurtri, meurtrière est ta jalousie, L''enfant seul se méfie de tout le monde, pas par choix, mais dépit', 2, 9),
('Grandir sans père c''est dur, même si la mère persévère, Ça sert, mais pas à trouver ses repères c''est sûr ! Perdre sa mère c''est pire ! Demande à Pit je t''assure, T''as pas saisi enlève la mer de la Côte D''Azur', 3, 9),
('En crachant sur l''un, forcément tu suces l’autre, La salope de l''un est souvent la femme d’un autre', 2, 34),
('Putain j''ai plus la trique, je ressens plus la zik, Ya plus de clips sur la 6 c''est loin l''époque des Lunatic', 3, 22);



COMMIT;