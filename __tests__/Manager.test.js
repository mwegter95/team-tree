const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Mike', 1, "mike@bigoffice.com", 10);
    console.log(manager);

    expect(manager.name).toBe('Mike');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
})