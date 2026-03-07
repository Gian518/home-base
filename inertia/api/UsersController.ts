import axios from 'axios'
import { TRegister } from '~/models/api'

export const login = async (data: { username: string; password: string }) => {
	try {
		const res = await axios.post('/api/login', data, { withCredentials: true })
		return res.data
	} catch (error) {
		console.error('Error in UsersController.login:', error)
	}
}

export const register: TRegister = async (
	data,
) => {
	try {
		const res = await axios.post('/api/register', data, { withCredentials: true })
		return res.data
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			return error.response.data
		}
		console.error('Error in UsersController.register:', error)
	}
}

export const logout = async () => {
	try {
		const res = await axios.post('/api/logout', {}, { withCredentials: true })
		return res.data
	} catch (error) {
		console.error('Error in UsersController.logout:', error)
	}
}
