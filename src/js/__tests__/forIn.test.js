import { orderByProps } from '../forIn';

let expected = 0;
let received = 0;

test('should introduce correct healthpoint', () => {
  received = healthPoint(70);
  if (unit.health >= 50) {
    expected = 'healthy';
    expect(received).toBe(expected);
  }
});

test('should introduce correct healthpoint', () => {
  received = healthPoint(10);
  if (unit.health <= 15) {
    expected = 'critical';
    expect(received).toBe(expected);
  }
});

test('should introduce correct healthpoint', () => {
  received = healthPoint(40);
  if (unit.health < 50 & unit.health > 15) {
    expected = 'wounded';
    expect(received).toBe(expected);
  }
});