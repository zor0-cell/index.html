// Music tracks data (200 tracks)
const tracks = [
    {
        id: 1,
        title: "No one noticed",
        artist: "The Marias",
        artistId: 1,
        duration: "3:56",
        cover: "https://avatars.mds.yandex.net/i?id=a3b036bcdd2d49eb7a42cd3f220f0d15f0f1af8f-5180074-images-thumbs&n=13",
        audio: "https://files.catbox.moe/2nqd32.mp3",
    },
    {
        id: 2,
        title: "AKETESIN",
        artist: "De Lacure, V$XVPRINCE",
        artistId: 0,
        duration: "3:16",
        cover: "https://avatars.mds.yandex.net/i?id=c51eb7389b32947ad861ef81557a11b642e2e8e4-5645229-images-thumbs&n=13",
        audio: "https://files.catbox.moe/uqzrpa.mp3",
    },
    {
        id: 3,
        title: "Грустный эконом",
        artist: "PIZZA, NAVAI",
        artistId: 0,
        duration: "3:57",
        cover: "https://avatars.mds.yandex.net/i?id=94d2f64bfbfa328e09f0684453a7cfa1d3d84839-5887331-images-thumbs&n=13",
        audio: "https://files.catbox.moe/2v42iv.mp3",
    },
    {
        id: 4,
        title: "Zhauap Bar Ma?",
        artist: "Moldanazar",
        artistId: 0,
        duration: "3:55",
        cover: "https://avatars.mds.yandex.net/i?id=4b952c3eb40f44e09eb0d2bb05b4b49ce8bd72c9-16291885-images-thumbs&n=13",
        audio: "https://files.catbox.moe/jmdacp.mp3",
    },
    {
        id: 5,
        title: "Unaisyn",
        artist: "De Lacure, Ирина Кайратовна",
        artistId: 0,
        duration: "3:28",
        cover: "https://avatars.mds.yandex.net/i?id=3dd7201cc1de652be792b6fab04881a804ee3c0c-9843573-images-thumbs&n=13",
        audio: "https://files.catbox.moe/caiq7v.mp3",
    },
    {
        id: 6,
        title: "Не интересно",
        artist: "V$XVPRiNCE",
        artistId: 0,
        album: "Metropolitan",
        duration: "4:05",
        cover: "https://avatars.mds.yandex.net/i?id=f194dbe3ba7b2e9b8f7a78f87f5d8e3da0ef0ec8-9271342-images-thumbs&n=13",
        audio: "https://files.catbox.moe/ap74ip.mp3",
    },
    {
        id: 7,
        title: "Untouchable",
        artist: "MiyaGi & Эндшипиль, Рем Дигга",
        artistId: 0,
        album: "Summit Views",
        duration: "3:33",
        cover: "https://picsum.photos/id/7/400/400",
        audio: "https://files.catbox.moe/vi5yce.mp3",
    },
    {
        id: 8,
        title: "Кино",
        artist: "MACAN",
        artistId: 0,
        album: "Golden Sands",
        duration: "3:04",
        cover: "https://avatars.mds.yandex.net/i?id=8ddb19f59fcf60cf1e1cfee9a7fbb8d1c63cc529-5887817-images-thumbs&n=13",
        audio: "https://files.catbox.moe/wxf4td.mp3",
    },
    {
        id: 9,
        title: "10",
        artist: "Эндшпиль",
        artistId: 0,
        duration: "3:58",
        cover: "https://avatars.mds.yandex.net/i?id=2a00000198939e8daeb1c8c59767fa596988-475612-fast-images&n=13",
        audio: "https://files.catbox.moe/d66d4n.mp3",
    },
    {
        id: 10,
        title: 'Не прощайся',
        artist: 'Nuricko',
        artistId: 1,
        album: "Twilight Dreams",
        duration: "3:25",
        cover:'https://avatars.mds.yandex.net/i?id=f11c940f47e9a8c98a7ab3a70359c5aa41982fd3-5216657-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/15dwk9.mp3',
    },
    {
        id: 11,
        title: "Антигерой",
        artist: "ELMAN",
        artistId: 0,
        duration: "2:44",
        cover: "https://avatars.mds.yandex.net/i?id=7f5d2a2c4b8202e88167c6d9e9ac7e26f9c1490e-3891756-images-thumbs&n=13",
        audio: "https://files.catbox.moe/iq804s.mp3",
    },
    {
        id: 12,
        title: "Уйду",
        artist: "Xcho",
        artistId: 0,
        duration: "2:25",
        cover: "https://avatars.mds.yandex.net/i?id=804682f4678eac8e7707a3df56555e319cf1a423-5906571-images-thumbs&n=13",
        audio: "https://files.catbox.moe/7p1al6.mp3",
    },
    {
        id: 13,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 14,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 15,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 16,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 17,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 18,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 19,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 20,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 21,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 22,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 23,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 24,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 25,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 26,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 27,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 28,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 29,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 30,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 31,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 32,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 33,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 34,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 35,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 36,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 37,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 38,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 39,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 40,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 41,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 42,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 43,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 44,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 45,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 46,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 47,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 0,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 48,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 1,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 49,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 1,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
        id: 50,
        title: "Sunset Boulevard",
        artist: "Golden Hour",
        artistId: 1,
        duration: "4:22",
        cover: "https://picsum.photos/id/10/400/400",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    }
];

    // Artist data
    const artists = {
        1: {
            name: "Nuricko",
            avatar: "https://avatars.mds.yandex.net/i?id=f11c940f47e9a8c98a7ab3a70359c5aa41982fd3-5216657-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=98718e212f1392e2f3ada1cbc483f9250edf2326-4034676-images-thumbs&n=13",
            trackCount: 10,
            albumCount: 1
        },
        2: {
            name: "Xcho",
            avatar: "https://avatars.mds.yandex.net/i?id=edf3f25d1c27aa76c6301d593e609e8c0ade8394-5288064-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=bba84f55627e3dc88fa9f5e0d57813c710709280-5736349-images-thumbs&n=13",
            trackCount: 2,
            albumCount: 2
        },
        3: {
            name: "M'Dee",
            avatar: "https://avatars.mds.yandex.net/i?id=158b1221b228b18f0d7d723c9d24b2878cc9c2c0-8341813-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=4186bf980c676e42fa2e7510f529e307cc7a54dc-7054193-images-thumbs&n=13",
            trackCount: 10,
            albumCount: 2
        },
        4: {
            name: "Konsta",
            avatar: "https://avatars.mds.yandex.net/i?id=19e65570220d5cefa0814806b1f55309bc64aa84-9068443-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=345c260ff1102a7c82fe3a3261da426f331cb972-10641683-images-thumbs&n=13",
            trackCount: 10,
            albumCount: 1
        },
        5: {
            name: "ergabvs",
            avatar: "https://avatars.mds.yandex.net/i?id=36364a1d68bfd85fdc38594973f5c932cca0bf2e-5502450-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=9c8ed62ab56f1fef2d23e79c95ded72abe9a4b71-12652472-images-thumbs&n=13",
            trackCount: 7,
            albumCount: 1
        },
        6: {
            name: "MOT",
            avatar: "https://avatars.mds.yandex.net/i?id=39ef1d200ed0f341b4e2b98ad268c54a474e8ab7-11956207-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=d8d7053d710633fb54e89fec5e4fc2f447872c18-4826372-images-thumbs&n=13",
            trackCount: 7,
            albumCount: 1
        },
        7: {
            name: "HammAli & Navai",
            avatar: "https://avatars.mds.yandex.net/i?id=44bdeb32c674bd0f3544aa0c76a6cb5fd28dce91-4860201-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=6a4b332e6330a3e4b659ca663d68e2940b990961-12644621-images-thumbs&n=13",
            trackCount: 27,
            albumCount: 5
        },
        8: {
            name: "Ulukmanapo",
            avatar: "https://avatars.mds.yandex.net/i?id=ef5eaaa577b2806515594df06977888acd21badd-5175280-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=33430f46c31ba9c2c3c45b2215d091a9-5449562-images-thumbs&n=13",
            trackCount: 4,
            albumCount: 1
        },
        9: {
            name: "V $ X V PRiNCE",
            avatar: "https://avatars.mds.yandex.net/i?id=aee526ff6a8461fd73b0b397b414de540375cd0a-12366556-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=1afbb66bf44000439c900a9e518ae2cd5ac9274a-9181372-images-thumbs&n=13",
            trackCount: 8,
            albumCount: 1
        },
        10: {
            name: "MACAN",
            avatar: "https://avatars.mds.yandex.net/i?id=956b7dcd4d374e216cf4f35992dec1417d7f71e5-5440433-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=13dba9bdc0fd3e00764d251289b89a7c25ccc58b-5395231-images-thumbs&n=13",
            trackCount: 3,
            albumCount: 1
        },
        11: {
            name: "Santiz",
            avatar: "https://avatars.mds.yandex.net/i?id=31a2140b5a91b1943f2bd64e4f2504cd333d6673-4077743-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=30b4e2319afda642210ba1b483acfa44270d27c1-7149282-images-thumbs&n=13",
            trackCount: 10,
            albumCount: 1
        },
        12: {
            name: "The Adresov",
            avatar: "https://avatars.mds.yandex.net/i?id=0acd2d909d588fe7d002cd07716a5469bd848214-4628413-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=fb27c10cd857dec17d6f379213031a8434e6b9c5-16236323-images-thumbs&n=13",
            trackCount: 12,
            albumCount: 1
        },
        13: {
            name: "akha",
            avatar: "https://avatars.mds.yandex.net/i?id=bd2ecd59c24e14d77a976a7c655628677dc45f88-4450484-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=143f6fe55ce5b7d10aed9a67fcbd9c0485463018-9855166-images-thumbs&n=13",
            trackCount: 9,
            albumCount: 1
        },
        14: {
            name: "Ирина Кайратовна",
            avatar: "https://avatars.mds.yandex.net/i?id=f2a9fb8a34024c8f479de36d021f19141832567e-8174408-images-thumbs&n=13",
            background: "https://avatars.mds.yandex.net/i?id=5a6afd416adf40ec4bdbba6184f3010f8e3b517b-4901375-images-thumbs&n=13",
            trackCount: 4,
            albumCount: 1
        },
        
    };

    // User playlists
    const playlists = [
        {
            id: 1,
            name: "Моя любимая музыка",
            cover: "https://avatars.mds.yandex.net/i?id=4b921c43f8a540e5b69833ee08e7b61f66c84afe-7085252-images-thumbs&n=13",
            trackCount: 12,
            tracks: [1, 2, 3, 4, 5]
        },
    ];

    // Recently played tracks
    const recentlyPlayed = tracks.slice(0, 6);

    // Current user library (favorite tracks)
    const userLibrary = tracks.slice(0, 10);

    // Lyrics synchronization data (time in seconds)
    const lyricsSync = {
        1: [
            { time: 0, text: "Midnight dreams, floating high" },
            { time: 4, text: "Stars above, you and I" },
            { time: 8, text: "Whispers in the silent night" },
            { time: 12, text: "Everything feels so right" },
            { time: 16, text: "Dancing shadows on the wall" },
            { time: 20, text: "Hear the universe call" },
            { time: 24, text: "Lost in time, lost in space" },
            { time: 28, text: "In your arms, I find my place" },
            { time: 32, text: "(Chorus)" },
            { time: 34, text: "Midnight dreams, take me away" },
            { time: 38, text: "To a world where we can stay" },
            { time: 42, text: "No tomorrow, no goodbye" },
            { time: 46, text: "Just you and I beneath the sky" }
        ],
        2: [
            { time: 0, text: "Starlight serenade, playing soft and low" },
            { time: 4, text: "Guiding us where we should go" },
            { time: 8, text: "Through the velvet night so deep" },
            { time: 12, text: "Promises we'll always keep" },
            { time: 16, text: "Galaxies in perfect tune" },
            { time: 20, text: "Dancing beneath the moon" },
            { time: 24, text: "Every note a memory" },
            { time: 28, text: "Of what you mean to me" },
            { time: 32, text: "(Chorus)" },
            { time: 34, text: "Starlight serenade, sing to me" },
            { time: 38, text: "Of what's meant to be" },
            { time: 42, text: "In this moment, in this place" },
            { time: 46, text: "I see forever on your face" }
        ],
        4: [
            { time: 0, text: "Ocean waves, crashing free" },
            { time: 4, text: "Carrying me out to sea" },
            { time: 8, text: "Salt in the air, wind in my hair" },
            { time: 12, text: "Nothing compares to this feeling rare" },
            { time: 16, text: "Sailing through the endless blue" },
            { time: 20, text: "Every moment feels brand new" },
            { time: 24, text: "Horizon line, where dreams begin" },
            { time: 28, text: "Let the journey always win" },
            { time: 32, text: "(Chorus)" },
            { time: 34, text: "Ocean waves, carry me home" },
            { time: 38, text: "Where I'll never feel alone" },
            { time: 42, text: "In your rhythm, in your flow" },
            { time: 46, text: "This is where I want to go" }
        ]
    };

    // DOM Elements
    const homeItem = document.getElementById('homeItem');
    const allMusicItem = document.getElementById('allMusicItem');
    const libraryItem = document.getElementById('libraryItem');
    const recentItem = document.getElementById('recentItem');
    const artistsItem = document.getElementById('artistsItem');
    const playlistsItem = document.getElementById('playlistsItem');
    
    // Mobile navigation items
    const mobileHomeItem = document.getElementById('mobileHomeItem');
    const mobileAllMusicItem = document.getElementById('mobileAllMusicItem');
    const mobileLibraryItem = document.getElementById('mobileLibraryItem');
    const mobileArtistsItem = document.getElementById('mobileArtistsItem');
    const mobilePlaylistsItem = document.getElementById('mobilePlaylistsItem');
    
    const pageTitle = document.getElementById('pageTitle');
    const createPlaylistBtn = document.getElementById('createPlaylistBtn');
    const createPlaylistModal = document.getElementById('createPlaylistModal');
    const closeCreatePlaylist = document.getElementById('closeCreatePlaylist');
    const createPlaylistForm = document.getElementById('createPlaylistForm');
    
    const homeSection = document.getElementById('homeSection');
    const allMusicSection = document.getElementById('allMusicSection');
    const librarySection = document.getElementById('librarySection');
    const recentSection = document.getElementById('recentSection');
    const artistsSection = document.getElementById('artistsSection');
    const playlistsSection = document.getElementById('playlistsSection');
    
    const musicGrid = document.getElementById('musicGrid');
    const allMusicGrid = document.getElementById('allMusicGrid');
    const libraryGrid = document.getElementById('libraryGrid');
    const recentGrid = document.getElementById('recentGrid');
    const artistsGrid = document.getElementById('artistsGrid');
    const artistsListGrid = document.getElementById('artistsListGrid');
    const playlistsGrid = document.getElementById('playlistsGrid');
    
    const artistPage = document.getElementById('artistPage');
    const artistBackButton = document.getElementById('artistBackButton');
    const artistBackground = document.getElementById('artistBackground');
    const artistAvatar = document.getElementById('artistAvatar');
    const artistName = document.getElementById('artistName');
    const artistTrackCount = document.getElementById('artistTrackCount');
    const artistAlbumCount = document.getElementById('artistAlbumCount');
    const artistTracksList = document.getElementById('artistTracksList');
    const artistPlayAll = document.getElementById('artistPlayAll');
    
    const playerModal = document.getElementById('playerModal');
    const modalBackBtn = document.getElementById('modalBackBtn');
    const modalCover = document.getElementById('modalCover');
    const modalTitle = document.getElementById('modalTitle');
    const modalArtist = document.getElementById('modalArtist');
    const modalAlbum = document.getElementById('modalAlbum');
    const lyricsText = document.getElementById('lyricsText');
    const modalPlayPause = document.getElementById('modalPlayPause');
    const modalPlayIcon = document.getElementById('modalPlayIcon');
    const modalPauseIcon = document.getElementById('modalPauseIcon');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const fastForwardBtn = document.getElementById('fastForwardBtn');
    const repeatBtn = document.getElementById('repeatBtn');
    const footerRepeatBtn = document.getElementById('footerRepeatBtn');
    const footerPlayer = document.getElementById('footerPlayer');
    const footerCover = document.getElementById('footerCover');
    const footerTitle = document.getElementById('footerTitle');
    const footerArtist = document.getElementById('footerArtist');
    const footerPlayPause = document.getElementById('footerPlayPause');
    const footerPlayIcon = document.getElementById('footerPlayIcon');
    const footerPauseIcon = document.getElementById('footerPauseIcon');
    const footerPrevBtn = document.getElementById('footerPrevBtn');
    const footerNextBtn = document.getElementById('footerNextBtn');
    const footerRewindBtn = document.getElementById('footerRewindBtn');
    const footerFastForwardBtn = document.getElementById('footerFastForwardBtn');
    const audioElement = document.getElementById('audioElement');
    const currentTime = document.getElementById('currentTime');
    const totalTime = document.getElementById('totalTime');
    const progressBar = document.getElementById('progressBar');
    const progressFilled = document.getElementById('progressFilled');

    // Current track state
    let currentTrack = null;
    let currentTrackIndex = 0;
    let isPlaying = false;
    let currentArtistId = null;
    let isRepeat = false;
    let currentLyricsIndex = 0;
    let currentPage = 'home';

    // Format time function
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Show/hide sections
    function showSection(section) {
        homeSection.style.display = 'none';
        allMusicSection.style.display = 'none';
        librarySection.style.display = 'none';
        recentSection.style.display = 'none';
        artistsSection.style.display = 'none';
        playlistsSection.style.display = 'none';
        
        section.style.display = 'block';
    }

    // Update active sidebar item
    function setActiveItem(item) {
        const items = document.querySelectorAll('.sidebar-item');
        items.forEach(i => i.classList.remove('active'));
        if (item) item.classList.add('active');
    }

    // Update active mobile nav item
    function setActiveMobileItem(item) {
        const items = document.querySelectorAll('.mobile-nav-item');
        items.forEach(i => i.classList.remove('active'));
        if (item) item.classList.add('active');
    }

    // Create music cards
    function createMusicCards(container, tracksList) {
        container.innerHTML = '';
        tracksList.forEach(track => {
            const card = document.createElement('div');
            card.className = 'music-card';
            card.innerHTML = `
                <div class="music-card-content">
                    <div class="album-cover">
                        <img src="${track.cover}" alt="${track.title}">
                        <div class="play-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="track-info">
                        <h3>${track.title}</h3>
                        <p>${track.artist}</p>
                        <p class="album">${track.album}</p>
                    </div>
                    <div class="track-duration">${track.duration}</div>
                </div>
            `;
            card.addEventListener('click', () => playTrack(track));
            container.appendChild(card);
        });
    }

    // Create artist items
    function createArtistItems(container, artistsList) {
        container.innerHTML = '';
        Object.values(artistsList).forEach(artist => {
            const item = document.createElement('div');
            item.className = 'recent-item';
            item.innerHTML = `
                <div class="recent-cover">
                    <img src="${artist.avatar}" alt="${artist.name}">
                    <div class="recent-play-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
                <h3 class="recent-title">${artist.name}</h3>
                <p class="recent-artist">${artist.trackCount} песен</p>
            `;
            item.addEventListener('click', () => showArtistPage(artist.name));
            container.appendChild(item);
        });
    }

    // Create playlists
    function createPlaylists() {
        playlistsGrid.innerHTML = '';
        playlists.forEach(playlist => {
            const card = document.createElement('div');
            card.className = 'playlist-card';
            card.innerHTML = `
                <div class="playlist-cover">
                    <img src="${playlist.cover}" alt="${playlist.name}">
                </div>
                <div class="playlist-info">
                    <h3>${playlist.name}</h3>
                    <p>${playlist.trackCount} песен</p>
                </div>
            `;
            card.addEventListener('click', () => {
                pageTitle.textContent = playlist.name;
                createMusicCards(allMusicGrid, tracks.filter(t => playlist.tracks.includes(t.id)));
                showSection(allMusicSection);
                setActiveItem(playlistsItem);
                setActiveMobileItem(mobilePlaylistsItem);
                currentPage = 'playlist';
            });
            playlistsGrid.appendChild(card);
        });
    }

    // Show artist page
    function showArtistPage(artistName) {
        // Find artist by name
        const artistId = Object.keys(artists).find(key => artists[key].name === artistName);
        if (!artistId) return;
        
        const artist = artists[artistId];
        currentArtistId = parseInt(artistId);
        
        // Update artist page
        artistBackground.style.backgroundImage = `url(${artist.background})`;
        artistAvatar.src = artist.avatar;
        artistName.textContent = artist.name;
        artistTrackCount.textContent = artist.trackCount;
        artistAlbumCount.textContent = artist.albumCount;
        
        // Clear and populate tracks list
        artistTracksList.innerHTML = '';
        const artistTracks = tracks.filter(track => track.artistId === currentArtistId);
        
        artistTracks.forEach((track, index) => {
            const trackRow = document.createElement('div');
            trackRow.className = 'track-row';
            trackRow.innerHTML = `
                <div class="track-number">${index + 1}</div>
                <div class="track-info-col">
                    <img src="${track.cover}" alt="${track.title}" class="track-cover">
                    <div class="track-details-col">
                        <div class="track-title">${track.title}</div>
                        <div class="track-artist">${track.artist}</div>
                    </div>
                </div>
                <div class="track-album">${track.album}</div>
                <div class="track-duration">${track.duration}</div>
                <div class="track-play">
                    <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            `;
            trackRow.addEventListener('click', () => playTrack(track));
            artistTracksList.appendChild(trackRow);
        });
        
        // Show artist page
        artistPage.classList.add('active');
    }

    // Find track index
    function findTrackIndex(trackId) {
        return tracks.findIndex(track => track.id === trackId);
    }

    // Play track function
    function playTrack(track) {
        currentTrack = track;
        currentTrackIndex = findTrackIndex(track.id);
        currentLyricsIndex = 0;
        
        // Update modal
        modalCover.src = track.cover;
        modalTitle.textContent = track.title;
        modalArtist.textContent = track.artist;
        modalAlbum.textContent = track.album;
        
        // Create synchronized lyrics
        updateLyricsDisplay();
        
        // Update footer
        footerCover.src = track.cover;
        footerTitle.textContent = track.title;
        footerArtist.textContent = track.artist;
        
        // Set audio source
        audioElement.src = track.audio;
        audioElement.load();
        
        // Show modal and footer
        playerModal.classList.add('active');
        footerPlayer.style.display = 'flex';
        
        // Play audio
        audioElement.play()
            .then(() => {
                isPlaying = true;
                updatePlayPauseIcons();
            })
            .catch(err => {
                console.log('Playback failed:', err);
            });
    }

    // Update lyrics display with synchronization
    function updateLyricsDisplay() {
        lyricsText.innerHTML = '';
        
        if (lyricsSync[currentTrack.id]) {
            lyricsSync[currentTrack.id].forEach((line, index) => {
                const lineElement = document.createElement('div');
                lineElement.className = 'lyric-line';
                lineElement.textContent = line.text;
                lineElement.dataset.time = line.time;
                lyricsText.appendChild(lineElement);
            });
        } else {
            // Fallback to regular lyrics if no sync data
            const lines = currentTrack.lyrics.split('\n');
            lines.forEach(line => {
                if (line.trim()) {
                    const lineElement = document.createElement('div');
                    lineElement.className = 'lyric-line';
                    lineElement.textContent = line;
                    lyricsText.appendChild(lineElement);
                }
            });
        }
    }

    // Update current lyric based on playback time
    function updateCurrentLyric(currentTime) {
        if (!lyricsSync[currentTrack.id]) return;
        
        const lines = lyricsText.querySelectorAll('.lyric-line');
        let newIndex = 0;
        
        for (let i = 0; i < lines.length; i++) {
            const lineTime = parseFloat(lines[i].dataset.time);
            if (currentTime >= lineTime) {
                newIndex = i;
            } else {
                break;
            }
        }
        
        if (newIndex !== currentLyricsIndex) {
            // Remove current class from all lines
            lines.forEach(line => {
                line.classList.remove('current-lyric');
            });
            
            // Add current class to new line
            lines[newIndex].classList.add('current-lyric');
            
            // Scroll to current line
            lines[newIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            currentLyricsIndex = newIndex;
        }
    }

    // Update play/pause icons
    function updatePlayPauseIcons() {
        if (isPlaying) {
            modalPlayIcon.style.display = 'none';
            modalPauseIcon.style.display = 'block';
            footerPlayIcon.style.display = 'none';
            footerPauseIcon.style.display = 'block';
        } else {
            modalPlayIcon.style.display = 'block';
            modalPauseIcon.style.display = 'none';
            footerPlayIcon.style.display = 'block';
            footerPauseIcon.style.display = 'none';
        }
    }

    // Update repeat button state
    function updateRepeatButton() {
        if (isRepeat) {
            repeatBtn.classList.add('active');
            footerRepeatBtn.classList.add('active');
        } else {
            repeatBtn.classList.remove('active');
            footerRepeatBtn.classList.remove('active');
        }
    }

    // Play/Pause functionality
    function togglePlayPause() {
        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        isPlaying = !isPlaying;
        updatePlayPauseIcons();
    }

    // Toggle repeat mode
    function toggleRepeat() {
        isRepeat = !isRepeat;
        updateRepeatButton();
    }

    // Previous track
    function playPrevious() {
        if (currentTrackIndex > 0) {
            playTrack(tracks[currentTrackIndex - 1]);
        }
    }

    // Next track
    function playNext() {
        if (currentTrackIndex < tracks.length - 1) {
            playTrack(tracks[currentTrackIndex + 1]);
        } else {
            // If repeat is on, loop back to first track
            if (isRepeat) {
                playTrack(tracks[0]);
            }
        }
    }

    // Rewind 10 seconds
    function rewind() {
        audioElement.currentTime = Math.max(0, audioElement.currentTime - 10);
    }

    // Fast forward 10 seconds
    function fastForward() {
        audioElement.currentTime = Math.min(audioElement.duration, audioElement.currentTime + 10);
    }

    // Play all artist tracks
    function playAllArtistTracks() {
        const artistTracks = tracks.filter(track => track.artistId === currentArtistId);
        if (artistTracks.length > 0) {
            playTrack(artistTracks[0]);
        }
    }

    // Show create playlist modal
    function showCreatePlaylistModal() {
        createPlaylistModal.classList.add('active');
    }

    // Hide create playlist modal
    function hideCreatePlaylistModal() {
        createPlaylistModal.classList.remove('active');
    }

    // Create new playlist
    function createNewPlaylist(name) {
        const newPlaylist = {
            id: playlists.length + 1,
            name: name,
            cover: "https://picsum.photos/id/1/400/400",
            trackCount: 0,
            tracks: []
        };
        playlists.push(newPlaylist);
        createPlaylists();
    }

    // Event Listeners for desktop navigation
    homeItem.addEventListener('click', () => {
        pageTitle.textContent = 'Главная';
        showSection(homeSection);
        setActiveItem(homeItem);
        setActiveMobileItem(mobileHomeItem);
        currentPage = 'home';
    });

    allMusicItem.addEventListener('click', () => {
        pageTitle.textContent = 'Вся музыка';
        createMusicCards(allMusicGrid, tracks);
        showSection(allMusicSection);
        setActiveItem(allMusicItem);
        setActiveMobileItem(mobileAllMusicItem);
        currentPage = 'allMusic';
    });

    libraryItem.addEventListener('click', () => {
        pageTitle.textContent = 'Библиотека';
        createMusicCards(libraryGrid, userLibrary);
        showSection(librarySection);
        setActiveItem(libraryItem);
        setActiveMobileItem(mobileLibraryItem);
        currentPage = 'library';
    });

    recentItem.addEventListener('click', () => {
        pageTitle.textContent = 'Недавно прослушано';
        createArtistItems(artistsGrid, artists);
        showSection(recentSection);
        setActiveItem(recentItem);
        setActiveMobileItem(mobileHomeItem);
        currentPage = 'recent';
    });

    artistsItem.addEventListener('click', () => {
        pageTitle.textContent = 'Исполнители';
        createArtistItems(artistsListGrid, artists);
        showSection(artistsSection);
        setActiveItem(artistsItem);
        setActiveMobileItem(mobileArtistsItem);
        currentPage = 'artists';
    });

    playlistsItem.addEventListener('click', () => {
        pageTitle.textContent = 'Плейлисты';
        createPlaylists();
        showSection(playlistsSection);
        setActiveItem(playlistsItem);
        setActiveMobileItem(mobilePlaylistsItem);
        currentPage = 'playlists';
    });

    // Event Listeners for mobile navigation
    mobileHomeItem.addEventListener('click', () => {
        pageTitle.textContent = 'Главная';
        showSection(homeSection);
        setActiveItem(homeItem);
        setActiveMobileItem(mobileHomeItem);
        currentPage = 'home';
    });

    mobileAllMusicItem.addEventListener('click', () => {
        pageTitle.textContent = 'Вся музыка';
        createMusicCards(allMusicGrid, tracks);
        showSection(allMusicSection);
        setActiveItem(allMusicItem);
        setActiveMobileItem(mobileAllMusicItem);
        currentPage = 'allMusic';
    });

    mobileLibraryItem.addEventListener('click', () => {
        pageTitle.textContent = 'Библиотека';
        createMusicCards(libraryGrid, userLibrary);
        showSection(librarySection);
        setActiveItem(libraryItem);
        setActiveMobileItem(mobileLibraryItem);
        currentPage = 'library';
    });

    mobileArtistsItem.addEventListener('click', () => {
        pageTitle.textContent = 'Исполнители';
        createArtistItems(artistsListGrid, artists);
        showSection(artistsSection);
        setActiveItem(artistsItem);
        setActiveMobileItem(mobileArtistsItem);
        currentPage = 'artists';
    });

    mobilePlaylistsItem.addEventListener('click', () => {
        pageTitle.textContent = 'Плейлисты';
        createPlaylists();
        showSection(playlistsSection);
        setActiveItem(playlistsItem);
        setActiveMobileItem(mobilePlaylistsItem);
        currentPage = 'playlists';
    });

    createPlaylistBtn.addEventListener('click', showCreatePlaylistModal);
    closeCreatePlaylist.addEventListener('click', hideCreatePlaylistModal);
    createPlaylistModal.addEventListener('click', (e) => {
        if (e.target === createPlaylistModal) {
            hideCreatePlaylistModal();
        }
    });

    createPlaylistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const playlistName = document.getElementById('playlistName').value;
        if (playlistName.trim()) {
            createNewPlaylist(playlistName.trim());
            createPlaylistForm.reset();
            hideCreatePlaylistModal();
        }
    });

    modalPlayPause.addEventListener('click', togglePlayPause);
    footerPlayPause.addEventListener('click', togglePlayPause);
    repeatBtn.addEventListener('click', toggleRepeat);
    footerRepeatBtn.addEventListener('click', toggleRepeat);
    modalBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        playerModal.classList.remove('active');
    });

    // Artist page events
    artistPlayAll.addEventListener('click', playAllArtistTracks);
    artistBackButton.addEventListener('click', () => {
        artistPage.classList.remove('active');
    });
    
    // Close artist page when clicking outside
    artistPage.addEventListener('click', (e) => {
        if (e.target === artistPage) {
            artistPage.classList.remove('active');
        }
    });

    // Control buttons
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    rewindBtn.addEventListener('click', rewind);
    fastForwardBtn.addEventListener('click', fastForward);
    footerPrevBtn.addEventListener('click', playPrevious);
    footerNextBtn.addEventListener('click', playNext);
    footerRewindBtn.addEventListener('click', rewind);
    footerFastForwardBtn.addEventListener('click', fastForward);

    // Audio event listeners
    audioElement.addEventListener('timeupdate', () => {
        const time = audioElement.currentTime;
        currentTime.textContent = formatTime(time);
        const percent = (time / audioElement.duration) * 100;
        progressFilled.style.width = `${percent}%`;
        
        // Update synchronized lyrics
        updateCurrentLyric(time);
    });

    audioElement.addEventListener('loadedmetadata', () => {
        totalTime.textContent = formatTime(audioElement.duration);
    });

    audioElement.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayPauseIcons();
        
        // If repeat is on, replay the current track
        if (isRepeat) {
            audioElement.currentTime = 0;
            audioElement.play();
            isPlaying = true;
            updatePlayPauseIcons();
        } else {
            // Otherwise, play the next track
            playNext();
        }
    });

    // Progress bar click
    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = audioElement.duration;
        audioElement.currentTime = (clickX / width) * duration;
    });

    // Initialize the page
    createMusicCards(musicGrid, tracks.slice(0, 6));
    createMusicCards(allMusicGrid, tracks);
    createMusicCards(libraryGrid, userLibrary);
    createArtistItems(recentGrid, artists);
    createArtistItems(artistsListGrid, artists);
    createPlaylists();
    
    // Set initial active item
    setActiveItem(homeItem);
    setActiveMobileItem(mobileHomeItem);
