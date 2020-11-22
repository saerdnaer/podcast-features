# podcast-clients

This project aims collect podcast features support data from all related components, e.g. native apps, web apps, directories, hosters, and other services. It aims to fit together with https://github.com/opawg/podcast-hosts and https://github.com/opawg/user-agents. Basically we want to build a dataset like https://github.com/Fyrd/caniuse but for podcast features instead of web browser features. The current idea is to reuse some of their ideas and tools (c.f. [#1](https://github.com/saerdnaer/podcast-clients/issues/1)) to create a web page like https://caniuse.com or simular.


The inital database was a more machine readable version of https://docs.google.com/spreadsheets/d/1c2L14UVH1xtN4iDG4awheLbMgPCQgaKEamUauWs1gps/edit#gid=0, which is in the process to be transformed into a [new structure](https://github.com/saerdnaer/podcast-clients/blob/main/features/sample-feature.json).

This project is in it's very early stages, feel free to create Issues and PRs. :-)


# Contributing to the feature data

## Filing issues

Issues can be filed to make new **data suggestions**. Data suggestions can be voted on with thumbs up (👍) reactions.

## Feature data

The `features` directory includes JSON files for every podcast client feature. Maintaining these files on GitHub allows anyone to update or contribute to the support data on the site.

### Supported changes

Currently the following feature information can be modified:
* **title** — Feature name (used for the title of the table)
* **description** — Brief description of feature
* **spec** — Spec URL
* **status** — Spec status, one of the following:
	* `ls` - Living Standard
	* `rec` - Recommendation
	* `pr` - Proposed Recommendation
	* `wd` - Working Draft
	* `other`
	* `unoff` - Unofficial, Editor's Draft
* **links** — Array of "link" objects consisting of URL and short description of link
* **bugs** — Array of "bug" objects consisting of a bug description
* **categories** — Array of categories, any of the following:	(Note that some of these categories are put into a parent category on the caniuse site)
	* `Player`
	* `Feed`
	* `Other`
	* tbc...
* **clients**, **directories**, **providers** — The collection of support data for a given set of implementations. Values are space-separated characters with these meanings, and must answer the question "*Can I use* the feature by default?":
	* `y` - (**Y**)es, supported by default
	* `a` - (**A**)lmost supported (aka Partial support)
	* `n` - (**N**)o support, or disabled by default
	* `u` - Support (**u**)nknown
	* `d` - (**D**)isabled by default (need to enable flag or something)
	* `#n` - Where n is a number, starting with 1, corresponds to the **notes_by_num** note.  For example: `"42":"y #1"` means version 42 is supported by default and see note 1.
* **notes** — Notes on feature support, often to explain what partial support refers to
* **notes_by_num** - Map of numbers corresponding to notes. Used in conjunction with the #n notation under **stats**. Each key should be a number (no hash), the value is the related note. For example: `"1": "Foo"`
* **parent** — ID of parent feature
* **keywords** — Comma separated words that will match the feature in a search

### Adding a feature

To add a feature, simply add another JSON file, following the [example](/features/sample-feature.json), to the `features` directory with the base file name as the feature ID (only alphanumeric characters and hyphens please).


### Unsupported changes

Currently it is not possible to:
* Add any object properties not already defined above
* Modify the **usage\_perc\_y** or **usage\_perc\_a** values (these values are generated)

### Testing
Make sure you have NodeJS installed on your system.

Run

`npm run validate`

If something is wrong, it will throw an error.
Everything is ok otherwise.

