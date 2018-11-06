<!-- Author: Shannon Riester -->
# iNtuitive Outlook Calendar (NOC)
A [Chrome extension]() that displays outdated appointments in a more intuitive way!

### Author
Shannon (_ShanWow_) Riester.  

## About NOC (version 0.0.0)
**About:**
NOC calculates and overrides your Outlook's default browser-styles so that your calendar appointments have a more _intuitive_ look. You still have 100% full access to opening & editing all of your old/canceled calendar meetings, they'll just look slightly more opaque.  

**What to do:**  
  Simply download this [extenstion]() and enjoy!  

**Features:**
 - _Expired meetings_ appear opaque.
 - _Canceled appointments_ have a new color, opaque-grey.
 - The current day of th week (in _WorkWeek_, _Week_ and _Month_ views) is more apparent (the day is encased in an Outlook-red border).

**How:**


## Credits
- Gulp file
- [Microsoft Outlook Calendar Docs](https://www.google.com/search?q=microsoft+outlook+calendar+developers&rlz=1C5CHFA_enUS749US749&oq=microsoft+outlook+calendar+developers&aqs=chrome..69i57.6040j0j7&sourceid=chrome&ie=UTF-8)
  - [REST API](https://docs.microsoft.com/en-us/previous-versions/office/office-365-api/api/version-2.0/calendar-rest-operations)
  - [Get Cal Groups](https://docs.microsoft.com/en-us/previous-versions/office/office-365-api/api/version-2.0/calendar-rest-operations#get-calendars)


## BUGSS
1. current day-column bug
2. concurrent meetings bug
3. future meetings bug

// BACKLOG
- SetInterval/timer for every 5 minutes(?) to check for any old meetings...
- Handling "Month" view.
- Resize event
- Observe for changes to each meeting(?)

## Found Data
- owa === Outlook Web App?
- **window**
  - `JSON.parse(window.owaSD.response)`
- **network**
  - `sessiondata.ashx?appcacheclient=0` URL
  - `https://myemail.accenture.com/owa/prem/16.2624.9.2626075/scripts/owa.clientnext.application.js`
- **search**
  - `_wx_m1` -> #2: microsoft.owa.calendar.surface.v2.desktop