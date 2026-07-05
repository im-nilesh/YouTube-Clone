import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
  MdThumbUpAlt,
  MdTrendingUp,
  MdMusicNote,
  MdSportsEsports,
  MdNewspaper,
} from "react-icons/md";

const sidebarSections = [
  {
    items: [
      {
        title: "Home",
        path: "/",
        icon: MdHomeFilled,
      },
      {
        title: "Subscriptions",
        path: "/subscriptions",
        icon: MdOutlineSubscriptions,
      },
    ],
  },

  {
    items: [
      {
        title: "Your Videos",
        path: "/your-videos",
        icon: MdOutlineVideoLibrary,
      },
      {
        title: "History",
        path: "/history",
        icon: MdHistory,
      },
      {
        title: "Watch Later",
        path: "/watch-later",
        icon: MdOutlineWatchLater,
      },
      {
        title: "Liked Videos",
        path: "/liked-videos",
        icon: MdThumbUpAlt,
      },
    ],
  },

  {
    title: "Explore",
    items: [
      {
        title: "Trending",
        path: "/trending",
        icon: MdTrendingUp,
      },
      {
        title: "Music",
        path: "/music",
        icon: MdMusicNote,
      },
      {
        title: "Gaming",
        path: "/gaming",
        icon: MdSportsEsports,
      },
      {
        title: "News",
        path: "/news",
        icon: MdNewspaper,
      },
    ],
  },
];

export default sidebarSections;
