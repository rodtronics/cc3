# Crime Committer 3.3 - Code Review

**Game Version:** 3.3 "shallow alpha"
**Review Date:** 2026-01-10

---

## 🚨 Critical Bugs (MUST FIX)

### 1. **Syntax Error in calculateVisibility() - main.js:413**
```javascript
elseif(bPreReqs == true);  // ❌ INVALID - JavaScript doesn't have 'elseif'
{
  buildingOK = true;
}
```
**Fix:** Change to `else if` (two words)

### 2. **Assignment Instead of Comparison - main.js:420**
```javascript
if ((researchPrereqs.length = 0)) {  // ❌ ASSIGNMENT, not comparison
```
**Fix:** Change `=` to `===`

### 3. **Typo: "flase" Instead of "false" - main.js:425**
```javascript
if (rPreReqs.done == flase) {  // ❌ TYPO
```
**Fix:** Change to `false`

### 4. **Another elseif Syntax Error - main.js:429**
```javascript
elseif(rPreReqs == true);  // ❌ INVALID
```
**Fix:** Change to `else if`

### 5. **CSS Color Syntax Error - stylesheet.css:6**
```css
--color-B2: ##ef3601;  /* ❌ Double hash */
```
**Fix:** Remove one `#`

### 6. **Unreachable Code - main.js:366**
```javascript
return "restarting";
currentCrime.timeCrimeWillEnd = dayjs().add(dayjs(50000, "millisecond"));  // ❌ Never executes
```
**Fix:** Remove or move before return

### 7. **Unreachable Code - main.js:371**
```javascript
return formatTime(timeLeft);
return dayjs(timeLeft).format("mm:ss");  // ❌ Never executes
```
**Fix:** Remove the second return statement

---

## ⚠️ Logic Issues

### 1. **Broken calculateVisibility() Function**
The entire function (main.js:395-439) has multiple critical issues:
- Invalid `elseif` syntax (lines 413, 429)
- Semicolons after if statements make blocks unconditional (lines 413, 429)
- Assignment instead of comparison (line 420)
- Logic will never work as intended

**Impact:** Crime/facility visibility prerequisites will not function

### 2. **Inconsistent State Management**
```javascript
// In crimeObjectClass, state is duplicated:
this.state = 0;
this.data.state = 0;
```
**Risk:** Synchronization issues between duplicate state variables

### 3. **Missing State in Switch - main.js:254**
```javascript
switch (currentState) {
  case 0: // paused
  case 1: // running
  case 2: // never done
  case 3: // cps mode
  default: // ❌ What if state is something else?
}
```

---

## 🎨 Code Quality Issues

### 1. **Commented-Out Code**
Multiple locations have large blocks of commented code:
- main.js:90-92
- index.html:123
- data.js:104-113

**Recommendation:** Delete commented code (use git history if needed)

### 2. **Global Variable Pollution**
Excessive use of global variables:
```javascript
let totalCrimesCommitted = 0;
let moneyElement = ...;
let refreshRate = ...;
let globalPrecision = ...;
// etc...
```
**Recommendation:** Encapsulate in a game state object

### 3. **Magic Numbers**
```javascript
let refreshRate = 61.8 / 2; // Why 61.8? (phi?)
```
**Recommendation:** Use named constants with explanatory comments

### 4. **Inconsistent Naming Conventions**
- `gizmoContainer_ID` (snake_case with suffix)
- `tabContainerID` (camelCase with suffix)
- `secondaryTabContainer_Class` (mixed)

**Recommendation:** Pick one convention (suggest camelCase)

### 5. **No Error Handling**
```javascript
function getNumberFromID(crimeID) {
  try {
    return parseInt(crimeID.slice(position + 1));
  } catch (error) {
    console.log(crimeID + " " + error);  // ❌ Only logs, doesn't handle
  }
}
```

### 6. **Inconsistent let/const Usage**
Many variables declared with `let` that never change should be `const`:
```javascript
let letterArray = ["A", "B", "C", "D", "E"];  // Should be const
let tabElement = [];  // Should be const
```

---

## 🏗️ Architecture Concerns

### 1. **Mixed Responsibilities**
main.js contains:
- Game initialization
- UI event handlers
- Business logic
- Formatting utilities

**Recommendation:** Separate concerns into modules

### 2. **Tight Coupling**
Elements directly reference global arrays:
```javascript
crimeArray[index].recruitmentSubElement.setAttribute(...);
```

### 3. **Duplicate Data Structures**
```javascript
// In crimes.js:
const crimesConst = [...];  // Static data
let crimeArray = [...];     // Dynamic instances
```
**Note:** This is actually good separation, but ensure const data never changes

### 4. **Element References Stored in Multiple Places**
```javascript
// In crimeObjectClass:
this.progressElement = null;
this.elements = {};
this.elements.progressBarElement = null;
```
Same element referenced in two places - confusing

