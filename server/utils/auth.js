const jwt  = require('jsonwebtoken');

const mystery = 'mystery';
const expiration = '1h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        console.log(token)

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, mystery, { maxAge: expiration });
            req.user = data;
        }
        
        catch  {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, mystery, { expiresIn: expiration });
    }
};