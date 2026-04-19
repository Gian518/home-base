export const getProductByCode = async (code: string) => {
	try {
		const res = await fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
		const data = await res.json()
		if (data.status === 1) {
			return data.product
		} else {
			throw new Error('Product not found')
		}
	} catch (error) {
		console.error('Error fetching product:', error)
		throw error
	}
}
