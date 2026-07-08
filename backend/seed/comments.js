const comments = [
  // ================= React Router Complete Tutorial =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "React Router Complete Tutorial",
    comment: "Nested routes finally make sense. Great explanation!",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "React Router Complete Tutorial",
    comment: "This deserves way more views.",
  },

  // ================= MERN Stack Course for Beginners =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "MERN Stack Course for Beginners",
    comment: "Exactly what I needed for my college project.",
  },
  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "MERN Stack Course for Beginners",
    comment: "Please upload an advanced authentication tutorial.",
  },

  // ================= Node.js Crash Course =================

  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Node.js Crash Course",
    comment: "The Express section was explained perfectly.",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Node.js Crash Course",
    comment: "Subscribed! Looking forward to more backend videos.",
  },

  // ================= MongoDB Complete Tutorial =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "MongoDB Complete Tutorial",
    comment: "Indexes and aggregation are much clearer now.",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "MongoDB Complete Tutorial",
    comment: "Best MongoDB tutorial I've watched.",
  },

  // ================= JavaScript Full Course =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "JavaScript Full Course",
    comment: "This is better than many paid courses.",
  },
  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "JavaScript Full Course",
    comment: "Closures finally clicked for me!",
  },

  // ================= VS Code Setup for Web Developers =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "VS Code Setup for Web Developers",
    comment: "Installed every extension you recommended 😂",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "VS Code Setup for Web Developers",
    comment: "My editor is so much faster now.",
  },

  // ================= Git & GitHub Crash Course =================

  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Git & GitHub Crash Course",
    comment: "Git finally feels less confusing.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Git & GitHub Crash Course",
    comment: "The branching explanation was awesome.",
  },

  // ================= Docker in 100 Seconds =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Docker in 100 Seconds",
    comment: "Never understood containers until now.",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Docker in 100 Seconds",
    comment: "Amazing short explanation!",
  },

  // ================= Top AI Tools Every Developer Should Know =================

  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "Top AI Tools Every Developer Should Know",
    comment: "Already using three of these every day.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Top AI Tools Every Developer Should Know",
    comment: "Can you make a Part 2?",
  },

  // ================= How the Internet Actually Works =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "How the Internet Actually Works",
    comment: "DNS finally makes sense.",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "How the Internet Actually Works",
    comment: "One of the best beginner-friendly explanations.",
  },

  // ================= Minecraft Survival Guide =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Minecraft Survival Guide - Episode 1",
    comment: "Can't wait for Episode 2!",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Minecraft Survival Guide - Episode 1",
    comment: "This brought back childhood memories.",
  },

  // ================= GTA V Funny Moments =================

  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "GTA V Funny Moments Compilation",
    comment: "I couldn't stop laughing 😂",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "GTA V Funny Moments Compilation",
    comment: "Upload more GTA content!",
  },

  // ================= Counter-Strike 2 =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Counter-Strike 2 Beginner Guide",
    comment: "These tips actually improved my aim.",
  },

  // ================= Valorant Pro Tips and Tricks =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Valorant Pro Tips and Tricks",
    comment: "The crosshair placement tip helped a lot.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Valorant Pro Tips and Tricks",
    comment: "Finally reached Gold because of these tips!",
  },

  // ================= EA FC 26 Career Mode Challenge =================

  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "EA FC 26 Career Mode Challenge",
    comment: "Career Mode never gets old!",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "EA FC 26 Career Mode Challenge",
    comment: "Can't wait for the next episode.",
  },

  // ================= Shape of You =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Shape of You - Ed Sheeran",
    comment: "One of my favorite songs ever.",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Shape of You - Ed Sheeran",
    comment: "Still sounds amazing after all these years.",
  },

  // ================= Believer =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Believer - Imagine Dragons",
    comment: "This song always gets me motivated.",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Believer - Imagine Dragons",
    comment: "Imagine Dragons never disappoints.",
  },

  // ================= Perfect =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Perfect - Ed Sheeran",
    comment: "Beautiful lyrics ❤️",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Perfect - Ed Sheeran",
    comment: "Wedding classic!",
  },

  // ================= Faded =================

  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "Faded - Alan Walker",
    comment: "Alan Walker's best track in my opinion.",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Faded - Alan Walker",
    comment: "The visuals are incredible.",
  },

  // ================= Counting Stars =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Counting Stars - OneRepublic",
    comment: "Never gets old.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Counting Stars - OneRepublic",
    comment: "OneRepublic has so many timeless songs.",
  },

  // ================= FIFA World Cup 2022 Final =================

  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "FIFA World Cup 2022 Final Highlights",
    comment: "One of the greatest finals in football history!",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "FIFA World Cup 2022 Final Highlights",
    comment: "Messi deserved that trophy.",
  },

  // ================= Virat Kohli =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Virat Kohli's Best ODI Innings",
    comment: "King Kohli 👑",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Virat Kohli's Best ODI Innings",
    comment: "One of the greatest batsmen ever.",
  },

  // ================= NBA =================

  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "NBA Top 10 Plays of the Week",
    comment: "That dunk at number one was insane!",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "NBA Top 10 Plays of the Week",
    comment: "Need more NBA content!",
  },

  // ================= Formula 1 =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Formula 1 Monaco Grand Prix Highlights",
    comment: "Monaco is always such an iconic race.",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Formula 1 Monaco Grand Prix Highlights",
    comment: "The strategy calls were brilliant.",
  },

  // ================= Olympics =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Top 25 Olympic Moments of All Time",
    comment: "Goosebumps watching these moments.",
  },
  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "Top 25 Olympic Moments of All Time",
    comment: "Sports at its absolute best.",
  },

  // ================= Extra Comments =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "JavaScript Full Course",
    comment: "Watched the entire thing in one sitting.",
  },

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "MERN Stack Course for Beginners",
    comment: "Please make an advanced MERN series too!",
  },

  // ================= Oppenheimer =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Oppenheimer | Official Trailer",
    comment: "Christopher Nolan never disappoints.",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Oppenheimer | Official Trailer",
    comment: "Already watched this movie twice.",
  },

  // ================= The Batman =================

  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "The Batman | Official Trailer",
    comment: "Robert Pattinson was surprisingly good as Batman.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "The Batman | Official Trailer",
    comment: "The cinematography looks incredible.",
  },

  // ================= Dune =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Dune: Part Two | Official Trailer",
    comment: "One of the most beautiful sci-fi movies ever made.",
  },
  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "Dune: Part Two | Official Trailer",
    comment: "Can't wait for the next installment.",
  },

  // ================= Top Gun =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Top Gun: Maverick | Official Trailer",
    comment: "This movie exceeded every expectation.",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Top Gun: Maverick | Official Trailer",
    comment: "Those flight scenes were unbelievable.",
  },

  // ================= Avatar =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Avatar: The Way of Water | Official Trailer",
    comment: "The visuals are absolutely breathtaking.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Avatar: The Way of Water | Official Trailer",
    comment: "James Cameron always delivers.",
  },

  // ================= Artemis =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "NASA's Artemis Mission Explained",
    comment: "Space exploration is so fascinating.",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "NASA's Artemis Mission Explained",
    comment: "Really informative video!",
  },

  // ================= AI News =================

  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "Artificial Intelligence News Roundup",
    comment: "AI is evolving so fast these days.",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Artificial Intelligence News Roundup",
    comment: "Looking forward to next week's roundup.",
  },

  // ================= Starship =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "SpaceX Starship Launch Highlights",
    comment: "What an incredible launch!",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "SpaceX Starship Launch Highlights",
    comment: "Elon keeps pushing the limits.",
  },

  // ================= Google I/O =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Google I/O Keynote Highlights",
    comment: "Some exciting AI announcements this year.",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Google I/O Keynote Highlights",
    comment: "Loved the developer updates.",
  },

  // ================= Tech News Weekly =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Tech News Weekly",
    comment: "This saves me so much time every week.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Tech News Weekly",
    comment: "Very well summarized.",
  },

  // ================= LoFi Live =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "24/7 LoFi Hip Hop Radio",
    comment: "Coding with this in the background 😌",
  },
  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "24/7 LoFi Hip Hop Radio",
    comment: "Best study music ever.",
  },

  // ================= Live Coding =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Live Coding React Project",
    comment: "Watching experienced developers code is so helpful.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Live Coding React Project",
    comment: "Learnt several new React tricks today.",
  },

  // ================= Extra =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Node.js Crash Course",
    comment: "This should be recommended to every beginner.",
  },

  // ================= Minecraft Live Gameplay =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Minecraft Live Gameplay",
    comment: "Perfect stream to relax and watch.",
  },
  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "Minecraft Live Gameplay",
    comment: "Hope you continue this survival series!",
  },

  // ================= JavaScript Live Q&A =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "JavaScript Live Q&A",
    comment: "Thanks for answering community questions.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "JavaScript Live Q&A",
    comment: "The async/await explanation was really helpful.",
  },

  // ================= Formula 1 Live Watch Along =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Formula 1 Live Watch Along",
    comment: "Watching this during the race was so much fun!",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Formula 1 Live Watch Along",
    comment: "Can't wait for the next Grand Prix.",
  },

  // ================= Lex Fridman Podcast =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Lex Fridman Podcast - AI Future",
    comment: "Really interesting discussion about AI.",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Lex Fridman Podcast - AI Future",
    comment: "One of Lex's best episodes.",
  },

  // ================= Software Engineering Career Advice =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Software Engineering Career Advice",
    comment: "Every fresher should watch this.",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Software Engineering Career Advice",
    comment: "The career roadmap was very practical.",
  },

  // ================= Startup Podcast =================

  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "Building a Startup from Scratch",
    comment: "Loved hearing the founders' experiences.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Building a Startup from Scratch",
    comment: "Very inspiring journey.",
  },

  // ================= Future of Web Development =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "The Future of Web Development",
    comment: "AI is definitely changing frontend development.",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "The Future of Web Development",
    comment: "Looking forward to what's next!",
  },

  // ================= Tech Leaders =================

  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Tech Leaders Roundtable",
    comment: "Great insights from experienced engineers.",
  },
  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Tech Leaders Roundtable",
    comment: "Really enjoyed this discussion.",
  },

  // ================= Bali =================

  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Bali Travel Guide 2026",
    comment: "Adding Bali to my bucket list!",
  },
  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Bali Travel Guide 2026",
    comment: "The beaches look amazing.",
  },

  // ================= Switzerland =================

  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "7 Days in Switzerland",
    comment: "Absolutely breathtaking scenery.",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "7 Days in Switzerland",
    comment: "This makes me want to travel right now.",
  },

  // ================= Tokyo =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Tokyo Travel Vlog",
    comment: "Japan is at the top of my travel list.",
  },
  {
    ownerEmail: "emma@gmail.com",
    videoTitle: "Tokyo Travel Vlog",
    comment: "Loved the food recommendations!",
  },

  // ================= Maldives =================

  {
    ownerEmail: "nilesh@gmail.com",
    videoTitle: "Maldives in 4K",
    comment: "The water looks unreal!",
  },
  {
    ownerEmail: "john@gmail.com",
    videoTitle: "Maldives in 4K",
    comment: "Definitely a dream destination.",
  },

  // ================= Top 25 Places =================

  {
    ownerEmail: "alex@gmail.com",
    videoTitle: "Top 25 Places to Visit Before You Die",
    comment: "So many incredible destinations on this list.",
  },
  {
    ownerEmail: "sarah@gmail.com",
    videoTitle: "Top 25 Places to Visit Before You Die",
    comment: "Now I need to start saving for my next trip!",
  },
];

export default comments;
