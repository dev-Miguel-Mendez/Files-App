import { randomUUID } from 'node:crypto';
import { BadRequest } from './errors.js';

export class User {
	private credits: number = 1000;

	constructor(
		private id: string,
		private readonly email: string,
		private readonly password: string
	) {}

	//$ Factory.
	static createUser(email: string, password: string): User {
		return new User(randomUUID(), email, password);
	}

	toObj() {
		return {
			id: this.id,
			email: this.email,
			password: this.password,
		};
	}

	addCredits(amount: number) {
		if (amount < 0) {
			throw new BadRequest('Amount must be positive');
		}
		this.credits += amount;
	}

}
