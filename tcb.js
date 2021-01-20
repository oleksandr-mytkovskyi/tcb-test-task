function isLuckyTicket(num) {
	const sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
	const sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
	
	return sum1 == sum2;
}

function chechNumber(num) {
	let str = num.toString();
	
	if (str.length == 5) {
		str = '0' + str;
	}
	if (str.length == 4) {
		str = '00' + str;
	}
	return str;
}

function resultLuckyTickets() {
    let result = [];
    let count = 0;
	
	for (let i = 1001; i <= 999999; i++) {
        let num = chechNumber(i);
		if (isLuckyTicket(num)) {
            result.push(num);
            count++;
		}
	}
    const frequency = `${Math.floor(count/999999 * 10000) / 100}%`;
	return {count, result, frequency};
}

console.log(resultLuckyTickets());
