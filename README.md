# For my favourite sinner — BMW E60 digital card

A mobile-friendly interactive gift-card starter project.

## Files
- `index.html` — text and five screens
- `style.css` — colours, layout, car illustration and animations
- `script.js` — navigation, music and engine-sound buttons
- `server.py` — optional Python preview server
- `assets/` — put your own audio files here

## Preview in VS Code
1. Open this folder in Visual Studio Code.
2. Put audio files in `assets/` named exactly:
   - `music.mp3` — instrumental background music
   - `engine.mp3` — short engine start/rev sound
3. Open a terminal in VS Code and run:
   `python server.py`
   If `python` doesn't work on Windows, try `py server.py`.
4. Open `http://127.0.0.1:8000` in your browser.

The car is currently a CSS illustration placeholder, not a photograph of his exact car.
Replace it later with a properly licensed photo if you have one.

## Opening on his phone
The local preview address only works on your computer. To send it as a link, upload the project (HTML/CSS/JS and assets) to a static hosting service such as GitHub Pages or Netlify. Then send him the public HTTPS link.
For audio to work online, upload the MP3 files too. Browsers generally require the user to tap a button before sound can play.

## Personalise it
Edit the Russian paragraphs in `index.html`. Keep the English headings if you like.
