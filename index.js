


function configToEnv(obj,str="")
{
    if(typeof obj !== "object")
    {
        return;
    }
    const objkeys = Object.keys(obj);
    for(let i=0;i<objkeys.length;i++)
    {
       if(Object.keys(obj[objkeys[i]]).length>0)
       {
           if(str === "")
           {
              str = str + objkeys[i]; 
           }
           else
           {
               str = str+"_"+objkeys[i];
           }
           configToEnv(obj[objkeys[i]],str);
       }
       if(typeof obj[objkeys[i]] !== "object")
       {
        console.log(str+" "+obj[objkeys[i]]);   
       }
       str = str.substring(0,str.lastIndexOf('_'));
    }
}
configToEnv(obj,"");
