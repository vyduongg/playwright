const filterEvenNum = function(value, index, array){
	return value % 2 === 0;
}

const filterOddNum = function(value, index, array){
	return value % 2 !== 0;
}

module.exports = {
	filterEvenNum : filterEvenNum,
	filterOddNum : filterOddNum,
}