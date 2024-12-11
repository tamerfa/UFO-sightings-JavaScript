# JavaScript and DOM Manipulation

## Background

A code is needed to create a table dynamically based upon [this dataset of UFO sightings](UFO-level-1/static/js/data.js). Also, users need to be allowed to filter the table data for specific values. 

## Task

### Level 1: Automatic Table and Date Search

* Create a basic HTML web page.

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories (Optional)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

Below is an example for UFO Sightings web page filtered for triangle shaped UFO's seen in California 

![UFO Sightings web page filtered for triangle shaped UFO's seen in California](./Screenshot%20of%20filtered%20data%20of%20UFO%20Finder.png)

- - -

### Dataset

* [UFO Sightings Data](UFO-level-1/static/js/data.js)

- - -

### Copyright

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
