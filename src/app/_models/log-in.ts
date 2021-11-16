export class LogIn {
}

export class user{
    id?: number;
    email: string;
    password?: string;
    created_at?: Date;
    updated_at?: Date;
    owner_type?: string;
    owner_id?: number;
}

export class LoginDTO{
    access_token: string;
    user: user;
    account: string;
}
