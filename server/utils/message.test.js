const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
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

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        const from = 'from';
        const lat = 11;
        const lng = 22;
        const url = `https://www.google.com/maps?q=${lat},${lng}`;

        const res = generateLocationMessage(from, lat, lng);

        expect(res).toMatchObject({ from, url });
        expect(typeof res.createdAt).toBe('number');
    });
});