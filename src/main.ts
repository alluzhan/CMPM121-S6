// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
import tileUrl from "./assets/tile.svg?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "D1 Section 6 project";
let flowers = 0;

const garden = document.createElement("p");
garden.className = "garden";

const bouquet = document.createElement("p");

const pickButton = document.createElement("button");
pickButton.textContent = "🌸 Pick a flower";
pickButton.addEventListener("click", () => {
  flowers += 1;
  render();
});

function render() {
  bouquet.textContent = `Flowers picked: ${flowers}`;
  garden.textContent = "🌼".repeat(Math.min(flowers, 30));
}

app.append(heading, bouquet, garden, pickButton);
render();
