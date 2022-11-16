// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

/**
 * Testing isPhoneNumber()
 */
test('858-374-1234 is a phone number', () => {
  expect(functions.isPhoneNumber('858-374-1234')).toBe(true);
});

test('818-324-1234 is a phone number', () => {
  expect(functions.isPhoneNumber('858-374-1234')).toBe(true);
});

test('818324+1234 is not a phone number', () => {
  expect(functions.isPhoneNumber('818324+1234')).toBe(false);
});

test('8183241234 is not a phone number', () => {
  expect(functions.isPhoneNumber('8183241234')).toBe(false);
});

/**
 * Testing isEmail()
 */
 test('abcd@gmail.com is an email', () => {
  expect(functions.isEmail('abcd@gmail.com')).toBe(true);
});

test('abcd1234@gmail.com is an email', () => {
  expect(functions.isEmail('abcd1234@gmail.com')).toBe(true);
});

test('abcd1234@ is not an email', () => {
  expect(functions.isEmail('abcd1234@')).toBe(false);
});

test('abcd1234@G.a is not an email', () => {
  expect(functions.isEmail('abcd1234@G.a')).toBe(false);
});

/**
 * Testing isStrongPassword()
 */
test('Abcd12345689 is a strong password', () => {
  expect(functions.isStrongPassword('Abcd12345689')).toBe(true);
});

test('Abcd12345689_ is a strong password', () => {
  expect(functions.isStrongPassword('Abcd12345689_')).toBe(true);
});

test('1234 is not a strong password', () => {
  expect(functions.isStrongPassword('1234')).toBe(false);
});

test('abcd is not a strong password', () => {
  expect(functions.isStrongPassword('abc')).toBe(false);
});

/**
 * Testing isDate()
 */
test('01/24/1990 is a date', () => {
  expect(functions.isDate('01/24/1990')).toBe(true);
});

test('12/24/1990 is a date', () => {
  expect(functions.isDate('12/24/1990')).toBe(true);
});

test('13/24/1990 is not a date', () => {
  expect(functions.isDate('13-24/1990')).toBe(false);
});

test('02/50/1990 is not a date', () => {
  expect(functions.isDate('02-50/1990')).toBe(false);
});

/**
 * Testing isHexColor()
 */
test('aaa is a HexColor', () => {
  expect(functions.isHexColor('aaa')).toBe(true);
});

test('AABFDF is a HexColor', () => {
  expect(functions.isHexColor('AABFDF')).toBe(true);
});

test('GGG is not a HexColor', () => {
  expect(functions.isHexColor('GGG')).toBe(false);
});

test('GHIKJL is not a HexColor', () => {
  expect(functions.isHexColor('GHIKJL')).toBe(false);
});