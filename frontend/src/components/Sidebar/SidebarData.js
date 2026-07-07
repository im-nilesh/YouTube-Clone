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
  MdUpload,
  MdAddCircleOutline,
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
        path: null,
        icon: MdOutlineSubscriptions,
      },
    ],
  },

  {
    items: [
      {
        title: "Your Channel",
        path: null,
        icon: MdOutlineVideoLibrary,
      },
      {
        title: "Upload Video",
        path: "/upload",
        icon: MdUpload,
      },
      {
        title: "Create Channel",
        path: "/create-channel",
        icon: MdAddCircleOutline,
      },
      {
        title: "History",
        path: null,
        icon: MdHistory,
      },
      {
        title: "Watch Later",
        path: null,
        icon: MdOutlineWatchLater,
      },
      {
        title: "Liked Videos",
        path: null,
        icon: MdThumbUpAlt,
      },
    ],
  },

  {
    title: "Explore",
    items: [
      {
        title: "Trending",
        path: null,
        icon: MdTrendingUp,
      },
      {
        title: "Music",
        path: null,
        icon: MdMusicNote,
      },
      {
        title: "Gaming",
        path: null,
        icon: MdSportsEsports,
      },
      {
        title: "News",
        path: null,
        icon: MdNewspaper,
      },
    ],
  },
];

export default sidebarSections;
