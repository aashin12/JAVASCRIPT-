/*                    BINARY SEARCH
  1.start
  2.sort
  3.mid=(low+up)/2
  4.while(up>=low)
    4.a if(mid>value)
           up=mid-1
    4.b else(mid<value)
           low=mid+1
    4.c else(mid==value)
           print value present
   5.stop 
*/

  arr=[10,11,12,2,3,4]
  len=arr.length
  low=0
  up=len-1
  searchitem=2
  fl=false
  
  arr.sort((a,b)=>a-b)
  
     while(low<=up)
     {
        mid=Math.floor((low+up)/2)
        if(arr[mid]==searchitem)
        {
            console.log("Present");
            fl=true
            break
        }
        else if(arr[mid]<searchitem)
            low=mid+1
        else if(arr[mid]>searchitem)
            up=mid-1
            
     }
!fl && console.log("Not present");
