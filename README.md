![Alt text](/static/images/dh-logo.png?raw=true "dungeon logo")

 ### An Adventure Game (with a turn-based, RPG style combat system) set in a Dungeon.

[Team](#team) | [Technologies](#technologies) | [Setup](#setup) | [Test](#test) | [Build](#build) | [Coverage](#coverage) | [Play](#play) | [Story](#story) | [Controls](#controls) | [Features](#features) | [Images](#images) |


## Team
#### Team Rogue Members:

* Leon Cross:       <br><a href="https://github.com/leoncross/">https://github.com/leoncross/</a>
* Darryl Banks:     <br><a href="https://github.com/zombie9">https://github.com/zombie9</a>
* Luca Eto:         <br><a href="https://github.com/lucafrancesc/">https://github.com/lucafrancesc/</a>
* Cesare Camurani:  <br><a href="https://github.com/cesarecamurani/">https://github.com/cesarecamurani/</a>

## Technologies

* Around 85% of our code has been written in vanilla <a href="https://github.com/leoncross/">JavaScript</a> alongside with some HTML5 and CSS for the GUI(graphic user interface).
* We used <a href="https://jquery.com/">jQuery</a> (a JavaScript library) in order to make the game logic communicating with the user inputs(through the GUI).
* To test our app we used <a href="https://jasmine.github.io/">Jasmine</a> (open source testing framework for JavaScript).
* To check our test coverage we used <a href="https://istanbul.js.org/">Istanbul</a> (a Node.js module) and <a href="https://coveralls.io/">Coverall.io</a> (a website hosting GitHub repositories and checking for your coverage percentage after every merge).
* We also used <a href="https://eslint.org/">ESlint</a> as linter (a tool to analyze your code to flag bugs and stylistic errors).
* To achieve continuous integration we used <a href="https://travis-ci.org/">Travis CI</a>, a hosted service used to build and test software projects hosted at GitHub. Its main purpose is to avoid untested and/or buggy branches to be merged into the Master branch.

## Setup
#### How to get started with the project:
```
npm init
npm install
npm install -g jasmine
jasmine init
```

## Test
#### How to run Jasmine:
In the terminal run:
```
npm run jasmine
```

#### How to run Eslint:
In the terminal run:
```
npm run lint
```

#### How to run Coverall:
In the terminal run:
```
npm run test
```

## Build
#### (tested with Travis CI)

[![Build Status](https://travis-ci.com/leoncross/team-rogue.svg?branch=master)](https://travis-ci.com/leoncross/team-rogue)

## Coverage
#### (tested with Istanbul)

[![Coverage Status](https://coveralls.io/repos/github/leoncross/team-rogue/badge.svg?branch=master)](https://coveralls.io/github/leoncross/team-rogue?branch=master)

## Play
#### How to run the game:

clone the terminal
type the following in your console:
copy the game.html file and open it in your browser

## Story

![Alt text](/static/images/hero.png?raw=true "hero")

'You wake up in a dark place. Your eyes slowly adjust, and you see a dagger next to you. While you're picking it up,
you suddenly hear something coming from the darkness! You're still trying to understand what happened the night before when...'

In this game the Hero has to escape a multiple room dungeon. But his skills will be hard tested by a series of fights along his journey towards the light!
To help our protagonist in his quest we will have the chance to improve our armour and our weapons as well as our skills...
But don't be deceived by this! Your journey will still be long and full of blood!!!

## Controls
#### Action Bar Buttons:

![Alt text](/static/images/icon-attack-color.png?raw=true "icon-attack-color") Normal Attack: <br> When pressed the player will hit the monster with a power based on his/her strength and weapon damage range <br><br>
![Alt text](/static/images/insane-attack-color.png?raw=true "icon-attack-color")  Insane Attack: <br> When pressed the player can randomly hit the monster with double power or completely miss it <br><br>
![Alt text](/static/images/parry-attack-color.png?raw=true "icon-attack-color")  Parry Attack: <br> When pressed the player increases his/her chances to block the monster's attack but his/her attack will be less effective  <br><br>
![Alt text](/static/images/stun-attack-color.png?raw=true "icon-attack-color")  Stun Attack: <br> When the monster's dice roll for the current turn is below 10 the monster skips the turn <br><br>
![Alt text](/static/images/health-potion-color.png?raw=true "icon-attack-color")  Health Potion: <br> Increases your health by 25 pts  <br><br>
![Alt text](/static/images/dex-potion-color.png?raw=true "icon-attack-color")  Strength Potion: <br> Increases your strength by 5 pts <br><br>
![Alt text](/static/images/str-potion-color.png?raw=true "icon-attack-color")  Dexterity Potion: <br> Increases your dexterity by 5 pts <br><br>
![Alt text](/static/images/warcry-color.png?raw=true "icon-attack-color")  WarCry: <br> Upgrades your strength and your dexterity by 1 but you can't attack (you can still receive damage) <br>


## Features

## Images
