BEGIN;

DROP TABLE IF EXISTS "difficulty",
"answer",
"user",
"quiz",
"question",

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
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

-- -----------------------------------------------------
-- Table "quiz"
CREATE TABLE IF NOT EXISTS "quiz" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" text NOT NULL,
  "description" text NULL,
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

INSERT INTO "user" ("id", "username", "email", "password") VALUES
(1, 'admin', 'messon1@live.fr', 'admin')

INSERT INTO "difficulty" ("id", "name") VALUES
(1, 'Facile'),
(2, 'Intermédiaire'),
(3, 'Difficile');

INSERT INTO "quiz" ("id", "title", "description", "difficulty_id") VALUES
(1, 'Facile', "Lyrics les plus connus du Rap Game", 1),
(2, 'Intermédiaire', "On commence à jouer sérieux", 2),
(3, 'Difficile', "Accroche-toi bien...", 3),
(4, 'Mix', "Toutes les punchlines réunies !");

INSERT INTO "answer" ("id", "name", "question_id") VALUES
(1, 'Booba'),
(2, 'Ninho'),
(3, 'Lefa'),
(4, 'Niska'),
(5, 'Kaaris'),
(6, 'SDM'),
(7, 'Orelsan'),
(8, 'Bosh'),
(9, 'Oxmo Puccino'),
(10, 'Kool Shen'),
(11, 'Dany Dan'),
(12, "Ol'Kainry"),
(13, 'Laylow'),
(14, 'Josman'),
(15, 'Freeze Corleone'),
(16, 'K.Point'),
(17, 'Jul'),
(18, "Shurik'n"),
(19, 'Kery James'),
(20, 'Rohff'),
(21, 'Escobar Macson'),
(22, 'Nubi'),
(23, 'Nessbeal'),
(24, 'Ali'),
(25, 'Lino'),
(26, 'Sefyu'),
(27, 'Salif'),
(28, 'LIM'),
(29, 'Zesau'),
(30, 'Hatik'),
(31, 'Nekfeu'),
(32, 'Ill (X men)'),
(33, 'Alpha Wann'),
(34, 'Seth Gueko');


INSERT INTO "question" ("id", "question", "difficulty_id", "answer_id") VALUES
(1, 'Poids lourd contre trisomique, à la pesée des kilos, Tu vois flou, gant noir sur automatique au lever du rideau', 2, 3),
(2, "J'écoute tes couplets ta zik, trop des barres... j'apporte des gobelets en plastique pour ton pot de départ.", 1, 3),
(3, 'Le monde fait flipper, mec tu sais plus rien ne m’atteint, et plus je connais les hommes plus j’aime mon chien.', 1, 1),
(4, "On joue pas de la mandoline, j'ai le glaive de la garde prétorienne, J'te fume comme à Medellín et j'soulève deux, trois mongoliennes", 2, 3),
(5, "Mon rap choque comme une nonne qui fume le crack à Vincennes, Tatouée, sapée très sexe, bafouée pour 20 cents", 1, 32),
(6, "Tenir le coup, regard froid, fais pas le tocard, L’œil au beurre noir, vaut mieux le faire que l'avoir", 3, 18),
(7, "Le cœur meurtri, meurtrière est ta jalousie, L'enfant seul se méfie de tout le monde, pas par choix, mais dépit", 2, 9),
(8, "Grandir sans père c'est dur, même si la mère persévère, Ça sert, mais pas à trouver ses repères c'est sûr ! Perdre sa mère c'est pire ! Demande à Pit j't'assure, T'as pas saisi enlève la mer de la Côte D'Azur", 3, 9),
(9, "En crachant sur l’un, forcément tu suces l’autre, La salope de l’un est souvent la femme d’un autre", 2, 34);



COMMIT;