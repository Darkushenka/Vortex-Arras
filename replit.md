# Vortex Arras (arras.io)

A fanmade sequel to diep.io - a multiplayer tank shooter browser game.

## Architecture

- **Runtime**: Node.js 20
- **Server**: Express + WebSocket (`ws` library) serving static files and game WebSocket connections
- **Frontend**: Pre-built static client files in `bin/client/` (HTML, CSS, JS)
- **Game Engine**: Custom in-memory game loop running at high frequency

## Project Layout

```
bin/
  server/
    server.js       - Main compiled server (Express + WebSocket game server)
    lib/            - Utility libraries (random, hshg, util, fasttalk)
  client/           - Pre-built frontend static files
  config.json       - Runtime configuration (port, game settings)
src/                - Source files (client/server)
gulpfile.js         - Build system (babel + webpack for transpiling src/ to bin/)
webpack.config.js   - Webpack config for client bundle
```

## Running

The workflow runs: `PORT=5000 node bin/server/server.js bin/config.json`

The server:
- Listens on `0.0.0.0:5000`
- Serves static client files from `bin/client/`
- Handles WebSocket connections for game communication

## Configuration

`bin/config.json` controls game settings including:
- `port`: 5000
- `host`: 0.0.0.0
- `MODE`: ffa (game mode)
- `WIDTH`/`HEIGHT`: 7500x7500 game world size
- `servesStatic`: true (serves frontend from same server)

## Building from Source

To rebuild from source files in `src/`:
```bash
npx gulp build
```
This compiles server JS via babel and bundles client JS via webpack into `bin/`.

## Deployment

Configured for `vm` deployment target (always-running) since the game uses WebSockets and in-memory state.
