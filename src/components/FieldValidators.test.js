import * as fieldValidators from './FieldValidators';

it('should validate required with undefined', () => {
  expect(fieldValidators.required(undefined)).toEqual('Required');
});

it('should validate required with null', () => {
  expect(fieldValidators.required(null)).toEqual('Required');
});

it('should validate required with false', () => {
  expect(fieldValidators.required(false)).toEqual('Required');
});

it('should validate required with decent value', () => {
  expect(fieldValidators.required('hi')).toEqual(undefined);
});

xit('should validate maxLength no value', () => {
  expect(fieldValidators.maxLength(10)).toEqual(undefined);
});

xit('should validate maxLength good value', () => {
  expect(fieldValidators.maxLength(10, 9)).toEqual(undefined);
});

xit('should validate maxLength bad value', () => {
  expect(fieldValidators.maxLength(10, 11)).toEqual(
    'Must be 10 characters or less'
  );
});

xit('should validate minLength no value', () => {
  expect(fieldValidators.minLength(10)).toEqual(undefined);
});

xit('should validate minLength good value', () => {
  expect(fieldValidators.minLength(10, 11)).toEqual(undefined);
});

xit('should validate minLength bad value', () => {
  expect(fieldValidators.minLength(10, 9)).toEqual(
    'Must be 10 characters or less'
  );
});

it('should validate number - no value', () => {
  expect(fieldValidators.number(undefined)).toEqual(undefined);
});

it('should validate number - good value', () => {
  expect(fieldValidators.number(10)).toEqual(undefined);
});

it('should validate number - bad value', () => {
  expect(fieldValidators.number('hi')).toEqual('Must be a number');
});

xit('should validate minValue - no value', () => {
  expect(fieldValidators.minValue(1, undefined)).toEqual(undefined);
});

xit('should validate minValue - good value', () => {
  expect(fieldValidators.minValue(10, 9)).toEqual(undefined);
});

xit('should validate minValue - bad value', () => {
  expect(fieldValidators.minValue(10, 11)).toEqual('Must be at least 10');
});

it('should validate email - no value', () => {
  expect(fieldValidators.email(undefined)).toEqual(undefined);
});

it('should validate email - good value', () => {
  expect(fieldValidators.email('erickizaki@gmail.com')).toEqual(undefined);
});

it('should validate email - bad value', () => {
  expect(fieldValidators.email('erickizaki')).toEqual('Invalid email address');
});

it('should validate alphaNumeric - no value', () => {
  expect(fieldValidators.alphaNumeric(undefined)).toEqual(undefined);
});

it('should validate alphaNumeric - good value', () => {
  expect(fieldValidators.alphaNumeric(12)).toEqual(undefined);
});

it('should validate alphaNumeric - bad value', () => {
  expect(fieldValidators.alphaNumeric('&*&*')).toEqual(
    'Only alphanumeric characters'
  );
});

it('should validate phoneNumber - no value', () => {
  expect(fieldValidators.phoneNumber(undefined)).toEqual(undefined);
});

it('should validate phoneNumber - good value', () => {
  expect(fieldValidators.phoneNumber(4029110800)).toEqual(undefined);
});

it('should validate phoneNumber - bad value', () => {
  expect(fieldValidators.phoneNumber('&*&*')).toEqual(
    'Invalid phone number, must be 10 digits'
  );
});
