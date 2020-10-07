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
('Putain j''ai plus la trique, je ressens plus la zik, Ya plus de clips sur la 6 c''est loin l''époque des Lunatic', 3, 22),
('On meurt avec un vécu, aucun mec invaincu, désormais convaincu des lacunes qu''on véhicule', 2, 31),
('Une autre a de l''amour pour deux, je fais pas d''effort, elle serait prête à tout, même à se tatouer la tête de Marine Le Pen sur les fesses pour que je lui claque très fort', 2, 31),
('J''me retourne dans mon lit en m''demandant si j''dois les baiser, Vu que la nuit porte conseil, j''me lève avec le barreau', 1, 31),
('Tu voulais pas cer-su mais cracher, ça c''est sûr, Écrasée par les putes t''es comme la lune : on croit tous qu''on t''a marché dessus', 2, 31),
('Les filles sortent de sa chambre chaude, les MC''s sortent de sa chambre froide', 2, 31),
('Se tailler les veines est devenu pour certains jeunes le seul moyen de se faire des grosses coupures', 1, 31),
('Le studio est allemand, italiennes sont les bagnoles, les concerts sont américains, les branlettes sont espagnoles', 2, 31),
('Même dans le Sahara je refuserais ton verre d''eau, Je sais même plus à quoi tu ressembles tellement tu m''tourne le dos', 3, 20),
('C''est la fête des bonhommes, vide un chargeur vers le ciel, Frotte tes couilles contre un mur, ça doit faire des étincelles', 3, 20),
('Je me suis déterré tout seul, ils ont mal scellé le cercueil, Tes rêves envient mes œuvres, mon stylo crève le mauvais œil', 2, 20),
('Le Rap Game envoie des piques, étudie mes techniques, Je pratique sans théorie le hardcore le plus authentique', 2, 20),
('10 ans d''avance sur les concurrents j''les déplume, Y''a que leur cahier qui est Conquérant, j''nettoie La Nocturne', 2, 20),
('Nul attention d''repeindre mon image, de trop meubler mon âge, J''ai assez de vices pour faire du bricolage', 3, 20),
('Si la vie est moche, les souvenirs lui donnent du charme, Quand j''montais la passerelle de l''avion en saluant ma grand-mère en larmes', 2, 20),
('Y a pas de sentiments, que des centimètres', 1, 20),
('Pendant que les riches tuent le temps, le temps tue les pauvres', 3, 20),
('Donc bouge ! Avant de parler de moi laves toi la bouche, Et sache que les couilles faut pas les avoir dans la bouche', 2, 20),
('Ils se mettent à la prière pour esquiver le drame attends, Mais restent enfouraillés même en période de Ramadan', 1, 20),
('Qu''on m''aime, qu''on me déteste, plus j''ai mal, plus j''progresse, Peu d''tendresse, le temps presse, si j''pars, ma musique elle reste', 1, 20),
('On t''aime pour c''que t''as, on te déteste pour c''que t''es', 1, 20),
('Mon compte en banque est moins blindé que mon bloc-notes, Pourtant j''ai assez d''euros pour être joyeux avec les menottes', 1, 20),
('Promets pas la lune si t’as pas la fusée, usé d’se sentir désabuser, rusé, Si t''as pas d''preuves, viens pas m''accuser', 1, 20),


COMMIT;