document.getElementById("settingsLinkID").addEventListener("click", () => settingsDisplay());

let settingsModalContainer = document.getElementById("modal_Settings_Container");
let settingsModalContent = document.getElementById("modal_Settings_Inner");

function settingsDisplay() {
  settingsModalContainer.style.display = "block";
  console.log("display?");
}

function settingsClose() {
  settingsModalContainer.style.display = "none";
}

function settingsClearCookies() {
  // this function sucks a bit,
  // because have to manually track what cookies are stored in order to clear
  // clear crime cookies
  for (let index = 0; index < crimeArray.length; index++) {
    let cookieName = "'crimeCookieName" + index + "'";
    Cookies.remove(cookieName);
  }
}

/*






*/

let settingsTitleDiv = document.createElement("div");
settingsTitleDiv.innerHTML = "settings";
settingsTitleDiv.setAttribute("id", "settingsTitleID");
settingsModalContent.append(settingsTitleDiv);

let settingsCloseButton = document.createElement("div");
settingsCloseButton.setAttribute("id", "settingsCloseButtonID");
settingsCloseButton.innerHTML = "RETURN TO GAME";
settingsModalContent.appendChild(settingsCloseButton);

settingsCloseButton.addEventListener("click", () => settingsClose());

let settingsClearCookiesButton = document.createElement("div");
settingsClearCookiesButton.setAttribute("id", "settingsClearCookiesButtonID");
settingsClearCookiesButton.innerHTML = "CLEAR COOKIES";
settingsModalContent.appendChild(settingsClearCookiesButton);

settingsClearCookiesButton.addEventListener("click", () => settingsClearCookies());

/*




*/

document.getElementById("aboutLinkID").addEventListener("click", () => aboutDisplay());
document.getElementById("modal_About_Container").addEventListener("click", () => aboutClose());

let aboutModalContainer = document.getElementById("modal_About_Container");

function aboutDisplay() {
  aboutModalContainer.style.display = "flex";
}

function aboutClose() {
  aboutModalContainer.style.display = "none";
}
