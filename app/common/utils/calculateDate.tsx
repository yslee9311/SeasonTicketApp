
export const checkShortlyBeforeExpiration = (totalInfo: any) => new Promise<any>((resolve, reject) => { // 결제 기한이 얼마 남지않은 데이터를 걸러냄
    let returnData = new Array()
    for (const value of totalInfo) {
        const dateEndOn = new Date(value.end_on);
        const dateNow = new Date();
        const diffMSec = dateEndOn.getTime() - dateNow.getTime();
        const diffHour = diffMSec / (24 * 60 * 60 * 1000);
        if (diffHour < 7) { // 티켓 종료 기간까지 7일 이내인 경우
            returnData.push(value)
        }
    }
    resolve(returnData)
})
