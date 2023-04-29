/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrière-plan2", "./Stage/costumes/arrière-plan2.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "looknote" },
        this.whenIReceiveLooknote
      )
    ];

    this.vars.jaime = 13;
    this.vars.jeNaimePas = 5;
    this.vars.possibilit = 2;
    this.vars.vues = 0;

    this.watchers.jaime = new Watcher({
      label: "J'aime",
      style: "normal",
      visible: false,
      value: () => this.vars.jaime,
      x: 277,
      y: -151
    });
    this.watchers.jeNaimePas = new Watcher({
      label: "Je n'aime pas",
      style: "normal",
      visible: false,
      value: () => this.vars.jeNaimePas,
      x: 544,
      y: -151
    });
    this.watchers.vues = new Watcher({
      label: "Vues",
      style: "normal",
      visible: false,
      value: () => this.vars.vues,
      x: 409,
      y: -151
    });
  }

  *whenGreenFlagClicked() {
    this.watchers.vues.visible = false;
    this.watchers.jaime.visible = false;
    this.watchers.jeNaimePas.visible = false;
    this.vars.vues = 0;
  }

  *whenIReceiveLooknote() {
    this.watchers.vues.visible = true;
    this.watchers.jeNaimePas.visible = true;
    this.watchers.jaime.visible = true;
  }
}
