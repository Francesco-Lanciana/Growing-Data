# Front end programming task #

This web-based application creates a simple interface in front of your pre-defined company metrics. Using this interface you can easily view your company metrics either individually or in aggregate. You can also analyze how your company compares with competitors in regards to any of these metrics.

To run locally, you will need to:

1. Install nodeJS from [https://nodejs.org/](https://nodejs.org/).

2. Open a Command Prompt / Terminal and go to the *top* directory of your repository & type: `npm install` or `yarn install`

3. From the same directory type: `npm run build` to build the project using webpack and then: `npm run start` to serve the built project using Express.


The repository contains the following folders:

**_app_**

All source files for this web-application are located in this folder.

**_config_**

Contains all webpack configuration for both development and production. These files are in turned called by **_webpack.config.js_**

**_data_**

All the data required for UI, Charts, etc. can be found in JSON format inside this folder.
