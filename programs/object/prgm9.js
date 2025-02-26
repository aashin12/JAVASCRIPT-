weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
// obj={}
// highest=0
// i=0
// j=0
// k=0
// m=0
// weatherData.forEach((item) => {
//     for(let x in item){
//          if(item['Thrissur'])
//          {
//             tweather = item[weather]
//             if(tweather[i]>highest)
//                { highest=tweather
//                 i++
//                }
//          }
//          else if(item['Kottayam'])
//          {
//            kweather = item[weather]
//            if(tweather[j]>highest)
//             { highest=tweather
//              j++
//             }
//          }
//          else if(item['Palakkad'])
//          {
//            pweather = item[weather]
//            if(tweather[k]>highest)
//             { highest=tweather
//              k++
//             }
//          }
//          else if(item['Ernakulam'])
//            eweather = item[weather]

//     }

    
    
//     });


wd={}

for(let data of weatherData){
    district = data.district
    currentweather= data.weather

    if(district in wd){
        oldtemp = wd[district]

        if(oldtemp<currentweather){
            wd[district]=currentweather
        }
    }
    else
    {
        wd[district]=currentweather
    }
}
console.log(wd);
