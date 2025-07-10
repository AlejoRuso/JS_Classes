import Daemon from '../src/Daemon';

test('should create Daemon correctly', () => {
  const daemon = new Daemon('Balrog');
  expect(daemon.name).toBe('Balrog');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});