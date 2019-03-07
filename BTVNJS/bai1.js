Sokm = 31;
GiaTien = 0;
if (Sokm == 1) {
	GiaTien = Sokm * 15000;
}
if (Sokm >= 2 && Sokm <= 30) {
	GiaTien = (15000 * 1) + ((Sokm - 1) * 12000);
}
if (Sokm > 30) {
	GiaTien = (15000 * 1) + (29 * 12000) + (Sokm - 30)*8000;
}
document.write("Gia tien phai tra cua "+ Sokm +" km la "+ GiaTien +" VND");