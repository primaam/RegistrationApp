const Province = [
  {
    id: 1,
    name: 'DKI Jakarta',
  },
  {
    id: 2,
    name: 'Bali',
  },
  {
    id: 3,
    name: 'Jawa Timur',
  },
];

const City = [
  {
    id: 1,
    province: 'DKI Jakarta',
    cities: [
      'Kepulauan Seribu',
      'Jakarta Barat',
      'Jakarta Pusat',
      'Jakarta Selatan',
      'Jakarta Timur',
      'Jakarta Utara',
    ],
  },
  {
    id: 2,
    province: 'Bali',
    cities: ['Badung', 'Bangli', 'Buleleng', 'Gianyar', 'Denpasar'],
  },
  {
    id: 3,
    province: 'Jawa Timur',
    cities: [
      'Bangkalan',
      'Banyuwangi',
      'Blitar',
      'Bojonegoro',
      'Bondowoso',
      'Surabaya',
    ],
  },
];

const SubDistrict = [
  // jakarta
  {
    cityName: 'Kepulauan Seribu',
    data: [
      {
        name: 'Kepulauan Seribu Utara',
        detail: ['Pulau Harapan', 'Pulau Kelapa', 'Pulau Panggang'],
      },
      {
        name: 'Kepulauan Seribu Selatan',
        detail: ['Pulau Pari', 'Pulau Tidung', 'Pulau Untung Jawa'],
      },
    ],
  },
  {
    cityName: 'Jakarta Pusat',
    data: [
      {
        name: 'Kemayoran',
        detail: [
          'Cempaka Baru',
          'Gunung Sahari Selatan',
          'Harapan Mulya',
          'Kebon Kosong',
          'Kemayoran',
          'Serdang',
          'Sumur Batu',
          'Utan Panjang',
        ],
      },
      {
        name: 'Johar Baru',
        detail: ['Galur', 'Johar Baru', 'Kampung Rawa', 'Tanah Tinggi'],
      },
      {
        name: 'Gambir',
        detail: [
          'Cideng',
          'Duri Pulo',
          'Gambir',
          'Kebon Kelapa',
          'Petojo Selatan',
          'Petojo Utara',
        ],
      },
      {
        name: 'Cempaka Putih',
        detail: ['Cempaka Putih Barat', 'Cempaka Putih Timur', 'Rawasari'],
      },
      {
        name: 'Tanah Abang',
        detail: [
          'Bendungan Hilir',
          'Gelora',
          'Kampung Bali',
          'Karet Tengsin',
          'Kebon Kacang',
          'Kebon Melati',
          'Petamburan',
        ],
      },
      {
        name: 'Senen',
        detail: ['Bungur', 'Kenari', 'Kramat', 'Kwitang', 'Paseban', 'Senen'],
      },
    ],
  },
  {
    cityName: 'Jakarta Selatan',
    data: [
      {
        name: 'Tebet',
        detail: [
          'Bukit Duri',
          'Kebon Baru',
          'Manggarai',
          'Manggarai Selatan',
          'Menteng Dalam',
          'Tebet Barat',
          'Tebet Timur',
        ],
      },
      {
        name: 'Setia Budi',
        detail: [
          'Guntur',
          'Karet',
          'Karet Kuningan',
          'Karet Semanggi',
          'Kuningan Timur',
          'Menteng Atas',
          'Pasar Manggis',
          'Setiabudi',
        ],
      },
      {
        name: 'Pesanggrahan',
        detail: [
          'Bintaro',
          'Pesanggrahan',
          'Petukangan Selatan',
          'Petukangan Utara',
          'Ulujami',
        ],
      },
    ],
  },
  {
    cityName: 'Jakarta Barat',
    data: [
      {
        name: 'Palmerah',
        detail: [
          'Jatipulo',
          'Kemanggisan',
          'Kota Bambu Selatan',
          'Kota Bambu Utara',
          'Palmerah',
          'Slipi',
        ],
      },
      {
        name: 'Kembangan',
        detail: [
          'Joglo',
          'Kembangan Selatan',
          'Kembangan Utara',
          'Meruya Selatan (Udik)',
          'Meruya Utara (Ilir)',
          'Srengseng',
        ],
      },
      {
        name: 'Kebon Jeruk',
        detail: [
          'Duri Kepa',
          'Kebon Jeruk',
          'Kedoya Selatan',
          'Kedoya Utara',
          'Kelapa Dua',
          'Sukabumi Selatan (Udik)',
          'Sukabumi Utara (Ilir)',
        ],
      },
    ],
  },
  {
    cityName: 'Jakarta Timur',
    data: [
      {
        name: 'Jatinegara',
        detail: [
          'Bali Mester',
          'Bidaracina',
          'Cipinang Besar Selatan',
          'Cipinang Besar Utara',
          'Cipinang Cempedak',
          'Cipinang Muara',
          'Kampung Melayu',
          'Rawa Bunga',
        ],
      },
      {
        name: 'Duren Sawit',
        detail: [
          'Duren Sawit',
          'Klender',
          'Malaka Jaya',
          'Malaka Sari',
          'Pondok Bambu',
          'Pondok Kelapa',
          'Pondok Kopi',
        ],
      },
      {
        name: 'Ciracas',
        detail: [
          'Cibubur',
          'Ciracas',
          'Kelapa Dua Wetan',
          'Rambutan',
          'Susukan',
        ],
      },
    ],
  },
  {
    cityName: 'Jakarta Utara',
    data: [
      {
        name: 'Cilincing',
        detail: [
          'Cilincing',
          'Kali Baru',
          'Marunda',
          'Rorotan',
          'Semper Barat',
          'Semper Timur',
          'Sukapura',
        ],
      },
      {
        name: 'Tanjung Priok',
        detail: [
          'Kebon Bawang',
          'Papanggo',
          'Sungai Bambu',
          'Sunter Agung',
          'Sunter Jaya',
          'Tanjung Priok',
          'Warakas',
        ],
      },
      {
        name: 'Penjaringan',
        detail: [
          'Kamal Muara',
          'Kapuk Muara',
          'Pejagalan',
          'Penjaringan',
          'Pluit',
        ],
      },
    ],
  },
  //   bali
  //   ['Badung', 'Bangli', 'Buleleng', 'Gianyar', 'Denpasar'],
  {
    cityName: 'Badung',
    data: [
      {
        name: 'Petang',
        detail: [
          // Belok
          // Carangsari
          // Getasan
          // Pangsan
          // Pelaga
          // Petang
          // Sulangai
        ],
      },
      {
        name: 'Kepulauan Seribu Selatan',
        detail: ['Pulau Pari', 'Pulau Tidung', 'Pulau Untung Jawa'],
      },
    ],
  },
  {
    cityName: 'Bangli',
    data: [
      {
        name: 'Tembuku',
        detail: [
          'Bangbang',
          'Jehem',
          'Peninjoan',
          'Tembuku',
          'Undisan',
          'Yangapi',
        ],
      },
      {
        name: 'Susut',
        detail: [
          'Abuan',
          'Apuan',
          'Demulih',
          'Pengiangan',
          'Penglumbaran',
          'Selat',
          'Sulahan',
          'Susut',
          'Tiga',
        ],
      },
    ],
  },
  {
    cityName: 'Buleleng',
    data: [
      {
        name: 'Tejakula',
        detail: [
          'Bondalem',
          'Julah',
          'Les',
          'Madenan',
          'Pacung',
          'Penuktukan',
          'Sambirenteng',
          'Sembiran',
          'Tejakula',
          'Tembok',
        ],
      },
      {
        name: 'Busungbiu',
        detail: [
          'Bengkel',
          'Bongancina',
          'Busungbiu',
          'Kedia (Kedis)',
          'Kekeran',
          'Pelapuan',
          'Pucaksari',
          'Sepang',
          'Sepang Kelod',
          'Subuk',
          'Telaga',
          'Tinggarsari',
          'Tista',
          'Titab',
          'Umejero',
        ],
      },
    ],
  },
  {
    cityName: 'Gianyar',
    data: [
      {
        name: 'Belah Batuh (Blahbatuh)',
        detail: [
          'Bedulu',
          'Belega',
          'Blahbatuh',
          'Bona',
          'Buruan',
          'Keramas',
          'Medahan',
          'Pering',
          'Saba',
        ],
      },
      {
        name: 'Ubud',
        detail: [
          'Kedewatan',
          'Lodtunduh',
          'Mas',
          'Peliatan',
          'Petulu',
          'Sayan',
          'Singakerta (Singekerta)',
          'Ubud',
        ],
      },
    ],
  },
  {
    cityName: 'Denpasar',
    data: [
      {
        name: 'Denpasar Utara',
        detail: [
          'Dangin Puri Kaja',
          'Dangin Puri Kangin',
          'Dangin Puri Kauh',
          'Dauh Puri Kaja',
          'Peguyangan',
          'Peguyangan Kaja',
          'Peguyangan Kangin',
          'Pemecutan Kaja',
          'Tonja',
          'Ubung',
          'Ubung Kaja',
        ],
      },
      {
        name: 'Denpasar Timur',
        detail: [
          'Dangin Puri',
          'Dangin Puri Klod',
          'Kesiman',
          'Kesiman Kertalangu',
          'Kesiman Petilan',
          'Penatih',
          'Penatih Dangin Puri',
          'Sumerta',
          'Sumerta Kaja',
          'Sumerta Kauh',
          'Sumerta Kelod/Klod',
        ],
      },
    ],
  },
  // jawa timur
];

