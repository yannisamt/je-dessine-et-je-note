/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dislike extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mis", "./Dislike/costumes/mis.svg", { x: 72, y: 72 }),
      new Costume("notmis", "./Dislike/costumes/notmis.svg", { x: 72, y: 72 })
    ];

    this.sounds = [new Sound("pop", "./Dislike/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "looknote" },
        this.whenIReceiveLooknote
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "notmis";
  }

  *whenIReceiveLooknote() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    if (2 === this.costumeNumber && 2 === this.sprites["Like"].costumeNumber) {
      this.stage.vars.jeNaimePas++;
      this.costume = "mis";
    }
    yield* this.wait(3);
    this.broadcast("looknote");
    this.costume = "notmis";
  }
}
