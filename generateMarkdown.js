// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
## Licensing:
[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
   ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
${data.usage}
## Contributions:
${data.contribution}
## Tests:
${data.tests}
## Created by:
${data.username}
${data.email}
`;

}

module.exports = generateMarkdown;
