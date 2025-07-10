import Zombie from '../src/Zombie';

test('should create Zombie correctly', () => {
  const zombie = new Zombie('Walker');
  expect(zombie.name).toBe('Walker');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});
