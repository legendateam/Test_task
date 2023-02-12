// eslint-disable-next-line import/no-extraneous-dependencies
import argon2 from 'argon2';

class HashService {
    public async hash(password: string): Promise<string> {
        return argon2.hash(password);
    }

    public async verify(hashedPassword: string, password: string): Promise<boolean> {
        return argon2.verify(hashedPassword, password);
    }
}

export const hashService = new HashService();
