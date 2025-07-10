import Character from '../src/Character';
import Bowman from '../src/Bowman';
import Swordsman from '../src/Swordsman';
import Magician from '../src/Magician';
import Daemon from '../src/Daemon';
import Undead from '../src/Undead';
import Zombie from '../src/Zombie';

test('should throw error for invalid character type', () => {
  expect(() => new Character('Valid', 'InvalidType')).toThrow('Некорректный тип персонажа');
});

test('Ошибка при некорректном имени (<2 символа)', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Ошибка при слишком длинном имени (>10 символов)', () => {
  expect(() => new Character('VeryLongName123', 'Magician')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Ошибка при нестроковом имени', () => {
  expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Ошибка при некорректном типе', () => {
  expect(() => new Character('Valid', 'InvalidType')).toThrow('Некорректный тип персонажа');
});


test('should inherit properties for all character types', () => {
  const types = [
    { class: Bowman, type: 'Bowman', attack: 25, defence: 25 },
    { class: Swordsman, type: 'Swordsman', attack: 40, defence: 10 },
    { class: Magician, type: 'Magician', attack: 10, defence: 40 },
    { class: Daemon, type: 'Daemon', attack: 10, defence: 40 },
    { class: Undead, type: 'Undead', attack: 25, defence: 25 },
    { class: Zombie, type: 'Zombie', attack: 40, defence: 10 },
  ];

  types.forEach(({ class: Class, type, attack, defence }) => {
    const char = new Class('Test');
    expect(char.type).toBe(type);
    expect(char.attack).toBe(attack);
    expect(char.defence).toBe(defence);
  });
});