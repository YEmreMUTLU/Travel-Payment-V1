let yeniSatir="\r\n"
let metin=  "Hoşgeldiniz "+yeniSatir+ "Hangi ülkeye gitmek istersiniz?"+yeniSatir+ "1-İtalya"+yeniSatir+"2-İspanya"+yeniSatir+"3-Fransa"
let bakiye=200;
let tercih=  prompt(metin);
confirm ("Emin misin");



switch(tercih){
    case"1":
 let secim=   prompt(`Hoşgeldiniz ${yeniSatir}Hangi şehire gitmek istersiniz?${yeniSatir}1-Roma${yeniSatir}2-Floransa${yeniSatir}3-Venedik`)

    switch(secim){
        case"1":
       let koltuk = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
       
            switch(koltuk){
                case"1" :
                let fiyat = confirm("Bilet fiyatı 1200 Tl'dir.")
                let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                    switch(odeme){
                        case"1":
                        prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                        prompt("Şifrenizi Giriniz")
                      let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")
                        if(kart==true && bakiye>=1200){
                            alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                        }else{
                            alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                        }
                     break;
                             case"2":
                              let cevap= confirm ("Taksit ister Misiniz?")
                        if(cevap===true){
                         let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                            switch(answer){
                                case"1":
                                prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                     prompt("Şifrenizi Giriniz")
                                 let cevabı=   confirm( "Ödemeniz 3x400 Tl şeklinde hesabınızdan alınacaktır");
                                    if(cevabı==true && bakiye>=400){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                    break;
                                    case"2":
                                    prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                    prompt("Şifrenizi Giriniz")
                                  let cevabın=    confirm ("Ödemeniz 6x200 Tl şeklinde hesabınızdan alınacaktır")
                                    if(cevabın==true && bakiye>=200){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                            }

break;
                    }

            }

break;
    } 
    case"2":
    let koltuk1 = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
       
            switch(koltuk1){
                case"1" :
                let fiyat = confirm("Bilet fiyatı 1800 Tl'dir.")
                let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                    switch(odeme){
                        case"1":
                        prompt("Ödemeniz 1800Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                        prompt("Şifrenizi Giriniz")

                

                      let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")

                        if(kart==true && bakiye>=1800){
                            alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                        }else{
                            alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                        }
                     break;
                             case"2":
                              let cevap= confirm ("Taksit ister Misiniz?")
                        if(cevap===true){
                         let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                            switch(answer){
                                case"1":
                                prompt("Ödemeniz 1800Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                     prompt("Şifrenizi Giriniz")
                                 let cevabı=   confirm( "Ödemeniz 3x600 Tl şeklinde hesabınızdan alınacaktır");
                                    if(cevabı==true && bakiye>=400){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                    break;
                                    case"2":
                                    prompt("Ödemeniz 1800Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                    prompt("Şifrenizi Giriniz")
                                  let cevabın=    confirm ("Ödemeniz 6x300 Tl şeklinde hesabınızdan alınacaktır")
                                    if(cevabın==true && bakiye>=300){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                            }


                    }

            }


    } break;
    case"3":
    let koltuk2 = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
       
            switch(koltuk2){
                case"1" :
                let fiyat = confirm("Bilet fiyatı 2400 Tl'dir.")
                let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                    switch(odeme){
                        case"1":
                        prompt("Ödemeniz 2400Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                        prompt("Şifrenizi Giriniz")


                      let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")

                        if(kart==true && bakiye>=2400){
                            alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                        }else{
                            alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                        }
                     break;
                             case"2":
                              let cevap= confirm ("Taksit ister Misiniz?")
                        if(cevap===true){
                         let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                            switch(answer){
                                case"1":
                                prompt("Ödemeniz 2400Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                     prompt("Şifrenizi Giriniz")
                                 let cevabı=   confirm( "Ödemeniz 3x800 Tl şeklinde hesabınızdan alınacaktır");
                                    if(cevabı==true && bakiye>=800){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                    break;
                                    case"2":
                                    prompt("Ödemeniz 2400Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                    prompt("Şifrenizi Giriniz")
                                  let cevabın=    confirm ("Ödemeniz 6x400 Tl şeklinde hesabınızdan alınacaktır")
                                    if(cevabın==true && bakiye>=400){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                            }


                    }

            }


    } 


}
break;
 case"2":
 let secim1=   prompt(`Hoşgeldiniz ${yeniSatir}Hangi şehire gitmek istersiniz?${yeniSatir}1-Madrid${yeniSatir}2-Barselona${yeniSatir}3-Malaga`)

switch(secim1){
        case"1":
       let koltuk = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
       
            switch(koltuk){
                case"1" :
                let fiyat = confirm("Bilet fiyatı 600 Tl'dir.")
                let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                    switch(odeme){
                        case"1":
                        prompt("Ödemeniz 600Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                        prompt("Şifrenizi Giriniz")

                

                      let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")

                        if(kart==true && bakiye>=600){
                            alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                        }else{
                            alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                        }
                     break;
                             case"2":
                              let cevap= confirm ("Taksit ister Misiniz?")
                        if(cevap===true){
                         let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                            switch(answer){
                                case"1":
                                prompt("Ödemeniz 600Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                     prompt("Şifrenizi Giriniz")
                                 let cevabı=   confirm( "Ödemeniz 3x200 Tl şeklinde hesabınızdan alınacaktır");
                                    if(cevabı==true && bakiye>=200){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                    break;
                                    case"2":
                                    prompt("Ödemeniz 600Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                    prompt("Şifrenizi Giriniz")
                                  let cevabın=    confirm ("Ödemeniz 6x100 Tl şeklinde hesabınızdan alınacaktır")
                                    if(cevabın==true && bakiye>=100){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                            }


                    }

            }


    }
    break; 
        case"2":
    let koltuk1 = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
       
            switch(koltuk1){
                case"1" :
                let fiyat = confirm("Bilet fiyatı 1200 Tl'dir.")
                let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                    switch(odeme){
                        case"1":
                        prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                        prompt("Şifrenizi Giriniz")

                      let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")

                        if(kart==true && bakiye>=1200){
                            alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                        }else{
                            alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                        }
                     break;
                             case"2":
                              let cevap= confirm ("Taksit ister Misiniz?")
                        if(cevap===true){
                         let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                            switch(answer){
                                case"1":
                                prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                     prompt("Şifrenizi Giriniz")
                                 let cevabı=   confirm( "Ödemeniz 3x400 Tl şeklinde hesabınızdan alınacaktır");
                                    if(cevabı==true && bakiye>=400){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                    break;
                                    case"2":
                                    prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                    prompt("Şifrenizi Giriniz")
                                  let cevabın=    confirm ("Ödemeniz 6x200 Tl şeklinde hesabınızdan alınacaktır")
                                    if(cevabın==true && bakiye>=200){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                            }


                    }

            }


    } 
    break;
    case"3":
    let koltuk2 = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
       
            switch(koltuk2){
                case"1" :
                let fiyat = confirm("Bilet fiyatı 3000 Tl'dir.")
                let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                    switch(odeme){
                        case"1":
                        prompt("Ödemeniz 3000Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                        prompt("Şifrenizi Giriniz")

                

                      let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")

                        if(kart==true && bakiye>=3000){
                            alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                        }else{
                            alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                        }
                     break;
                             case"2":
                              let cevap= confirm ("Taksit ister Misiniz?")
                        if(cevap===true){
                         let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                            switch(answer){
                                case"1":
                                prompt("Ödemeniz 3000Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                     prompt("Şifrenizi Giriniz")
                                 let cevabı=   confirm( "Ödemeniz 3x1000 Tl şeklinde hesabınızdan alınacaktır");
                                    if(cevabı==true && bakiye>=1000){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                    break;
                                    case"2":
                                    prompt("Ödemeniz 3000Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                    prompt("Şifrenizi Giriniz")
                                  let cevabın=    confirm ("Ödemeniz 6x500 Tl şeklinde hesabınızdan alınacaktır")
                                    if(cevabın==true && bakiye>=500){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                            }


                    }

            }


    } 

}
break;
case"3":
let secim2=   prompt(`Hoşgeldiniz ${yeniSatir}Hangi şehire gitmek istersiniz?${yeniSatir}1-Paris${yeniSatir}2-Lyon${yeniSatir}3-Marsilya`)

switch(secim2){
    case"1":
   let koltuk = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
   
        switch(koltuk){
            case"1" :
            let fiyat = confirm("Bilet fiyatı 1500 Tl'dir.")
            let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                switch(odeme){
                    case"1":
                    prompt("Ödemeniz 1500Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                    prompt("Şifrenizi Giriniz")

            
                  let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")

                    if(kart==true && bakiye>=1500){
                        alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                    }else{
                        alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                    }
                 break;
                         case"2":
                          let cevap= confirm ("Taksit ister Misiniz?")
                    if(cevap===true){
                     let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                        switch(answer){
                            case"1":
                            prompt("Ödemeniz 1500Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                 prompt("Şifrenizi Giriniz")
                             let cevabı=   confirm( "Ödemeniz 3x500 Tl şeklinde hesabınızdan alınacaktır");
                                if(cevabı==true && bakiye>=500){
                                    alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                }else{alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                break;
                                case"2":
                                prompt("Ödemeniz 1500Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                prompt("Şifrenizi Giriniz")
                              let cevabın=    confirm ("Ödemeniz 6x250 Tl şeklinde hesabınızdan alınacaktır")
                                if(cevabın==true && bakiye>=250){
                                    alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                }else{alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                        }


                }

        }

break;
}
case"2":
    let koltuk1 = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
       
            switch(koltuk1){
                case"1" :
                let fiyat = confirm("Bilet fiyatı 1200 Tl'dir.")
                let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                    switch(odeme){
                        case"1":
                        prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                        prompt("Şifrenizi Giriniz")

                

                      let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")

                        if(kart==true && bakiye>=1200){
                            alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                        }else{
                            alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                        }
                     break;
                             case"2":
                              let cevap= confirm ("Taksit ister Misiniz?")
                        if(cevap===true){
                         let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                            switch(answer){
                                case"1":
                                prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                     prompt("Şifrenizi Giriniz")
                                 let cevabı=   confirm( "Ödemeniz 3x400 Tl şeklinde hesabınızdan alınacaktır");
                                    if(cevabı==true && bakiye>=400){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                    break;
                                    case"2":
                                    prompt("Ödemeniz 1200Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                    prompt("Şifrenizi Giriniz")
                                  let cevabın=    confirm ("Ödemeniz 6x200 Tl şeklinde hesabınızdan alınacaktır")
                                    if(cevabın==true && bakiye>=200){
                                        alert("Ödemeniz alınmıştır.iyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                            }


                    }

            }


    } break;
    case"3":
    let koltuk2 = prompt("Kişi Sayısını Seçiniz (Kampanya tek bilet ile sınırlıdır.)")
       
            switch(koltuk2){
                case"1" :
                let fiyat = confirm("Bilet fiyatı 900 Tl'dir.")
                let odeme = prompt("Ödeme Şeklini Seçiniz"+yeniSatir+"1-Banka kartı"+yeniSatir+"2-Kredi Kartı")
                    switch(odeme){
                        case"1":
                        prompt("Ödemeniz 900Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                        prompt("Şifrenizi Giriniz")

                

                      let kart=  confirm("Ödemeniz Alınacaktır.Emin misiniz?")

                        if(kart==true && bakiye>=900){
                            alert("Biletiniz Hazırlanmıştır. İyi Yolculuklar")
                        }else{
                            alert("Bakiyeniz Yetersizdir.Lütfen başka bir kart deneyiniz")
                        }
                     break;
                             case"2":
                              let cevap= confirm ("Taksit ister Misiniz?")
                        if(cevap===true){
                         let answer=   prompt("Kaç Taksit İstersiniz?"+yeniSatir+"1-3 taksit"+yeniSatir+"2-6 Taksit")
                            switch(answer){
                                case"1":
                                prompt("Ödemeniz 900Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                     prompt("Şifrenizi Giriniz")
                                 let cevabı=   confirm( "Ödemeniz 3x300 Tl şeklinde hesabınızdan alınacaktır");
                                    if(cevabı==true && bakiye>=300){
                                        alert("Ödemeniz alınmıştır.İyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                                    break;
                                    case"2":
                                    prompt("Ödemeniz 900Tl dir"+yeniSatir+ "Kart Numarasını Giriniz")
                                    prompt("Şifrenizi Giriniz")
                                  let cevabın=    confirm ("Ödemeniz 6x150 Tl şeklinde hesabınızdan alınacaktır")
                                    if(cevabın==true && bakiye>=150){
                                        alert("Ödemeniz alınmıştır.İyi yolculuklar")
                                    }else{ alert(" Bakiyeniz Yetersizdir.Yeni bir ödeme türü seçiniz")}
                            }


                    }

            }


    } break;

            
    } 




}






    


    
  


    


        
       
