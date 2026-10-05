const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  nav?.classList.toggle("open", open);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("open");
  }
});
const form = document.querySelector("#stay-form");
if (form instanceof HTMLFormElement) {
  const arrival = /** @type {HTMLInputElement} */ (
    document.getElementById("arrival")
  );
  const departure = /** @type {HTMLInputElement} */ (
    document.getElementById("departure")
  );
  const room = /** @type {HTMLSelectElement} */ (
    document.getElementById("room")
  );
  const result = document.getElementById("stay-result");
  const confirm = document.getElementById("confirm-stay");
  const confirmation = document.getElementById("stay-confirmation");
  const today = new Date();
  const dateString = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  arrival.min = dateString(today);
  departure.min = dateString(today);
  const selected = new URLSearchParams(location.search).get("zimmer");
  if (selected && Array.from(room.options).some((o) => o.value === selected))
    room.value = selected;
  form.addEventListener("input", () => {
    if (confirm) confirm.hidden = true;
    if (result) result.textContent = "";
    if (confirmation) confirmation.textContent = "";
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!result || !confirm) return;
    const a = new Date(`${arrival.value}T12:00:00Z`);
    const d = new Date(`${departure.value}T12:00:00Z`);
    const nights = Math.round((d.getTime() - a.getTime()) / 86400000);
    if (
      !arrival.value ||
      !departure.value ||
      !Number.isFinite(nights) ||
      arrival.value < arrival.min ||
      nights < 2 ||
      nights > 30
    ) {
      result.textContent =
        "Bitte wählen Sie ein Anreisedatum ab heute und eine Abreise 2 bis 30 Nächte später.";
      arrival.focus();
      confirm.hidden = true;
      return;
    }
    const price = Number(room.selectedOptions[0].dataset.price);
    result.textContent = `${nights} Nächte × ${price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })} = ${(nights * price).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}. Für zwei Personen, inklusive Frühstück und angenommener Steuern. Reiner Beispielpreis; keine Verfügbarkeitszusage.`;
    confirm.hidden = false;
  });
  confirm?.addEventListener("click", () => {
    if (confirmation)
      confirmation.textContent =
        "Ihre Auszeit ist als Demo durchgespielt. Es wurde keine Reservierung vorgenommen und nichts versendet.";
    confirm.hidden = true;
  });
}
