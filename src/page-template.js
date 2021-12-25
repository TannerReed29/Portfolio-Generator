const generatePage = (myname, github) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale1.0">
        <meta http-eqiuv="X-UA Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
      </head>
      
      <body>
        <h1>${myname}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
      </body>
      </html>
      `;
  };

  module.exports = generatePage;