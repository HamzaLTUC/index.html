function avgSpending (ABdunBranch , Jubayhah , CityMall){
var sum = parseInt (ABdunBranch ) + parseInt (Jubayhah)+ parseInt(CityMall) ;
var avg = sum/3 ;
alert ("Your avg is"  +avg ) ;
}
var ABdunBranch = 0 ;
var Jubayhah = 0 ; 
var CityMall = 0 ;
var Counter = 0 ;
while (Counter < 3 ){
    if (Counter == 0) {
        ABdunBranch = prompt (" Please enter Abdun Branch Spending :") ;
    }
 else if (Counter === 1 ){
Jubayhah = prompt ('Please enter Jubayhah Branch Spending:' )
}
else{

    CityMall = prompt('Please enter CityMall Branch Spending:') ;

}
Counter+=1 ;
}
avgSpending (ABdunBranch ,Jubayhah ,  CityMall ) ;