// ok so we basically write one cookie per crime
// using the index of the crime in the name
// now in the name we have to explicity add a ' at the start and finish of the name
// and as far as data going in, basically stringify it and use ; to separate
// and then on the other end, pull the cookie, and convert the content part of the cookie
// into an array with cookieContent.split(";")
// E Z P Z

function WriteAllCrimeCookies() {
  for (let index = 0; index < crimesConst.length; index++) {
    writeSingleCrimeCookie(index);
  }
}

function writeSingleCrimeCookie(index) {
  // build cookie name
  // the ' at the start and finish is essential
  let cookieName = "'crimeCookieName" + index + "'";
  let cookieContent = "";
  let currentCrime = crimeArray[index];

  cookieContent += currentCrime.visible + ";";
  cookieContent += currentCrime.running + ";";
  cookieContent += currentCrime.numOfCriminals + ";";
  cookieContent += currentCrime.multiplier + ";";
  cookieContent += currentCrime.category + ";";
  // convert the times to unix (seconds from unix epoch lmao)
  cookieContent += dayjs(currentCrime.timeCrimeStarted).unix() + ";";
  cookieContent += dayjs(currentCrime.timeCrimeWillEnd).unix() + ";";
  cookieContent += currentCrime.state + ";";
  cookieContent += currentCrime.auto + ";";
  cookieContent += currentCrime.progress + ";";
  cookieContent += currentCrime.timesDone + ";";

  Cookies.set(cookieName, cookieContent, { expires: 365 });
  console.log(cookieContentJSON);
}

function readCrimeCookies() {
  for (let index = 0; index < crimesConst.length; index++) {
    let currentCrime = crimeArray[index];

    let cookieName = "'crimeCookieName" + index + "'";
    let cookieContent = "";
    cookieContent = Cookies.get(cookieName);
    console.log(cookieContent);

    if (cookieContent == undefined) {
      console.log(cookieName);
      return null;
    } else {
      // turn the single string into an array
      cookieContentArray = cookieContent.split(";");
      // write the members of the array
      // much careful with this, atm it just relies on everything being in order lol
      currentCrime.visible = cookieContentArray[0];

      currentCrime.running = cookieContentArray[1];
      currentCrime.numOfCriminals = cookieContentArray[2];
      currentCrime.multiplier = cookieContentArray[3];
      currentCrime.category = cookieContentArray[4];
      // convert from unixtime
      currentCrime.timeCrimeStarted = dayjs.unix(cookieContentArray[5]);
      currentCrime.timeCrimeWillEnd = dayjs.unix(cookieContentArray[6]);
      currentCrime.state = cookieContentArray[7];
      currentCrime.auto = cookieContentArray[8];
      currentCrime.progress = cookieContentArray[9];
      currentCrime.timesDone = cookieContentArray[10];
    }
  }
}
