# Roommate Pick'em Showdown: Website Setup

There are two files:
- `index.html` is the website. Don't edit it.
- `picks.js` holds the picks. Edit it each week.

The site pulls scores, winners and live game status from ESPN. While the page is open it refreshes every minute during games and every 5 minutes otherwise.

## Put it online for free (GitHub Pages, about 5 minutes)

1. Make a free account at github.com.
2. Click **+** → **New repository**. Name it something like `pickem`, set it to **Public**, and click **Create repository**.
3. Click **uploading an existing file**, drag in `index.html` and `picks.js`, and click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch", pick **main** and **/ (root)**, then click **Save**.
5. After a minute or two the site is at `https://YOUR-USERNAME.github.io/pickem/`. Share that link with the roommates.

Another option is [Netlify Drop](https://app.netlify.com/drop), which needs a computer: drag the whole folder onto the page.

## Adding a new week

1. In the GitHub repo, open `picks.js` and click the pencil (✏️) icon. This works from a phone browser too.
2. Copy the Week 11 example at the bottom, remove the `/*` and `*/` around it, and fill in each game:
   `{t1:"BUF", t2:"MIA", picks:{D:1, E:2, C:1, M:1}},`
   - `t1` is the first team on the whiteboard and `t2` is the second.
   - In `picks`, 1 means that person took `t1` and 2 means they took `t2`.
3. Click **Commit changes**. The site updates within a minute or two.

You can leave out the odds (`ml1`/`ml2`), because the site fills them in from ESPN's lines. Add them yourself only if you want to lock in specific odds.

Or send Claude the whiteboard photo and ask for the new week's lines to paste in.
