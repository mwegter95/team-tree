const Employee = require('../lib/Employee')


test('creates an employee object', () => {
    
    const employee = new Employee('Trinity', 111, 'trinity@matrixresurrections.com');

    expect(employee.name).toBe('Trinity');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    console.log(employee);
})