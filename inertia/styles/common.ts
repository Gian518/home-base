import { css } from '~/utility/css'

const common = () => {
	return {
		container: css({
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			padding: '24px 16px',
		}),
	}
}

export default common
