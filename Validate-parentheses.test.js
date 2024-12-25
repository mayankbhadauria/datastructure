const Validate = require('./Valid-Parentheses');

describe('Validate', () => {
    let validator;

    beforeEach(() => {
        validator = new Validate();
    });

    test('should return true for empty string', () => {
        expect(validator.isValidParentheses('')).toBe(true);
    });

    test('should return false for single character', () => {
        expect(validator.isValidParentheses('(')).toBe(false);
        expect(validator.isValidParentheses('}')).toBe(false);
        expect(validator.isValidParentheses('[')).toBe(false);
    });

    test('should return true for valid simple pairs', () => {
        expect(validator.isValidParentheses('()')).toBe(true);
        expect(validator.isValidParentheses('[]')).toBe(true);
        expect(validator.isValidParentheses('{}')).toBe(true);
    });

    test('should return true for valid nested pairs', () => {
        validator = new Validate();
        expect(validator.isValidParentheses('({[]})')).toBe(true);
        expect(validator.isValidParentheses('()[]{}')).toBe(true);
        expect(validator.isValidParentheses('{[]}')).toBe(true);
    });

    test('should return false for invalid pairs', () => {
        expect(validator.isValidParentheses('(]')).toBe(false);
        expect(validator.isValidParentheses('([)]')).toBe(false);
        expect(validator.isValidParentheses('{[})')).toBe(false);
    });

    test('should return false for unmatched opening brackets', () => {
        expect(validator.isValidParentheses('(((')).toBe(false);
        expect(validator.isValidParentheses('[[')).toBe(false);
    });

    test('should return false for unmatched closing brackets', () => {
        expect(validator.isValidParentheses(')))')).toBe(false);
        expect(validator.isValidParentheses(']]')).toBe(false);
    });

    
    
});
