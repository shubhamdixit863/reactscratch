const app=require("express")();
const cors=require("cors");

app.use(cors());


let data=[
  {
    "_id": "6107fca902654dcc96bf3fc7",
    "balance": "$2,868.94",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "green",
    "name": "Coleen Salinas",
    "gender": "female",
    "company": "APEX",
    "email": "coleensalinas@apex.com",
    "phone": "+1 (919) 426-2569"
  },
  {
    "_id": "6107fca9a3f9d4476a156494",
    "balance": "$1,194.67",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "green",
    "name": "Madeleine Morgan",
    "gender": "female",
    "company": "TALKALOT",
    "email": "madeleinemorgan@talkalot.com",
    "phone": "+1 (802) 534-2092"
  },
  {
    "_id": "6107fca90d5973d48ffd9923",
    "balance": "$3,623.11",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Day Beard",
    "gender": "male",
    "company": "CAPSCREEN",
    "email": "daybeard@capscreen.com",
    "phone": "+1 (843) 436-3871"
  },
  {
    "_id": "6107fca9d3ccf4e6beb6cb96",
    "balance": "$1,771.40",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Lynn Jacobs",
    "gender": "male",
    "company": "AEORA",
    "email": "lynnjacobs@aeora.com",
    "phone": "+1 (991) 403-2523"
  },
  {
    "_id": "6107fca93558068617e6e4d9",
    "balance": "$1,029.25",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "green",
    "name": "Phelps Salas",
    "gender": "male",
    "company": "CIPROMOX",
    "email": "phelpssalas@cipromox.com",
    "phone": "+1 (806) 549-3852"
  },
  {
    "_id": "6107fca9ed33ac6829b70c9e",
    "balance": "$2,977.62",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Holman Morales",
    "gender": "male",
    "company": "ZENTIA",
    "email": "holmanmorales@zentia.com",
    "phone": "+1 (842) 406-2422"
  },
  {
    "_id": "6107fca965ff6b2a96c4fc7e",
    "balance": "$3,011.55",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": "Hicks Lyons",
    "gender": "male",
    "company": "NETROPIC",
    "email": "hickslyons@netropic.com",
    "phone": "+1 (952) 494-3310"
  },
  {
    "_id": "6107fca90f5b127ae21e6007",
    "balance": "$3,946.98",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "green",
    "name": "Vincent Douglas",
    "gender": "male",
    "company": "OVERFORK",
    "email": "vincentdouglas@overfork.com",
    "phone": "+1 (974) 512-3191"
  },
  {
    "_id": "6107fca91badc125663402a9",
    "balance": "$3,501.42",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": "Sharpe Scott",
    "gender": "male",
    "company": "MAGNINA",
    "email": "sharpescott@magnina.com",
    "phone": "+1 (821) 408-2763"
  },
  {
    "_id": "6107fca991043547ea27d962",
    "balance": "$1,501.19",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "green",
    "name": "Claudia Duke",
    "gender": "female",
    "company": "TERAPRENE",
    "email": "claudiaduke@teraprene.com",
    "phone": "+1 (943) 566-2433"
  },
  {
    "_id": "6107fca9e349c6439706e78a",
    "balance": "$3,257.24",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "green",
    "name": "Ursula Hebert",
    "gender": "female",
    "company": "GONKLE",
    "email": "ursulahebert@gonkle.com",
    "phone": "+1 (826) 589-2234"
  },
  {
    "_id": "6107fca9f11ea4af1035f47a",
    "balance": "$1,146.02",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": "Lula Byers",
    "gender": "female",
    "company": "DATAGEN",
    "email": "lulabyers@datagen.com",
    "phone": "+1 (958) 502-3933"
  },
  {
    "_id": "6107fca98d35fc366d67f384",
    "balance": "$3,818.50",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": "Hines Huffman",
    "gender": "male",
    "company": "IDEGO",
    "email": "hineshuffman@idego.com",
    "phone": "+1 (865) 474-3918"
  },
  {
    "_id": "6107fca9bf281ca02178c956",
    "balance": "$1,745.36",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": "Marisol Simmons",
    "gender": "female",
    "company": "TRIPSCH",
    "email": "marisolsimmons@tripsch.com",
    "phone": "+1 (805) 414-3270"
  },
  {
    "_id": "6107fca99818a3e50d5a160b",
    "balance": "$2,502.57",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "Campos Brady",
    "gender": "male",
    "company": "OPTIQUE",
    "email": "camposbrady@optique.com",
    "phone": "+1 (938) 539-3847"
  },
  {
    "_id": "6107fca947f043ed74675204",
    "balance": "$1,461.34",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": "Emily Contreras",
    "gender": "female",
    "company": "GEOLOGIX",
    "email": "emilycontreras@geologix.com",
    "phone": "+1 (839) 563-2733"
  },
  {
    "_id": "6107fca9eb65679c309a46f3",
    "balance": "$3,944.31",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": "Barnett May",
    "gender": "male",
    "company": "MOREGANIC",
    "email": "barnettmay@moreganic.com",
    "phone": "+1 (950) 511-3371"
  },
  {
    "_id": "6107fca9865f89ba77a262a1",
    "balance": "$3,608.69",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "green",
    "name": "Bradford Brooks",
    "gender": "male",
    "company": "QUALITERN",
    "email": "bradfordbrooks@qualitern.com",
    "phone": "+1 (849) 421-3783"
  },
  {
    "_id": "6107fca95e607bf73322bd78",
    "balance": "$2,919.75",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": "Janna Hoffman",
    "gender": "female",
    "company": "FREAKIN",
    "email": "jannahoffman@freakin.com",
    "phone": "+1 (835) 549-3731"
  },
  {
    "_id": "6107fca90c556a4a9d6f2dd8",
    "balance": "$2,264.99",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Gail Dillard",
    "gender": "female",
    "company": "NURALI",
    "email": "gaildillard@nurali.com",
    "phone": "+1 (978) 491-2614"
  },
  {
    "_id": "6107fca9bcc07cb40450b281",
    "balance": "$3,504.35",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "green",
    "name": "Blanca Fowler",
    "gender": "female",
    "company": "BRISTO",
    "email": "blancafowler@bristo.com",
    "phone": "+1 (855) 529-3244"
  },
  {
    "_id": "6107fca9f0692ff63a5a4b71",
    "balance": "$1,417.36",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "brown",
    "name": "Beryl Powers",
    "gender": "female",
    "company": "ZENTURY",
    "email": "berylpowers@zentury.com",
    "phone": "+1 (992) 479-2327"
  },
  {
    "_id": "6107fca9e1e4b0479d2ffb58",
    "balance": "$1,145.62",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "green",
    "name": "Gladys Albert",
    "gender": "female",
    "company": "ONTALITY",
    "email": "gladysalbert@ontality.com",
    "phone": "+1 (838) 490-2768"
  },
  {
    "_id": "6107fca9dc814f6e1616678c",
    "balance": "$2,035.17",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": "Hammond Guerrero",
    "gender": "male",
    "company": "EXOSPACE",
    "email": "hammondguerrero@exospace.com",
    "phone": "+1 (913) 444-2376"
  },
  {
    "_id": "6107fca9f2b08037ceccb58d",
    "balance": "$2,576.60",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": "Chris Ewing",
    "gender": "female",
    "company": "TWIIST",
    "email": "chrisewing@twiist.com",
    "phone": "+1 (897) 455-3510"
  },
  {
    "_id": "6107fca9913daafa67d3e963",
    "balance": "$2,459.71",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": "Shaw Mcdowell",
    "gender": "male",
    "company": "XUMONK",
    "email": "shawmcdowell@xumonk.com",
    "phone": "+1 (829) 430-2599"
  },
  {
    "_id": "6107fca9fd67b859effdcc36",
    "balance": "$2,762.30",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": "Dickson Hampton",
    "gender": "male",
    "company": "PORTALINE",
    "email": "dicksonhampton@portaline.com",
    "phone": "+1 (875) 556-2104"
  },
  {
    "_id": "6107fca92f2b81a57e540f3e",
    "balance": "$3,598.42",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "blue",
    "name": "Rice Wood",
    "gender": "male",
    "company": "EXOZENT",
    "email": "ricewood@exozent.com",
    "phone": "+1 (911) 531-2728"
  },
  {
    "_id": "6107fca9bf1a8e3c56a650e7",
    "balance": "$2,763.90",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "green",
    "name": "Angelina Bartlett",
    "gender": "female",
    "company": "ISONUS",
    "email": "angelinabartlett@isonus.com",
    "phone": "+1 (818) 597-3584"
  },
  {
    "_id": "6107fca98300180db8e68e48",
    "balance": "$2,671.85",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "blue",
    "name": "Ball Goodwin",
    "gender": "male",
    "company": "COMTRAIL",
    "email": "ballgoodwin@comtrail.com",
    "phone": "+1 (980) 563-2163"
  },
  {
    "_id": "6107fca93d17b3cf0e308fc2",
    "balance": "$2,785.89",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Pam Buckley",
    "gender": "female",
    "company": "ACCEL",
    "email": "pambuckley@accel.com",
    "phone": "+1 (956) 479-2005"
  },
  {
    "_id": "6107fca9a1d58b7c63d58690",
    "balance": "$3,351.71",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "green",
    "name": "Head Reynolds",
    "gender": "male",
    "company": "RODEOMAD",
    "email": "headreynolds@rodeomad.com",
    "phone": "+1 (828) 484-3656"
  },
  {
    "_id": "6107fca9bd2693fe0ae7cc13",
    "balance": "$1,812.01",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Ana Kirby",
    "gender": "female",
    "company": "NEPTIDE",
    "email": "anakirby@neptide.com",
    "phone": "+1 (825) 434-2429"
  },
  {
    "_id": "6107fca9b671b70c9075efd4",
    "balance": "$1,349.15",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "brown",
    "name": "Patrick Bowen",
    "gender": "male",
    "company": "CHORIZON",
    "email": "patrickbowen@chorizon.com",
    "phone": "+1 (910) 444-3016"
  },
  {
    "_id": "6107fca9853994b3c5915daf",
    "balance": "$1,154.86",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": "Ronda Moreno",
    "gender": "female",
    "company": "KENEGY",
    "email": "rondamoreno@kenegy.com",
    "phone": "+1 (884) 464-2290"
  },
  {
    "_id": "6107fca9135d35a486a58233",
    "balance": "$2,832.58",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": "Lily Stewart",
    "gender": "female",
    "company": "BOLAX",
    "email": "lilystewart@bolax.com",
    "phone": "+1 (809) 431-2771"
  },
  {
    "_id": "6107fca909c67e3cb7369645",
    "balance": "$3,800.54",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": "Jolene Christensen",
    "gender": "female",
    "company": "LEXICONDO",
    "email": "jolenechristensen@lexicondo.com",
    "phone": "+1 (895) 483-3712"
  },
  {
    "_id": "6107fca98cb6125f715ccf1f",
    "balance": "$2,570.76",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "green",
    "name": "Fields Donaldson",
    "gender": "male",
    "company": "COMSTAR",
    "email": "fieldsdonaldson@comstar.com",
    "phone": "+1 (825) 481-2120"
  },
  {
    "_id": "6107fca94fabdb5fc258962c",
    "balance": "$2,544.49",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Renee Whitney",
    "gender": "female",
    "company": "XYQAG",
    "email": "reneewhitney@xyqag.com",
    "phone": "+1 (836) 441-2046"
  },
  {
    "_id": "6107fca9f042f71d9175d84c",
    "balance": "$1,671.02",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "blue",
    "name": "Bradshaw Alford",
    "gender": "male",
    "company": "INCUBUS",
    "email": "bradshawalford@incubus.com",
    "phone": "+1 (942) 433-2066"
  },
  {
    "_id": "6107fca9f4a93d9f8b3279d8",
    "balance": "$1,656.00",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "green",
    "name": "Curry Conner",
    "gender": "male",
    "company": "EARTHMARK",
    "email": "curryconner@earthmark.com",
    "phone": "+1 (932) 509-3506"
  },
  {
    "_id": "6107fca9a7d8255e6956f0e6",
    "balance": "$1,905.16",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Eleanor House",
    "gender": "female",
    "company": "HOMETOWN",
    "email": "eleanorhouse@hometown.com",
    "phone": "+1 (963) 429-3696"
  },
  {
    "_id": "6107fca903697cfab1ec7427",
    "balance": "$2,322.63",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Isabel Moody",
    "gender": "female",
    "company": "JIMBIES",
    "email": "isabelmoody@jimbies.com",
    "phone": "+1 (866) 437-3210"
  },
  {
    "_id": "6107fca9fe729f82751f3513",
    "balance": "$2,401.48",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": "Winters Stuart",
    "gender": "male",
    "company": "NITRACYR",
    "email": "wintersstuart@nitracyr.com",
    "phone": "+1 (857) 478-2730"
  },
  {
    "_id": "6107fca9f1b6ea05693c55bb",
    "balance": "$3,091.90",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Trudy Ryan",
    "gender": "female",
    "company": "TRIBALOG",
    "email": "trudyryan@tribalog.com",
    "phone": "+1 (930) 469-2751"
  },
  {
    "_id": "6107fca915d2d1ee938a1984",
    "balance": "$3,913.22",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Gomez Wilder",
    "gender": "male",
    "company": "QUORDATE",
    "email": "gomezwilder@quordate.com",
    "phone": "+1 (913) 470-3308"
  },
  {
    "_id": "6107fca9d780d9c57b268bfb",
    "balance": "$2,011.94",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": "Horn Silva",
    "gender": "male",
    "company": "AQUACINE",
    "email": "hornsilva@aquacine.com",
    "phone": "+1 (929) 581-2687"
  },
  {
    "_id": "6107fca94b1d7731476ab3f1",
    "balance": "$1,522.72",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "brown",
    "name": "Joanna Hudson",
    "gender": "female",
    "company": "PLAYCE",
    "email": "joannahudson@playce.com",
    "phone": "+1 (996) 412-2443"
  },
  {
    "_id": "6107fca90d010f19c93697c6",
    "balance": "$3,533.90",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "green",
    "name": "Nieves Cannon",
    "gender": "male",
    "company": "BIOTICA",
    "email": "nievescannon@biotica.com",
    "phone": "+1 (847) 581-2051"
  },
  {
    "_id": "6107fca9d5ade592b0f40c3b",
    "balance": "$2,835.81",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "blue",
    "name": "Gibson Kim",
    "gender": "male",
    "company": "GLEAMINK",
    "email": "gibsonkim@gleamink.com",
    "phone": "+1 (977) 556-2610"
  },
  {
    "_id": "6107fca9d35a9afa4fdbdf17",
    "balance": "$2,970.52",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "brown",
    "name": "Casey Glover",
    "gender": "female",
    "company": "MEGALL",
    "email": "caseyglover@megall.com",
    "phone": "+1 (978) 523-2735"
  },
  {
    "_id": "6107fca9303b3cfb906b08fb",
    "balance": "$3,712.93",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Minnie Lucas",
    "gender": "female",
    "company": "BLEENDOT",
    "email": "minnielucas@bleendot.com",
    "phone": "+1 (911) 549-3162"
  },
  {
    "_id": "6107fca99750124939251915",
    "balance": "$3,494.99",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": "Espinoza Todd",
    "gender": "male",
    "company": "PETICULAR",
    "email": "espinozatodd@peticular.com",
    "phone": "+1 (923) 468-3722"
  },
  {
    "_id": "6107fca9d0d4223b8a244bfd",
    "balance": "$1,198.14",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": "Witt Cruz",
    "gender": "male",
    "company": "ORBIXTAR",
    "email": "wittcruz@orbixtar.com",
    "phone": "+1 (996) 506-2749"
  },
  {
    "_id": "6107fca993b476b5e6b8e2b6",
    "balance": "$3,354.77",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Roseann Dickerson",
    "gender": "female",
    "company": "FROLIX",
    "email": "roseanndickerson@frolix.com",
    "phone": "+1 (897) 455-2353"
  },
  {
    "_id": "6107fca942a6cd8a2c2fb134",
    "balance": "$1,162.00",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Deloris Schroeder",
    "gender": "female",
    "company": "VINCH",
    "email": "delorisschroeder@vinch.com",
    "phone": "+1 (959) 441-3225"
  },
  {
    "_id": "6107fca96607033f48c6a0f8",
    "balance": "$1,039.38",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "brown",
    "name": "Hoffman Clay",
    "gender": "male",
    "company": "LOCAZONE",
    "email": "hoffmanclay@locazone.com",
    "phone": "+1 (885) 588-3466"
  },
  {
    "_id": "6107fca9cc351d7e19a34b83",
    "balance": "$3,768.06",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "Herring Harvey",
    "gender": "male",
    "company": "UXMOX",
    "email": "herringharvey@uxmox.com",
    "phone": "+1 (969) 427-3490"
  },
  {
    "_id": "6107fca99856d445e29acdfe",
    "balance": "$3,449.18",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Carmela Sharp",
    "gender": "female",
    "company": "STUCCO",
    "email": "carmelasharp@stucco.com",
    "phone": "+1 (856) 415-2378"
  },
  {
    "_id": "6107fca9aa2f81808459063b",
    "balance": "$2,574.38",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": "Lucile Shaffer",
    "gender": "female",
    "company": "BYTREX",
    "email": "lucileshaffer@bytrex.com",
    "phone": "+1 (868) 581-2955"
  },
  {
    "_id": "6107fca9ebbbf402209f020d",
    "balance": "$2,348.96",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Craft Simon",
    "gender": "male",
    "company": "MOMENTIA",
    "email": "craftsimon@momentia.com",
    "phone": "+1 (945) 483-3735"
  },
  {
    "_id": "6107fca9997c8e56d72f990e",
    "balance": "$2,532.98",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "blue",
    "name": "Emilia Gallegos",
    "gender": "female",
    "company": "ROCKYARD",
    "email": "emiliagallegos@rockyard.com",
    "phone": "+1 (820) 564-3332"
  },
  {
    "_id": "6107fca9fd62bd2b5795bfda",
    "balance": "$2,562.88",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "blue",
    "name": "Collier Hyde",
    "gender": "male",
    "company": "COMVEX",
    "email": "collierhyde@comvex.com",
    "phone": "+1 (929) 410-3966"
  },
  {
    "_id": "6107fca9720a402242183c7f",
    "balance": "$1,742.01",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Brittney Tyler",
    "gender": "female",
    "company": "COREPAN",
    "email": "brittneytyler@corepan.com",
    "phone": "+1 (858) 488-3616"
  },
  {
    "_id": "6107fca9f760a20a483a30c2",
    "balance": "$1,660.86",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "blue",
    "name": "Huff Norman",
    "gender": "male",
    "company": "MULTRON",
    "email": "huffnorman@multron.com",
    "phone": "+1 (965) 522-2188"
  },
  {
    "_id": "6107fca9ec6b8eaa2cf1b295",
    "balance": "$3,711.00",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Dolly Delaney",
    "gender": "female",
    "company": "INTERLOO",
    "email": "dollydelaney@interloo.com",
    "phone": "+1 (828) 402-2220"
  },
  {
    "_id": "6107fca964a152ab0c785e23",
    "balance": "$1,890.21",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": "Rosario Jenkins",
    "gender": "female",
    "company": "SINGAVERA",
    "email": "rosariojenkins@singavera.com",
    "phone": "+1 (841) 576-3392"
  }
]
app.get("/data",(req,res)=>{
    

res.json({data:data});
})


app.get("/getData/:id",(req,res)=>{

  let _data=data.slice(0,req.params.id);
  res.json(_data);

})


app.get("/getDat2",(req,res)=>{
  let params=req.query.name;

  let _data=data.find(ele=>ele._id==params);
  res.json(_data);

})
app.listen("9000",()=>{

    console.log("Server running")
})