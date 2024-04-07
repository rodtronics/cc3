document.getElementById("settingsLinkID").addEventListener("click", () => settingsDisplay());

let settingsModalContainer = document.getElementById("settingsContainerID");
let settingsModalContent = document.getElementById("settingsContentID");

function settingsDisplay() {
  settingsModalContainer.style.display = "block";
  console.log("display?");
}

function settingsClose() {
  settingsModalContainer.style.display = "none";
}

function settingsClearCookies() {
  // clear crime cookies
  for (let index = 0; index < crimeArray.length; index++) {
    let cookieName = "'crimeCookieName" + index + "'";
    Cookies.remove(cookieName);
  }
}

/*






*/

let settingsCloseButton = document.createElement("div");
settingsCloseButton.setAttribute("id", "settingsCloseButtonID");
settingsCloseButton.innerHTML = "CLOSE";
settingsModalContent.append(settingsCloseButton);

settingsCloseButton.addEventListener("click", () => settingsClose());

let settingsClearCookiesButton = document.createElement("div");
settingsClearCookiesButton.setAttribute("id", "settingsClearCookiesButtonID");
settingsClearCookiesButton.innerHTML = "CLEAR COOKIES";
settingsModalContent.append(settingsClearCookiesButton);

settingsClearCookiesButton.addEventListener("click", () => settingsClearCookies());
