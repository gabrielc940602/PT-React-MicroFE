/**
 * Map remotes to client and server
 * @param {{ [key: string]: string }} remotes 
 */
const mapRemotes = (remotes) => {
    const mappedRemotes = {
        client: {},
        server: {}
    };

    for (const remote in remotes) {
        mappedRemotes.client = {
            [remote]: remotes[remote]
                .replace(/client_or_server/, "static")
                .replace(/remote_name/, remote)
        }
        mappedRemotes.server = {
            [remote]: remotes[remote]
                .replace(/client_or_server/, "server")
                .replace(/remote_name/, remote)
        }
    }

    return mappedRemotes;
};

module.exports = mapRemotes;