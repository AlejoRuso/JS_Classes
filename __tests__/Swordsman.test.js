import Swordsman from '../src/Swordsman';

test('should create Swordsman correctly', () => {
  const swordsman = new Swordsman('Aragorn');
  expect(swordsman.name).toBe('Aragorn');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});
