# Front end programming task #

This web-based application creates a simple interface in front of your pre-defined company metrics. Using this interface you can easily view your company metrics either individually or in aggregate. You can also analyze how your company compares with competitors in regards to any of these metrics.

To run locally, you will need to:

1. Install NodeJS from [https://nodejs.org/](https://nodejs.org/).

2. Open a Command Prompt / Terminal and go to the *top* directory of your repository & type: `npm install` or `yarn install`

3. From the same directory type: `npm run start` to serve the project using Express. To build and serve a production version of the application type: `npm run build:serve`. Other commands can be found in the **_package.json_** file.


The repository contains the following folders:

**_app_**

All source files for this web-application are located in this folder.

**_config_**

Contains all Webpack configuration for both development and production. These files are in turned called by **_webpack.config.js_**

**_data_**

All the data required for UI, Charts, etc. can be found in JSON format inside this folder.
