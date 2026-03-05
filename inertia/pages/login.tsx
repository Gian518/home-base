import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Head, router, useForm } from '@inertiajs/react'
import { Button, Col, Input, message, Row, Segmented, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { login } from '~/api/UsersController'
import logo from '~/assets/logo.svg'
import GlassCard from '~/components/glass-card'
import styles from '~/styles'
import useI18n from '~/utility/i18n'

const Login = () => {
	/* STATES */
	const [fakeHandle, setFakeHandle] = useState('')

	/* HOOKS */
	const { t } = useI18n()
	const { data, setData } = useForm({
		username: '',
		password: '',
	})
	const [messageApi, contextHolder] = message.useMessage()
	const { container } = styles.common()
	const {
		glassContainer,
		heading,
		subheading,
		tabsContainer,
		tabsButton,
		tabsText,
		form,
		icon,
		input,
		forgotPassword,
		loginButton,
	} = styles.login()

	/* BOOT */
	useEffect(() => {
		/**
		 * This is a fun little feature that randomly changes
		 * the placeholder of the username input field
		 * to a fake handle every 2 seconds.
		 */
		const fakeHandleRandomizer = () => {
			const fakeHandles = [
				t('account.login.fakehandle1'),
				t('account.login.fakehandle2'),
				t('account.login.fakehandle3'),
				t('account.login.fakehandle4'),
				t('account.login.fakehandle5'),
			]
			const randomHandle = fakeHandles[Math.floor(Math.random() * fakeHandles.length)]
			setFakeHandle(randomHandle)
		}

		fakeHandleRandomizer()

		const fakeHandleInterval = setInterval(() => {
			fakeHandleRandomizer()
		}, 2000)

		return () => clearInterval(fakeHandleInterval)
	}, [])

	/**
	 * Handles the login process by sending the username and password
	 */
	const handleLogin = async () => {
		try {
			const response = await login(data)
			console.log('Login response:', response)
			if (response?.success) {
				router.visit('/', { data: { login: true } })
			} else {
				messageApi.open({
					type: 'error',
					content: t('account.login.error'),
				})
				console.error('Login failed:', response?.message)
			}
		} catch (error) {
			console.error('Error during login:', error)
		}
	}

	return (
		<>
			{contextHolder}
			<Head title='Login' />

			<Row style={container}>
				<Col md={{ span: 12, offset: 6 }}>
					<GlassCard style={glassContainer}>
						{/* Logo */}
						<img src={logo} alt='Logo' width={96} />
						{/* Title */}
						<h1 style={heading}>{t('generic.appname')}</h1>
						{/* Subtitle */}
						<p style={subheading}>{t('account.login.motto')}</p>

						<div style={form}>
							{/* Login/Registration tabs */}
							<Segmented
								options={[
									{ label: t('account.login.login'), value: 'login' },
									{ label: t('account.register.signup'), value: 'register' },
								]}
								styles={{ root: tabsContainer, item: tabsButton, label: tabsText }}
							/>
							{/* Username */}
							<Typography.Text>
								{t('account.login.username')}
							</Typography.Text>
							<Input
								placeholder={fakeHandle}
								variant='filled'
								style={input}
								prefix={<UserOutlined style={icon} height={'17px'} />}
								onChange={e => setData('username', e.target.value)}
							/>

							{/* Password */}
							<Typography.Text style={{ marginTop: 16 }}>
								{t('account.login.password')}
							</Typography.Text>
							<Input.Password
								placeholder='••••••••'
								variant='filled'
								style={input}
								prefix={<LockOutlined style={icon} height={'17px'} />}
								onChange={e => setData('password', e.target.value)}
								onPressEnter={handleLogin}
							/>

							{/* Forgot password */}
							<Button type='link' style={forgotPassword}>
								{t('account.login.forgotpassword')}
							</Button>

							{/* Login */}
							<Button
								type='primary'
								size='large'
								style={loginButton}
								onClick={handleLogin}
								disabled={!data.username || !data.password}
							>
								{t('account.login.login')}
							</Button>
						</div>
					</GlassCard>
				</Col>
			</Row>
		</>
	)
}

export default Login
