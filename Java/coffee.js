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



    var picNo = prompt (" How much you rate us 1-10 ");
    for (var i =0 ; i< picNo ; i++){
        document.write('<img src = " https://post.healthline.com/wp-content/uploads/2020/03/Starbucks_Storefront_1200x628-facebook-1200x628.jpg" />');
    } ;
 