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
    // var img1 = document.getElementById("img1");
    // img1.src = "JavaBeans.jpg";
    
    var div1 = document.getElementById("div1");
        
    for (var i=0; i<10; i++){
        var img1 = document.createElement("img");
        img1.setAttribute("src", "https://www.creativefabrica.com/wp-content/uploads/2018/10/Coffee-logo-by-Friendesign-Acongraphic-1.jpg");
        img1.setAttribute("height", "200");
        img1.setAttribute("width", "200");
        img1.setAttribute("alt", "Beans");
        div1.appendChild(img1);    
    }