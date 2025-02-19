import * as bycrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bycrypt.genSalt();
    return bycrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return bycrypt.compare(password, hash);
};