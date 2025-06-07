import { subtract } from './subtract';
import { describe, expect, it } from 'vitest';

describe('subtract', () => {
	it('subtracts two numbers', () => {
		expect(subtract(3, 2)).toBe(1);
	});
});
