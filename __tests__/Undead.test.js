import Undead from '../src/Undead';

test('should create Undead correctly', () => {
  const undead = new Undead('Necro');
  expect(undead.name).toBe('Necro');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});
