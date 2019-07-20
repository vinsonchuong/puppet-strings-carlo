/* @flow */
import test from 'ava'
import carlo from 'carlo'
import { openCarlo } from 'puppet-strings-carlo'
import { findElement } from 'puppet-strings'

test('instrumenting a Carlo app', async t => {
  const app = await carlo.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  app.serveOrigin('http://example.com')
  app.load('http://example.com')

  const tab = await openCarlo(app)
  const body = await findElement(tab, 'body')
  t.true(body.innerText.includes('Example Domain'))
})
