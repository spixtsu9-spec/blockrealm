//--------------------------MOCK ONLINE COUNT-------------------------------------
// (replace with real API later)
function updateOnlineCount() {
  const count = Math.floor(Math.random() * 2) + 0;
  document.getElementById("onlineCount").innerText = count;
  document.getElementById("playersOnline").innerText = count;
}

updateOnlineCount();
setInterval(updateOnlineCount, 15000);

//--------------------------PLAYER SEARCH BAR-------------------------------------
function findPlayer() {
  const name = document.getElementById("playerSearch").value;
  if (!name) return alert("Enter a player name");
  alert(`Searching for player: ${name}`);
}


//--------------------------UPDATE & NEWS-------------------------------------
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.4 + "px";
  });

const newsData = [
   {
    title: "BETA SKYBLOCK UPDATE & NEW ISLANDS",
    subtitle: "SKYBLOCK UPDATES & NEW ISLANDS!",
    author: "LunaMC[ADMIN]",
    date: "Jan 28, 2026",
    month: "Jan",
    day: "28",
    image: "images/skyblockupdate.jpg",
    replies: 4,
    body: [
      "Skyblock is updating with brand-new island types.",
      "Expect better generators, missions, and balance changes."
    ]
  },
  {
    title: "BLOCKREALM RELEASE DATE",
    subtitle: "BLOCK REALM RELEASE!",
    author: "Endalor[OWNER]",
    date: "Jan 03, 2026",
    month: "Jan",
    day: "03",
    image: "images/prison-release.png",
    replies: 142,
    body: [
      "We are excited to release our new Minecraft Server: Block Realm!",
      "Join, Register, Login!"
    ]
  },
  {
    title: "Coming soon...",
    subtitle: "More news & updates coming soon...",
    author: "LunaMC[ADMIN]",
    date: "n/a",
    month: "n/a",
    day: "n/a",
    image: "",
    replies: 0,
    body: [
      "",
      ""
    ]
   }
];

const container = document.getElementById("newsContainer");

newsData.forEach(news => {
  container.innerHTML += `
    <article class="news-card">
      <div class="news-header">
        <div class="news-meta">
          <h3>${news.title}</h3>
          <p>
            <span class="author">👤 ${news.author}</span>
            <span class="dot">•</span>
            <span>${news.date}</span>
            <span class="dot">•</span>
            <span>Replies: ${news.replies}</span>
          </p>
        </div>

        <div class="news-date">
          <span class="month">${news.month}</span>
          <span class="day">${news.day}</span>
        </div>
      </div>

      <div class="news-image">
        <img src="${news.image}" alt="${news.title}">
      </div>

      <div class="news-body">
        <h2>${news.subtitle}</h2>
        ${news.body.map(p => `<p>${p}</p>`).join("")}
      </div>
    </article>
  `;
});
//--------------------------COPY BUTTON-------------------------------------
  const copyBtn = document.getElementById("copyBtn");
  const popup = document.getElementById("copyPopup");
  const textToCopy = "blockrealm.g-s.nu";

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);

      popup.classList.add("show");

      setTimeout(() => {
        popup.classList.remove("show");
      }, 2500);

    } catch (err) {
      alert("Failed to copy IP. Please copy manually: " + textToCopy);
    }
  });

