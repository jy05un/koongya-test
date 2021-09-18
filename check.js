var answerObj = ["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"];

var resultData = {
    "IE" : [{plag : "I", count : 0}, {plag : "E", count : 0}],
    "SN" : [{plag : "S", count : 0}, {plag : "N", count : 0}],
    "JP" : [{plag : "J", count : 0}, {plag : "P", count : 0}],
    "TF" : [{plag : "T", count : 0}, {plag : "F", count : 0}],
};
function check(name, param){
    if(param != ''){
        for(var i=0; i<resultData[name].length; i++){
            if(resultData[name][i].plag == param) resultData[name][i].count++;
        }
    }
}

function init(){
    resultData = {
        "IE" : [{plag : "I", count : 0}, {plag : "E", count : 0}],
        "SN" : [{plag : "S", count : 0}, {plag : "N", count : 0}],
        "JP" : [{plag : "J", count : 0}, {plag : "P", count : 0}],
        "TF" : [{plag : "T", count : 0}, {plag : "F", count : 0}],
    };
    localStorage.result = '';
}

function getResult(){
    var answerWord = "";
    for(name in resultData){
        answerWord += getSortData(resultData[name]);
    }

    var answerWordArr = answerWord.split("");
    for(var i=0; i<answerObj.length; i++){
        var getResult = answerObj[i].split("");
        var answerResult = true;

        for(var j=0; j<getResult.length; j++){
            var result = false;
            for(k=0; k<answerWordArr.length; k++){
                if(answerWordArr[k] == getResult[j]) result = true;
            }
            if(!result) answerResult = false;
        }
        //최종 결과
        if(answerResult) return answerObj[i];
    }
}

function getSortData(data){
    data.sort(function (a, b) {
        return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
    });
    return data[0].plag;
}