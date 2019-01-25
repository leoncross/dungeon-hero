[![Coverage Status](https://coveralls.io/repos/github/leoncross/team-rogue/badge.svg?branch=master)](https://coveralls.io/github/leoncross/team-rogue?branch=master)[![Build Status](https://travis-ci.com/leoncross/team-rogue.svg?branch=master)](https://travis-ci.com/leoncross/team-rogue)

# team-rogue


MVP Description:

A player (with improvable attributes), has to escape a two-room dungeon.
In the first room is a monster. If the player successfully defeats this monster (with a turn-based, RPG style combat system), the player will move into the final room where they escape and win the game.


# setup
npm init
npm install
npm install -g jasmine
jasmine init


to get coverage
```
istanbul cover --include-all-sources jasmine
```

- to push??
```
istanbul cover --include-all-sources jasmine && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage
```




missing:
from combat, updater the player class with new player stats(health)

feature ideas:
- special moves
- loot table
- longer fight goes on, more damage they do (i.e., bat swarm)
