
const TAG = 'getServer';
const serverWaitTime = 5000;

interface serverReturnData {
    success: boolean
    lists: any
    lists_count: number
}
let errorReturn = {
	success: false,
	lists: null,
	lists_count: 0,
}

export const getVehicleInfo = () => new Promise<serverReturnData>((resolve, reject) => {
	let responseTimer = setTimeout(
		() => resolve(errorReturn),
		serverWaitTime
	)
	let networkOption = {
		method: 'GET',
	}
	fetch(`https://skv1-ay2.watchmile.com/api/v1/ticket/vehicle`, networkOption)
		.then((response) => response.json())
		.then((responseData) => {
			clearTimeout(responseTimer)
			resolve({
				success: true,
				lists: responseData.lists,
				lists_count: responseData.lists_count,
			});
		})
		.catch((err) => {
			clearTimeout(responseTimer)
			resolve(errorReturn)
		})
})

export const getPaymentInfo = () => new Promise<serverReturnData>((resolve, reject) => {
	let responseTimer = setTimeout(
		() => resolve(errorReturn),
		serverWaitTime
	)
	let networkOption = {
		method: 'GET',
	}
	fetch(`https://skv1-ay2.watchmile.com/api/v1/ticket/payment`, networkOption)
		.then((response) => response.json())
		.then((responseData) => {
			clearTimeout(responseTimer)
			resolve({
				success: true,
				lists: responseData.lists,
				lists_count: responseData.lists_count,
			});
		})
		.catch((err) => {
			clearTimeout(responseTimer)
			resolve(errorReturn)
		})
})
