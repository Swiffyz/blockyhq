# Blocky HQ Website

A responsive, static website starter for your Minecraft community. You own the source files and can edit, host, or move the site yourself.

## Files
- `index.html` — page content and structure
- `styles.css` — colors, layout, responsive design
- `script.js` — Discord invite, member count, leaderboard entries, navigation

## First edits to make
Open `script.js` and update:
1. `discordInvite` with your actual Discord invite URL.
2. `memberCount` when your community grows.
3. `LEADERBOARD` with accurate player names and stats. The included entries are sample/demo data and are not live-connected.

The Events section currently contains event ideas, not confirmed event dates. Edit the text in `index.html` when you have real events scheduled.

## Preview locally
Open `index.html` in a modern browser. For the best local preview, use VS Code with the Live Server extension, or run a simple local web server.

## Publishing and domain ownership
A custom domain is registered through a domain registrar in your own account. Hosting is separate. A beginner-friendly route is:
1. Create your own GitHub account.
2. Create a repository and upload these website files.
3. Enable GitHub Pages, or deploy the repository to Cloudflare Pages.
4. Buy/register your chosen domain in an account you control.
5. Follow the host's custom-domain instructions to connect the domain and enable HTTPS.

Keep the registrar, GitHub/hosting, and any future backend accounts under your own email and enable two-factor authentication. Never share account passwords.

## Important limitations
This is a static starter site. The leaderboard is manually editable; it does not automatically read Minecraft or Discord data. A login system, private admin dashboard, live stats, database, or member submissions would require a backend and additional setup.
