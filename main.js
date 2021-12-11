

/**
 * Bài tập 1
 * 
 * Khối 1: input
 * điểm chuẩn, điểm 3 môn, lựa chọn khu vực, chọn đối tượng
 * 
 * Khối 2: 
 * dựa vào lựa chọn của khu vưc, đói tương
 * giả sử chọn khu vựa B đối tượng 1
 * result = diem1 + diem2 + diem3 + areaB + Object1
 * so sánh result với điểm chuẩn => đậu hay rớt
 * 
 * Khối 3:
 * kết quả đậu hay rớt
 */

 function calculatorResult() {
    //  lấy điểm
     var standardPoint = document.getElementById("inputPoint").value;
     var point1 = document.getElementById("inputPoint1").value;
     var point2 = document.getElementById("inputPoint2").value;
     var point3 = document.getElementById("inputPoint3").value;
   
    //  lấy kết quả sau khi người dùng chọn
     var areaSelect = document.getElementById("area").value;
     var objectSelect = document.getElementById("object").value;
     var areaResult = areaSelection(areaSelect);
     var objectResult = areaObject(objectSelect);
    //  tổng điểm sau khi lựa chọn
     var totalPoint = Number(point1) + Number(point2) + Number(point3) + Number(areaResult) + Number(objectResult)
     
     result(standardPoint, totalPoint)
     
 }

//  lấy giá trị sau khi chọn khu vực
 function areaSelection(areaSelect) {
    if (areaSelect == "A") {
        return 2
    }
    else if (areaSelect == "B") {
        return 1
    }else if (areaSelect == "C") {
        return 0.5
    }
    else if (areaSelect == "0" || areaSelect == "X") {
        return 0
    }
   
   
 }
//  lấy giá trị sau khi chọn đối tượng

 function areaObject(objectSelect) {
    if (objectSelect == "1") {
        return 2.5
    }
    else if (objectSelect == "2") {
        return 1.5
    }else if (objectSelect == "3") {
        return 1
    }
    else if (objectSelect == "0") {
        return 0
    }
   
 }
 
//  xét kết quả sau khi có điểm chuẩn và tổng điểm thi
 function result(standardPoint, totalPoint) {
     if (totalPoint == 0 && standardPoint == 0) {
        document.getElementById("excercise1__show").innerHTML = "Vui lòng nhập điểm và lựa chọn đối tượng, khu vực của bạn"
        document.getElementById("excercise1__show").style.display = "block"

    }
    else if(totalPoint >= standardPoint ) {
        document.getElementById("excercise1__show").innerHTML = "Chúc mừng bạn đã đậu. Làm chầu nào :D ." + "Tổng điểm: " + totalPoint
        document.getElementById("excercise1__show").style.display = "block"

    }
    else if (totalPoint < standardPoint){
        document.getElementById("excercise1__show").innerHTML = "Bạn đã rớt. Đừng bỏ cuộc. " + "Tổng điểm: " + totalPoint
        document.getElementById("excercise1__show").style.display = "block"

    }
   
 }

 /**
  * Bài tập 2
  * 
  * Khối 1: input:
  * Số KW
  * 
  * Khối 2:
  * dựa vào KW lấy được so sánh với điều kiện mốc của từng KW đê tính tiền thích hợp
  * 
  * Khối 3:
  * Tiền điện
  */


  var kw50 = 500;
  var kw50_Ke = 650;
  var kw100_Ke = 850;
  var kw150_Ke = 1100;
  var Kw_ConLai = 1300;
 function calculatorElectric() {

    var nameInput = document.getElementById("inputElectric1").value;
    var KW = document.getElementById("inputElectric2").value;
   var total = calcalatorKW(KW , kw50, kw50_Ke, kw100_Ke, kw150_Ke, Kw_ConLai)
   showElectric(total,nameInput)

 }

 function calcalatorKW(Kw, kw50, kw50_Ke, kw100_Ke, kw150_Ke, Kw_ConLai) {
    if (Kw == 0) {
        alert("Vui lòng nhập số Kw và họ tên của bạn")
        return 0
    }
   else if(Kw <= 50 ) {
      return kw50 * Kw
  }
  else if ( 50 < Kw && Kw <= 100) {
      return (50 * kw50) + (Kw - 50) * kw50_Ke
  }
  else if(Kw > 100 && Kw <= 200) {
      return (50 * kw50) +  50 * kw50_Ke + (Kw - 100) * kw100_Ke
  }
  else if(Kw > 200 && Kw <= 350) {
    return (50 * kw50) +  50 * kw50_Ke + 100 * kw100_Ke + (Kw - 200) *kw150_Ke
  }
  else if(Kw > 350) {
    return (50 * kw50) +  50 * kw50_Ke + 100 * kw100_Ke + 150 * kw150_Ke + (Kw - 350) * Kw_ConLai
  }
  
  
 }

 function showElectric(total,nameInput) {
     document.getElementById("electric1__show").innerHTML = "Họ tên: " + nameInput +", " + new Intl.NumberFormat('it-IT', { currency: 'VND', style : 'currency'}).format(total)
     document.getElementById("electric1__show").style.display = "block"
 }
