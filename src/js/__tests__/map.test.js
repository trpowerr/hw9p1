import { yourErr } from '../map';

test('check Err', () => {
  let received = yourErr.translate(444);
  let expected = 'Error444';
  expect(received).toBe(expected);
});


