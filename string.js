let stringCompressor = (s)=>{

let out='';
let count =1;

for (let i=0;i<s.length;i++){
    let cur =s[i];
    let nxt = s[i+1];

    if(cur===nxt){
        count++;
    }else {
        out+= cur + String(count);
        count=1;
    }

}
return out.length<s.length ? out : s;


};


console.log(stringCompressor('aaabcccdeeefffxx'));
