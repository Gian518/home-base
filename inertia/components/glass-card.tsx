import React from 'react'
import styles from '~/styles'

const GlassCard: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => {
	const { container } = styles.glassCard()

	return (
		<div style={{ ...container, ...style }}>
			{children}
		</div>
	)
}

export default GlassCard
