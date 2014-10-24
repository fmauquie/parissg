// Declare REST supported services
var restSupport = require('connect-rest');

restSupport.get({
    path: '/api/activities/date/:when/category/concert/geo/:geo/offset/:offset/limit/:limit'
}, function (req, content, next) {
    next(null,
        [
            {
                "id": 88953,
                "source": "paris api",
                "name": "Sc&egrave;nes d'&eacute;t&eacute; &agrave; la Villette",
                "description": "<p style=&quot;margin-bottom: 0.8em; outline: none; font-family: arial, FreeSans, verdana, sans-serif; font-size: 14px; line-height: 20px; text-align: start;&quot;>Fortes de l&amp;#39;exp  é rience des deux pr  é c  é dentes   é ditions et de l&amp;#39;engouement croissant du public pour les activit  é s participatives, les <b><em>Sc&amp;egrave;nes d&amp;#39;  é t  é  </em></b>vont continuer leur p  é riple &amp;agrave; travers les cultures du monde.</p>\n\n<p style=&quot;margin-bottom: 0.8em; font-family: arial, FreeSans, verdana, sans-serif; font-size: 14px; line-height: 20px; text-align: start;&quot;>Un plancher agrandi sous un p  é ristyle d  é cor  é , des &amp;laquo;   villages   &amp;raquo; de stands artisanaux, des ateliers de cuisine, de danse, de musique, d&amp;#39;arts plastiques en direction des jeunes et des moins jeunes, des propositions acoustiques, sans oublier les concerts de la grande sc&amp;egrave;ne... La Villette devient, les samedis et dimanches d&amp;#39;  é t  é , le lieu o&amp;ugrave; l&amp;#39;on d  é couvre ou red  é couvre ce qui fait la richesse d&amp;#39;un pays, d&amp;#39;une r  é gion ou d&amp;#39;un style musical.</p>\n\n<p style=&quot;margin-bottom: 0.8em; font-family: arial, FreeSans, verdana, sans-serif; font-size: 14px; line-height: 20px; text-align: start;&quot;><img alt=&quot;&quot; src=&quot;https://filer.paris.fr/quefaire/uploads/images/affiche_scenes_ete2.jpg&quot; style=&quot;font-size:15px; height:185px; margin-bottom:0px !important; width:131px&quot; /></p>\n\n<ul>\n\t<li style=&quot;margin-bottom: 0.8em; font-family: arial, FreeSans, verdana, sans-serif; font-size: 14px; line-height: 20px; text-align: start;&quot;><b>9 et 10 ao&amp;ucirc;t   </b><span>:</span><b>   Bretagne / Irlande : Grand week-end celtique</b><br />\n\t<b><span>Masterclass accord  é on et violon, Atelier de cuisine, Grand Festnoz en pleine air, concert</span></b><br />\n\t<span><span>&amp;quot;Villages&amp;quot; de stands artisanaux, ateliers de cuisine, de danse, de musique, d&amp;rsquo;arts plastiques en direction des jeunes et des moins jeunes, propositions acoustiques, sans oublier les concerts de la grande sc&amp;egrave;ne&amp;hellip; le Parc devient les samedis et dimanches d&amp;rsquo;  é t  é , le lieu o&amp;ugrave; l&amp;rsquo;on d  é couvre ou red  é couvre ce qui fait la richesse d&amp;rsquo;un pays, d&amp;rsquo;une r  é gion ou d&amp;rsquo;un style musical.</span></span><br />\n\t<br />\n\t<b><span><span>Fort de son succ&amp;egrave;s, le plancher de danse sous le p  é ristyle d  é cor  é  de la grande halle a   é t  é  agrandi cette ann  é e pour encore plus de sensations.</span></span></b>\n\n\t<p><span><b>Samedi 9 ao&amp;ucirc;t</b></span></p>\n\n\t<p><span>14h30 &amp;agrave; 16h30 - Grande halle sous la galerie est</span></p>\n\n\t<p><span>Masterclass accord  é on par Janick Martin</span></p>\n\n\t<p><span>14h30 &amp;agrave; 16h30 - Grande halle sous le p  é ristyle</span></p>\n\n\t<p><span>Masterclass violon par Jacky Molard</span></p>\n\n\t<p><span>16h30 &amp;agrave; 18h30 - Grande halle sous le p  é ristyle   </span></p>\n\n\t<p><span>Fest&amp;#39; deiz : initiation danses bretonnes</span></p>\n\n\t<p><span>18h30 &amp;agrave; 21h - Grande halle sous le p  é ristyle   </span></p>\n\n\t<p><span>Fest&amp;#39; noz avec Erick Marchand, Annie Ebrel, Krismenn, Patrick et Jacky Molard, Janick Martin, H  é l&amp;egrave;ne Labarri&amp;egrave;re, Yves Berthou&amp;hellip;</span></p>\n\n\t<p>   </p>\n\n\t<p><span>   <b>Dimanche 10 ao&amp;ucirc;t</b>   </span></p>\n\n\t<p><span>11h &amp;agrave; 14h - Jardins passagers</span></p>\n\n\t<p><span>Atelier de cuisine celte men  é  par Silvia Santucci, sp  é cialiste culinaire</span></p>\n\n\t<p><span>14h &amp;agrave; 21h -    Square du Canal</span></p>\n\n\t<p><span>Village celte photos, label, artisans&amp;hellip;</span></p>\n\n\t<p><span>15h &amp;agrave; 17h - Grande halle sous le p  é ristyle</span></p>\n\n\t<p><span>Jam session irlandaise avec Ma&amp;iacute;rtin O&amp;rsquo;Connor. Le public peut apporter ses instruments</span></p>\n\n\t<p>   </p>\n\n\t<p>   </p>\n\n\t<p><span><b>Dimanche 10 Ao&amp;ucirc;t</b></span></p>\n\n\t<p><span>17h30 Jacky Molard quartet   </span></p>\n\n\t<p><span>(Jacky Molard, violon et composition ; H  é l&amp;egrave;ne Labarri&amp;egrave;re, contrebasse ; Yannick Jory, saxophone ; Janick Martin, accord  é on)</span></p>\n\n\t<p><span>Jacky Molard, violoniste virtuose, pr  é sente enfin une formation sous son nom. Un quartet acoustique &amp;agrave; l&amp;rsquo;instrumentation raffin  é e, aux arrangements sophistiqu  é s pour une musique constamment pulsative et m  é lodique.</span></p>\n\n\t<p>   </p>\n\n\t<p>   </p>\n\n\t<p><span>19h30 Ma&amp;iacute;rtin O&amp;rsquo;Connor band</span></p>\n\n\t<p><span>Ma&amp;iacute;rtin O&amp;rsquo;Connor est un virtuose incontest  é  de l&amp;rsquo;accord  é on irlandais, accompagn  é  dans son trio par Cathal Hayden, violoniste de Four Men and a Dog, et du guitariste Seamie O&amp;rsquo;Dowd.</span></p>\n\n\t<p><span>Ce trio &amp;agrave; l&amp;rsquo;incroyable ma&amp;icirc;trise musicale cr  é e une alchimie unique entre la plus pure tradition et un style tr&amp;egrave;s novateur.</span></p>\n\t</li>\n\t<li style=&quot;margin-bottom: 0.8em; font-family: arial, FreeSans, verdana, sans-serif; font-size: 14px; line-height: 20px; text-align: start;&quot;><b>23 et 24 ao&amp;ucirc;t   </b><span>:</span><b>   Tango</b></li>\n</ul>",
                "small_description": "<p><b>Un voyage autour du monde auquel le public participe activement   et qui offre avec six week-ends thématiques, une balade entre détente, apprentissage et convivialité .</b></p>\n",
                "lieu": "Parc de la Villette",
                "address": "211 avenue Jean Jaur&egrave;s ",
                "geolocation": "48.8910088,2.3904377",
                "distance": 12,
                "hasFee": "0",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "quefaire/fiches/f/7/f/3/f7f3-scenes_ete1.jpg",
                        "credit": "W.+Beaucardet+-+Cr&eacute;ation+graphique+mondaymonday.fr"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2014-08-24T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-24T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-23T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-23T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-17T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-17T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-16T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-16T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-10T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-10T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-09T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-09T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-03T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-03T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-02T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-08-02T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-27T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-27T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-26T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-26T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-20T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-20T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-19T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-19T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-13T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-13T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-12T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-12T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-06T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-06T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-05T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2014-07-05T00:00:00.000Z",
                        "hour_start": "11:00:00",
                        "hour_end": "22:00:00"
                    }
                ]
            },
            {
                "id": 83367,
                "source": "paris api",
                "name": "Grand Bal Swing et concert des Jellyrolls Combo",
                "description": "<p>Le Grand Bal Swing au MAS revient ce samedi 3 mai !<br />\n<br />\nPour cette deuxi&amp;egrave;me   é dition, l&amp;#39;orchestre The Jellyrolls Combo sera pr  é sent pour nous faire swinguer jusque tard dans la nuit! Venez d  é couvrir l&amp;#39;ambiance des Grands Bals Swing de la capitale.</p>\n\n<p>   </p>\n\n<p>Les Jellyrolls Combo sont une formation de 5 musiciens (guitare/chant, violon, contrebasse, piano, clarinette) qui vous feront revivre le swing des ann  é es folles, de la Nouvelle Orleans &amp;agrave; Harlem.</p>\n\n<p>   </p>\n\n<p>★ INITIATION au Charleston &amp;agrave; partir de 20h avec l&amp;#39;  é quipe de Shake That Swing ★ (inclus dans le prix de la soir  é e)</p>\n\n<p>   </p>\n\n<p>Vous pourrez ensuite pratiquer vos nouveaux pas avec les autres danseurs...</p>\n\n<p>   </p>\n\n<p>Avec entre autres:</p>\n\n<p>- 3 sets de l&amp;#39;orchestre The Jellyrolls Combo</p>\n\n<p>- D  é monstrations de danse</p>\n\n<p>- Sets DJs swing</p>\n\n<p>- Bar</p>\n\n<p>- Vestiaire gratuit</p>\n\n<p>   </p>\n\n<p>Pour   é couter un concert de Swing am  é ricain &amp;agrave; la sauce frenchie, danser comme en 1930, ou juste boire un verre, c&amp;#39;est le 3 mai que ca se passe!<br />\n<br />\nInfos pratiques:<br />\n   </p>\n\n<p>MAS - 18 rue des Terres au Cur  é , 75013 Paris</p>\n\n<p>M  é tro Porte d&amp;#39;Ivry (ligne 7) ou Olympiades (ligne 14)<br />\n<br />\nTarif:<br />\n10 euros (adh  é rents Shake That Swing)   <br />\n12 euros (ext  é rieurs)<br />\n<br />\n<a href=&quot;https://www.facebook.com/events/594642750631375/&quot; target=&quot;_blank&quot;>L&amp;#39;  é v&amp;egrave;nement Facebook</a></p>\n\n<p>Un extrait de notre dernier Bal Swing au <a href=&quot;http://bit.ly/bal-swing-au-mas&quot; target=&quot;_blank&quot;>MAS</a>.</p>\n\n<p>   </p>\n\n<p>Retrouvez-nous en ligne : <a href=&quot;http://www.shakethatswing.com&quot;>www.shakethatswing.com</a>   et   <a href=&quot;http://www.cabaret-deluxe.com/&quot;>http://www.cabaret-deluxe.com</a></p>",
                "small_description": "<p>Le Grand Bal Swing du MAS revient ce samedi 3 mai ! Pour cette deuxi&amp;egrave;me   é dition, les Jellyrolls Combo seront pr  é sents pour nous faire swinguer jusque tard dans la nuit ! Initiation &amp;agrave; la danse Charleston d&amp;egrave;s 20h.</p>\n",
                "lieu": "Maison des Associations de Solidarit&eacute; (MAS)",
                "address": "18 rue des Terres au Cur&eacute;",
                "geolocation": "48.8242434,2.3725332",
                "distance": 2.3725332,
                "hasFee": "1",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "quefaire/fiches/8/0/5/9/8059-mas_mai2014_v02.jpg",
                        "credit": "Shake+That+Swing+(graphisme+Nawelle+Saidi)"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2014-05-03T00:00:00.000Z",
                        "hour_start": "20:00:00",
                        "hour_end": "01:30:00"
                    }
                ]
            },
            {
                "id": 82397,
                "source": "paris api",
                "name": "TOUS POUR UNE ENFANCE",
                "description": "<p><span style=&quot;font-size:15px; line-height:19px&quot;>Plus de 20 personnalit  é s, parmi lesquelles </span><b>Rama Yade, Sefyu, Helmut Fritz, Fabrice di Falco, Anne Berneix, Lord Kossity, Tex, mais aussi Fred Musa ou Waly Dia</b><span style=&quot;font-size:15px; line-height:19px&quot;>, ont r  é pondu &amp;agrave; l&amp;rsquo;appel d&amp;rsquo;Alicia Fall, marraine de l&amp;rsquo;association Pour une Enfance (Loi 1901). Tous, dans leurs registres, se succ&amp;egrave;deront sur la sc&amp;egrave;ne du Th  é &amp;acirc;tre du Gymnase pour une soir  é e unique, sous le signe de la g  é n  é rosit  é  et du plaisir, de la musique et de l&amp;rsquo;humour. </span><b>Mikelangelo Loconte</b><span style=&quot;font-size:15px; line-height:19px&quot;> (Mozart Op  é ra Rock) viens de nous confirmer   é galement sa pr  é sence.</span></p>\n\n<p>   </p>\n\n<p>Depuis 2009, l&amp;rsquo;association &amp;laquo;   Pour une Enfance   &amp;raquo; se bat <b><span>pour soustraire les enfants des rues du S  é n  é gal &amp;agrave; la violence et &amp;agrave; la mendicit  é . Et pour leur fournir un acc&amp;egrave;s aux soins, &amp;agrave; la nourriture, &amp;agrave; l&amp;rsquo;  é ducation, au repos, bref &amp;agrave; une enfance   ! Elle a d  é j&amp;agrave; r  é ussi &amp;agrave; ouvrir 2 centres de soins &amp;agrave; M&amp;rsquo;Bour et Santhie ainsi qu&amp;rsquo;un centre d&amp;rsquo;alphab  é tisation. Pr&amp;egrave;s de 300 enfants y sont accueillis r  é guli&amp;egrave;rement, nourris, soign  é s par des b  é n  é voles qui &amp;oelig;uvrent chaque jour pour am  é liorer leur quotidien.</span></b></p>\n\n<p>   </p>\n\n<p><b>Un travail qui a touch  é  les personnalit  é s qui animeront la soir  é e du 28 avril et qui se mobilisent aujourd&amp;rsquo;hui pour sensibiliser et r  é colter les fonds via ce Grand Gala.</b></p>\n\n<p>   </p>\n\n<p>Avec la participation de   :</p>\n\n<p>Rama Yade, Mikelangelo Loconte, Phil Darwin, Anne Bernex, Jarry, Thomas Mignot, Fouad, Val  é rie Delgado, Zayra, Tex, Moussier Tombola, Lord Kossity, Seyfu, Rim&amp;rsquo;K 113, Isaya, Fabrice di Falco, Helmut Fritz, Marc Fichel,<br />\nPhil Barney, Al&amp;rsquo;Varela, Audrey Chauveau, Alicia Fall, Waly Dia,<br />\nVincent Desagnat, Cartman, Fred Musa, S  é verine Ferrer,<br />\nBertrand Chameroy,   Tefa&amp;amp; DJ Moox&amp;hellip;</p>\n\n<p>Plus d&amp;rsquo;information Pour une enfance   :   <a href=&quot;http://www.pouruneenfance.com/&quot;>http://www.pouruneenfance.com/</a></p>\n\n<p>   </p>",
                "small_description": "<p><b>   L&amp;#39;association Pour une Enfance est fi&amp;egrave;re de proposer un plateau d&amp;#39;artistes le 28 Avril au th  é &amp;acirc;tre du gymnase, en pr  é sence de Rama Yade.</b></p>\n",
                "lieu": "Th&eacute;&acirc;tre du gymnase",
                "address": "38 Boulevard de  Bonne Nouvelle",
                "geolocation": "48.8708021,2.3488372",
                "distance": 5.8,
                "hasFee": "1",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "quefaire/fiches/a/6/9/3/a693-pour-une-enfance.jpg",
                        "credit": "pour+une+enfance"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2014-04-28T00:00:00.000Z",
                        "hour_start": "20:30:00",
                        "hour_end": "23:00:00"
                    }
                ]
            },
            {
                "id": 59482,
                "source": "paris api",
                "name": "Concert Br&eacute;silien au Centre Barbara - Meroh Alves &amp; Roda do Cavaco",
                "description": "<h4>Mercredi 3 Juillet au centre Barbara, 1 rue Fleury, Paris 18.</h4><p><b>Dans le cadre du festival Emergence Capoeira, 13&egrave;me &eacute;dition !!<br></b></p><p><b>13h30-16h30</b> initiation &agrave; la capoeira pour les enfants et adolescents<br><b>17h30</b> d&eacute;ambulation vers le square L&eacute;on,<br><b>19h</b> grande roda de capoeira ouverte &agrave; tous,<br><b>20h30</b> soir&eacute;e d&rsquo;ouverture du festival, concert br&eacute;silien. Lancement du CD de Meroh<br>Alves &amp; Banda Ultima Hora. R&eacute;servation conseill&eacute;e. Entr&eacute;e 5 euros.</p>",
                "small_description": "Lancement du CD de Meroh Alves 'No vai e vem da vida'<br><p> </p>",
                "lieu": "Centre musical Fleury Goutte d'Or Barbara",
                "address": "1 rue Fleury",
                "geolocation": "48.8842128,2.3540221",
                "distance": 12,
                "hasFee": "1",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "quefaire/fiches/c/a/2/4/ca24-visuelconcert200ko.jpg",
                        "credit": "capoeira+viola"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2013-07-03T00:00:00.000Z",
                        "hour_start": "20:30:00",
                        "hour_end": "22:00:00"
                    }
                ]
            },
            {
                "id": 59471,
                "source": "paris api",
                "name": "Repas-Concert Br&eacute;silien aux Ar&egrave;nes de Montmartre",
                "description": "<h4> Vendredi 5 Juillet dans le cadre unique des Ar&egrave;nes de Montmartre !</h4><p><b>18h30</b> Ap&eacute;ro musical<br><b>19h30</b> Roda de capoeira<br><b>20h30</b> Repas-concert br&eacute;silien avec Meroh Alves &amp; Banda Ultima Hora e convidados.<br>P.A.F. 12 euros. R&eacute;servation indispensable pour le repas-concert au 01 46 07 57 70.<br></p><h4>Samedi 6 juillet dans le cadre unique des Ar&egrave;nes de Montmartre !</h4><p><b>15h-18h</b> initiation &agrave; la capoeira pour tous<br><b>19h</b> Roda de capoeira<br><b>20h</b> Repas-concert br&eacute;silien avec Meroh Alves &amp; Banda Ultima Hora e convidados.<br>P.A.F. 12 euros. R&eacute;servation indispensable pour le repas-concert au 01 46 07 57 70.<br><i>En cas de pluie, cette programmation est report&eacute;e au Gymnase Ronsard, 2 rue Ronsard, Paris 18.</i></p>",
                "small_description": "<p><b>Dans le cadre unique des Ar&egrave;nes de Montmartre, concert de Meroh Alves &amp; Banda Ultima hora !! Musique br&eacute;silienne et capoeira !! </b><br></p>\n",
                "lieu": "Ar&egrave;nes de Montmartre",
                "address": "27 rue Chappe",
                "geolocation": "48.8857512,2.3420675",
                "distance": 1.23,
                "hasFee": "0",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "quefaire/fiches/0/a/1/0/0a10-affiche-ec13-paysage.jpg",
                        "credit": "capoeira+viola"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2013-07-06T00:00:00.000Z",
                        "hour_start": "18:30:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2013-07-05T00:00:00.000Z",
                        "hour_start": "18:30:00",
                        "hour_end": "22:00:00"
                    }
                ]
            },
            {
                "id": 51989,
                "source": "paris api",
                "name": "CONCERT DE PERCUSSIONS AFRICAINES",
                "description": "Danse et percussions par le groupe EMPIRE MANDINGUE\n\nVenez danser et vibrer aux rythmes et sons des djembés !\n\nvendredi 1er mars à 20h\n\nRéservation indispensable au 06 34 55 43 68 ou sur doussoudjembe@gmail.com\n\nwww.empiremandingue.jimdo.com",
                "small_description": "",
                "lieu": "Centre d’animation Poterne des Peupliers",
                "address": "1 rue Gouthière ",
                "geolocation": "48.820911,2.350803",
                "distance": 12.3,
                "hasFee": "1",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "activites/3/5/8/5/9/-/-/-/35859/c04b6d3ee84b26af2bbcb3704f7d9ccf.png",
                        "credit": "Cie Oxalie"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2013-03-01T00:00:00.000Z",
                        "hour_start": "20:00:00",
                        "hour_end": "21:30:00"
                    }
                ]
            },
            {
                "id": 51202,
                "source": "paris api",
                "name": "Concert Les Leçons de Ténèbres de Fiocco et Couperin, par La Cavatine",
                "description": "Voici un programme original en phase tant avec le lieu qu’avec la période liturgique, où seront présentées des Leçons de Ténèbres très rarement jouées du compositeur belge Fiocco. Ces Leçons de Ténèbres, qui se distinguent par l'inhabituelle présence de deux violoncelles obligés, mêlent avec bonheur style français et style italien dans la tradition de François Couperin. Leur feront écho les lumineuses Première et Deuxième Leçons du Mercredi saint du maître français.\n\nAvec\n? Véronique Housseau, soprano et direction \n? Cyril Poulet, violoncelle\n? Nicolas Verhoeven, violoncelle\n? Benoît Babel, orgue",
                "small_description": "",
                "lieu": "Eglise Saint-Séverin",
                "address": "3, rue des Prêtres-Saint-Séverin",
                "geolocation": "48.8523744,2.345293",
                "distance": 6,
                "hasFee": "0",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "activites/1/1/8/3/6/3/-/-/118363/26050e969d0f73a67309ead5bb3fb5d6.pdf",
                        "credit": "La Cavatine"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2013-03-09T00:00:00.000Z",
                        "hour_start": "17:30:00",
                        "hour_end": "18:30:00"
                    }
                ]
            },
            {
                "id": 51200,
                "source": "paris api",
                "name": "Concert Bach, La Voix de l'âme. Cantates sacrées, par La Cavatine",
                "description": "Véronique Housseau, soprano et direction, Timothée Oudinot, hautbois, Lucile Perrin, violoncelle, Louis-Noël Bestion, orgue.\n\nDans ce concert présenté par l'éminent musicologue spécialiste de Bach, Gilles Cantagrel, La Cavatine souhaite évoquer plusieurs aspects du talent multiple du musicien en faisant chanter « La Voix de l’âme ». Il vous est ainsi donné d’entendre la voix de soprano dialoguer avec le hautbois, à l’image de l’âme qui converse avec Dieu, son bon berger. Il est également donné d’entendre les divers timbres du hautbois, puisque le hautboïste joue alternativement des trois types d’instruments, hautbois, hautbois d'amour et hautbois de chasse. Les superbes aria de cantates interprétées ici, qui figurent à juste titre parmi les plus belles pages de Bach et qui sont datées des années 1723-1726, témoignent de l’inventivité du Cantor de Leipzig, au faîte de sa puissance créatrice, et de son absolue maîtrise du discours musical.\n\nLa Cavatine est un ensemble de chambre à géométrie variable de chanteurs et de musiciens fondé en 2010, qui réunit des professionnels de la nouvelle génération issus des grandes institutions françaises et européennes et animés par une passion commune pour le répertoire lyrique des XVIIIe et XIXe siècles. L’ensemble a vocation à faire partager la richesse de ce patrimoine à un large public, à explorer et ressusciter des œuvres oubliées ou créer des ouvrages inédits.",
                "small_description": "",
                "lieu": "Eglise Évangélique Allemande",
                "address": "25, rue Blanche",
                "geolocation": "48.8794871,2.3313326",
                "distance": 20.2,
                "hasFee": "1",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "activites/1/1/8/3/6/3/-/-/118363/f6944db80a84f7a875cb1e5ab2e63548.pdf",
                        "credit": "La Cavatine"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2013-01-25T00:00:00.000Z",
                        "hour_start": "20:00:00",
                        "hour_end": "21:30:00"
                    }
                ]
            },
            {
                "id": 50609,
                "source": "paris api",
                "name": "Concerts caritatifs les 14, 15 et 16 décembre 2012 - Oya Kephale",
                "description": "Oya Kephale en concert ! Cette année en décembre, Edvard Grieg et César Franck sont à l’honneur !\n3 mouvements de la Suite Lyrique op.54 pour orchestre d’Edvard Grieg \nSalve Regina pour chœur mixte a cappella de Francis Poulenc\nLes sept paroles du Christ en croix pour solistes, chœur et orchestre de César Franck\nLaetatus sum RV 607 pour chœur et orchestre d’Antonio Vivaldi.\n\nVenez nous écouter les 14 et 15 décembre 2012, à 20h30, en l’église Sainte-Marie des Batignolles (Paris XVIIe), et le 16 décembre 2012 à 16h, en l’église Saint-Christophe de Javel (Paris XVe).\n\nRéservations sur www.oyakephale.com\n\nOya Kephale est la réunion d’un chœur de 40 chanteurs et d’un orchestre d’une trentaine d’instrumentistes.\nOya Kephale est dirigé par Laëtitia Trouvé, chef professionnel dont l’exigence et le talent permettent à la troupe d’offrir des concerts dont la qualité musicale est unanimement reconnue et saluée. \n\nChaque année, Oya Kephale donne en décembre une série de concerts et monte une opérette en mai.\n\nDepuis la création de la troupe en 1995, les membres d’Oya Kephale mettent leur amour de la musique au service de causes qui leur tiennent à cœur en reversant les bénéfices réalisés à deux associations.\nPour la saison 2012-2013, Oya Kephale a choisi de soutenir les associations Anak – Un pont pour les enfants, qui vient en aide aux enfants des rues et des bidonvilles de Manille (Philippines), et Le Rocher Oasis Des Cités, qui mène des projets éducatifs dans plusieurs cités en France.",
                "small_description": "",
                "lieu": "Saint Christophe de Javel",
                "address": "28 rue de la Convention",
                "geolocation": "48.8448214,2.2795784",
                "distance": 5.1,
                "hasFee": "1",
                "categories": [ "Concert", "Spectacles" ],
                "files": [
                    {
                        "file": "activites/1/1/7/7/2/9/-/-/117729/9b6d59ffd4f1290ce7b4fcb19c79ebd1.JPG",
                        "credit": "Oya Kephale - Laëtitia Trouvé - 2011 - photo : Fabien Oliveira"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2012-12-16T00:00:00.000Z",
                        "hour_start": "16:00:00",
                        "hour_end": "17:30:00"
                    }
                ]
            },
            {
                "id": 50598,
                "source": "paris api",
                "name": "Concerts caritatifs les 14, 15 et 16 décembre 2012 - Oya Kephale",
                "description": "Oya Kephale en concert ! Cette année en décembre, Edvard Grieg et César Franck sont à l’honneur !\n3 mouvements de la Suite Lyrique op.54 pour orchestre d’Edvard Grieg \nSalve Regina pour chœur mixte a cappella de Francis Poulenc\nLes sept paroles du Christ en croix pour solistes, chœur et orchestre de César Franck\nLaetatus sum RV 607 pour chœur et orchestre d’Antonio Vivaldi.\n\nVenez nous écouter les 14 et 15 décembre 2012, à 20h30, en l’église Sainte-Marie des Batignolles (Paris XVIIe), et le 16 décembre 2012 à 16h, en l’église Saint-Christophe de Javel (Paris XVe).\n\nRéservations sur www.oyakephale.com\n\nOya Kephale est la réunion d’un chœur de 40 chanteurs et d’un orchestre d’une trentaine d’instrumentistes.\nOya Kephale est dirigé par Laëtitia Trouvé, chef professionnel dont l’exigence et le talent permettent à la troupe d’offrir des concerts dont la qualité musicale est unanimement reconnue et saluée. \n\nChaque année, Oya Kephale donne en décembre une série de concerts et monte une opérette en mai.\n\nDepuis la création de la troupe en 1995, les membres d’Oya Kephale mettent leur amour de la musique au service de causes qui leur tiennent à cœur en reversant les bénéfices réalisés à deux associations.\nPour la saison 2012-2013, Oya Kephale a choisi de soutenir les associations Anak – Un pont pour les enfants, qui vient en aide aux enfants des rues et des bidonvilles de Manille (Philippines), et Le Rocher Oasis Des Cités, qui mène des projets éducatifs dans plusieurs cités en France.",
                "small_description": "",
                "lieu": "Sainte Marie des Batignolles",
                "address": "77 place du Dr F. Lobligeois",
                "geolocation": "48.886397,2.318056",
                "distance": 0.7,
                "hasFee": "1",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "activites/1/1/7/7/2/9/-/-/117729/fa958225387d0fa1427c925c300ecef0.JPG",
                        "credit": "Oya Kephale - Laëtitia Trouvé - 2011 - photo : Fabien Oliveira"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2012-12-15T00:00:00.000Z",
                        "hour_start": "20:30:00",
                        "hour_end": "22:00:00"
                    },
                    {
                        "jour": "2012-12-14T00:00:00.000Z",
                        "hour_start": "20:30:00",
                        "hour_end": "22:00:00"
                    }
                ]
            },
            {
                "id": 50507,
                "source": "paris api",
                "name": "CABARET MOUFFETARD 2012",
                "description": "Samedi 24 novembre\n20 h 30\nCentre Culturel La Clef\n34, rue Daubenton - Paris (5e)\nMétro Censier Daubenton\n« CABARET MOUFFETARD 2012 »\n9e édition\n\n\n\nOutre un grand nombre de poèmes parus en 2011 aux Éditions L'Harmattan sous le titre\nComme la truite sous la pierre, Patrick DENY (1948-1991) nous a laissé quelque cent cinquante\nchansons, le tout formant une oeuvre riche, exigeante, et surtout très personnelle.\nPour la faire revivre, l'association créée autour de son nom propose\nchaque année depuis 2004 un spectacle mêlant à des titres de Patrick DENY\ndes chansons et poèmes d'auteurs d'hier et d'aujourd'hui.\n\nChansons et poèmes de\nPatrick DENY, Francis LEMARQUE, Boris VIAN\n\net des interprètes\nMartin DAUMAS, Ray de DISE, Lucie GUYON, Bénédicte LAURENT,\nGérard QUITTOT, et le Trio AU COIN D'LA RUE\n\naccompagnés par :\nRobert ABURBE (piano), Laurent ATTALI (piano),\nChristophe DEFOULNY (accordéon), Malek SADKI (contrebasse)\n\nBilletterie sur place Entrée: 15 € Tarif réduit : 10 €",
                "small_description": "",
                "lieu": "CENTRE CULTUREL LA CLEF",
                "address": "34, rue DAUBENTON",
                "geolocation": "48.8411517,2.3524117",
                "ditance": "1.8",
                "hasFee": "1",
                "categories": ["Concert", "Spectacles"  ],
                "files": [
                    {
                        "file": "activites/1/2/8/1/5/9/-/-/128159/7e257200abadc9d8d893c68a2c086115.JPG",
                        "credit": "Autour de Patrick Deny"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2012-11-24T00:00:00.000Z",
                        "hour_start": "20:30:00",
                        "hour_end": "22:30:00"
                    }
                ]
            },
            {
                "id": 48583,
                "source": "paris api",
                "name": "Concert de La Cavatine",
                "description": "Héroïnes, coquines et cavatines. Airs d'opéra de Mozart, Rossini, Bellini, Puccini, par Véronique Housseau, soprano, et Delphine Benhamou, harpe, ensemble La Cavatine.\nDimanche 7 octobre 2012, 17 h 30, au Temple de Boulogne-Billancourt, 117, rue du Château, 92 Boulogne-Billancourt (M° Boulogne-Jean-Jaurès). Tarif unique : 15 € (Gratuit pour les enfants de moins de 10 ans).\nInformations et réservations : 06 86 41 66 20.\nwww.lacavatine@free.fr",
                "small_description": "",
                "lieu": "La Cavatine",
                "address": "12 rue de L' Abbé-de-L'Epée",
                "geolocation": "48.8436972,2.3405571",
                "distance": 13,
                "hasFee": "1",
                "categories": ["Concert", "Spectacles"],
                "files": [
                    {
                        "file": "activites/2/6/9/-/-/-/-/-/269/6aa125b4403a9dccc13cb7936380d136.jpg",
                        "credit": "La Cavatine"
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2012-10-07T00:00:00.000Z",
                        "hour_start": "17:30:00",
                        "hour_end": "19:00:00"
                    }
                ]
            },
            {
                "id": 36321,
                "source": "paris api",
                "name": "Concert - Paris Jazz Festival 2012",
                "description": "Du 9 Juin au 29 Juillet 2012 au Parc Floral.\n8 WEEK-ENDS, 16 JOURNÉES, 3 SOIRÉES, 29 CONCERTS.\n\nDimanche 15 Juillet 2012, après le concert solo de Keith B. Brown à 13h30, le Parc Floral et Paris Jazz Festival vous proposent Keb' Mo' à 16h. \n\n\"Le blues acoustique aux fortes consonances rurales d’avant-guerre a trouvé une seconde jeunesse auprès de la nouvelle classe des bluesmen afro-américains. Kevin Moore, alias Keb’Mo’, a su s’inspirer d’aînés tels que Big Bill Broonzy ou Son House pour créer un style personnel et neuf qui lui permet de se promener dans les styles musicaux les plus ouverts (jazz, country, rock) sans jamais trahir l’esprit de la note bleue\".\n\nPlus d'informations sur le festival : http://parisjazzfestival.paris.fr/fr/programmation\n \nEt sur l'artiste Keb'Mo' : http://www.kebmo.com/site/about/bio\n\nACCÈS\nEsplanade Saint Louis devant le Château de Vincennes – Bois de Vincennes\nAutre entrée Avenue de la Pyramide\n\nRer A Vincennes / Métro Château de Vincennes (ligne 1)\nBus ligne N°112 – Parc à Vélo",
                "small_description": "",
                "lieu": "Parc Floral",
                "address": "Avenue des Minimes",
                "geolocation": "48.8402804,2.43991589999996",
                "distance": 33,
                "hasFee": "1",
                "categories": [ "Concert", "Spectacles"],
                "files": [
                    {
                        "file": "activites/5/7/4/0/1/-/-/-/57401/5a633ec8b60f237920e6920130b8480e.jpg",
                        "credit": "Flickr - music2fish2 (eric lanning) - cc "
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2012-07-15T00:00:00.000Z",
                        "hour_start": "16:00:00",
                        "hour_end": "18:00:00"
                    }
                ]
            },
            {
                "id": 36283,
                "source": "paris api",
                "name": "Concert - Paris Jazz Festival 2012",
                "description": "Du 9 Juin au 29 Juillet 2012 au Parc Floral.\n8 WEEK-ENDS, 16 JOURNÉES, 3 SOIRÉES, 29 CONCERTS.\n\nDimanche 15 Juillet 2012, le jazz man Keith B. Brown, natif de Memphis, vous offrira un concert en solo au Parc Floral. \nA cette occasion l'artiste s'exprimera sur des musiques blues,  folk et ballades soul. \nUne belle programmation pour un lendemain de fête nationale.\n\n\nACCÈS\nEsplanade Saint Louis devant le Château de Vincennes – Bois de Vincennes\nAutre entrée Avenue de la Pyramide\n\nRer A Vincennes / Métro Château de Vincennes (ligne 1)\nBus ligne N°112 – Parc à Vélo \n\n\nPlus d'informations sur Paris Jazz Festival: http://parisjazzfestival.paris.fr/fr/programmation\n\nSur la soirée du 15 Juillet : http://parisjazzfestival.paris.fr/fr/artistes/keith-b-brown \n\nEt sur l'artiste : http://www.kbrownblue.net/index.php?page=home",
                "small_description": "",
                "lieu": "Parc Floral",
                "address": "Avenue des Minimes",
                "geolocation": "48.8402804,2.43991589999996",
                "distance": 1,
                "hasFee": "1",
                "categories": ["Concert", "Spectacles" ],
                "files": [
                    {
                        "file": "activites/5/7/4/0/1/-/-/-/57401/b34b3244fda48993f56cd41771b5b6d7.jpg",
                        "credit": "Keith B. Brown @ Blues Rules - Flickr - Christophe Losberger - cc "
                    }
                ],
                "occurrences": [
                    {
                        "jour": "2012-07-15T00:00:00.000Z",
                        "hour_start": "13:30:00",
                        "hour_end": "15:30:00"
                    }
                ]
            }]
    );
});
