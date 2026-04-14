import { Typography } from 'antd'
import React from 'react'
import styles from '~/styles'
import { cx } from '~/utility/css'

interface IGlassCard {
	title?: string
	children: React.ReactNode
	containerStyle?: React.CSSProperties
	innerStyle?: React.CSSProperties
	onClick?: () => void
}

const GlassCard: React.FC<IGlassCard> = ({ title, children, containerStyle, innerStyle, onClick }) => {
	/* STYLES */
	const gs = styles.glassCard()

	const Tag = onClick ? 'button' : 'div'

	return (
		<div
			style={containerStyle}
		>
			{title && <Typography.Title style={gs.heading}>{title}</Typography.Title>}
			<Tag
				style={cx(gs.innerContainer, innerStyle)}
				{...(onClick && {
					onClick: onClick,
					type: 'button',
				})}
			>
				{children}
			</Tag>
		</div>
	)
}

export default GlassCard
