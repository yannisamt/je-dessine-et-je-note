import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Stylo from "./Stylo/Stylo.js";
import Create from "./Create/Create.js";
import Look from "./Look/Look.js";
import Like from "./Like/Like.js";
import Dislike from "./Dislike/Dislike.js";
import Autre from "./Autre/Autre.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Stylo: new Stylo({
    x: 225,
    y: 165,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Create: new Create({
    x: 0,
    y: 92,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Look: new Look({
    x: 0,
    y: -30,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Like: new Like({
    x: -223,
    y: -163,
    direction: 90,
    costumeNumber: 2,
    size: 30,
    visible: false,
    layerOrder: 4
  }),
  Dislike: new Dislike({
    x: 222,
    y: -163,
    direction: 90,
    costumeNumber: 2,
    size: 30,
    visible: false,
    layerOrder: 5
  }),
  Autre: new Autre({
    x: -197,
    y: 165,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
