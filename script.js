// BLOCKY HQ SITE SETTINGS
// Replace the Discord invite below with your own permanent server invite.
// Example: https://discord.gg/yourInviteCode
const SITE_SETTINGS = {
  discordInvite: "https://discord.com",
  memberCount: 57
};

// Edit this list whenever you want to update the leaderboard.
// These are sample entries, not live Minecraft stats.
const LEADERBOARD = [
  { name: "JSCLEVRA", stat: "2,231", label: "KILLS", initials: "JS" },
  { name: "Whoshairless", stat: "1,945", label: "KILLS", initials: "WH" },
  { name: "allspace555", stat: "1,649", label: "KILLS", initials: "AS" },
  { name: "SlyKnot3453", stat: "1,593", label: "KILLS", initials: "SK" },
  { name: "rojobojo9", stat: "1,250", label: "KILLS", initials: "RJ" },
  { name: "k0rokk", stat: "1,241", label: "KILLS", initials: "K0" }
];

document.getElementById("memberCount").textContent = SITE_SETTINGS.memberCount;
document.getElementById("discordLink").href = SITE_SETTINGS.discordInvite;
document.getElementById("year").textContent = new Date().getFullYear();

const rows = document.getElementById("leaderboardRows");
rows.innerHTML = LEADERBOARD.map((player, index) => `
  <div class="leader-row">
    <div class="leader-player">
      <span class="rank ${index < 3 ? "top" : ""}">${String(index + 1).padStart(2, "0")}</span>
      <span class="player-chip">${player.initials}</span>
      <span class="player-name">${player.name}</span>
    </div>
    <span class="player-stat">${player.stat}<small>${player.label}</small></span>
  </div>
`).join("");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
