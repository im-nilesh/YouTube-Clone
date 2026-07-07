import {
  MdHomeFilled,
  MdOutlineVideoLibrary,
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
    ],
  },
];

export default sidebarSections;
