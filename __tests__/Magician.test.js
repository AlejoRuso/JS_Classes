import Magician from '../src/Magician';

test('should create Magician correctly', () => {
  const magician = new Magician('Gandalf');
  expect(magician.name).toBe('Gandalf');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});
