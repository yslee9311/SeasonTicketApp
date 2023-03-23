
export const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const checkCarNumberString = (carNum: string) => new Promise<string>((resolve, reject) => {
    let isNumeric = (data: string): boolean => { return !isNaN(Number(data)) }
    let nonSpaceString = carNum.replace(/ /gi, ''); // 중간에 띄어쓰기를 한 경우 해당 띄어쓰기 제거
    let correctCarNum = true;
    if (nonSpaceString.length >= 7 && nonSpaceString.length <= 8) {  // 7자리 이상이어야 됨.
        for (let i = nonSpaceString.length; i > 0; i--) { // 뒤에서부터
            if (i == nonSpaceString.length - 4) {  // 뒤에서 5번째 자리의 경우
                if (isNumeric(nonSpaceString.substring(i - 1, i))) { // 문자인지 확인
                    correctCarNum = false;
                }
            } else {
                if (!isNumeric(nonSpaceString.substring(i - 1, i))) { // 숫자인지 확인
                    correctCarNum = false;
                }
            }
        }
    } else { // 6자리 이하인 경우는 없으므로 이 경우 false
        correctCarNum = false;
    }
    if (correctCarNum == true) {
        carNum = [nonSpaceString.slice(0, nonSpaceString.length - 4), ' ', nonSpaceString.slice(nonSpaceString.length - 4)].join('')
        resolve(carNum);
    } else {
        resolve("");
    }
})
