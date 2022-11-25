const {queryString} = require('./queryString.js')

describe('Object to query string', () => {
    it('should create a valid query string when an object is called')
        const obj = {
            name: 'Graziela',
            profession: 'Trainee'
        };
        expect(queryString(obj)).toBe(
            'name=Graziela&profession=Trainee'
        );
});