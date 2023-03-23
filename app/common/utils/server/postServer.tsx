
const TAG = 'getServer';
const serverWaitTime = 5000;

interface serverVehicleReturnData {
	success: boolean
	uuid: string
}

interface serverPaymentReturnData {
	success: boolean
}

let errorVehicleReturn = {
	success: false,
	uuid: "",
}

let errorPaymentReturn = {
	success: false,
}

export const postVehicleInfo = (data: any) => new Promise<serverVehicleReturnData>((resolve, reject) => {
	let responseTimer = setTimeout(
		() => resolve(errorVehicleReturn),
		serverWaitTime
	)
	let networkOption = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(data)
	}
	fetch(`https://skv1-ay2.watchmile.com/api/v1/ticket/vehicle`, networkOption)
		.then((response) => response.json())
		.then((responseData) => {
			clearTimeout(responseTimer)
			responseData.success = true
			resolve(responseData);
		})
		.catch((err) => {
			clearTimeout(responseTimer)
			resolve(errorVehicleReturn)
		})
})

export const postPaymentInfo = (data: any) => new Promise<serverPaymentReturnData>((resolve, reject) => {
	let responseTimer = setTimeout(
		() => resolve(errorPaymentReturn),
		serverWaitTime
	)
	let networkOption = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(data)
	}
	fetch(`https://skv1-ay2.watchmile.com/api/v1/ticket/payment`, networkOption)
		.then((response) => response.json())
		.then((responseData) => {
			clearTimeout(responseTimer)
			resolve({ success: true, });
		})
		.catch((err) => {
			clearTimeout(responseTimer)
			resolve(errorPaymentReturn)
		})
})
