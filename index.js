const resultChk = document.querySelector(".output");
const tmp = document.querySelector(".tmp");

const empty = (imsi) => {
    imsi.value = "";
};

document.querySelector(".clear").addEventListener("click",() =>{
    empty(resultChk);
    empty(tmp);
});

document.querySelectorAll(".num").forEach((element) =>
{
    element.addEventListener("click", ()=>{
        if(resultChk.value.length >16)
            return alert("입력 범위 초과");

        resultChk.value += element.value;
    })
});

document.querySelector(".dot").addEventListener("click", () =>{
    if(resultChk.value.includes(".")) return;
    resultChk.value +=".";
});

document.querySelector(".swit").addEventListener("click", ()=> {
    console.log(resultChk.value.slice(1));
        if(resultChk.value.startsWith("-")){
            resultChk.value = resultChk.value.slice(1);
        }
        else{
            resultChk.value = `-${resultChk.value}`;
        }
});

document.querySelector(".delete").addEventListener("click",()=>
{
    resultChk.value = resultChk.value.slice(0,-1);
});

document.querySelectorAll(".sign").forEach((element)=>{
    element.addEventListener("click", () => {
        if(resultChk.value){
            if(tmp.value){
                tmp.value = `${tmp.value} ${resultChk.value} ${element.value}`;
            }
            else{
                tmp.value = `${resultChk.value} ${element.value}`;
            }
        }
        else if (tmp.value.slice(-1).match(/-|\+|\×|\÷/)){
            let string = tmp.value.slice(0,-1);
            console.log("string: "+string);
            string += element.value;
            tmp.value = string;
        }
        empty(resultChk);
    });
});

document.querySelector(".result").addEventListener("click",() =>{
    if(resultChk.value){
        let reTmp = tmp.value.replace("×","*").replace("÷","/");
        let reResultChk = resultChk.value.replace("×","*").replace("÷","/");
        resultChk.value = eval(reTmp + reResultChk);
        empty(tmp);
    }
});