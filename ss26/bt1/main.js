function SoLonHonHoacBang10(mangSo){
    for (let i = 0; i < mangSo.length; i++){
        if (mangSo[i] >= 10){
            document.writeln(mangSo[i]);
        }
    }
}
function khoiTaoVaHienThi(){
    let mangSo = [5, 12, 8, 15, 3, 20, 10, 7, 25, 1];
    SoLonHonHoacBang10(mangSo);
}
khoiTaoVaHienThi();
