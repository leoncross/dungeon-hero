describe('Loot', function() {

  var Loot = require('../src/Loot');
  var loot;

  beforeEach(function() {
    loot = new Loot();

    rarityCalculator = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3]
    table = [
        {name: 'dagger', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'sword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'longsword', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'claymore', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'battle axe', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'hatchet', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'mace', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'hammer', type: 'weapon', weaponMin: 1, weaponMax: 1, rarity: 1},
        {name: 'cloth', type: 'armor', armor: 1, rarity: 1},
        {name: 'leather', type: 'armor', armor: 1, rarity: 1},
        {name: 'chainmail', type: 'armor', armor: 1, rarity: 1},
        {name: 'plate', type: 'armor', armor: 1, rarity: 1},
        {name: 'health', type: 'potion', rarity: 1},
        {name: 'dexterity', type: 'potion', rarity: 1},
        {name: 'strength', type: 'potion', rarity: 1}
      ]

  });

  describe('#lootFinder', function() {
    it("finds loot based on rarity", function(){
      expect(loot.lootFinder()).toEqual()
    })
  })
})
