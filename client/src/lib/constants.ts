// Common Images
export const IMAGES = {
  DEFAULT_ALBUM_COVER:
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  DEFAULT_ARTIST_IMAGE: "https://randomuser.me/api/portraits/women/65.jpg",
};

// Audio URLs (cho các bài hát thực)
export const AUDIO_URLS = {
  THERES_NO_ONE_AT_ALL:
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  CHOI_DO: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  NANG_CO_MANG_EM_VE:
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  GIA_NHU: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  TUNG_NGAY_YEU_EM:
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
};

// User Data
export const USER_DATA = {
  name: "young wolf",
  profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
};

// Home Page Data
export const HOME_DATA = {
  morningCards: [
    {
      id: 1,
      title: "Liked Songs",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 2,
      title: "Indâm Indie",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 3,
      title: "Ngơ Radio",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
  ],
  dailyMixes: [
    {
      id: 1,
      title: "Daily Mix 1",
      subtitle: "Sơn Tùng M-TP, Ngọt, SIVAN...",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 2,
      title: "Daily Mix 2",
      subtitle: "RAP VIỆT, Rapital, SIXTY...",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 3,
      title: "Discover Weekly",
      subtitle: "Your weekly mixtape...",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
  ],
  favoriteArtists: [
    {
      id: 1,
      name: "Hustlang Robber",
      image: IMAGES.DEFAULT_ARTIST_IMAGE,
    },
    {
      id: 2,
      name: "Ngơ",
      image: IMAGES.DEFAULT_ARTIST_IMAGE,
    },
    {
      id: 3,
      name: "Lil Wuyn",
      image: IMAGES.DEFAULT_ARTIST_IMAGE,
    },
  ],
  recommendedStations: [
    {
      id: 1,
      name: "16 Typh",
      description: "With Lil Wuyn, Gill, Sol7 and more",
      color: "bg-blue-500",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 2,
      name: "BCTM",
      description: "With Dick, Tung TeA, tofutns and more",
      color: "bg-purple-500",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 3,
      name: "RPT MCK",
      description: "With Low G, tlinh, HIEUTHUHAI and more",
      color: "bg-green-500",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
  ],
};

// Songs Data
export const SONGS_DATA = {
  // Playlist songs
  playlistSongs: [
    {
      id: 1,
      title: "giá như",
      artist: "SOOBIN",
      album: "giá như",
      dateAdded: "2 weeks ago",
      duration: "3:43",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 2,
      title: "Từng Ngày Yêu Em",
      artist: "buitruonglinh",
      album: "Từng Ngày Như Mãi Mãi",
      dateAdded: "2 weeks ago",
      duration: "3:45",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 3,
      title: "Nắng có mang em về",
      artist: "Shartnuss, Tr.D, Phankeo",
      album: "Luv",
      dateAdded: "2 weeks ago",
      duration: "4:14",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
  ],

  // Album songs
  albumSongs: [
    {
      id: 1,
      title: "THERE'S NO ONE AT ALL",
      artist: "Sơn Tùng M-TP",
      duration: "2:52",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 2,
      title: "Chơi Đồ",
      artist: "RPT MCK, Wxrdie, Sony Tran",
      duration: "2:07",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 3,
      title: "Nắng có mang em về",
      artist: "Shartnuss, Tr.D, Phankeo",
      duration: "4:14",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 4,
      title: "giá như",
      artist: "SOOBIN",
      duration: "3:43",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
    {
      id: 5,
      title: "Từng Ngày Yêu Em",
      artist: "buitruonglinh",
      duration: "3:45",
      image: IMAGES.DEFAULT_ALBUM_COVER,
    },
  ],
};

// Albums Data
export const ALBUMS_DATA = [
  {
    id: 1,
    title: "Album Name",
    artist: "Sơn Tùng M-TP",
    year: "2023",
    image: IMAGES.DEFAULT_ALBUM_COVER,
    songs: SONGS_DATA.albumSongs,
  },
  {
    id: 2,
    title: "Hot Hits Vietnam",
    artist: "Spotify",
    songCount: 50,
    image: IMAGES.DEFAULT_ALBUM_COVER,
    songs: SONGS_DATA.playlistSongs,
  },
];

// Artists Data
export const ARTISTS_DATA = [
  {
    id: 1,
    name: "Sơn Tùng M-TP",
    image: IMAGES.DEFAULT_ARTIST_IMAGE,
    popularSongs: SONGS_DATA.albumSongs.filter((song) =>
      song.artist.includes("Sơn Tùng M-TP")
    ),
  },
  {
    id: 2,
    name: "RPT MCK",
    image: IMAGES.DEFAULT_ARTIST_IMAGE,
    popularSongs: SONGS_DATA.albumSongs.filter((song) =>
      song.artist.includes("RPT MCK")
    ),
  },
];

export const CURRENTLY_PLAYING = {
  id: 1,
  title: "THERE'S NO ONE AT ALL",
  artist: "Sơn Tùng M-TP",
  image: IMAGES.DEFAULT_ALBUM_COVER,
  duration: "2:52",
  currentTime: "1:02",
  isPlaying: true,
};

export const PLAYLISTS_DATA = [
  {
    id: 1,
    title: "Hot Hits Vietnam",
    creator: "Spotify",
    songCount: 50,
    image: IMAGES.DEFAULT_ALBUM_COVER,
    songs: SONGS_DATA.playlistSongs,
  },
  {
    id: 2,
    title: "Liked Songs",
    creator: "User",
    songCount: 25,
    image: IMAGES.DEFAULT_ALBUM_COVER,
    songs: [...SONGS_DATA.playlistSongs, ...SONGS_DATA.albumSongs.slice(0, 2)],
  },
];

export const lyrics = [
  "(Ah, ah, ah)",
  "(Ah, ah, ah-ah-h-h-h-h, no)",
  "Don't wanna make up (make up, ah-h)",
  "(M-TP)",
  "Don't wanna make up, headstrong",
  "Gonna wake up, so long",
  "I kinda die hard and grew",
  "Seeing that part of you",
  "I never knew love somehow",
];
