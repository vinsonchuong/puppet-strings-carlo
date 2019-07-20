/* @flow */
import test from 'ava'
import greeting from 'puppet-strings-carlo'

test('exporting "Hello World!"', t => {
  t.is(greeting, 'Hello World!')
})
