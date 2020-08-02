import React from 'react'

export default ({ children, scripts, styles }) => (
  <html>
    <head>
      <base href='/' />
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes'
      />
      <title>Diamond Sweeper</title>
      {styles.map(item => (<link key={item} href={item} type='text/css' rel='stylesheet' />))}
    </head>
    <body>
      <noscript>
      You need to enable JavaScript to run this app.
      </noscript>
      <div id='root' dangerouslySetInnerHTML={{ __html: children }} />
      {scripts.map(item => (<script key={item} src={item} />))}
    </body>
  </html>
)
