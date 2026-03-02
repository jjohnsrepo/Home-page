# 🏠 My Local-Only Early Internet Homepage

Welcome to your very own retro website that can only be accessed by people on your local network! This website captures the authentic early internet vibes of the 90s with GeoCities-style aesthetics.

## 🌐 Features

- **Authentic 90s Design**: Bright colors, tables, marquees, and Comic Sans!
- **Interactive Guestbook**: Sign and view guestbook entries (stored locally)
- **Visitor Counter**: Tracks how many times the page has been visited
- **Webring Navigation**: Mock webring for that authentic 90s experience
- **Sparkle Effects**: Mouse trail sparkles for extra flair
- **Local Storage**: All data is stored locally in your browser

## 🚀 How to Run Locally

### Option 1: Python (Recommended)
```bash
# If you have Python 3
python -m http.server 8000

# If you have Python 2
python -m SimpleHTTPServer 8000
```

### Option 2: Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

### Option 3: PHP
```bash
php -S localhost:8000
```

### Option 4: Live Server (VS Code)
If you're using VS Code, install the "Live Server" extension and right-click on `index.html` → "Open with Live Server".

## 🌐 Accessing from Other Devices on Your Network

1. **Find your local IP address**:
   - Windows: Open Command Prompt and type `ipconfig`
   - Mac/Linux: Open Terminal and type `ifconfig` or `ip addr`
   
2. **Look for your local IP** (usually starts with 192.168.x.x or 10.x.x.x)

3. **Access from other devices**:
   - On the same network, open a browser and go to: `http://YOUR_LOCAL_IP:8000`
   - Example: `http://192.168.1.100:8000`

## 🔧 Customization

### Change the Title
Edit `index.html` and change the title in the `<title>` tag and main heading.

### Add Your Own Content
- Edit the "About Me" section in `index.html`
- Add your own hobbies and interests
- Modify colors in `style.css`

### Add Real Images
Replace the placeholder image references with your own images:
- `house.gif` - Main house image
- `under_construction.gif` - Under construction banner
- `bg.gif` - Background image

## 🎨 Retro Features Included

- **Tables for layout** (the 90s way!)
- **Blinking text** animation
- **Marquee scrolling** headers
- **Rainbow text effects**
- **Neon glow effects**
- **Custom scrollbars**
- **Comic Sans font**
- **Bright clashing colors**
- **Guestbook functionality**
- **Visitor counter**
- **Webring navigation**
- **Sparkle mouse effects**

## 📱 Browser Compatibility

This website works best in modern browsers but maintains the spirit of early web design. For the most authentic experience, try viewing it in:
- Any modern browser (Chrome, Firefox, Safari, Edge)
- For extra authenticity, try browser extensions that simulate old browsers

## 🔒 Privacy & Security

- **Local Only**: This website is designed to run on your local network only
- **No External Dependencies**: Everything runs locally without external servers
- **Local Storage**: Guestbook entries and visitor count are stored in browser localStorage
- **No Tracking**: No analytics, cookies, or external scripts

## 🛠️ Troubleshooting

### Can't access from other devices?
1. Make sure both devices are on the same network
2. Check your firewall settings
3. Verify the server is running on the correct port
4. Try disabling Windows Defender Firewall temporarily for testing

### Port already in use?
Change the port number:
```bash
python -m http.server 8080  # Use port 8080 instead
```

### Images not showing?
The placeholder images are referenced but don't exist. Add your own GIF images or remove the image references.

## 🎯 Fun Ideas for Enhancement

- Add a MIDI music player with retro tunes
- Create a "Cool Links" page with your favorite websites
- Add an animated GIF gallery
- Create a "About My Computer" section
- Add a hit counter with more detailed statistics
- Create multiple pages with a retro navigation system

Enjoy your blast from the past! 🌐✨
# Home-page
