html, body, h1, h2, p, a, header, footer, .container, .is-footer  {
  margin: 0;
  padding: 0;
}
body {
  font: normal 22px/26px "Open Sans Condensed", sans-serif;
  background: #454d62 url(cramjam.jpg) no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
}
h1 {
  font: normal 29px/38px "Lato", sans-serif;
  color: rgba(255, 255, 255, 0.5);
}
h2 {
  margin-top: 50px;
  margin-bottom: 5px;
  font: normal 15px/26px "Lato", sans-serif;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
}
p {
  margin-bottom: 10px;
}
footer {
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
footer p {
  margin-bottom: 20px;
}
footer a {
  color: #67cae3;
  border-bottom: 1px solid #67cae3;
  text-decoration: none;
  transition: color 0.5s ease-out, border-bottom 0.5s ease-out;
}
footer a:hover {
  color: #fff;
  border-bottom: 1px solid #fff;
  transition: color 0.6s ease-in, border-bottom 0.6s ease-in;
}
.container {
  width: 90%;
  margin: 30px auto 0 auto;
  text-align: center;
}

.is-footer {
  margin-top: 80px;
}

@media (min-width: 720px) {
  h1 {
    font-size: 44px;
  }
}