const dataProvince = [
  {id: '11', name: 'ACEH'},
  {id: '12', name: 'SUMATERA UTARA'},
  {id: '13', name: 'SUMATERA BARAT'},
  {id: '14', name: 'RIAU'},
  {id: '15', name: 'JAMBI'},
  {id: '16', name: 'SUMATERA SELATAN'},
  {id: '17', name: 'BENGKULU'},
  {id: '18', name: 'LAMPUNG'},
  {id: '19', name: 'KEPULAUAN BANGKA BELITUNG'},
  {id: '21', name: 'KEPULAUAN RIAU'},
  {id: '31', name: 'DKI JAKARTA'},
  {id: '32', name: 'JAWA BARAT'},
  {id: '33', name: 'JAWA TENGAH'},
  {id: '34', name: 'DI YOGYAKARTA'},
  {id: '35', name: 'JAWA TIMUR'},
  {id: '36', name: 'BANTEN'},
  {id: '51', name: 'BALI'},
  {id: '52', name: 'NUSA TENGGARA BARAT'},
  {id: '53', name: 'NUSA TENGGARA TIMUR'},
  {id: '61', name: 'KALIMANTAN BARAT'},
  {id: '62', name: 'KALIMANTAN TENGAH'},
  {id: '63', name: 'KALIMANTAN SELATAN'},
  {id: '64', name: 'KALIMANTAN TIMUR'},
  {id: '65', name: 'KALIMANTAN UTARA'},
  {id: '71', name: 'SULAWESI UTARA'},
  {id: '72', name: 'SULAWESI TENGAH'},
  {id: '73', name: 'SULAWESI SELATAN'},
  {id: '74', name: 'SULAWESI TENGGARA'},
  {id: '75', name: 'GORONTALO'},
  {id: '76', name: 'SULAWESI BARAT'},
  {id: '81', name: 'MALUKU'},
  {id: '82', name: 'MALUKU UTARA'},
  {id: '91', name: 'PAPUA BARAT'},
  {id: '94', name: 'PAPUA'},
];
