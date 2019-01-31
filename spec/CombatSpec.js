describe('Combat',function(){

  beforeEach(function() {

    function PlayerStub() {}
    PlayerStub.prototype = {
      status() {},
      recieveDamage () {},
      returnAttribute () {},
      toggleBerserkMode () {},
      playerFindsGold () {}
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
      monsterSpecialAttack() {},
      monsterMisses() {},
      playerDamage() {},
      playerMisses() {},
      playerWins() {},
      playerLoses() {},
      playerHealthPotion() {},
      playerMaxHealth() {},
      playerStrengthPotion() {},
      playerDexterityPotion() {},
      playerDamageCritical () {},
      playerBerserActivated () {},
      playerBerserDisactivated () {},
      monsterUnstunned () {},
      monsterStunned () {},
      playerStuns() {},
      playerStunMisses () {},
      playerWarCry() {}
    };

    var Combat = require('../src/Combat');
    player = new PlayerStub
    monster = new MonsterStub
    readout = new ReadoutStub
    dice = new DiceStub
    combat = new Combat(player, monster, dice, readout)

    hero = {name: 'leon', health: 100, armor: 5, armorName: 'Plate', armorDamageReduction: (60/100), weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3, berserkMode: "off", healthPotions:2, strengthPotions: 2, dexterityPotions: 2, dexterityBuff: 0,strengthBuff: 0}
    leonHurtPlayer = {name: 'leon', health: 47, armor: 5, armorName: 'Plate', armorDamageReduction: (60/100), weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3, berserkMode: "off", healthPotions:2, strengthPotions: 2, dexterityPotions: 2, dexterityBuff: 0,strengthBuff: 0}
    leonDeadPlayer = {name: 'leon', health: 0, armor: 5, armorName: 'Plate', armorDamageReduction: (60/100), weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3, berserkMode: "on", healthPotions:2, strengthPotions: 2, dexterityPotions: 2, dexterityBuff: 0,strengthBuff: 0}
    leonAlmostDeadPlayer = {name: 'leon', health: 1, armor: 5, armorName: 'Plate', armorDamageReduction: (60/100), weaponName: 'Dagger', weaponMin: 3, weaponMax: 5, strength: 3, dexterity: 3, berserkMode: "on", healthPotions:2 }
    enemy = {name: 'luca', health: 100, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4, stunStatus: false}
    almostDeadMonster = {name: 'luca', health: 4, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4, stunStatus: false}
    deadMonster = {name: 'luca', health: 0, armor: 4, armorName: 'Leather', weaponName: 'Long Sword', weaponMin: 5, weaponMax: 8, strength: 4, dexterity: 4, stunStatus: false}
    zombie = { name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 2, health: 35, armor: 3, strength: 3, dexterity: 2, weaponMin: 3, weaponMax: 6, stunStatus: false, image: './static/images/zombie.png' }
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
      expect(combat.heroAttack(0, 1, "normal")).toEqual(8)
      expect(combat.enemy["health"]).toEqual(92)
    });
    it("insane player attack", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(3);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(-5, 0.5, "strong")).toEqual(12)
      expect(combat.enemy["health"]).toEqual(88)
    });
    it("quick player attack", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(0, 2, "quick")).toEqual(4)
      expect(combat.enemy["health"]).toEqual(96)
    });
    it("stuns the enemy", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      combat.heroAttack(0, 100, "stun")
      expect(combat.enemy["health"]).toEqual(100)
      expect(combat.enemy["stunStatus"]).toEqual(true)
    });
    it("does a war cry", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      combat.heroAttack(0, 100, "warcry")
      expect(combat.hero['dexterityBuff']).toEqual(1)
      expect(combat.hero['strengthBuff']).toEqual(1)
      expect(combat.enemy["health"]).toEqual(100)
    });
    it("miss", function() {
      spyOn(dice, "rollDice").and.returnValue(0);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(readout, "playerMisses").and.returnValue('miss');
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
      spyOn(readout, "monsterMisses").and.returnValue('miss');
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
    it("cannot attack if stunned", function() {
      spyOn(dice, "rollDice").and.returnValue(5);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      combat.heroAttack(0, 100, "stun")
      expect(combat.monsterAttack()).toEqual('stunned')
      expect(combat.enemy["health"]).toEqual(100)
      expect(combat.enemy["stunStatus"]).toEqual(true)
    });
    it("broke free from stun", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      combat.heroAttack(0, 100, "stun")
      expect(combat.monsterAttack()).toEqual('broke free')
      expect(combat.enemy["health"]).toEqual(100)
      expect(combat.enemy["stunStatus"]).toEqual(false)
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
      expect(combat.enemy["health"]).toEqual(92)
      expect(combat.hero["health"]).toEqual(96)
    });
    it("monster dies", function() {
      spyOn(dice, "rollDice").and.returnValue(18);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "status").and.returnValue(true);
      spyOn(player, "playerFindsGold").and.returnValue('gold found');
      combat.attackSetup([hero, almostDeadMonster])
      expect(combat.attackSequence(0, 1 ,0, 0)).toEqual('gold found')
    });
    it("player consumes potion", function() {
      spyOn(dice, "rollDice").and.returnValue(18);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "status").and.returnValue(true);
      combat.attackSetup([leonHurtPlayer, enemy])
      expect(combat.attackSequence(0, 1 ,0, 'health')).toEqual('health potion consumed')
    });
  })

  describe("#criticaldamage", function() {
    it("critical normal attack", function() {
      spyOn(dice, "rollDice").and.returnValue(20);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(0, 1)).toEqual(16)
      expect(combat.enemy["health"]).toEqual(84)
    });
    it("cannot critical on insane attack", function() {
      spyOn(dice, "rollDice").and.returnValue(20);
      spyOn(dice, "rollBetween").and.returnValue(3);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(-5, 0.5)).toEqual(12)
      expect(combat.enemy["health"]).toEqual(88)
    });
    it("critical quick attack", function() {
      spyOn(dice, "rollDice").and.returnValue(20);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.heroAttack(0, 2)).toEqual(8)
    });
  })

  describe("#heroWarCry", function() {
   it('buffs the hero', function() {
     spyOn(readout, "playerWarCry").and.returnValue('does a war cry');
     combat.attackSetup([hero, enemy])
     expect(combat.hero['dexterityBuff']).toEqual(0)
     expect(combat.hero['strengthBuff']).toEqual(0)
     combat.heroWarCry()
     expect(combat.hero['dexterityBuff']).toEqual(1)
     expect(combat.hero['strengthBuff']).toEqual(1)
   })
 })

  describe('#playerStuns', function() {
    it('sets stun status to true', function () {
      spyOn(readout, "playerStuns").and.returnValue('stunned');
      combat.attackSetup([hero, enemy])
      combat.playerStuns()
      expect(combat.enemy['stunStatus']).toEqual(true)
    })
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
   it('doesnt consume health potion if none left', function() {
     combat.attackSetup([leonHurtPlayer, enemy])
     leonHurtPlayer['healthPotions'] = 0
     combat.healthPotion()
     expect(combat.healthPotion()).toEqual('you ran out of health potions')
     expect(leonHurtPlayer['health']).toEqual(47)
   })
   it('maximum player health is 100', function() {
     combat.attackSetup([leonHurtPlayer, enemy])
     leonHurtPlayer['health'] = 90
     expect(combat.healthPotion()).toEqual('health potion consumed')
     expect(leonHurtPlayer['health']).toEqual(100)
   })
   it('doesnt take potions if health is 100', function() {
     spyOn(readout, "playerMaxHealth").and.returnValue('you reached your max health');
     combat.attackSetup([hero, enemy])
     hero['health'] = 100
     expect(combat.healthPotion()).toEqual('you reached your max health')
     expect(hero['health']).toEqual(100)
   })
 })

 describe("#strengthPotion", function() {
   it('increases strengthBuff by 5 pts ', function() {
     combat.attackSetup([leonHurtPlayer, enemy])
     expect(leonHurtPlayer['strengthPotions']).toEqual(2)
     expect(leonHurtPlayer['strengthBuff']).toEqual(0)
     combat.strengthPotion()
     expect(leonHurtPlayer['strengthPotions']).toEqual(1)
     expect(leonHurtPlayer['strengthBuff']).toEqual(5)
     expect(combat.strengthPotion()).toEqual('strength potion consumed')

   })
   it('doesnt consume strength potion if none left', function() {
     combat.attackSetup([leonHurtPlayer, enemy])
     leonHurtPlayer['strengthPotions'] = 0
     combat.strengthPotion()
     expect(combat.strengthPotion()).toEqual('you ran out of strength potions')
     expect(leonHurtPlayer['strength']).toEqual(3)
   })
 })

 describe("#dexterityPotion", function() {
   it('increases dexterityBuff by 5 pts ', function() {
     combat.attackSetup([leonHurtPlayer, enemy])
     expect(leonHurtPlayer['dexterityPotions']).toEqual(2)
     expect(leonHurtPlayer['dexterityBuff']).toEqual(0)
     combat.dexterityPotion()
     expect(leonHurtPlayer['dexterityPotions']).toEqual(1)
     expect(leonHurtPlayer['dexterityBuff']).toEqual(5)
     expect(combat.dexterityPotion()).toEqual('dexterity potion consumed')

   })
   it('doesnt consume dexterityBuff potion if none left', function() {
     combat.attackSetup([leonHurtPlayer, enemy])
     leonHurtPlayer['dexterityPotions'] = 0
     combat.dexterityPotion()
     expect(combat.dexterityPotion()).toEqual('you ran out of dexterity potions')
     expect(leonHurtPlayer['dexterity']).toEqual(3)
   })
 })

  describe("#berserk mode", function() {
    it('enters you into berserkmode when less than 25 health', function() {
      combat.attackSetup([hero, enemy])
      hero['health'] = 20
      hero['berserkMode'] = 'off'
      expect(combat.heroBerserkMode()).toEqual('activated')
    })
    it('removes you from berserkmode when more than 25 health', function() {
      combat.attackSetup([hero, enemy])
      hero['health'] = 50
      hero['berserkMode'] = 'on'
      expect(combat.heroBerserkMode()).toEqual('disactivated')
    })
    it("doubles damage in berserk mode", function() {
      spyOn(dice, "rollDice").and.returnValue(15);
      spyOn(dice, "rollBetween").and.returnValue(5);
      spyOn(player, "toggleBerserkMode").and.returnValue(hero['berserkMode'] = 'on')
      combat.attackSetup([hero, enemy])
      hero['health'] = 20
      expect(combat.heroAttack(0, 1)).toEqual(16)
      expect(combat.enemy["health"]).toEqual(84)
    });
  })

  describe("#weaponDamage", function() {
    it("returns a number between the weaponDamage", function() {
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, enemy])
      expect(combat.weaponDamage(hero)).toEqual(5)
    });
  });

  describe('#monsterSpecialAttack', function() {
    it("normal monster special attack", function() {
      spyOn(dice, "rollDice").and.returnValue(20);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, zombie])
      expect(combat.monsterAttack()).toEqual(4)
    });
    it(" monster special attack success", function() {
      spyOn(dice, "rollDice").and.returnValue(20);
      spyOn(dice, "rollBetween").and.returnValue(5);
      combat.attackSetup([hero, zombie])
      expect(combat.monsterSpecialAttack()).toEqual(4)
      expect(combat.hero["health"]).toEqual(96)
    });
  })
});
