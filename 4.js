function arkaFood(harga,kode_promo,jarak,pajak) {
    var bayar = harga;
    if (kode_promo==='ARKAFOOD5' && harga>=50000) {
        if ((harga*50/100) > 50000) {
            bayar-=50000;
        }else{
             bayar-=(harga*50/100);
        }
       
    }
    if (kode_promo==='DITRAKTIRDEMY' && harga>=25000) {
        if ((harga*60/100)>30000) {
            bayar-=30000;
        }else{
             bayar-=(harga*60/100);
        }  
    }
    if (jarak>3) {
        bayar+=(5000)+((jarak-3)*3000);
    }else{
        bayar+=5000;
    }
    if (pajak===true) {
        bayar+=harga*5/100;
    }
    return bayar
}


console.log(arkaFood(75000,'ARKAFOOD5',5,false))