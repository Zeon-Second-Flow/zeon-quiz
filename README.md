
# Client
## Installation

Clone project and install dependencies

```bash
npm i
```

## Usage

```javascript
Commands

# to start the project
npm start

# to get dist folder
npm run builda

# dont use !
npm run build
```

## If you want to add features with Websocket 
Change path in
```javascript
// src/store/websocket

const initialState = {
    // here must be your path to
    socket: io("http://localhost:3333", {
        transports: ["websocket", "polling"],
    }),
    room: 0,
    users: [],
};
```

and after that run your local Websocket server.

# Websocket

if your don't want to add functionality feel free yo use existed path in zeon-quiz

```bash
https://obscure-eyrie-08815.herokuapp.com/
```

otherwise clone websoket project:
``` bash
https://github.com/theoddorrrrr/socket
```

to start server run
```bash
npm run dev
```

and after editing server.js, you have to deploy your server, in our case in heroku, [here the instructions.](https://devcenter.heroku.com/articles/deploying-nodejs)

# Bugs

### Game
1. Edit ingame styles, handle error with image.
2. Fix the end leaderboards, if users nickname is wide, display only part of it and add dotts in the end.
3. When players have to answer, they have scroll, try to fit all content on screen
4. In the end, when we see top-3 players, send request with real results of players, see what data handles the server:

```javascript
// 75 line

useEffect(() => {
    if (results && isAdmin) {
      // Send real data form users varriable and mutate it if you need it
      sendScores([
        {
          score: 50,
          login: "admin@admin.com",
          test: "Localhost 3000",
        },
      ]);
    }
  }, [results]);

```

5. (With websocket) If player included in group (zeon) and he joins to room, which was created by admin from (it-hub), the player will get the error only when game starts. 
We already handle the error, which says that room doesn't exist, try to add new error to player, if he tries to join to any anothers group room, display the error, and don't navigate to the game. And only if the groups are equal between admin and player, navigate to the game.

6. If person just logged to the site and he tries to connect to the game, when the game starts, he will get sometimes error (may be problem with token).

# Features

### Profile

1. The player or admin can go to the profile page and see the last game, add new section with all played tests.


# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
