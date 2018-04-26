/* eslint-env mocha */

const assert = require('assert')

const contents = require('fs').readFileSync('./test.txt')

const readFile = require('.').callback
const readFilePromise = require('.').promise
const readFileSync = require('.').sync

describe('readfile-ignore-error', () => {
  describe('callback', () => {
    it('should return file contents when the file exists', () => {
      readFile('./test.txt', 'utf8', data => assert.equal(data, contents))
    })
    it('should return undefined when the file does not exist', () => {
      readFile('./not-exist.txt', 'utf8', data => assert.equal(data, undefined))
    })
  })
  describe('promise', () => {
    it('should return file contents when the file exists', () => {
      readFilePromise('./test.txt', 'utf8')
        .then(data => assert.equal(data, contents))
    })
    it('should return undefined when the file does not exist', () => {
      readFilePromise('./not-exist.txt', 'utf8')
        .then(data => assert.equal(data, undefined))
    })
  })
  describe('sync', () => {
    it('should return file contents when the file exists', () => {
      assert.equal(readFileSync('./test.txt', 'utf8'), contents)
    })
    it('should return undefined when the file does not exist', () => {
      assert.equal(readFileSync('./not-exist.txt', 'utf8'), undefined)
    })
  })
})
