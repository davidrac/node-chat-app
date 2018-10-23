const expect = require('expect');

const { generateMessage } = require('./message');

describe('enerateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'from';
        const text = 'text';
        const res = generateMessage(from, text);

        expect(res).toMatchObject({ from, text });
        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(typeof res.createdAt).toBe('number');
    });

});