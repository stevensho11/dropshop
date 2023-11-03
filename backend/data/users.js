import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin guy',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: 'comedian guy',
        email: 'comedian@email.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },
    {
        name: 'funny guy',
        email: 'funnyguy@email.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },
]

export default users;