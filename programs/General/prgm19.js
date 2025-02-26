//wap to display num whose exponential is in the given range 8-36
//user can input the power to find the exponential for a particular number
//2 => 9,16,25,36
//3 => 8,27

num=2
i=1
exp=0
while(exp<=36){
    exp = i**num
  if(exp>=8 && exp<=36){
    console.log(i);
  }
  i++
}