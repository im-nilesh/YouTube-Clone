import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
}

export default VideoContext;
