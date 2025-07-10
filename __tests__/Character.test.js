import Character from '../src/Character';
import Bowman from '../src/Bowman'; // исправлено имя
import Swordsman from '../src/Swordsman';
import Magician from '../src/Magician';
import Daemon from '../src/Daemon'; // исправлено имя
import Undead from '../src/Undead';
import Zombie from '../src/Zombie';

test('Создание персонажа с корректными данными', () => {
  const character = new Character('Alice', 'Magician');
  expect(character.name).toBe('Alice');
  expect(character.type).toBe('Magician');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});

test('Ошибка при некорректном имени', () => {
  expect(() => new Character('A', 'Bowman')).toThrow();
  expect(() => new Character(123, 'Bowman')).toThrow();
});

test('Ошибка при некорректном типе', () => {
  expect(() => new Character('Bob', 'Invalid')).toThrow();
});

test('should throw error for invalid character type', () => {
  expect(() => new Character('Valid', 'InvalidType')).toThrow('Некорректный тип персонажа');
});

test('should inherit properties for all character types', () => {
  const types = [
    { class: Bowman, type: 'Bowman', attack: 25, defence: 25 },
    { class: Swordsman, type: 'Swordsman', attack: 40, defence: 10 },
    { class: Magician, type: 'Magician', attack: 10, defence: 40 },
    { class: Daemon, type: 'Daemon', attack: 10, defence: 40 },
    { class: Undead, type: 'Undead', attack: 25, defence: 25 },
    { class: Zombie, type: 'Zombie', attack: 25, defence: 25 },
  ];

  types.forEach(({ class: Class, type, attack, defence }) => {
    const char = new Class('Test');
    expect(char.type).toBe(type);
    expect(char.attack).toBe(attack);
    expect(char.defence).toBe(defence);
  });
});
