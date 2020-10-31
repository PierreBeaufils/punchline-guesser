BEGIN;

DROP TABLE IF EXISTS "difficulty",
"answer",
"users",
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

-- Table "users"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "users" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "username" text NOT NULL,
  "role" text NULL DEFAULT 'regular',
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

INSERT INTO "users" ("username", "email", "password", "role") VALUES
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
('ill'),
('Alpha Wann'),
('Seth Gueko'),
('Niro'),
('Médine'),
('Guizmo'),
('Dosseh'),
('Alkpote'),
('Lacrim'),
('Gradur'),
('Ateyaba');


INSERT INTO "question" ("question", "difficulty_id", "answer_id") VALUES
('Poids lourd contre trisomique, à la pesée des kilos, Tu vois flou, gant noir sur automatique au lever du rideau', 2, 5),
('J''écoute tes couplets ta zik, trop des barres... j''apporte des gobelets en plastique pour ton pot de départ.', 1, 5),
('Le monde fait flipper, mec tu sais plus rien ne m’atteint, et plus je connais les hommes plus j’aime mon chien.', 1, 1),
('On joue pas de la mandoline, j''ai le glaive de la garde prétorienne, J''te fume comme à Medellín et j''soulève deux, trois mongoliennes', 1, 5),
('Mon rap choque comme une nonne qui fume le crack à Vincennes, Tatouée, sapée très sexe, bafouée pour 20 cents', 1, 32),
('Les rageux c''est comme les gens ou l''argent gros ça va, ça vient, Fais le mal tout le monde s''en rappelle, fais le bien personne s''en souvient', 3, 35),
('Faudra zipper le sac mortuaire sur mon visage, Et m''envoyer rejoindre James Brown et Isaac Hayes', 3, 36),
('Ici ça caille, les stades sont remplis de "Sieg heil", Y''a pas de trône dans l''rap mais que des chaises musicales', 3, 36),
('Bu-bar boule à one, je n''ai pas la voix de Balavoine, Sur les traces de mes ancêtres, j''ai pris la voie du padawan', 3, 36),
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
('L''impression qu''on me bloque le passage sur terre, Les jours nous creusent et les années nous enterrent', 2, 20),
('On devient ce qu''on endure, incarnation de la rancœur, Tes sentiments se prennent des murs tellement il fait noir dans les coeurs', 1, 20),
('C''est mon destin, je l''accueille les bras ouverts, Le monde m''a pourri la vue, pour ça que j''regarde de travers', 2, 20),
('Je vis chaque jour de ma vie comme si c’était le dernier, Et quand mon fils me sourit c’est comme si c’était le premier', 1, 20),
('Tu veux garder tes amis ? Evite de les surpasser, Dur d''avancer à deux quand l''un bloque sur le passé', 2, 20),
('On insulte pas un mort qu’il soit bon ou mauvais/Dans mon camp ou dans le tien qu’ils reposent en paix', 1, 20),
('J''pense à la mort constamment, c''est le dernier testament, Rédigé consciemment, fais comme si j''étais mort récemment', 1, 20),
('On est maître de son corps comme on est maître de son véhicule, On n''est pas maître de sa mort mais on est maître de son vécu', 1, 20),
('Qu''on m''aime, qu''on me déteste, plus j''ai mal, plus j''progresse, Peu de tendresse, le temps presse, si j''pars ma musique elle reste', 1, 20),
('Ton avenir ne tient que sur un rail, ou sur une barrette, Nous on a le beurre, l''argent du beurre et toutes les beurettes', 2, 20),
('Faut qu’tu choisisses tes amis parmi les meilleurs, Pas parmi ceux qui ne font qu''embellir tes erreurs', 3, 19),
('Tu peux me crever mes yeux, tu n''changeras pas c''que j''vois, Tu peux me trancher la gorge mais mes écrits ont une voix', 1, 19),
('Ma part d''ombre a peu de morale et de vertu, Ce qu''abandonne ma lumière, ma part d''ombre le perpétue', 2, 19),
('J''accuse les médias d''être au service du pouvoir, De propager l''ignorance et de maquiller le savoir', 3, 19),
('Je tire sur le Marocco, j''ai les doigts qui brûlent, À c''propos la vie c''est pas un oinj, tu m''roules c''est moi qui t''fumes', 3, 37),
('C''que j''dis ça vient du fond du cœur. Tu peux t''faire passer à tabac même si t''es non-fumeur', 3, 37),
('En levrette missionnaire même en lévitation, jte tire les cheveux, claques aux fesses appelle ça équitation', 3, 37),
('Je leur ai montré c''que j''ai dans l''cœur mais ils ont regardé mes poches, Quand t''as besoin d''eux ils sont loin alors qu''ils font partie de tes proches', 2, 37),
('Le couple est un pénitencier et l’évasion nous tente, pourquoi à chaque fois qu’on se sépare cette passion nous manque ?', 3, 37),
('On se nique la santé pour essayer de trouver de l''argent, plus tard on niquera de l''argent pour retrouver la santé', 3, 38),
('Toute notre vie c''est d''être divisé sans régner, Le savoir, une arme, et les nôtres sont enrayées', 2, 38),
('Soit c''est l''amour qui rend con, soit ya que des cons qui tombent amoureux, Et j''me demande c''que ces gens font, j''crois qu''ils essayent tous d''être heureux', 2, 38),
('Pendant des piges j''ai attendu que ma vie change, puis j''ai fini par comprendre que c''était elle qui attendait que je change', 1, 38),
('J''suis devenu quelqu''un le jour où j''ai compris que j''étais personne, Cesse de complimenter, parlons biz, parlons belles sommes', 3, 38),
('Les mecs fashions sont plus pédés que la moyenne des phoques, Les vieux rêvent d''être morts, sont nostalgiques de la bonne vieille époque', 1, 7),
('Avant j’voulais construire ma vie avec mes beaux diplômes, depuis j''ai vu « 8 Mile », et j''rêve d''habiter dans un mobile-home', 3, 7),
('On pourrait ptêt kiffer, t''es ptêt ma destinée, Mais j''te quitterai dès qu''je trouve une chienne avec un meilleur pédigrée', 3, 7),
('Si tu crois que t''es enceinte, j''disparais comme par magie, J''aurai changé d''adresse avant que tu sois rentrée de la pharmacie', 2, 7),
('Petite fille embobinable, technique de drague d''ado minable, En un quart d''heure, j''avais ma bite dans ta ceinture abdominale', 1, 7),
('Tu voulais un enfant avant d''avoir 19 ans, Mais tu connaîtras pas son père sans lui faire une prise de sang', 2, 7),
('Trouve-moi en pleine méditation dans un débit de boissons, ma gueule de bois ferait passer Pinocchio pour un vrai p''tit garçon', 3, 7),
('Les histoires d''amour, ça commence bien, ça finit mal, avant je t''aimais maintenant j''rêve de te voir imprimée de mes empreintes digitales', 2, 7),
('Parce que l''amour rend aveugle, tu vois trouble après l''éjac faciale, branlette espagnole, jusqu''à c''que tu gueules "Muchas gracias"', 3, 7),
('Plus mon alcoolémie descend, plus tu grossis, j''ai comme envie de rôti quand j''vois tes bas résilles sur tes grosses cuisses', 1, 7),
('J''suis toujours dans les temps, comme ton père à l''heure de l''apéro', 3, 7),
('J''écris avec le sang d''une vierge des versets diaboliques, J''viens détourner plus de gosses que l''Église Catholique', 1, 7),
('Choisis ta voie : entre Kurt Cobain et Buddha, Deux façons d''atteindre le Nirvana', 2, 7),
('Marion Maréchal me suit sur Twitter, j''aimerais la baiser, briser son p''tit cœur. J''ai envoyé ma bite et un emoji fleur, bonjour à papy, j''suis pressé qu''il meure', 2, 7),
('On était censé changer des choses. Depuis quand les choses nous ont changé ? On était censé rien faire comme les autres. Est-ce que tout le monde mentait ?', 3, 7),
('J’me suis casé juste après avoir percé, comme si j''passais pro et j''me pétais les croisés', 3, 7),
('parfois, les chemins se séparent mais les erreurs se réparent, et la ligne d''arrivée est souvent la ligne de départ', 2, 7),
('Les ravisseurs demandent une rançon comme dans la série, Et quand les glocks touchent les mentons, les langues se délient', 1, 2),
('Et c''est p''têt parce que j''suis trop déter que j''les ai distancés, Le plus dur c''est de le faire, ce n''est pas d''y penser', 1, 2),
('Quelques peines de cœur, mais y''a la monnaie qui compense, Atténuantes sont les circonstances, tout travail mérite récompense', 1, 2),
('Moi, j''ai tellement rêvé du disque d''or que je n''en dors plus la noche, J''dirais que la vie est une grosse chienne et qu''il ne faut pas être en chien pour la dresser', 1, 2),
('Ton sourire, ça vaut de l''or, donc je creuse encore, j''ai tellement mal mais je fais comme si je ne voyais rien', 1, 2),
('J''ai brûlé tous les cahiers pour faire vingt mille euros la s''maine, Pas loin d''la cage d''escaliers, certifié par la street et la SNEP', 1, 2),
('Tu demandes si ça va, je te dis que tout est clean, Je multiplie les billets et les amis se déclinent', 1, 2),
('La pauvreté, ma seule phobie, faire de la maille, mon seul hobbie, On aime ceux qui inventent, fuck ceux qui copient', 2, 2),
('J''te raconte pas de mensonges, tu brasses et puis tu plonges, Et c''est les joues de ta mère qui feront le rôle d''éponge', 2, 2),
('Et deux billets de 500 brisent une amitié parce que ton ami veut plus que la moitié, Quand j''avais pas ce métier, dis moi où vous étiez ?', 2, 2),
('J''ai toujours rêvé de m''barrer, mais tout a foiré, Les sentiments c''est comme le fisc, il faut pas tout déclarer', 3, 41),
('Ta pétasse écarte les jambes, elle veut que j''la remplisse comme le Zénith', 3, 41),
('D''la France et de Navarre, j''rappe, j''tue des mc''s j''suis Kendrick La mort', 3, 42);





COMMIT;