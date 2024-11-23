import { SiteController }                                 from "../../kolibri/navigation/siteController.js";
import { defaultConsoleLogging }                          from "../../kolibri/logger/loggingSupport.js"; // allow console manipulation
import { HomePage  }                                      from "./pages/home.js";
import { AboutPage }                                      from "./pages/about.js";
import {URI_HASH_HOME, URI_HASH_ABOUT }                   from "./pages/uriHashes.js";

defaultConsoleLogging("ch.fhnw.kolibri", LOG_INFO);

const siteController = SiteController();

siteController.registerPage(URI_HASH_HOME,  HomePage());
siteController.registerPage(URI_HASH_ABOUT, AboutPage());

siteController.gotoUriHash(URI_HASH_HOME);

