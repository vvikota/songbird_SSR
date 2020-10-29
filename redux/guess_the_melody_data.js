const questions = [
  { category: `Pop`,
    data: [
    {
      id: 1,
      name: 'Bomfunk MC s',
      species: 'Super Electric (2002)',
      description: 'Bomfunk MC’s — финский музыкальный коллектив, исполняющий танцевальную электронную музыку с элементами хип-хопа.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/Bomfunk.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/Bomfunk.mp3'
    },
    {
      id: 2,
      name: 'Beatles',
      species: 'Yellow Submarine (1969)',
      description: 'The Beatles «Битлз», также группу называют «Ливерпульской четвёркой» (англ. Liverpool Four); отдельно участников ансамбля называют «битлами»; в английском языке также распространено упоминание группы как Fab Four — «Великолепная четвёрка»)',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/beatles.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/beatles.mp3'
    },
    {
      id: 3,
      name: 'Sia',
      species: 'Chandelier (2014)',
      description: 'Си́а Кейт Изобе́ль Фе́рлер (англ. Sia Kate Isobelle Furler, род. 18 декабря 1975, Аделаида, Южная Австралия, Австралия), известная как Сиа (англ. Sia, ˈsiːə) — австралийская певица и автор песен в стиле эмоциональный джаз и поп, а также актриса. ',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/sia.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/sia.mp3'
    },
    {
      id: 4,
      name: 'Zivert',
      species: 'Life (2019)',
      description: 'Zivert (наст. имя: Ю́лия Дми́триевна Зи́верт; род. 28 ноября 1990, Москва) — российская поп-певица',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/zivert.png',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/zivert.mp3',
    },
    {
      id: 5,
      name: 'Little Big',
      species: 'Skibidi (2018)',
      description: 'Little Big — российская рейв-группа, образованная в 2013 году в Санкт-Петербурге, ',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/skibidi.png',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/skibidi.mp3'
    },
    {
      id: 6,
      name: 'Imagine Dragons',
      species: 'Thunder (2017)',
      description: '«Imagine Dragons» — американская инди-рок-группа, образованная в 2008 году в городе Лас-Вегас, США.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/thunder.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Pop/thunder.mp3'
    }
    ]
  },

  {category: `Фильмы 90-х`,
   data:  [
    {
      id: 1,
      name: 'Терминатор 2: Судный день',
      species: '1991',
      description: 'Продолжение 1-й части',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/Terminator2.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/Terminator2.mp3'
    },
    {
      id: 2,
      name: 'Криминальное чтиво',
      species: '1994',
      description: 'Независимо от того, сколько раз вы уже смотрели этот шедевр Тарантино и на каком моменте его включили, гремучая смесь из черной комедии, динамичного триллера и нео-нуара обязательно вас затянет и вы посмотрите его еще раз. Проверено!',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/pulp_fiction.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/pulp_fiction.mp3'
    },
    {
      id: 3,
      name: 'Такси',
      species: '1998',
      description: 'Молодой таксист Даниэль помешан на быстрой езде. Как ураган, проносится он по извилистым улицам Марселя на своём мощном ревущем звере «Пежо», пугая пассажиров и прохожих.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/taxi.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/taxi.mp3'
    },
    {
      id: 4,
      name: 'Один дома',
      species: '1990',
      description: 'Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/home_alone.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/home_alone.mp3'
    },
    {
      id: 5,
      name: 'Титаник',
      species: '1997',
      description: 'В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/titanik.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/titanik.mp3'
    },
    {
      id: 6,
      name: 'Робокоп 2',
      species: '1990',
      description: 'Робот-полицейский продолжает патрулировать улицы Детройта.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/robokop2.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_90/robokop2.mp3'
    }
    ]
  },

  { category: `Rap`,
  data: [
  {
    id: 1,
    name: 'Eminem',
    species: 'Lose Yourself (2002)',
    description: 'Она стала самым успешным синглом в карьере Эминема: после выхода эта песня занимала первые места в музыкальных чартах более чем 20 разных стран, а в США и Австралии не опускалась ниже первой строчки в течение трех месяцев.',
    image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/eminem.jpg',
    audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/eminem.mp3'
  },
  {
    id: 2,
    name: ' K-Maro',
    species: 'Let s go (2006)',
    description: 'Сири́л Кама́р (фр. Cyril Kamar, араб. سيريل قمر‎), наиболее известный как K-Maro (Ка-Маро́, род. 31 января 1980, Бейрут, Ливан) — канадский певец и музыкальный продюсер арабского происхождения.',
    image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/Kamar.jpg',
    audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/Kamar.mp3'
  },
  {
    id: 3,
    name: 'Баста',
    species: 'Сансара (2017)',
    description: 'Баста — лирический проект рэпера из города Ростов-на-Дону, Россия, Василия Вакуленко, созданный в 2006 году.',
    image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/basta.png',
    audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/basta.mp3'
  },
  {
    id: 4,
    name: '50 Cent',
    species: 'In Da Club (2003)',
    description: 'Трек, созданный 50 Cent буквально за час времени, сам Doctor Dre, который продюссировал эту композицию, назвал ее одной из лучших: «Мы решили сделать то, что сами бы хотели слушать».',
    image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/50-cent.jpg',
    audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/50-cent.mp3'
  },
  {
    id: 5,
    name: 'Грибы',
    species: 'Тает лед (2017)',
    description: '«Тает лёд» — песня украинской группы «Грибы», вышедшая синглом 10 марта 2017 года. Одновременно с выпуском состоялась презентация клипа на песню, который получил вирусную популярность и собрал более 20 миллионов просмотров на YouTube за первые две недели.',
    image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/griby.jpg',
    audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/griby.mp3'
  },
  {
    id: 6,
    name: 'Jah Khalib',
    species: 'Медина (2018)',
    description: 'Jah Khalib (Джа Халиб), настоящее имя Бахтияр Гусейнович Мамедов (род. 29 сентября 1993, Алма-Ата, Казахстан) — казахстанский русскоязычный рэпер, певец, битмейкер и продюсер.',
    image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/medina.jpg',
    audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rap/medina.mp3'
  }
  ]
  },  

  {category: `Фильмы 2000-е`,
   data: [
    {
      id: 1,
      name: 'Бумер',
      species: '2003',
      description: 'Никаких законов... Никаких правил... Никого не жалко... Никто не прав... И если мы пока еще не сталкивались с этим в жизни, это еще не значит, что этого не существует. Скорее это значит, что нам пока везло...',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/bumer.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/bumer.mp3'
    },
    {
      id: 2,
      name: 'Пираты Карибского моря',
      species: '2003',
      description: 'Мегапопулярный пиратский экшн с первоклассным составом участников, увлекательным сценарием, отличным юмором, красивыми костюмами, масштабными декорациями и неподражаемым Джонни Деппом в роли...',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/pirates.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/pirates.mp3'
    },
    {
      id: 3,
      name: 'Бригада',
      species: '2002',
      description: '«Бригада» — российский криминальный телесериал 2002 года. Сериал состоит из 15 серий, охватывающих события с 1989 по 2000 год.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/brigada.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/brigada.mp3'
    },
    {
      id: 4,
      name: 'Большой куш',
      species: '2000',
      description: 'Британо-американский комедийный фильм режиссёра Гая Ричи. Удостоен высоких оценок мировой кинопрессы и ряда наград. Фильм вышел в Великобритании 1 сентября 2000 года.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/snatch.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/snatch.mp3'
    },
    {
      id: 5,
      name: '11 друзей Оушена',
      species: '2001',
      description: 'После выхода из тюрьмы вора Дэнни Оушена не проходит и 24 часов, а он уже планирует организовать самое сложное ограбление казино в истории. Он хочет украсть 160 млн американских долларов из трёх самых преуспевающих казино Лас-Вегаса',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/oceans11.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/oceans11.mp3'
    },
    {
      id: 6,
      name: 'Бой с тенью',
      species: '2005',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/tenj.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Films_2000/tenj.mp3'
    }
    ]
  },

  { category: `Rock`,
    data: [
    {
      id: 1,
      name: 'Lordi',
      species: 'Hard Rock Hallelujah (2006)',
      description: 'Hard Rock Hallelujah — песня финской хэви-метал группы Lordi, которая представляла Финляндию на конкурсе песни Евровидение 2006 и победила с рекордным на тот момент результатом, набрав 292 балла в финале конкурса. ',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/lordi.jpeg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/lordi.mp3'
    },
    {
      id: 2,
      name: 'Nirvana',
      species: 'Smells Like Teen Spirit (1991)',
      description: '«Smells Like Teen Spirit» (с англ. — «Пахнет подростковым духом») — песня американской группы Nirvana из альбома Nevermind. Написана Куртом Кобейном, Кристом Новоселичем и Дейвом Гролом, спродюсирована Бутчем Вигом.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/nirvana.png',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/nirvana.mp3'
    },    
    {
      id: 3,
      name: 'Scorpions',
      species: 'Wind of Change (1990)',
      description: '«Wind of Change» (букв. «Ветер перемен»), — рок-баллада, написанная Клаусом Майне, вокалистом группы Scorpions. ',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/scorpions.jpeg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/scorpions.mp3'
    },
    {
      id: 4,
      name: 'Queen',
      species: 'We Will Rock You (1977)',
      description: '«We Will Rock You» (в переводе с англ. — «Мы вас раскачаем») — песня английской рок-группы Queen из альбома News of the World. Написана Брайаном Мэем.',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/queen.png',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/queen.mp3'
    },
    {
      id: 5,
      name: 'Linkin Park',
      species: 'Numb (2003)',
      description: '«Numb» — песня американской рок-группы Linkin Park, сингл с их второго студийного альбома Meteora 2003 года. ',
      image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/numb.jpg',
      audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Rock/numb.mp3'
    },
    {
      id: 6,
      name: 'Король и шут',
      species: 'Собрание (1996)',
      description: '«Король и Шут» (сокращённо «КиШ») — российская хоррор-панк-группа из Санкт-Петербурга.',
      image: './static/media/game_data/Rock/king.jpg',
      audio: './static/media/game_data/Rock/king.mp3'
    }
    ]
  }, 

  {category: `Dendy games`,
    data: [       
      {
        id: 1,
        name: 'Contra',
        species: '1988 год, Konami',
        description: 'Прибывшие на метеорите пришельцы грозятся уничтожить Землю через подконтрольную организацию «Красный сокол», и только бойцы элитного спецотряда могут остановить наглых инопланетян вместе с их приспешниками.',
        image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/Contra.jpg',
        audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/Contra.mp3'
      },
      {
        id: 2,
        name: 'Chip n Dale Rescue Rangers',
        species: '1990 и 1993 годы, Capcom',
        description: 'Вот, снова Capcom. И снова — одна из самых лучших игр для «Денди», точнее даже две игры. «Чип и Дейл» удивительно четко попали в мультипликационный образ. Даже музыка была точь-в-точь как в сериале.',
        image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/Chip.png',
        audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/Chip.mp3'
      },
      {
        id: 3,
        name: 'Teenage Mutant Ninja Turtles 3',
        species: '1991 год, Konami',
        description: 'Третьи «Черепашки» не давали заскучать, потому что кардинально менялись каждые пять минут. Вот ты идешь по пляжу, потом серфишь по воде, а вот палуба корабля, разрушенный мост, городской парк, вокзал, лифт!',
        image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/TMN3.jpeg',
        audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/TMN3.mp3'
      },
      {
        id: 4,
        name: 'Battletoads and Double Dragon',
        species: '1993 год, Rare',
        description: 'Боевые жабы! Была ли лучше хоть одна игра на NES? Да, была, но только одна, о которой ниже. Кстати, Battletoads and Double Dragon разрабатывала та же студия, которая сейчас «допиливает» Sea of Thieves. Что ж, четверть века назад у ребят получалось намного лучше.',
        image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/BT-DD.jpg',
        audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/BT-DD.mp3'
      },
      {
        id: 5,
        name: 'Super Mario Bros.',
        species: '1985, Nintendo',
        description: 'О «Супер Марио» слышали все, даже те, кто никогда не видел ни одной игровой консоли и понятия не имеет о жестоком противостоянии сантехника и черепаходракона. Популярность игры вышла далеко за пределы геймерского сообщества, а название проекта давно стало нарицательным.',
        image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/super-mario.jpg',
        audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/super-mario.mp3'
      },
      {
        id: 6,
        name: 'Batle city (Танчики)',
        species: '1985 год, Namco',
        description: 'Какая еще Battle City? Эту игру все знали и знают как «Танчики». Да-да, они самые, настоящие, а не World of Tanks. Сверхпопулярный проект, один из пробивных тайтлов для только-только появившейся NES.',
        image: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/batle-city.jpeg',
        audio: 'https://vvikota-songbird.netlify.app/static/media/game_data/Dandy_games/batle-city.mp3'
      }
    ]
  },
];

export default questions;
