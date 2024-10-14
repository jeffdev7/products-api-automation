# Cypress Automated Test Suite
## Overview
<p> This repository contains an automated test suite using Cypress. The purpose of these tests is to verify the functionality of the <a href="https://github.com/jeffdev7/products-api">product-api</a> endpoints to ensure they meet the expected behaviors.</p>

### Prerequisites

<ul>
  <li><strong>Node.js</strong> and <strong>npm</strong> (Ensure you have Node.js v12 or above)</li>
  <li><strong>Cypress</strong>: Installed as a dev dependency in this project</li>
</ul>

### Environment Configuration
<p>Create a file cypress.env.json in the root and it should look like this:</p>
<pre><code>
{
  "url_api": "https://api.yourservice.com"
}
</code></pre>


### Running Tests
You can run the Cypress tests in two modes:

<ul>
  <li><strong>Cypress Test Runner</strong> for debugging and developing tests</li>
        <ul>            
           <li><strong>Command: </strong>npx cypress open</li>
        </ul>
  <li><strong>Headless Mode</strong> for CI/CD or fast local test runs</li>
         <ul>            
           <li><strong>Command: </strong>npx cypress run</li>
        </ul>
</ul>


