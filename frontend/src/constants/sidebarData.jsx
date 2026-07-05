import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlineWatchLater,
  MdThumbUpAlt,
  MdVideoLibrary,
  MdTrendingUp,
  MdSportsEsports,
  MdMusicNote,
  MdNewspaper,
} from "react-icons/md";

export const sidebarSections = [
  {
    items: [
      {
        icon: MdHomeFilled,
        title: "Home",
        path: "/",
      },
      {
        icon: MdOutlineSubscriptions,
        title: "Subscriptions",
        path: "/subscriptions",
      },
    ],
  },

  {
    items: [
      {
        icon: MdVideoLibrary,
        title: "Your Videos",
        path: "/your-videos",
      },
      {
        icon: MdHistory,
        title: "History",
        path: "/history",
      },
      {
        icon: MdOutlineWatchLater,
        title: "Watch Later",
        path: "/watch-later",
      },
      {
        icon: MdThumbUpAlt,
        title: "Liked Videos",
        path: "/liked",
      },
    ],
  },

  {
    title: "Explore",
    items: [
      {
        icon: MdTrendingUp,
        title: "Trending",
        path: "/trending",
      },
      {
        icon: MdMusicNote,
        title: "Music",
        path: "/music",
      },
      {
        icon: MdSportsEsports,
        title: "Gaming",
        path: "/gaming",
      },
      {
        icon: MdNewspaper,
        title: "News",
        path: "/news",
      },
    ],
  },
];
