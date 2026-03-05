import { theme } from 'antd'
import { css } from '~/utility/css'

const account = () => {
	const { useToken } = theme
	const { token } = useToken()

	return {
		pageTitle: css({
			fontSize: 20,
			fontWeight: 'bold',
		}),
		avatar: css({
			marginTop: 32,
			padding: 3,
			backgroundColor: token.colorBgBase,
			border: `2px solid ${token.colorPrimary}`,
		}),
		icon: css({
			color: token.colorPrimary,
			backgroundColor: token.colorBgBase,
		}),
		username: css({
			fontSize: 24,
			fontWeight: 'bold',
		}),
		email: css({
			fontSize: 16,
			color: token.colorTextTertiary,
		}),
	}
}

export default account
