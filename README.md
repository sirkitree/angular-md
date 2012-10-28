# angular-md — a markdown previewer written in [AngularJS](http://angularjs.org/)

Uses [Marked](https://github.com/chjj/marked) by [chjj](https://github.com/chjj) for markdown parsing.

---
## Install

### Checkout the repo

**With version 1.6.5 of Git and later, you can use:**
```bash
git clone --recursive git://github.com/sirkitree/angular-md.git
cd angular-md
```

**For older Git versions, just use:**
```bash
git clone git://github.com/sirkitree/angular-md.git
cd angular-md
git submodule update --init
```

### To see the app running in a browser:
* **For node.js users:**
  1. In a _separate_ terminal tab or window, run `./scripts/web-server.js` to start the web server.
  2. Open a browser window for the app and navigate to [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html)
* **For other http servers:**
  1. Configure the server to serve the files in the angular-phonecat directory.
  2. Navigate in your browser to `http://localhost:[port-number]/[context-path]/app/index.html.`