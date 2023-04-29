/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Look extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Look/costumes/costume1.png", { x: 192, y: 46 })
    ];

    this.sounds = [new Sound("pop", "./Look/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "masque" },
        this.whenIReceiveMasque
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.clearPen();
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("looknote");
    this.broadcast("masque");
  }

  *whenIReceiveMasque() {
    this.visible = false;
  }
}
