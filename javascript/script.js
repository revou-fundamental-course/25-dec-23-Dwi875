function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        document.getElementById('luasResult').innerText = 'Luas: ' + luas.toFixed(2);
    } else {
        document.getElementById('luasResult').innerText = 'Luas: - (Masukkan angka)';
    }
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        var keliling = sisi1 + sisi2 + sisi3;
        document.getElementById('kelilingResult').innerText = 'Keliling: ' + keliling.toFixed(2);
    } else {
        document.getElementById('kelilingResult').innerText = 'Keliling: - (Masukkan angka)';
    }
}

function clearResult() {
    document.getElementById('luasResult').innerText = 'Luas: -';
    document.getElementById('kelilingResult').innerText = 'Keliling: -';
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
}
