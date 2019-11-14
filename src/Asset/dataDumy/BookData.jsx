
const BookData = [
    {
        id:1,
        title: 'Pangeran Cilik',
        author: 'Antoine De Saint',
        year: 2011,
        category: 'novel',
        status:'available',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115200/DumyBookIcon/img-pangerancilik_puvgqh.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105876/DumyBookPic/img-2pangerancilik_crrmah.jpg',
        tinydesc: 'Seolah cerita anak-anak, tapi sebenarnya dapat menjadi renungan juga bagi orang dewasa.',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id:2,
        title: 'Catatan Pinggir',
        author: 'Goenawan Muhammad',
        year: 2017,
        category: 'catatan',
        status:'available',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115199/DumyBookIcon/img-catatanpinggir_zncju6.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105852/DumyBookPic/img-1catatanpinggir_sxxxac.jpg',
        tinydesc: 'Buku ini sebagai semacam komentar, atau seperti gumam sendiri di tengah suara orang ramai.',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        id:3,
        title: 'Tentang Kamu',
        author: 'Tere Liye',
        year: 2016,
        category: 'novel',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115202/DumyBookIcon/img-tentangkamu_kj6thj.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105889/DumyBookPic/img-3tentangkamu_bqmulg.jpg',
        tinydesc: 'Aku tidak akan menangis karena sesuatu telah berakhir, tapi aku akan tersenyum karena sesuatu itu pernah terjadi.',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        id:4,
        title: 'Daun yang Jatuh',
        author: 'Tere Liye',
        year: 2010,
        category: 'novel',
        status:'available',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115211/DumyBookIcon/img-daunjatuh_njtgar.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105884/DumyBookPic/img-4daunyangjatuh_hi1xsy.jpg',
        tinydesc: 'Dia bagai malaikat bagi kami. Merengkuh aku, adikku, dan Ibu dari kehidupan jalanan yang miskin',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        id:5,
        title: 'Pergi',
        author: 'Tere Liye',
        year: 2018,
        category: 'novel',
        status:'available',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115205/DumyBookIcon/img-pergi_vcy5i2.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105858/DumyBookPic/img-5pergi_cnfsvl.jpg',
        tinydesc: 'Sebuah kisah tentang menemukan tujuan, ke mana hendak pergi, melewati kenangan demi kenangan di masa lalu.',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        id:6,
        title: 'Hujan',
        author: 'Tere Liye',
        year: 2016,
        category: 'novel',
        status:'Not available',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115207/DumyBookIcon/img-hujan_cyldoz.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105865/DumyBookPic/img-6hujan_sa2cxv.jpg',
        tinydesc: 'Tentang persahabatan.Tentang cinta.Tentang perpisahan.Tentang melupakan.Tentang hujan.',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        id:7,
        title: 'Sepotong Hati Baru',
        author: 'Tere Liye',
        year: 2012,
        category: 'novel',
        status:'available',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115207/DumyBookIcon/img-sepotonghatibaru_odvypd.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105878/DumyBookPic/img-7sepotonghati_qltk4h.jpg',
        tinydesc: 'Kita hanya punya sepotong hati, bukan? Satu-satunya. Semoga datang kepadamu pemahaman yang baik.',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        id:8,
        title: 'Hafalan Sholat Delisa',
        author: 'Tere Liye',
        year: 2005,
        category: 'novel',
        status:'available',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115201/DumyBookIcon/img-hafalansholatdelisa_m8iaaf.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105886/DumyBookPic/img-8hafalandelisa_yjgnyl.jpg',
        tinydesc: 'Delisa anak perempuan yang bermata hijau, umurnya baru mencecah lima tahun. ia coba menghafal bacaan dalam solat',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    },
    {
        id:9,
        title: 'Si Anak Pintar',
        author: 'Tere Liye',
        year: 2018,
        category: 'novel',
        status:'available',
        icon:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573115208/DumyBookIcon/img-sianakpintar_p5plf9.jpg',
        img:'https://res.cloudinary.com/naandalistcloud/image/upload/v1573105916/DumyBookPic/img-9sianakpintar_mod74f.jpg',
        tinydesc: 'Jangan pernah membenci Mamak kau, jangan. Karena jika kau tahu sedikit saja apa yang telah ia lakukan demi kau,',
        fulldesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    }
]

export default BookData;