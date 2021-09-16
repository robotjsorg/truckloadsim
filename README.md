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
 * Run `yarn run deploy` to deploy to the web via your linked static Github page or personal website.

###### For development
 * Run `npm install eslint-plugin-react@latest --save-dev` to fix a versioning bug.