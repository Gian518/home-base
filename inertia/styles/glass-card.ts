import { theme } from 'antd'
import { css } from '~/utility/css'

const glassCard = () => {
	const { useToken } = theme
	const { token } = useToken()

	return {
		container: css({
			backdropFilter: 'blur(10px)',
			backgroundColor: token.colorBgBlur,
			border: '1px solid rgba(255, 255, 255, 0.1)',
			borderRadius: '16px',
		}),
	}
}

export default glassCard
