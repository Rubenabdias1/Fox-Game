const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const NOW = Date.now();

    if (nextTimeToTick <= NOW) {
      tick();
      nextTimeToTick = NOW + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
