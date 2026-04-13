import { theme } from 'antd'
import { css, vss } from '~/utility/css'

const account = () => {
	const { useToken } = theme
	const { token } = useToken()

	return {
		backButton: css({
			fontSize: 18,
		}),
		pageTitle: css({
			marginLeft: 5,
			marginBottom: 0,
			fontSize: 20,
			fontWeight: 'bold',
		}),
		editButton: vss({
			color: token.Button?.textTextColor,
		}, {
			editing: {
				true: {
					color: token.colorPrimary,
					backgroundColor: token.colorBgBase,
				},
			},
		}),
		avatar: css({
			marginTop: 32,
			backgroundColor: token.colorBgBase,
			border: `2px solid ${token.colorPrimary}`,
			cursor: 'pointer',
		}),
		icon: css({
			color: token.colorPrimary,
			backgroundColor: token.colorBgBase,
		}),
		editDot: vss({
			position: 'absolute',
			top: 105,
			right: 0,
			width: 30,
			height: 30,
			backgroundColor: token.colorBgBase,
			cursor: 'pointer',
		}, {
			border: {
				true: {
					border: `1px solid ${token.colorPrimary}`,
				},
			},
		}),
		fullName: css({
			marginTop: 16,
			marginBottom: 0,
			fontSize: 24,
			fontWeight: 'bold',
		}),
		username: css({
			fontSize: 16,
			color: token.colorTextTertiary,
		}),
		sectionTitle: css({
			marginTop: 16,
			color: token.colorPrimary,
			fontWeight: 600,
		}),
		input: vss({
			marginTop: 4.5,
			borderColor: '#FFFFFF0A',
		}, {
			disabled: {
				true: {
					color: '#ffffffa5',
				},
			},
		}),
		inputIcon: vss({
			marginRight: 4,
		}, {
			disabled: {
				true: {
					color: '#ffffffa5',
				},
			},
		}),
		saveButton: css({
			width: '100%',
			marginTop: 16,
		}),
		exitButton: css({
			padding: 12,
			fontSize: 16,
		}),
		notificationAlert: css({
			marginTop: 16,
		}),
	}
}

export default account
