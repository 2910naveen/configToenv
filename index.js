const obj = {
  naveen:{
            name:"Segu.Naveen",
            company:"Incedo",
            techstack:{
                         tech1:"java",
                         tech2:"react.js",
                         tech3:"node.js"
                      },
            education:{
                           tenth:{
                                   school:"RavindraBharathiSchool",
                                   percentage:"95%"
                                 },
                           inter:{
                                     college:"NarayanaJuniorCollege",
                                     percentage:98.4
                                  },
                           btech:{
                                     college:"SASTRA Deemend to be University",
                                     cgpa:"8.34"
                                 }
                      }
         },
         sushith:{
            name:"Sushith.Kalpam",
            company:"Incedo",
            techstack:{
                         tech1:"java",
                         tech2:"react.js",
                         tech3:"node.js"
                      },
            education:{
                           tenth:{
                                   school:"RavindraBharathiSchool",
                                   percentage:"95%"
                                 },
                           inter:{
                                     college:"NarayanaJuniorCollege",
                                     percentage:
                                     "98.4%"
                                  },
                           btech:{
                                     college:"SASTRA Deemend to be University",
                                     cgpa:"8.34"
                                 }
                      }
         }
}


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
       else if(typeof obj[objkeys[i]] === "number")
       {
          str= str+"_"+objkeys[i];
       }
       if(typeof obj[objkeys[i]] !== "object")
       {
        console.log(str+" "+obj[objkeys[i]]);   
       }
       str = str.substring(0,str.lastIndexOf('_'));
    }
}
configToEnv(obj,"");
