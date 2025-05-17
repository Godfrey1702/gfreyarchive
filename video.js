const videoData = [
    {
        title: "Learn Tailwind CSS",
        description: "A beginner's guide to Tailwind CSS",
        youtubeUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
    },
    {
        title: "HTML Crash Course",
        description: "Everything you need to know about HTML",
        youtubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
    },
];

const container = document.getElementById("video-container");

videoData.forEach(video => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md overflow-hidden";
    card.innerHTML = `
        <iframe class="w-full aspect-video" src="${video.youtubeUrl}" frameborder="0" allowfullscreen></iframe>
        <div class="p-4">
            <h2 class="text-xl font-semibold">${video.title}</h2>
            <p class="text-sm text-gray-600">${video.description}</p>
        </div>
    `;
    container.appendChild(card);
});



// [
//    {
//      title: "Learn Tailwind CSS",
//      description: "A beginner's guide to Tailwind CSS",
//      youtubeUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
//    },
//    {
//      title: "HTML Crash Course",
//      description: "Everything you need to know about HTML",
//      youtubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
//    },
//  ];
 
 
//  const videoData = JSON.parse(document.getElementById("video-data").textContent);
//     const container = document.getElementById("video-container");

//     videoData.forEach(video => {
//       const card = document.createElement("div");
//       card.className = "bg-white rounded-xl shadow-md overflow-hidden";
//       card.innerHTML = `
//         <iframe class="w-full aspect-video" src="${video.youtubeUrl}" frameborder="0" allowfullscreen></iframe>
//         <div class="p-4">
//           <h2 class="text-xl font-semibold">${video.title}</h2>
//           <p class="text-sm text-gray-600">${video.description}</p>
//         </div>
//       `;
//       container.appendChild(card);
//     });
