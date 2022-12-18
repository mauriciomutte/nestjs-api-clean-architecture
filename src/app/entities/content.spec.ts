import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification conentet', () => {
    const content = new Content('Hello world!');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('1234')).toThrowError();
  });

  it('should not be able to create a notification content with more than 255 characters', () => {
    expect(() => new Content('a'.repeat(256))).toThrowError();
  });
});
