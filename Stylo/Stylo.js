/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stylo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Stylo/costumes/costume1.png", { x: 1, y: 74 })
    ];

    this.sounds = [new Sound("pop", "./Stylo/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Créer" }, this.whenIReceiveCrEr),
      new Trigger(Trigger.BROADCAST, { name: "Créer" }, this.whenIReceiveCrEr2),
      new Trigger(Trigger.BROADCAST, { name: "Créer" }, this.whenIReceiveCrEr3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.jeNaimePas = 0;
    this.stage.vars.jaime = 0;
    this.stage.vars.possibilit = 2;
    yield* this.wait(0.3);
    this.clearPen();
    this.stage.vars.possibilit = 2;
  }

  *whenIReceiveCrEr() {
    this.visible = true;
    this.stage.watchers.vues.visible = true;
    this.stage.watchers.jeNaimePas.visible = true;
    this.stage.watchers.jaime.visible = true;
  }

  *whenIReceiveCrEr2() {
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      this.penColor = Color.rgb(0, 0, 0);
      if (this.mouse.down) {
        this.penDown = true;
      } else {
        this.penDown = false;
      }
      yield;
    }
  }

  *whenIReceiveCrEr3() {
    this.clearPen();
    while (true) {
      if (this.mouse.down) {
        this.stage.vars.possibilit++;
        for (
          let i = 0;
          i < 2 * this.toNumber(this.stage.vars.possibilit);
          i++
        ) {
          yield* this.wait(this.random(0.5, 1));
          this.stage.vars.jaime += this.random(
            -3,
            this.toNumber(this.stage.vars.possibilit)
          );
          this.stage.vars.jeNaimePas += this.random(-1, 2);
          this.stage.vars.vues =
            this.toNumber(this.stage.vars.jeNaimePas) +
            this.toNumber(this.stage.vars.jaime);
          yield;
        }
      }
      yield;
    }
  }
}
