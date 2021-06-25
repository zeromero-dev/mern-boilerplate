const Html = ({ body }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
      <link rel="stylesheet" href="/assets/css/style.css" type="text/css">
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/assets/js/main.bundle.js"></script>
    </body>
  </html>
`
}

export default Html
