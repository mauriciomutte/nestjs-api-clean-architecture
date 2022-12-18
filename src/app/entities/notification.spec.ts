import { Content } from './content';
import { Notification } from './notification';

describe('Notificationn', () => {
  it('should create an instance', () => {
    const notification = new Notification({
      content: new Content('Você tem uma nova mensagem'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
