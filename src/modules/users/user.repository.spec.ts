import { User.Repository } from './user.repository';

describe('User.Repository', () => {
  it('should be defined', () => {
    expect(new User.Repository()).toBeDefined();
  });
});
