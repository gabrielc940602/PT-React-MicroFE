/**
 * Other apps to get microfrontend remotes
 */

const mapRemotes = require("./helpers/map-remotes");

const remotes = {
    reusable_components: "remote_name@http://localhost:3001/client_or_server/reusable_components.js"
}

const allRemotes = mapRemotes(remotes);

module.exports = allRemotes;