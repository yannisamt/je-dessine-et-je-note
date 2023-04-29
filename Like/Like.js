/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Like extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mis", "./Like/costumes/mis.svg", { x: 35, y: 34 }),
      new Costume("notmis", "./Like/costumes/notmis.svg", { x: 35, y: 34 })
    ];

    this.sounds = [new Sound("pop", "./Like/sounds/pop.wav")];

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
    if (
      2 === this.costumeNumber &&
      2 === this.sprites["Dislike"].costumeNumber
    ) {
      this.stage.vars.jaime++;
      this.costume = "mis";
    }
    yield* this.wait(3);
    this.broadcast("looknote");
    this.costume = "notmis";
  }
}
