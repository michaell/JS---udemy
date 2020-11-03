// let js = 'amazing';
// if (js === 'amazing') console.log('JSss is amazing');


// console.log(2+2);

// let country = 'Russia';
// let continent = 'Eurasia';
// let population = 146000000;

// console.log(country);
// console.log(continent);
// console.log(population);


// let var1 = true;

// console.log(typeof var1 );

// let x, y;
// x = y = 25 - 10  - 5;
// console.log(x);
//========================================================
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// const MarkWeight = 78,
// 		MarkHeight = 1.69,
// 		JohnWeight = 92,
// 		JohnHeight = 1.95;

// const MarkBMI = Math.floor(MarkWeight / MarkHeight ** 2);
// const JohnBMI = Math.floor(JohnWeight / JohnHeight ** 2);

// if (MarkBMI > JohnBMI) {
// 	console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`);
// } else {
// 	console.log(`John's (${JohnBMI}) is higher than Mark's BMI (${MarkBMI})`);
// }

//  console.log(23, `23`);

//  let n = `1` + 1;
//  n = n - 1;
//  console.log(n, typeof n);

//  console.log(Boolean(' '));

//  const money = 1; 

//  if(!money) {
// 	 console.log(`truthy`);
//  } else {
// 	 console.log(`falsey`);
//  }


// const dolphinScore1 = 500,
// 		dolphinScore2 = 400,
// 		dolphinScore3 = 390,
// 		koalaScore1 = 390,
// 		koalaScore2 = 500,
// 		koalaScore3 = 400;

// const dolphinAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
// 	console.log(`Winner is Dolphins team with ${dolphinAverage} score. Koala score is ${koalaAverage}`);
// } else if (dolphinAverage == koalaAverage && dolphinAverage >= 100) {
// 	console.log(`It is draw, the scores are equal`);
// } else if (koalaAverage > dolphinAverage && koalaAverage >= 100) {
// 	console.log(`Winner is Koala team with ${koalaAverage} Dolphin score is ${dolphinAverage}`);
// } else {
// 	console.log(`No one achive 100 points`);
// }

const day = "Sunday";

switch(day) {
	case "Monday":
		console.log(`It is hard day`);
		break;
	case "Tuesday":
		console.log(`Start working`);
		break;
	case "Wednesday":
	case "Thursday":
		console.log(`Maximum productivity`);
		break;
	case "Friday":
		console.log(`Drinking Vodka`);
		break;
	case "Saturday":
	case "Sunday":
		console.log(`Engoy the weekend`);
		break;
	default:
		console.log(`Not a valid day`);
}

if (day === "Monday") {
	console.log(`It is hard day`);
} else if (day === "Tuesday") {
	console.log(`Start working`);
} else if (day === 'Wednesday' || day === "Thursday") {
	console.log(`Maximum productivity`);
} else if (day === "Friday") {
	console.log(`Drinking Vodka`);
} else if (day === "Saturday" || day === "Sunday") {
	console.log(`Engoy the weekend`);
} else {
	console.log(`Not a valid day`);
}