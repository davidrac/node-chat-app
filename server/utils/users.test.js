const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Mike',
            room: 'Node course'
        },{
            id: 2,
            name: 'Jen',
            room: 'React course'
        },{
            id: 3,
            name: 'Julie',
            room: 'Node course'
        }];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'David',
            room: 'The office fans'
        };

        const resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const user = users.users[0];
        const userId = user.id;
        const resUser = users.removeUser(userId);

        expect(users.users).not.toContain(user);
        expect(resUser).toBe(user);
    });

    it('should not remove user', () => {
        const initialUserNumber = users.users.length;
        const resUser = users.removeUser(5);

        expect(users.users.length).toEqual(initialUserNumber);
        expect(resUser).toBeUndefined();
    });

    it('should find user', () => {
        const user = users.users[2];
        const userId = user.id;
        const resUser = users.getUser(userId);

        expect(resUser).toBe(user);
    });

    it('should not remove user', () => {
        const resUser = users.getUser(5);

        expect(resUser).toBeUndefined();
    });

    it ('should return name for node course', () => {
        const userList = users.getUserList('Node course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it ('should return name for react course', () => {
        const userList = users.getUserList('React course');
        expect(userList).toEqual(['Jen']);
    });
});