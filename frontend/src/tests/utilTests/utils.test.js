import {checkName} from '../../utils/CommonFunctions';
import {checkDescription} from '../../utils/CommonFunctions'

test('correct name input', () => {
    const name = 'Lorenzo99';
    const check  = checkName(name);

    expect(check).toBe(true);
});

test('incorrect name whitespace input', () => {
    const name = 'Lorenzo 99';
    const check  = checkName(name);

    expect(check).toBe(false);
});

test('incorrect name special character input', () => {
    const name = 'Lorenzo_99';
    const check  = checkName(name);

    expect(check).toBe(false);
});

test('correct description input', () => {
    const description = 'I am a written description for a transaction';
    const check = checkDescription(description);

    expect(check).toBe(true);
});

test('incorrect description special character input', () => {
    const description = 'I am a written description for a transaction with a special character!!';
    const check = checkDescription(description);

    expect(check).toBe(false);
});
