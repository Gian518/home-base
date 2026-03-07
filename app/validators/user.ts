import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
	vine.object({
		fullName: vine.string(),
		email: vine.string().email().unique({ table: 'users', column: 'email' }),
		username: vine.string().minLength(3).maxLength(50).unique({ table: 'users', column: 'username' }),
		password: vine.string().minLength(8),
		confirmPassword: vine.string().minLength(8).sameAs('password'),
	}),
)
