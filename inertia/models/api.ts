import User from '#models/user'

export type TRegister = (payload: {
	fullName: string
	username: string
	email: string
	password: string
	confirmPassword: string
}) => Promise<
	{ success: boolean; user?: User; errors?: Array<{ field: keyof typeof payload; message: string; rule: string }> }
>

export type TLogin = (
	payload: { username: string; password: string },
) => Promise<{ success: boolean; message?: string }>

export type TLogout = () => Promise<{ success: boolean; message?: string }>
