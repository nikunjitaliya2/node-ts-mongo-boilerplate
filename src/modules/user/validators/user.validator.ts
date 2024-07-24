import Joi from 'joi';

export const createUserSchema = Joi.object({
    username: Joi.string().required().messages({
        'string.base': 'Username should be a string',
        'any.required': 'Username is required',
        'string.empty': 'Username is required',
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'Email should be a string',
        'string.email': 'Valid email is required',
        'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).required().messages({
        'string.base': 'Password should be a string',
        'string.min': 'Password must be at least 6 characters long',
        'any.required': 'Password is required',
        'string.empty': 'Password is required',
    }),
});

export const getUserSchema = Joi.object({
    id: Joi.string().uuid().required().messages({
        'string.base': 'User ID should be a string',
        'string.uuid': 'Valid user ID is required',
        'any.required': 'User ID is required',
    }),
});
