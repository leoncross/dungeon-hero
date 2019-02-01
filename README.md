<p align="center"> 
<img src="/static/images/dh-logo.png?raw=true">
</p>

[![Build Status](https://travis-ci.com/leoncross/dungeon-hero.svg?branch=master)](https://travis-ci.com/leoncross/dungeon-hero) [Coverage Status](https://coveralls.io/repos/github/leoncross/dungeon-hero/badge.svg?branch=master&kill_cache=1)

### *An Adventure Game (with a turn-based, RPG style combat system) set in a Dungeon.*

### *Play it now! => <a href="https://leoncross.github.io/dungeon-hero/" target="_blank">Dungeon Hero</a> on GitHub Pages*

<!-- <br> -->

<hr>

[Team](#team) || [Workflow](#workflow) || [Technologies](#technologies) || [Setup](#setup) || [Tests](#tests) || [Controls](#controls) || [Gameplay](#gameplay) || [Screenshots](#screenshots) ||

<hr>

## *Team*
#### Team Rogue Members:

* Leon Cross:       <br><a href="https://github.com/leoncross/">https://github.com/leoncross</a>
* Darryl Banks:     <br><a href="https://github.com/zombie9">https://github.com/zombie9</a>
* Luca Eto:         <br><a href="https://github.com/lucafrancesc/">https://github.com/lucafrancesc</a>
* Cesare Camurani:  <br><a href="https://github.com/cesarecamurani/">https://github.com/cesarecamurani</a>

<hr>

## *Workflow*

![Alt text](/static/images/trello_board.png?raw=true "trello_board") <br>

* As a team we regularly had two stand-ups (one in the morning and a shorter one after the lunch break) to help us focus on the daily priorities, do a bit of brainstorming on new possible features to implement, update our Trello board to assign a degree of complexity to every task as well as the people responsible for that task.
* We split our work in sprints, each of them with a duration of two days, assigning to each sprint a new definition of MVP and then discussing new additions on the go with quick stand-ups.
* At the end of each sprint we had a retrospective to discuss our progresses, the overall state of the project and to share general thoughts and feelings about the project and/or the team dynamics.
* In order to have a clear idea of the work we had to do we regularly updated the above mentioned Trello board.

<hr>

## *Technologies*

<img src="/static/images/js.png" width="120" height="60"><img src="/static/images/jquery.png" width="100" height="70"><img src="/static/images/jasmine.png" width="160" height="110"><img src="/static/images/istanbul.png" width="90" height="60"><img src="/static/images/eslint.png" width="160" height="90"><img src="/static/images/travis 2.png" width="120" height="80">

* Almost 90% of our code has been written in vanilla <a href="https://www.javascript.com/">JavaScript</a> alongside with some HTML5 and CSS for the GUI (graphic user interface).
* We used <a href="https://jquery.com/">jQuery</a> (a JavaScript library) in order to make the game logic communicating with the user inputs (through the GUI).
* To test our app we used <a href="https://jasmine.github.io/">Jasmine</a> (open source testing framework for JavaScript).
* To check our test coverage we used <a href="https://istanbul.js.org/">Istanbul</a> (a Node.js module) and <a href="https://coveralls.io/">Coverall.io</a> (a website hosting GitHub repositories and checking for your coverage percentage after every merge).
* We also used <a href="https://eslint.org/">ESLint</a> as linter (a tool to analyze your code to flag bugs and stylistic errors).
* To achieve continuous integration we used <a href="https://travis-ci.org/">Travis CI</a>, a hosted service used to build and test software projects hosted at GitHub. Its main purpose is to avoid untested and/or buggy branches to be merged into the Master branch.

<hr>

## *Setup*
#### How to get started with the project:

* Inside your folder, type these commands in this order in the terminal:

```
git clone https://github.com/leoncross/dungeon-hero.git
```
(to clone the repository into your folder)
```
npm install
```
(to install the node modules you need into your package.json file) <br>

* After a successful installation, open Atom (or any other editor of your choice) and copy game.html full path.
* Paste it in a browser in the address bar and start playing!

<hr>

## *Tests*
#### How to run Jasmine (tests) and Coveralls (coverage:
```
npm run test
```

#### How to run ESLint:
```
npm run lint
```

<hr>

## *Controls*
#### Action Bar Buttons:

![Alt text](/static/images/icon-attack-color.png?raw=true "icon-attack-color") Normal Attack: <br> When pressed the player will hit the monster with a power based on his/her strength and weapon damage range <br><br>
![Alt text](/static/images/insane-attack-color.png?raw=true "icon-attack-color")  Insane Attack: <br> When pressed the player can randomly hit the monster with double power or completely miss it <br><br>
![Alt text](/static/images/parry-attack-color.png?raw=true "icon-attack-color")  Parry Attack: <br> When pressed the player increases his/her chances to block the monster's attack but his/her attack will be less effective  <br><br>
![Alt text](/static/images/stun-attack-color.png?raw=true "icon-attack-color")  Stun Attack: <br> When the monster's dice roll for the current turn is below 10 the monster skips the turn <br><br>
![Alt text](/static/images/health-potion-color.png?raw=true "icon-attack-color")  Health Potion: <br> Increases your health by 25 pts  <br><br>
![Alt text](/static/images/dex-potion-color.png?raw=true "icon-attack-color")  Strength Potion: <br> Increases your strength by 5 pts <br><br>
![Alt text](/static/images/str-potion-color.png?raw=true "icon-attack-color")  Dexterity Potion: <br> Increases your dexterity by 5 pts <br><br>
![Alt text](/static/images/warcry-color.png?raw=true "icon-attack-color")  WarCry: <br> Upgrades your strength and your dexterity by 1 but you can't attack (you can still receive damage) <br>

<hr>

## *Gameplay*

![Alt text](/static/images/kapture.gif?raw=true "Screenshot")

<hr>

## *Screenshots*

### Player uses a normal attack against the Bat Swarm:
![Alt text](/static/images/normal_attack.png?raw=true "Screenshot") <hr>

### Player killed the Bat Swarm!
![Alt text](/static/images/win_screen.png?raw=true "Screenshot") <hr>

### Player uses insane attack against the Zombie:
![Alt text](/static/images/insane_attack.png?raw=true "Screenshot") <hr>

### Player fights against the Skeleton Warrior
![Alt text](/static/images/skeleton_warrior.png?raw=true "Screenshot") <hr>

### The Goblin uses its Fatal Deception special attack against you:
![Alt text](/static/images/special_attack.png?raw=true "Screenshot") <hr>

### Player uses the dexterity potion against the Gorgon:
![Alt text](/static/images/gorgon_dex.png?raw=true "Screenshot") <hr>

### Player has died!
![Alt text](/static/images/death_screen.png?raw=true "Screenshot") <hr>

### Player can buy what he needs to defeat the final boss
![Alt text](/static/images/goblin_shop.png?raw=true "Screenshot") <hr>

### Player has finally reached his destiny!
![Alt text](/static/images/dragon_shoot.png?raw=true "Screenshot") <hr>

### Player has won!
![Alt text](/static/images/winner_screen.png?raw=true "Screenshot") <hr>
