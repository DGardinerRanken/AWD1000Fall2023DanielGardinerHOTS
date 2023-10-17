
function main(){
let str = "";
for (let lcv = 1; lcv <= 100; ++lcv){
    str += lcv + " ";
    if (lcv % 2 != 0){
        document.write(lcv + "<br>")
    }
}

}