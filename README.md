# Moonshot

Moonshot is an Angular 8 based template for GDGs to build their Chapter Website.
<img width="100%" src="https://i.imgur.com/D5lZjDt.jpg" alt="Moonshot"/>

## Table of contents

- [Overview](#overview-of-moonshot)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Hosting in Firebase](#hosting-in-firebase)
- [Bugs / Feature Requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Creators](#creators)
- [Template Usage](#template-usage)
- [Copyright and License](#copyright-and-license)

## Overview of Moonshot

This template was created to help developer communities save time in website construction time and spend more time on hacking ways to engage with their communities.

The development of this template was done by the team of GDG Cloud Coimbatore, GDG Coimbatore and WTM Coimbatore.

Stack / Good-to-Have(s)     | Description
----------------------------|---------------------------------------------------------------------------------------
Angular 8                   | Latest Version of Angular Project
NG Zorro 7                  | Modern UI Components from NG Zorro Project
Bootstrap 4                 | Latest Structured and Stylish CSS
JSON Structure              | Easy to Edit Template Structure
Progressive Web App         | Optimized for Speed and Offline Access

## Folder Structure

Understand the Folder Structure of the project. The project contains the following main files and folders which you needs your attention. You are advised to _skip_ editing other files and folders as it can end up putting you in a confused situation if any errors pop up later.

 ```
  - dist
  - src
    |- app
    |- assets
    |  |- json
    |  |  |- basics.json
    |  |  |- partners.json
    |  |  |- sponsors.json
    |  |  |- team.json
    |  |- icons
    |  |  |- logo.png
    |- index.html
  - angular.json
  - package.json
 ```
 
## Prerequisites

1. Verify that you are running node 10.16.0 by running `node -v` in a terminal/console window. Older versions produce errors, but newer versions should be fine - [Download Node.js].(https://nodejs.org/en/download/)
1. Download your GDG / GDG Cloud Chapter Logo from [GDG Logo Generator](https://gdg-chapter-lockup-generator.appspot.com). Rename the downloaded image as `logo.png` and paste it inside `icons` folder by replacing the previous image present (Refer Project Structure).
1. You'll need a `Meetup API Key` to display the upcoming events in your website. To get a key, visit [Meetup Developer Portal](https://secure.meetup.com/meetup_api/key/) to grab one. You will need it to be applied at the Getting Started stage of the project.
1. You'll also need a `Google API Key` from GCP to load/embed Google Maps in your website. Similar to Meetup, you'll need to visit [Google Cloud Platform](https://developers.google.com/maps/documentation/javascript/get-api-key) to get an API Key. Make sure you have enabled [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/start) is enabled in your GCP project.
1. To edit the files, we prefer you use Visual Studio Code as it is easy to navigate and contains an in-built terminal to run commands. Download Visual Studio Code or you may use your preferred code editor.

## Getting Started

1. Fork this repository and clone it in your local system.
1. In your terminal/console, navigate to the folder where `package.json` is present _(Refer Folder Structure)_.
1. Run `npm install` or `yarn install` to install all the node_modules required to run this project.
1. Open a code editor of your choice and open the `basics.json` file _(Refer Folder Structure)_.
1. Edit the values of `name`, `email`, `mobile`, `meetup-slug`, `meetup-api-key` (Refer prerequisites for help) and social media links.
1. Similarly, open the `sponsors.json` file _(Refer Folder Structure)_ and add sponsors if you wish to. There is a field called as `level` for each sponsor which carries the values such as `Gold`, `Silver` and `Bronze`. These values will change the background color of the sponsor image to highlight the respective colors. If you don't want to apply these colors, feel free to give any other value. You can paste the images of the sponsors in the images folder and change the `logo` field in `sponsors.json` file with the path of the image (eg. assets/images/gdg.png).
1. Do it again for `partners.json` file _(Refer Folder Structure)_. One difference is that it does not contain the `level` field as the previous file.
1. Next, open the `team.json` file _(Refer Folder Structure)_. It contains three levels of team structure - `organizers`, `core team` and `volunteers`. The `name` and `role` fields are mandatory while other fields such as `image` and `social media` links are optional. We support 4 social media link types - `twitter`, `linkedin`, `github` and any other `link` such as for blog. Paste the images of your team in the images/team folder under assets similarly as done for addition of sponsors and partners. 1:1 image is preferred else the image will be distorted.
1. We already change the `site title`, `meta data` such as description of the site dynamically during load based on the chapter name and description from the `basics.json` file. But, it is advised to change it in the `index.html` file _(Refer Folder Structure)_ to improve the SEO of your website.
1. The data changing phase of this setup is now complete.
1. Time to test if the changes are done in a proper way locally. To run the project, run `ng serve` command from the folder where `angular.json` file _(Refer Folder Structure)_ is present. It takes few moments to compile and you can check the website by visiting [http://localhost:4200](http://localhost:4200).
1. If you are seeing the changes reflected in the site, you are ready to publish it. If you face any issues, feel free to ping us via Twitter [@GDGCloudCBE](https://twitter.com/GDGCloudCBE) and we'll be happy to help.
1. Hit `CTRL+C` to stop running the project.
1. Once you have completed all the steps, run `ng build --prod` to build the production ready files. The terminal will generate the output in a folder called `dist/Moonshot` _(Refer Folder Structure)_. If you open that folder, there will be a set of files along with index.html. Open the index.html to verify if the site runs properly. You can now host the files either in Firebase Hosting for free or through any other hosting as per your wish.

Commands                    | Description
----------------------------|---------------------------------------------------------------------------------------
npm install                 | Install the node-modules mentioned in the package.json file in the directory
ng serve                    | Build the app for development in localhost
ng build --prod             | Build the app for production

## Hosting in Firebase

1. Create a new Project in [Firebase](https://console.firebase.google.com) or you may use the exsisting project for your community if you have previously created.
1. Once done, you need to setup environment to deploy the website to Firebase Hosting. Install Firebase CLI by running the command `npm i -g firebase-tools`.
1. Create a new [Firebase Project](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/) in your terminal by running the command `firebase login`.
1. Navigate to the folder where `package.json` _(Refer Folder Structure)_ is present.
1. To connect to the Firebase Project, run the command `firebase init`.
1. Select the project you created in the Firebase Console by using the arrow keys.
1. Select the `Firebase Hosting` by using Spacebar and arrow key and hit enter. Don't select other services as it's not necessary.
1. Select `No` for Single Page Web App.
1. For the folder delete the previously filled value `public` and type `dist/Moonshot`.
1. There will be a file created `firebase.json` file. Open and paste the following data to set `cache time-out` values.
    ```js
        {
            "hosting": {
                "public": "dist/Moonshot",
                "rewrites": [ {
                    "source": "**",
                    "destination": "/index.html"
                } ],
                "ignore": [
                    "firebase.json",
                    "**/.*",
                    "**/node_modules/**"
                ],
                "headers": [ {
                    "source": "**/*.@(eot|otf|ttf|ttc|woff|font.css)",
                    "headers": [ {
                      "key": "Access-Control-Allow-Origin",
                      "value": "*"
                    } ]
                  }, {
                    "source": "**/*.@(jpg|jpeg|gif|png|woff)",
                    "headers": [ {
                       "key": "Cache-Control",
                       "value": "max-age=31536000"
                    } ]
                  }, {
                    "source": "404.html",
                    "headers": [ {
                      "key": "Cache-Control",
                      "value": "max-age=300"
                    } ]
                } ]
            }
        }
    ```
1. Run `firebase deploy` and viola! Your website is now live and take a moment to appreciate yourself!
1. In case you wanted to deploy to an actual domain rather than appsot subdomain, refer to this [Firebase Hosting Guide](https://firebase.google.com/docs/hosting/custom-domain) to setup.

## Bugs and Feature Requests

Have a bug or a feature request? If your problem or idea is not addressed yet, [please open a new issue](https://github.com/gdg-cloud-coimbatore/Moonshot/issues/new).

## Contributing

* Please fork and commit your changes and give us a PR.
* We'll make sure your efforts are given a proper recognition in turn.

## Creators

- <a href="https://gdgcloudcbe.com" target="_blank">GDG Cloud Coimbatore</a>
- <a href="https://gdgcbe.com" target="_blank">GDG Coimbatore</a>

## Template Usage

- <a href="https://gdgcloudcbe.com" target="_blank">GDG Cloud Coimbatore</a>
- <a href="https://gdgcbe.com" target="_blank">GDG Coimbatore</a>

## Copyright and License

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

This project is licenced under Mozilla Public License 2.0.
Please read the clauses carefully before you use it for personal or commercial purposes.

Thanks to all supporters and contributors to make this available for everyone.
If you have any suggesstions or feedbacks on the code, please ping GDG Cloud Coimbatore team for quick assistance.
