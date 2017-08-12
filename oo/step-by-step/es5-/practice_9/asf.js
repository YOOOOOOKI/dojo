function deleteStr(str,val){
    let num=val.toString();

    for(let i =0;i<str.length;i++)
    {
        if(i%3===0)
        {
            if(str[i]===num)
            {
                console.log(i);console.log(str);
                console.log(str.substring(i,i+3));
                str= str.replace(str.substring(i,i+3),"");
                console.log(str);
               // i=i-1;
            }
        }
    }
    return str;


};
console.log(deleteStr('1->2->3->3->4->5->3',3));