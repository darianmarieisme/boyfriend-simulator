# Algorithmically Yours

A browser-based boyfriend simulator with personality quizzes, five boyfriend archetypes, relationship interactions, and multiple endings. Game progress is saved locally in your browser.

## Play locally

Open a terminal in the folder where you want to keep the game, then run:

```sh
git clone https://github.com/darianmarieisme/boyfriend-simulator.git
cd boyfriend-simulator
python -m http.server 8000
```

On Windows, use `py -m http.server 8000` if your Python installation uses the `py` launcher. Open [http://localhost:8000](http://localhost:8000) in your browser. Stop the server with Ctrl+C.

There is no application build step or backend. An internet connection is needed for the current Tailwind CSS CDN and Google Fonts dependencies.

## Saves and privacy

Your profile and active relationship are stored in your browser's local storage. Return using the same browser and site address to access the same save. Moving between a local copy and a hosted site does not transfer saves automatically.

Use the in-game Menu → Delete Profile to remove your saved profile and run. Clearing browser site data also removes locally stored saves. Audio preferences are stored separately.

## Updating your local copy

From the cloned project folder, run:

```sh
git pull --ff-only
```

Commit or otherwise preserve local edits before updating.

## Hosting

Serve `index.html`, `script.js`, `style.css`, and the entire `assets/` folder from a static web host. Preserve filenames and capitalization exactly; asset paths are case-sensitive on many hosts.

## Credits

See [credits.md](credits.md) and the in-game Credits panel for music, voice, sound, and character-art attribution. Third-party assets retain their respective licenses and usage terms.

