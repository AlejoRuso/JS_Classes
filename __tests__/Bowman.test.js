import Bowman from '../src/Bowman';

test('should create Bowman correctly', () => {
  const bowman = new Bowman('Legolas');
  expect(bowman.name).toBe('Legolas');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});