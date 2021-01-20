// function to generate markdown for README
function generateMarkdown(res) {
  return `# ${res.title} 
  
  ### description
  ${res.description}

  ## Table of Contents
    1. [Installation](#installation)
    2. [License](#license)
    3. [Test](#test)
    4. [Usage](#usage)
    5. [Contributors](#contributors)
    6. [About](#about)
    7. [Link to Application](#link)
    8. [Screenshot](#screenshot)


  
  ### Installation <a name="installation"></a>
  ${res.installation}
  
  ### License <a name="license"></a>
  ${res.license}
  
  ### Test <a name="test"></a>
  ${res.test}
  
  ### Usage <a name="usage"></a>
  ${res.usage}
  
  ### Contributors <a name="contributors"></a>
  ${res.contributors}
  
  ### About <a name="license"></a>
  ${res.userName}
  ${res.email}
  
  ## Link to Deployed Application:
  ### [${data.URLName}](${data.URL}) <a name="link"></a>
  ## ![${data.altText}](${data.photoFile}) <a name="screenshot"></a>

`;
}

module.exports = generateMarkdown;
