import game from "./gameState";
import initButtons from "./buttons";
import { TICK_RATE } from "./constants";

async function init() {
  console.log("starting game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const NOW = Date.now();

    if (nextTimeToTick <= NOW) {
      game.tick();
      nextTimeToTick = NOW + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
