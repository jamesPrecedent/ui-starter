# Precedent Base | Panini - HandlebarsJs | Gulp build

It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- JSHint
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.10 or greater)
- [Git](https://git-scm.com/)

- [Repo](https://stash.precedent.com/projects/LCCI/repos/front-end-templates/browse)


Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.

## Events listing API
Created by [Adrian Brunton](adrianbrunton@netconstruct.co.uk) at [Net Construct](http://www.netconstruct.co.uk)

Returns JSON object

Return all events
`http://someurl/api/event/list`

To return all events on the first page with a page size of two, you can request:
`http://someurl/api/event/list?pageSize=2`
 
I’ve also made an event filters method which returns all the information that should be required to populate the filter dropdowns. This might be removed if you’re not going to do this with an AJAX call and want me to load the dropdowns on page load.
`http://someurl/api/event/filters`
 
All parameters are case IN sensitive, so it doesn’t matter about casing. Some parameters allow you to request an array by specifying the value two such as:
`http://someurl/api/event/list?PageSize=100&EventTypeIds=b94a554b-e974-4c4e-ab6c-f804d5cc8575&EventTypeIds=b21791cf-062a-47ff-9b8a-4493f8071051`

A list of all options are:

Page
To select a different page (defaults to 10)
`?page=3`

PageSize
To select the number of items per page (defaults to 10)
`?pagesize=10`

SearchQuery
The search term the user makes. Should be URL encoded.
`?searchquery=Networking+events`

From
Selects events from a given date
`?from=2016-06-28`

To
Selects events until a given date. Can be used in combination with from date to select a month.
`?to=2016-06-30`

MembershipTypeIds
A list of GUIDs from values in the membership type dropdown selection.
`?MembershipTypeIds=b4c37e30-bd08-4344-8093-df65bab99138&MembershipTypeIds=c5cc7cbe-460f-4d12-9bf9-70daa9a4b4b1`

Time
An enum with options of either morning, daytime or evening
`?time=daytime`

OrganiserIds
A list of GUIDs from values in the organiser dropdown selection.
`?organiserIds=8e1a0c11-9fcb-42d3-9b24-e87c5b100623`

EventTypeIds
A list of GUIDs from values in the event type dropdown selection.
`?eventtypeIds=b21791cf-062a-47ff-9b8a-4493f8071051`

## Member listing API
Created by [Adrian Brunton](adrianbrunton@netconstruct.co.uk) at [Net Construct](http://www.netconstruct.co.uk)

return all members

`http://someurl/api/company/list`

return all members on the first page with a page size of two, you can request:

`http://someurl/api/company/list?pageSize=2`
 
Member filters

`http://someurl/api/company/filters`
 
All parameters are case IN sensitive, so it doesn’t matter about casing. Some parameters allow you to request an array by specifying the value two such as:

`http://someurl/api/company/list?PageSize=100&SectorIds=79796b6b-83f6-e511-80f2-005056bf72c1&SectorIds=91796b6b-83f6-e511-80f2-005056bf72c1`
 
A list of all options are:

Page

To select a different page (defaults to 10)

`?page=3`

PageSize

To select the number of items per page (defaults to 10)

`?pagesize=10`

SearchQuery

The search term the user makes. Should be URL encoded.

`?searchquery=Networking+events`

Offers

Selects whether to show only organisations with offers.

`1 = offers only`
`0 = all members`

`?offers=1`

SortBy

Changes sort order.

`DateJoinedDesc = 0`

`DateJoinedAsc = 1`

`NameAsc = 2`

`NameDesc = 3`

`?sortby=1`

SectorIds

A list of GUIDs from values in the sector dropdown selection.

`?SectorIds=79796b6b-83f6-e511-80f2-005056bf72c1&SectorIds=91796b6b-83f6-e511-80f2-005056bf72c1`


## Working with APIs outside of the Kentico environment

run `gulp --debug` from command line - this will prefix API calls with `http://test.londonchamber.co.uk` (this URL can be changed in doc-ready.js)

Add CORS extension to you browser. Anything similar to [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)


## HTML EMAILS

build with [Foundation Email](http://foundation.zurb.com/emails/docs/)

sub folder - lcci-email

```bash
cd lcci-email
npm install
npm start
```

The build process doesn't inline css by default. To do a full inlining process as you build, quit the process you have running in your command line, and run `npm run build` instead. This does the same build process, but adds the inlining step at the end.