---

## ⚡ Performance Issues

### 1. **Inefficient Loop in updateCrimeProgressDiv() - main.js:243**
```javascript
function updateCrimeProgressDiv() {
  for (let index = 0; index < crimeArray.length; index++) {
    let currentElement = crimeArray[index].progressElement;
    let currentCrimeID = getNumberFromID(currentElement.getAttribute("data-ProgressID"));
    // ❌ Why get ID from element when you already have index?
```

### 2. **Unused Loop Parameter - main.js:292**
```javascript
function updateCrimeProgressValue(index) {  // ❌ Parameter not used
  for (let index = 0; index < crimeArray.length; index++) {
```
**Issue:** Shadows outer scope parameter

### 3. **No Debouncing on Interval Updates**
```javascript
setInterval(() => WriteAllCrimeCookies(), 60000);
```
**Risk:** If game freezes briefly, could miss saves

---

## 🔒 Security Concerns

### 1. **XSS Vulnerability via innerHTML**
```javascript
newHTML = title + "<br><br>" + timesCommitted + ...;
modalInfoTitle.innerHTML = crimesConst[index].crime;
```
**Risk:** If crime data comes from user input (future feature?), could inject HTML

**Mitigation:** Use `textContent` for user data, or sanitize HTML

### 2. **Cookie Storage Without Validation**
The game saves state to cookies but doesn't validate on read.

**Risk:** Users could modify cookies to cheat or break the game

---

## ✅ Positive Aspects

### 1. **Good Class Structure**
The `crimeObjectClass` is well-organized with clear methods:
```javascript
class crimeObjectClass {
  recruitClicked(polarity) { ... }
  addRecruit() { ... }
  removeRecruit() { ... }
  crimeCompleted() { ... }
}
```

### 2. **Event Delegation**
Smart use of single event listener:
```javascript
gizmoContainerElement.addEventListener("click", (elementClicked) => gizmoClicked_Start(elementClicked));
```

### 3. **Modular File Structure**
Separation of concerns across files:
- `data.js` - game data
- `crimes.js` - crime logic
- `facilities.js` - facility logic
- `modals.js` - modal UI

### 4. **Visual Polish**
CSS shows attention to detail:
- Custom scrollbar styling
- Gradient backgrounds
- Box shadows and visual effects

### 5. **Time Formatting**
The `formatTime()` function handles multiple time scales well:
```javascript
// Shows years, months, days, hours, minutes, seconds appropriately
```

---

## 📋 Recommendations

### High Priority
1. ✅ Fix all syntax errors (elseif, ##, flase)
2. ✅ Fix calculateVisibility() function completely
3. ✅ Remove unreachable code
4. ✅ Fix assignment vs comparison bugs

### Medium Priority
1. 🔸 Add proper error handling
2. 🔸 Validate cookie data on load
3. 🔸 Remove commented-out code
4. 🔸 Use const instead of let for constants
5. 🔸 Consolidate global variables into game state object

### Low Priority
1. 🔹 Standardize naming conventions
2. 🔹 Add JSDoc comments to functions
3. 🔹 Consider using textContent instead of innerHTML where appropriate
4. 🔹 Refactor duplicate element references

### Future Enhancements
1. 💡 Consider using a state management library
2. 💡 Add unit tests for core game logic
3. 💡 Implement save game versioning
4. 💡 Add data validation schemas

---

## 🎯 Overall Assessment

**Strengths:**
- Creative game concept
- Good visual design
- Modular code organization
- Working game loop implementation

**Weaknesses:**
- Critical syntax errors preventing execution
- Broken visibility system
- Inconsistent code style
- Missing error handling

**Grade:** C+ (would be B+ with critical bugs fixed)

**Priority:** Fix the 7 critical bugs immediately - the game likely has runtime errors preventing the visibility and prerequisite systems from working.

---

## 📝 Quick Win Fixes

Here are the fastest fixes that will have the biggest impact:

```javascript
// main.js:413 - Change this:
elseif(bPreReqs == true);
{
  buildingOK = true;
}

// To this:
else if (bPreReqs == true) {
  buildingOK = true;
}

// main.js:420 - Change this:
if ((researchPrereqs.length = 0)) {

// To this:
if (researchPrereqs.length === 0) {

// main.js:425 - Change this:
if (rPreReqs.done == flase) {

// To this:
if (rPreReqs.done == false) {

// main.js:429 - Change this:
elseif(rPreReqs == true);
{
  buildingOK = true;
}

// To this:
else if (rPreReqs == true) {
  buildingOK = true;
}
```

```css
/* stylesheet.css:6 - Change this: */
--color-B2: ##ef3601;

/* To this: */
--color-B2: #ef3601;
```

---

*End of Review*
