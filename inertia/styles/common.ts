import { theme } from 'antd'
import { css } from '~/utility/css'

const common = () => {
	const { useToken } = theme
	const { token } = useToken()

	return {
		standardFlex: css({
			display: 'flex',
			flexDirection: 'column',
		}),
		rowFlex: css({
			display: 'flex',
			flexDirection: 'row',
		}),

		// Width/Height
		w100: css({
			width: '100%',
		}),
		h100: css({
			height: '100%',
		}),

		// Margins
		mt16: css({
			marginTop: 16,
		}),
		mt32: css({
			marginTop: 32,
		}),
		mb16: css({
			marginBottom: 16,
		}),
		mb32: css({
			marginBottom: 32,
		}),

		// Avatar
		defaultAvatar: css({
			backgroundColor: token.colorBgBase,
			border: `1px solid ${token.colorPrimary}`,
		}),
		defaultIcon: css({
			color: token.colorPrimary,
			backgroundColor: token.colorBgBase,
		}),
	}
}

export default common
