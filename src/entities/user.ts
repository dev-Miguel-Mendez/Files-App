import { randomUUID } from 'node:crypto';
import { BadRequest } from './errors.js';
import { UserPersistence } from '../application/interfaces/user-persistence.js';

export class User {
    
    constructor(
        private id: string,
		private readonly email: string,
		private readonly password: string,
        private credits: number
	) {}

	//$ Factory.
	static createUser(email: string, password: string): User {
		return new User(randomUUID(), email, password, 1000);
	}

	toObj(): UserPersistence {
		return {
			id: this.id,
			email: this.email,
			password: this.password,
            credits: this.credits
		};
	}

	addCredits(amount: number) {
		if (amount < 0) {
			throw new BadRequest('Amount must be positive');
		}
		this.credits += amount;
	}

}
