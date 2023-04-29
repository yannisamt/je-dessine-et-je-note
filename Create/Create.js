/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Create extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Create/costumes/costume1.png", {
        x: 192,
        y: 46
      })
    ];

    this.sounds = [new Sound("pop", "./Create/sounds/pop.wav")];

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
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("Créer");
    this.broadcast("masque");
  }

  *whenIReceiveMasque() {
    this.visible = false;
  }
}
