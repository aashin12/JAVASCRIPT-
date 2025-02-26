//wap to print common numbers from the given arrays
p=[10,11,12,20,30]
q=[11,20,25,30,33]
fl=0

for(i=0;i<p.length;i++)
{
    for(j=0;j<q.length;j++)
    {
        if(p[i]==q[j])
           { console.log("The common number is",p[i]);
             fl=1
           }
            
    }
}
fl==0 && console.log("There are no common  numbers");

console.log(`-----------------------------------------------`);

p=[10,11,12,20,30]
q=[11,20,25,30,33]
i=0
j=0
fl=0

while(i<p.length && j<q.length)
{
  if(p[i]==q[j])
  {
    console.log("The common number is",p[i]);
    i++
    j++
    fl=1
  }
  else if(p[i]>q[j])
  {
    j++
  }
  else
  {
    i++
  }

    
}
!fl && console.log("There are no common numbers");
