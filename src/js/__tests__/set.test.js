import { newTeam, Demon, Zombie, Undead } from '../set';

function checkAdd() {
    newTeam.add(Demon);
    const finalPersonArr = newTeam.toArray();
    for (let value of finalPersonArr) {
        if (value instanceof Demon) {
            return true
        }
    }
}

function checkAddAll() {
    newTeam.addAll(Demon, Zombie, Undead);
    const finalPersonArr = newTeam.toArray();
    for (let value of finalPersonArr) {
        if (value instanceof Demon && Zombie && Undead) {
            return true
        }
    }
}

test('check ADD', () => {
  let received = checkAdd();
  let expected = true;
  expect(received).toBe(expected);
});

test('check ADD-ALL', () => {
    let received = checkAddAll();
    let expected = true;
    expect(received).toBe(expected);
  });



