const bmiHistoryData = []; 
const bmiStatesData = {
  overThin: {
    state: "過輕",
    color: "藍色"
  },
  normal: {
    state: "正常",
    color: "紅色"
  },
  overWeight: {
    state: "過重",
    color: "澄色"
  },
  mildFat: {
    state: "輕度肥胖",
    color: "黃色"
  },
  moderateFat: {
    state: "中度肥胖",
    color: "黑色"
  },
  severeFat: {
    state: "重度肥胖",
    color: "綠色"
  }
}

function getBodyState(bmi){
  let state = "";
  if (bmi < 18.5) {
    state = "overThin";
  } else if (18.5 <= bmi && bmi < 24) {
    state = "normal";
  } else if (24 <= bmi && bmi < 27) {
    state = "overWeight";
  } else if (27 <= bmi && bmi < 30) {
    state = "mildFat";
  } else if (30 <= bmi && bmi < 35) {
    state = "moderateFat";
  } else if (bmi >= 35) {
    state = "severeFat";
  }
  bmiHistoryData.push({ bmi, state });
  return `您的體重為${bmiStatesData[state].state},狀態為${bmiStatesData[state].color}`;
}

function printBmi(heightInCm, weight) {
  if (typeof(heightInCm) !== "number" && typeof(weight) !== "number") {
    return "輸入錯誤囉";
  }
  let heightInM = heightInCm / 100;
  let bmi = (weight / (heightInM ** 2)).toFixed(2);
  return getBodyState(bmi);
}

function showHistoryData(){
  return `您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[bmiHistoryData.length - 1].bmi}，體重${bmiStatesData[bmiHistoryData[bmiHistoryData.length - 1].state].state}！健康指數為${bmiStatesData[bmiHistoryData[bmiHistoryData.length - 1].state].color}！`;
}

console.log(printBmi(178, 20));
console.log(printBmi(178, 70));
console.log(printBmi(178, 85));
console.log(printBmi(178, 90));
console.log(printBmi(178, 110));
console.log(printBmi(178, 130));
console.log(printBmi("身高", "體重"));

console.log(showHistoryData());
