import {Selector} from 'testcafe';

fixture('Tax Analytic')
	.page('http://otmdev.cartenzgroup.com'); //URL yang di tuju

test('Login & Logout Sukses', async t => {
await t.maximizeWindow(); //Memperbesar Layar
//await t.resizeWindowToFitDevice('ASUS MeMo Pad ME172V', {portraitOrientation: true})
await t.typeText('#userid_field','flocs'); //Isi Username
//await t.takeElementScreenshot(Selector('#userid_field'),'\userid_field.png'); //
await t.typeText('#password_field','coflocs!'); //Isi Password
await t.click('.fa.btn-see-password.fa-eye-slash.btn-see-password-show'); //Show Password
await t.expect(Selector('#password_field').value).eql('coflocs!');//Membandingkan Password
await t.click(Selector('#login_password').child(1)); //Show Password non Aktif
await t.click('#rememberme_field'); //Checklist Checkbox Remember Me
await t.expect(Selector('#rememberme_field').checked).ok(); //Mengecek Checkbox sudah terceklist atau belum
await t.click('#rememberme_field'); //Meng Unchecked kembali
await t.expect(Selector('#rememberme_field').checked).notOk(); ////Mengecek Checkbox sudah terceklist atau belum
await t.click('#login_button'); //Klik tombol login
await t.expect(Selector('.sg-user').exists).ok();//Cek pada halaman setelah login muncul icon user pojok kiri atas
await t.expect(Selector('.title-menu').innerText).eql('Menu Utama');//Cek Label Menu

if ( await t.expect(Selector('.navbar-toggle.collapsed').exists).ok())
{
	await t.click('.navbar-toggle.collapsed');// Expand Menu	
}
await t.click('.sg-user'); //Klik iconn user
await t.click(Selector('.usermenu-header.dropdown-menu').child(1));//Klik Logout
await t.expect(Selector('#login_button').innerText).eql('MASUK');//Cek label di halaman login
});

test('Login Tanpa Isi Username & Password', async t => {
await t.maximizeWindow(); //Memperbesar Layar
await t.click('#login_button'); //Klik tombol login
await t.expect('.fa.fa-user.fa-warning').ok();//Cek warning di field username
await t.expect('.fa.btn-see-password.fa-eye-slash.fa-warning').ok();//Cek warning di field Password
});

test('Login Tanpa Isi Username', async t => {

await t.maximizeWindow(); //Memperbesar Layar
//await t.takeElementScreenshot(Selector('#userid_field'),'\userid_field1.png'); //
await t.typeText('#password_field','coflocs!'); //Isi Password
await t.click('.fa.btn-see-password.fa-eye-slash.btn-see-password-show'); //Show Password
await t.expect(Selector('#password_field').value).eql('coflocs!');//Membandingkan Password
await t.click(Selector('#login_password').child(1)); //Show Password non Aktif
await t.click('#login_button'); //Klik tombol login
await t.expect('.fa.fa-user.fa-warning').ok();
});

test('Login Tanpa Isi Password', async t => {

await t.maximizeWindow(); //Memperbesar Layar
//await t.takeElementScreenshot(Selector('#userid_field'),'\userid_field1.png'); //
await t.typeText('#userid_field','flocs'); //Isi Username
await t.click('#login_button'); //Klik tombol login
await t.expect('.fa.btn-see-password.fa-eye-slash.fa-warning').ok();//Cek warning di field Password
});

test('Login user yang tidak terdaftar', async t => {
await t.maximizeWindow(); //Memperbesar Layar
await t.typeText('#userid_field','fawfau'); //Isi Username
//await t.takeElementScreenshot(Selector('#userid_field'),'\userid_field1.png'); //
await t.typeText('#password_field','111111'); //Isi Password
await t.click('.fa.btn-see-password.fa-eye-slash.btn-see-password-show'); //Show Password
await t.expect(Selector('#password_field').value).eql('111111');//Membandingkan Password
await t.click(Selector('#login_password').child(1)); //Show Password non Aktif
await t.click('#login_button'); //Klik tombol login
await t.expect(Selector('#ctiExceptionBox').innerText).eql('Exception occured while trying to login See Details.');//Cek label di halaman login
});