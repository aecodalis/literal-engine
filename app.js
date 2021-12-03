const express = require("express");
const url = require("url");
const path = require("path");
const ml = require("./engine");

const i18n = require("i18n");

i18n.configure({
  locales: ["en", "de"],
  directory: path.join(__dirname, "locales"),
  updateFiles: true,
});

const app = express();
app.use(i18n.init);

app.engine("ml", ml);
// app.set("views", "./views"); // specify the views directory
app.set("view engine", "ml"); // register the template engine
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  i18n.setLocale(res, req.params.lang);
  console.time("literal compile");
  res.render("index", {
    user: {
      name: "Jake",
    },
    db: {
      hotel: "AEG",
    },
    footer: require("./views/footer")(req, res),
    prefooter: require("./views/prefooter")(req, res),
    header: require("./views/header")(req, res),
  });

  console.timeEnd("literal compile");
});
app.get("/:lang", function (req, res) {
  i18n.setLocale(res, req.params.lang);
  console.time("literal compile");
  res.render("index", {
    user: {
      name: "Jake",
    },
    db: {
      hotel: "AEG",
    },
    footer: require("./views/footer")(req, res),
    prefooter: require("./views/prefooter")(req, res),
    header: require("./views/header")(req, res),
  });

  console.timeEnd("literal compile");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
