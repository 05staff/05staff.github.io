:root {
  --bg: #fff;
  --text: #111;
  --accent: #5865f2;
}

body.dark {
  --bg: #111;
  --text: #eee;
}

* { margin:0; padding:0; box-sizing:border-box; font-family:sans-serif; }

body {
  background: var(--bg);
  color: var(--text);
  line-height:1.5;
}

header {
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:1rem;
  background:var(--accent);
  color:white;
  position:relative;
}

.logo { font-weight:bold; }

nav {
  display:flex;
  gap:1rem;
}

nav a {
  color:white;
  text-decoration:none;
}

#menuBtn {
  display:none;
  font-size:1.5rem;
  background:none;
  border:none;
  color:white;
  cursor:pointer;
}

main { padding:2rem; }

section { margin-bottom:2rem; }

.btn {
  display:inline-block;
  padding:0.5rem 1rem;
  background:var(--accent);
  color:white;
  text-decoration:none;
  border-radius:4px;
}

footer {
  text-align:center;
  padding:1rem;
  border-top:1px solid #ccc;
}

footer button {
  margin:0.3rem;
  padding:0.4rem 0.8rem;
  cursor:pointer;
}

/* Hamburger layout */
body.hamburger #menuBtn { display:block; }
body.hamburger nav {
  display:none;
  flex-direction:column;
  position:absolute;
  top:100%;
  right:1rem;
  background:var(--accent);
  padding:1rem;
  border-radius:4px;
}
body.hamburger nav.open { display:flex; }

/* Mobile fallback for normal layout */
@media(max-width:700px){
  body:not(.hamburger) nav { display:none; }
  body:not(.hamburger) #menuBtn { display:block; }
}
