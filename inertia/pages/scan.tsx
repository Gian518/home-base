import { Head } from '@inertiajs/react'
import { Result } from '@zxing/library'
import { getProductByCode } from '~/api'
import { RC } from '~/models/components'
import scanner from '~/utility/scanner'

const Scan: RC = () => {
	const ref = scanner({
		onResult: async (data: Result) => {
			const barCode = data.getText()
			// Check if code exists
			console.log('Scanned code:', barCode)
			const product = await getProductByCode(barCode)
			console.log('Product data:', product)
		},
	})

	return (
		<>
			<Head title='Scan Item' />

			<video ref={ref} style={{ width: '100%' }}></video>
		</>
	)
}

export default Scan
