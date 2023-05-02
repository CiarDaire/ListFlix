import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { DatabaseConnection } from './SQLDatabase';

const db = DatabaseConnection.getConnection();

const Database = () => {

  useEffect(()=>{
    db.transaction(function (tx) {
      tx.executeSql(
          'CREATE TABLE IF NOT EXISTS table_items(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100), type VARCHAR(10), rating VARCHAR(10), genres VARCHAR(100), year VARCHAR(4), production VARCHAR(100), creators VARCHAR(100), summary VARCHAR(500));',
          [],
          (tx, results) => {
          console.log('Items Table Created Successfully');
          }
      );
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Game of Thrones'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Game of Thrones',
              'TV Series',
              'TV-MA',
              'Action, Adventure, Drama, Fantasy, Tragedy',
              '2011',
              'HBO MAX',
              'David Benioff & D. B. Weiss',
              'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.'
            ],
              (tx, results) => {
                console.log('TV Show 1 inserted.');
              }
            );
          }
        }
      );
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Breaking Bad'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Breaking Bad',
              'TV Series',
              'TV-MA',
              'Crime, Drama, Thriller',
              '2008',
              'AMC',
              'Vince Gilligan',
              'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his familys future.'
            ],
              (tx, results) => {
                console.log('TV Show 2 inserted.');
              }
            );
          }
        }
      );
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Chernobyl'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Chernobyl',
              'TV Series',
              'TV-MA',
              'Drama, History, Thriller, Disaster',
              '2019',
              'HBO MAX',
              'Craig Mazin',
              'In April 1986, a huge explosion erupted at the Chernobyl nuclear power station in northern Ukraine. This series follows the stories of the men and women, who tried to contain the disaster, as well as those who gave their lives preventing a subsequent and worse one.'
            ],
              (tx, results) => {
                console.log('TV Show 3 inserted.');
              }
            );
          }
        }
      );
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['The Queens Gambit'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'The Queens Gambit',
              'TV Series',
              'TV-MA',
              'Drama',
              '2020',
              'Netflix',
              'Scott Frank & Allan Scott',
              'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.'
            ],
              (tx, results) => {
                console.log('TV Show 4 inserted.');
              }
            )
          }
        }
      );
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['The Walking Dead'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'The Walking Dead',
              'TV Series',
              'TV-MA',
              'Drama, Horror, Thriller',
              '2010',
              'AMC',
              'Frank Darabont',
              'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.'
            ],
              (tx, results) => {
                console.log('TV Show 5 inserted.');
              }
            );
          }
        }
      );
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['The Boys'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'The Boys',
              'TV Series',
              'TV-MA',
              'Action, Comedy, Crime',
              '2019',
              'Amazon Prime Video',
              'Eric Kripke',
              'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.'
            ],
              (tx, results) => {
                console.log('TV Show 6 inserted.');
              }
            )
          }
        }
      );    
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['House of the Dragon'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'House of the Dragon',
              'Tv Series',
              'TV-MA',
              'Action, Adventure, Drama, Fantasy, Romance',
              '2022',
              'HBO MAX',
              'George R.R. Martin & Ryan J. Condal',
              'The Targaryen dynasty is at the absolute apex of its power, with more than 10 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.'
            ],
              (tx, results) => {
                console.log('TV Show 7 inserted.');
              }
            )
          }
        }
      );   
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Sherlock'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Sherlock',
              'TV Series',
              'TV-14',
              'Crime, Comedy-Drama, Mystery, Thriller',
              '2010',
              'BBC One',
              'Mark Gatiss & Steven Moffat',
              'A modern update finds the famous sleuth and his doctor partner solving crime in 21st-century London.'
            ],
              (tx, results) => {
                console.log('TV Show 8 inserted.');
              }
            )
          }
        }
      );  
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Peaky Blinders'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Peaky Blinders',
              'TV Series',
              'TV-MA',
              'Crime, Drama',
              '2013',
              'BBC Two, BBC One',
              'Steven Knight',
              'Thomas Shelby and his brothers return to Birmingham after serving in the British Army during WWI. Shelby and the Peaky Blinders, the gang he is leader of, control the city of Birmingham But as Shelbys ambitions extend beyond Birmingham, he plans to build on the business empire hes created, and stop anyone who gets in his way.'
            ],
              (tx, results) => {
                console.log('TV Show 9 inserted.');
              }
            )
          }
        }
      );  
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Wednesday'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Wednesday',
              'TV Series',
              'TV-14',
              'Comedy, Crime, Fantasy, Mystery',
              '2022',
              'Netlix',
              'Alfred Gough & Miles Millar',
              'A sleuthing, supernaturally infused mystery charting Wednesday Addams years as a student at Nevermore Academy. Wednesdays attempts to master her emerging psychic ability, thwart a monstrous killing spree that has terrorized the local town, and solve the supernatural mystery that embroiled her parents 25 years ago - all while navigating her new and very tangled relationships at Nevermore.'
            ],
              (tx, results) => {
                console.log('TV Show 10 inserted.');
              }
            )
          }
        }
      );  
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Rick and Morty'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Rick and Morty',
              'TV Series',
              'TV-14',
              'Animation, Comedy, Adventure, Sci-Fi',
              '2013',
              'Adult Swim',
              'Dan Harmon & Justin Roiland',
              'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.'
            ],
              (tx, results) => {
                console.log('TV Show 11 inserted.');
              }
            )
          }
        }
      );  
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Bojack Horseman'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Bojack Horseman',
              'TV Series',
              'TV-MA',
              'Animation, Comedy, Drama',
              '2014',
              'Netflix',
              'Raphael Bob-Waksberg',
              'BoJack Horseman was the star of the hit television show "Horsin Around" in the 80s and 90s, but now hes washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.'
            ],
              (tx, results) => {
                console.log('TV Show 12 inserted.');
              }
            )
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['South Park'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'South Park',
              'TV Series',
              'TV-14',
              'Animation, Comedy',
              '1997',
              'Adult Swim',
              'Trey Parker, Matt Stone & Brian Graden',
              'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.'
            ],
              (tx, results) => {
                console.log('TV Show 13 inserted.');
              }
            )
          } 
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Arcane'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Arcane',
              'TV Series',
              'TV-14',
              'Animation, Action, Adventure, Drama, Fantasy, Sci-Fi',
              '2020',
              'Netflix',
              'Alex Yee & Christian Linke',
              'Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League Of Legends champions and the power that will tear them apart.'
            ],
              (tx, results) => {
                console.log('TV Show 14 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Resident Alien'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Resident Alien',
              'TV Series',
              'TV-14',
              'Comedy, Sci-Fi, Mystery',
              '2021',
              'Netflix',
              'Chris Sheridan',
              'A crash-landed alien takes on the identity of a small-town Colorado doctor and slowly begins to wrestle with the moral dilemma of his secret mission on Earth.'
            ],
              (tx, results) => {
                console.log('TV Show 15 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Dark'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Dark',
              'TV Series',
              'TV-MA',
              'Crime, Drama, Mystery, Thriller, Sci-Fi',
              '2017',
              'Netflix',
              'Baran Bo Odar & Jantje Friese',
              'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.'
            ],
              (tx, results) => {
                console.log('TV Show 16 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['The Haunting of Hill House'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'The Haunting of Hill House',
              'TV Series',
              'TV-MA',
              'Horror, Drama, Mystery, Thriller',
              '2018',
              'Netflix',
              'Mark Flanagan',
              'Explores a group of siblings who, as children, grew up in what would go on to become the most famous haunted house in the country. Now adults, and forced back together in the face of tragedy, the family must finally confront the ghosts of their past, some of which still lurk in their minds while others might actually be stalking the shadows of Hill House.'
            ],
              (tx, results) => {
                console.log('TV Show 17 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Ghosts'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Ghosts',
              'TV Series',
              'TV-14',
              'Comedy Fantasy',
              '2019',
              'BBC One',
              'Jim Howick, Mathew Baynton & Laurence Rickard',
              'A group of spirits restlessly squabble in an abandoned country house. To their despair, a young couple inherits the house with hopeful plans to renovate it into a luxury hotel.'
            ],
              (tx, results) => {
                console.log('TV Show 18 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['American Horror Story'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'American Horror Story',
              'TV Series',
              'TV-MA',
              'Horror, Drama, Thriller, Sci-Fi',
              '2011',
              'FX',
              'Brad Falchuk & Ryan Murphy',
              'An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, a slasher summer camp, a bleak beach town and desert valley, and NYC.'
            ],
              (tx, results) => {
                console.log('TV Show 19 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Midnight Mass'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Midnight Mass',
              'TV Series',
              'TV-MA',
              'Horror, Drama, Mystery, Fantasy',
              '2021',
              'Netflix',
              'Mark Flanagan',
              'The tale of a small, isolated island community whose existing divisions are amplified by the return of a disgraced young man and the arrival of a charismatic priest. When Father Pauls appearance on Crockett Island coincides with unexplained and seemingly miraculous events, a renewed religious fervor takes hold of the community - but do these miracles come at a price?'
            ],
              (tx, results) => {
                console.log('TV Show 20 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Squid Game'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Squid Game',
              'TV Series',
              'TV-MA',
              'Thriller, Drama, Mystery, Action',
              '2021',
              'Netflix',
              'Park Hae-soo, Hoyeon & Lee Junj-jae',
              'Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.'
            ],
              (tx, results) => {
                console.log('TV Show 21 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Good Omens'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Good Omens',
              'TV Series',
              'TV-MA',
              'Comedy, Fantasy',
              '2019',
              'Amazon Prime Video, BBC Two',
              'Neil Gaiman & Terry Pratchet',
              'A tale of the bungling of Armageddon features an angel, a demon, an 11-year-old Antichrist, and a doom-saying witch.'
            ],
              (tx, results) => {
                console.log('TV Show 22 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Dirk Gentlys Holistic Detective Agency'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Dirk Gentlys Holistic Detective Agency',
              'TV Series',
              'TV-14',
              'Action, Adventure, Comedy, Sci-Fi, Fantasy, Mystery',
              '2016',
              'Netflix',
              'Max Landis',
              'Holistic detective Dirk Gently investigates cases involving the supernatural.'
            ],
              (tx, results) => {
                console.log('TV Show 23 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Vinland Saga'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Vinland Saga',
              'TV Series',
              'TV-MA',
              'Animation, Action, Adventure, Drama, History',
              '2019',
              'Wit Studio, MAPPA',
              'Makoto Yukimura',
              'A young man named Thorfinn finds himself in a quest for revenge against his fathers killer. Firstly indulged in the aparent greatness of war and honor, Thorfinn quickly changes as he endures having to survive alone and then alongside the man he vows to kill, developing conflicting emotions towards the causality of his past and present life.'
            ],
              (tx, results) => {
                console.log('TV Show 24 inserted.');
              }
            )
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Russian Doll'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Russian Doll',
              'TV Series',
              'TV-MA',
              'Comedy, Drama, Mystery, Sci-Fi',
              '2019',
              'Netflix',
              'Natasha Lyonne, Amy Poehler & Leslye Headland',
              'On Nadias 36th birthday she is struck by a car and killed while leaving her party. In an instant she is alive again and transported back to her birthday party earlier that night. Moments later she dies again and finds herself, once again, back at her party, Nadia begins to question her sanity as she strives to unravel the mystery of her situation.'
            ],
              (tx, results) => {
                console.log('TV Show 25 inserted.');
              }
            )
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Our Flag Means Death'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Our Flag Means Death',
              'TV Series',
              'TV-MA',
              'Comedy, Action, Adventure, History, Romance',
              '2022',
              'HBO MAX',
              'David Jenkins',
              'Based on the true adventures of 18th-century would-be pirate Stede Bonnet. After trading in the seemingly-charmed life of a gentleman for one of a swashbuckling buccaneer, Stede becomes captain of the pirate ship Revenge. Struggling to earn the respect of his potentially mutinous crew, Stedes fortunes change after a fateful run-in with the infamous Captain Blackbeard. Stede and crew attempt to get their ship together and survive life on the high seas.'
            ],
              (tx, results) => {
                console.log('TV Show 26 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['What We Do In The Shadows'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'What We Do In The Shadows',
              'Movie',
              'R',
              'Comedy, Horror',
              '2014',
              'New Zealand Film Commission',
              'Jemaine Clement & Taiki Waititi',
              'Viago, Deacon, and Vladislav are vampires who are struggling with the mundane aspects of modern life, like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts.'
            ],
              (tx, results) => {
                console.log('Film 1 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Tenacious D and the Pick of Destiny'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Tenacious D and the Pick of Destiny',
              'Movie',
              'R',
              'Comedy, Adventure, Music',
              '2006',
              'Red Hour Films',
              'Liam Lynch',
              'To become the greatest band of all time, two slacker, wannabe-rockers set out on a quest to steal a legendary guitar pick that gives its holders incredible guitar skills, from a maximum security Rock and Roll museum.'
            ],
              (tx, results) => {
                console.log('Film 2 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['White Noise'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'White Noise',
              'Movie',
              'R',
              'Comedy, Drama, Horror',
              '2022',
              'Netflix',
              'Noah Baumbach',
              'Dramatizes a contemporary American familys attempts to deal with the mundane conflicts of everyday life while grappling with the universal mysteries of love, death, and the possibility of happiness in an uncertain world.'
            ],
              (tx, results) => {
                console.log('Film 3 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['The Whale'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'The Whale',
              'Movie',
              'R',
              'Drama',
              '2022',
              'Protozoa Pictures',
              'Darren Aronofsky',
              'A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter.'
            ],
              (tx, results) => {
                console.log('Film 4 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Avatar: The Way of Water'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Avatar: The Way of Water',
              'Movie',
              'PG-13',
              'Action, Adventure, Sci-Fi, Fantasy',
              '2022',
              'TSG Entertainment',
              'James Cameron',
              'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Navi race to protect their home.'
            ],
              (tx, results) => {
                console.log('Film 5 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Bullet Train'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Bullet Train',
              'Movie',
              'R',
              'Action, Comedy, Thriller',
              '2022',
              'Sony Pictures',
              'David Leitch',
              'Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs has gone off the rails. Fate has other plans, however: Ladybugs latest mission puts him on a collision course with lethal adversaries from around the globe--all with connected, yet conflicting, objectives--on the worlds fastest train. The end of the line is just the beginning in this non-stop thrill-ride through modern-day Japan.'
            ],
              (tx, results) => {
                console.log('Film 6 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Inglourious Basterds'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Inglourious Basterds',
              'Movie',
              'R',
              'Adventure, Drama, War',
              '2019',
              'Universal Pictures',
              'Quintin Tarantino',
              'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owners vengeful plans for the same.'
            ],
              (tx, results) => {
                console.log('Film 7 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Grave of the Fireflies'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Grave of the Fireflies',
              'Movie',
              'M',
              'Animation, Drama, War',
              '1988',
              'Studio Ghibli',
              'Hayao Miyazaki',
              'The story of Seita and Setsuko, two young Japanese siblings, living in the declining days of World War II. When an American firebombing separates the two children from their parents, the two siblings must rely completely on one another while they struggle to fight for their survival.'
            ],
              (tx, results) => {
                console.log('Film 8 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Parasite'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Parasite',
              'Movie',
              'R',
              'Drama, Thriller',
              '2019',
              'Barunson E&A',
              'Bong Joon Ho',
              'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.'
            ],
              (tx, results) => {
                console.log('Film 9 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Spirited Away'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Spirited Away',
              'Movie',
              'PG',
              'Animation, Adventure, Family, Fantasy, Mystery',
              '2001',
              'Studio Ghibli',
              'Hayao Miyazaki',
              'During her familys move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.'
            ],
              (tx, results) => {
                console.log('Film 10 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Arrival'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Arrival',
              'Movie',
              'PG-13',
              'Drama, Mystery, Sci-Fi',
              '2016',
              'Paramount Pictures',
              'Denis Villeneuve',
              'Linguistics professor Louise Banks leads an elite team of investigators when gigantic spaceships touchdown in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind.'
            ],
              (tx, results) => {
                console.log('Film 11 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Interstellar'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Interstellar',
              'Movie',
              'PG-13',
              'Action, Drama, Sci-Fi',
              '2014',
              'Lengendary Pictures',
              'Christopher Nolan',
              'Earths future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankinds survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.'
            ],
              (tx, results) => {
                console.log('Film 12 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Joker'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Joker',
              'Movie',
              'R',
              'Crime, Drama, Thriller',
              '2019',
              'Warner Bros. Pictures',
              'Todd Phillips',
              'The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gothams clown prince and leader of the revolution.'
            ],
              (tx, results) => {
                console.log('Film 13 inserted.');
              }
            );
          }
        }
      ); 
      tx.executeSql(
        'SELECT * FROM table_items WHERE name = ?',
        ['Spider-Man: Into The Spider-Verse'],
        (tx, results) => {
          if (results.rows.length === 0) {
            tx.executeSql(
              'INSERT INTO table_items (name, type, rating, genres, year, production, creators, summary) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'Spider-Man: Into The Spider-Verse',
              'Movie',
              'PG',
              'Action, Adventure, Animation',
              '2018',
              'Sony Pictures Animation',
              'Bob Persichetti, Peter Ramsey & Rodney Rothman',
              'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.'
            ],
              (tx, results) => {
                console.log('Film 14 inserted.');
              }
            );
          }
        }
      ); 
      }
    )
  }, [])

  return (
    <View>
    </View>
  );

}

export default Database;

// useEffect(()=>{
//     db.transaction(function (tx) {
//       tx.executeSql(
//         'DELETE FROM table_items;',
//         console.log('tv table deleted')
//       )
//     })
//   }, [])

// useEffect(()=>{
  //   db.transaction(function(tx){
  //     tx.executeSql(
  //       `DROP TABLE IF EXISTS itemToList_table`,
  //       [],
  //       (tx, results)=>{
  //         console.log('table with foreign keys dropped')
  //       },
  //       (error)=>{
  //         console.log(error)
  //       }
  //     )
  //     tx.executeSql(
  //       `DROP TABLE IF EXISTS lists_table`,
  //       [],
  //       (tx, results) => {
  //         console.log('worked.')
  //       },
  //       (error) => {
  //         console.log(error)
  //       }
  //     )
  //     tx.executeSql(
  //       'DROP TABLE IF EXISTS table_items;',
  //       [],
  //       (tx, results) => {
  //         console.log('Table deleted successfully.');
  //       },
  //       (tx, error) => {
  //         console.log('Error deleting table:', error);
  //       }, []
  //     );
  //   })
  // },[])