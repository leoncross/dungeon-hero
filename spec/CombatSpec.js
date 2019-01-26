describe('Combat',function(){

  beforeEach(function() {

    function PlayerStub() {}
    PlayerStub.prototype = {
      status() {},
      recieveDamage () {}
    }

    function MonsterStub() {}
    MonsterStub.prototype = {
    };

    function DiceStub() {}
    DiceStub.prototype = {
      rollDice() {},
      rollBetween() {}
    };

    function ReadoutStub() {}
    ReadoutStub.prototype = {
      addReadout() {},
      monsterDamage() {},
      monsterMisses() {},
      playerDamage() {},
      playerMisses() {},
      playerWins() {},
      playerLoses() {},
      playerPotion() {}
    };

    var Combat = require('../src/Combat');
    player = new PlayerStub
    monster = new MonsterStub
    readout = new ReadoutStub
    dice = new DiceStub
    combat = new Combat(player, monster, dice, readout)

    hero = {name: 'leon', health: 100, armor: 5, armorName: 'Plate', armorDamageReduction: (60/100), weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3, healthPotions:2 }
    leonHurtPlayer = {name: 'leon', health: 47, armor: 5, armorName: 'Plate', armorDamageReduction: (60/100), weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3, healthPotions:2}
    leonDeadPlayer = {name: 'leon', health: 0, armor: 5, armorName: 'Plate', armorDamageReduction: (60/100), weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3, healthPotions:2 }
    leonAlmostDeadPlayer = {name: 'leon', health: 1, armor: 5, armorName: 'Plate', armorDamageReduction: (60/100), weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3, healthPotions:2 }
    enemy = {name: 'luca', health: 100, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}
    almostDeadMonster = {name: 'luca', health: 4, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}
    deadMonster = {name: 'luca', health: 0, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4}
  });

  describe("#attackSetup", function() {
    it("returns player and monster", function() {
      expect(combat.attackSetup([hero, enemy])).toEqual([hero, enemy])
    });
    it("hero is hero", function() {
      combat.attackSetup([hero, enemy])
      expect(combat.hero).toEqual(hero)
    });
    it("monster is monster", function() {
      combat.attackSetup([hero, enemy])
      expect(combat.enemy).toEqual(enemy)
    });
  });

  describe("#heroAttack", function() {
    it("normal player attack", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(0, 1)).toEqual(4)
      expect(combat.enemy["health"]).toEqual(96)
    });
    it("insane player attack", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(3);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(-5, 0.5)).toEqual(4)
      expect(combat.enemy["health"]).toEqual(96)
    });
    it("quick player attack", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(0, 2)).toEqual(2)
      expect(combat.enemy["health"]).toEqual(98)
    });
    it("quick player attack", function() {
      spyOn(dice, "rollDice").and.returnValue(0);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(0, 2)).toEqual('miss')
      expect(combat.enemy["health"]).toEqual(100)
    });
  });


  describe("#monsterAttack", function() {
    it("normal monster attack success", function() {
      spyOn(dice, "rollDice").and.returnValue(10);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.monsterAttack(0)).toEqual(4)
      expect(combat.hero["health"]).toEqual(96)
    });
    it("normal monster attack miss", function() {
      spyOn(dice, "rollDice").and.returnValue(3);
      combat.attackSetup([hero, enemy])
      expect(combat.monsterAttack(0)).toEqual("miss")
      expect(combat.hero["health"]).toEqual(100)
    });
    it("quick attack against monster attack success", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.monsterAttack(5)).toEqual(4)
      expect(combat.hero["health"]).toEqual(96)
    });
  });

  describe("#attackSequence", function() {
    it("doesnt run - a player is dead", function() {
      combat.attackSetup([leonDeadPlayer, enemy])
      expect(combat.attackSequence(0, 1 ,0, 0)).toEqual('dead')
      expect(combat.enemy["health"]).toEqual(100)
      expect(combat.hero["health"]).toEqual(0)
    });
    it("hero doesn't get hit if attack kills enemy", function() {
      spyOn(dice, "rollDice").and.returnValue(18);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "status").and.returnValue(true);
      combat.attackSetup([hero, almostDeadMonster])
      combat.attackSequence(0, 1 ,0, 0)
      expect(combat.enemy["health"]).toEqual(0)
      expect(combat.hero["health"]).toEqual(100)
    });
    it("enemy does an attack", function() {
      spyOn(dice, "rollDice").and.returnValue(18);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "status").and.returnValue(true);
      combat.attackSetup([hero, enemy])
      combat.attackSequence(0, 1 ,0, 0)
      expect(combat.enemy["health"]).toEqual(96)
      expect(combat.hero["health"]).toEqual(96)
    });
    it("player hits with double power when roll dice is above 19", function() {
      spyOn(dice, "rollDice").and.returnValue(20);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "status").and.returnValue(true);
      combat.attackSetup([hero, enemy])
      combat.attackSequence(0, 1 ,0, 0)
      expect(combat.enemy["health"]).toEqual(92)
      expect(combat.hero["health"]).toEqual(96)
    });
    it("player dies", function() {
      spyOn(dice, "rollDice").and.returnValue(18);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "status").and.returnValue(false);
      combat.attackSetup([hero, enemy])
      expect(combat.attackSequence(0, 1 ,0, 0)).toEqual('you have died')
    });
    it("monster dies", function() {
      spyOn(dice, "rollDice").and.returnValue(18);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "status").and.returnValue(true);
      combat.attackSetup([hero, almostDeadMonster])
      expect(combat.attackSequence(0, 1 ,0, 0)).toEqual('the monster has died')
    });
    it("player consumes potion", function() {
      spyOn(dice, "rollDice").and.returnValue(18);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "status").and.returnValue(true);
      combat.attackSetup([leonHurtPlayer, enemy])
      expect(combat.attackSequence(0, 1 ,0, 'health')).toEqual('health potion consumed')
    });
  })


  describe("#healthPotion", function() {
    it('restores 25 hp and reduces healh potions by 1', function() {
      combat.attackSetup([leonHurtPlayer, enemy])
      expect(leonHurtPlayer['healthPotions']).toEqual(2)
      expect(leonHurtPlayer['health']).toEqual(47)
      combat.healthPotion()
      expect(leonHurtPlayer['healthPotions']).toEqual(1)
      expect(leonHurtPlayer['health']).toEqual(72)
      expect(combat.healthPotion()).toEqual('health potion consumed')

    })
    it('doesnt consume potion if none left', function() {
      combat.attackSetup([leonHurtPlayer, enemy])
      leonHurtPlayer['healthPotions'] = 0
      combat.healthPotion()
      expect(combat.healthPotion()).toEqual('you ran out of potions')
      expect(leonHurtPlayer['health']).toEqual(47)
    })
    it('maximum player health is 100', function() {
      combat.attackSetup([leonHurtPlayer, enemy])
      leonHurtPlayer['health'] = 90
      expect(combat.healthPotion()).toEqual('health potion consumed')
      expect(leonHurtPlayer['health']).toEqual(100)
    })
  })

  describe("#weaponDamage", function() {
    it("returns a number between the weaponDamage", function() {
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.weaponDamage(hero)).toEqual(5)
    });
  });

  describe('#trapSequence', function() {
    it('deals 25 damage to player if fails 50/50 roll', function() {
      spyOn(dice, 'rollDice').and.returnValue(5)
      spyOn(player, 'recieveDamage').and.returnValue(75)
      expect(combat.trapSequence()).toEqual('triggered')
    })
    it('deals 0 damage to player if succeeds 50/50 roll', function() {
      spyOn(dice, 'rollDice').and.returnValue(15)
      spyOn(player, 'recieveDamage').and.returnValue(100)
      expect(combat.trapSequence()).toEqual('not triggered')
    })
  })
});
