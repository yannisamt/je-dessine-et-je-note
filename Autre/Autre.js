/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Autre extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Autre/costumes/costume2.png", { x: 1, y: 74 })
    ];

    this.sounds = [new Sound("pop", "./Autre/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "looknote" },
        this.whenIReceiveLooknote
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "looknote" },
        this.whenIReceiveLooknote2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLooknote() {
    this.penDown = true;
    this.clearPen();
    this.penColor = Color.rgb(25, 25, 26);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      yield* this.glide(0.1, this.random(-200, 200), this.random(-200, 200));
      this.stage.vars.jaime += this.random(-1, 3);
      this.stage.vars.jeNaimePas += this.random(-1, 2);
      this.stage.vars.vues =
        this.toNumber(this.stage.vars.jeNaimePas) +
        this.toNumber(this.stage.vars.jaime);
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveLooknote2() {
    this.stage.vars.vues = 0;
    this.stage.vars.jeNaimePas = 0;
    this.stage.vars.jaime = 0;
  }
}
