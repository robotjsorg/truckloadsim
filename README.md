# truckloadsim
Robotic simulation of loading and unloading a truck.

###### Specifications as of 09/15/2021
 * Standard truck interior sizes
 * Standard packing box sizes
 * Parameterize the availability of boxes and types of boxes
 * Measure packing density
 * Display packing speed based on parameterized acceleration limits

## Requirements
 * Node.js (see .nvmrc for correct version).
 * Yarn

## Setup
 * Clone this repo.
 * Run `yarn` to build locally.
 * Run `yarn start` to run and open a localhost brower to play in. You can also access via other devices on your local network.
   * localhost: http://localhost:3000/truckloadsim
   * LAN: http://10.0.1.39:3000/truckloadsim

###### For development
 * Delete the leading forward slashes "/" in the css and js script src tags to avoid issues.
 * Run `yarn run deploy` to deploy to the web via your linked static Github page or personal website.
 * If `gh-pages -d build` step fails, manually copy the build folder to the `gh-pages` branch.
 * Run `rm -rf ./build ./node_modules yarn.lock package-lock.json` to cleanup.