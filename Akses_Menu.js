import {Selector, Role} from 'testcafe';

const taxAnalyticAcc = Role('http://otmdev.cartenzgroup.com', async t => {
	await t.typeText('#userid_field','flocs'); //Isi Username
	await t.typeText('#password_field','coflocs!'); //Isi Password
	await t.click('.fa.btn-see-password.fa-eye-slash.btn-see-password-show'); //Show Password
	await t.expect(Selector('#password_field').value).eql('coflocs!');//Membandingkan Password
	await t.click(Selector('#login_password').child(1)); //Show Password non Aktif
	await t.click('#login_button'); //Klik tombol login
}, { preserveUrl: true });



fixture('Tax Analytic')
	//Sebelum masuk ke test akan selalu memproses before each
	.beforeEach(async t => {
		await t.navigateTo('http://otmdev.cartenzgroup.com')
		//menggunakan role yang sudah di definisikan
		await t.useRole(taxAnalyticAcc);
		//Memperbesar layar
		//await t.maximizeWindow();
		//Meresize window 
		await t.resizeWindow(991,726);
	});

test('Akses Dasbor Transaksi', async t => {
		//await t.maximizeWindow(); //Memperbesar Layar
		await t.expect(Selector('.sg-user').exists).ok();//Cek pada halaman setelah login muncul icon user pojok kiri atas
		await t.expect(Selector('.title-menu').innerText).eql('Menu Utama');//Cek Label Menu
		await t.click(Selector('#\\31 _menu > span > div').withText('Manajemen Dasbor'));//Klik Manajemen Dasbor
		await t.expect(Selector('.title-menu').innerText).eql('Dasbor'); //Cek label Dasbor
		await t.click(Selector('#\\31 _menu > span > div'));//Klik Dasbor Transaksi
		await t.expect(Selector('.dashboard-title').innerText).eql('Dasbor Transaksi');
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('.navbar-brand');//kembali ke halaman utama
	})

test('Akses Dasbor Target & Realisasi Pajak', async t => {
		//await t.maximizeWindow(); //Memperbesar Layar
		await t.expect(Selector('.sg-user').exists).ok();//Cek pada halaman setelah login muncul icon user pojok kiri atas
		await t.expect(Selector('.title-menu').innerText).eql('Menu Utama');//Cek Label Menu
		await t.click(Selector('#\\31 _menu > span > div').withText('Manajemen Dasbor'));//Klik Manajemen Dasbor
		await t.expect(Selector('.title-menu').innerText).eql('Dasbor'); //Cek label DasborS
		await t.click(Selector('#\\34 _menu > span > div'));
		await t.expect(Selector('.dashboard-title').innerText).eql('Dasbor Target dan Realisasi');		
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('.navbar-brand');//kembali ke halaman utama
	});

test('Akses Dasbor Fluktuasi', async t => {
		//await t.maximizeWindow(); //Memperbesar Layar
		await t.expect(Selector('.sg-user').exists).ok();//Cek pada halaman setelah login muncul icon user pojok kiri atas
		await t.expect(Selector('.title-menu').innerText).eql('Menu Utama');//Cek Label Menu
		await t.click(Selector('#\\31 _menu > span > div').withText('Manajemen Dasbor'));//Klik Manajemen Dasbor
		await t.expect(Selector('.title-menu').innerText).eql('Dasbor'); //Cek label DasborS
		await t.click(Selector('#\\33 _menu > span > div'));
		await t.expect(Selector('.dashboard-title').innerText).eql('Dasbor Fluktuasi');		
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('.navbar-brand');//kembali ke halaman utama
	});

test('Akses Dasbor WP & OP', async t => {
		//await t.maximizeWindow(); //Memperbesar Layar
		await t.expect(Selector('.sg-user').exists).ok();//Cek pada halaman setelah login muncul icon user pojok kiri atas
		await t.expect(Selector('.title-menu').innerText).eql('Menu Utama');//Cek Label Menu
		await t.click(Selector('#\\31 _menu > span > div').withText('Manajemen Dasbor'));//Klik Manajemen Dasbor
		await t.expect(Selector('.title-menu').innerText).eql('Dasbor'); //Cek label DasborS
		await t.click(Selector('#\\32 _menu > span > div'));
		await t.expect(Selector('.dashboard-title').innerText).eql('Dasbor Wajib Pajak & Objek Pajak');
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('.navbar-brand');//kembali ke halaman utama
});

test('Akses Dasbor Tunggakan dan Denda', async t => {
		//await t.maximizeWindow(); //Memperbesar Layar
		await t.expect(Selector('.sg-user').exists).ok();//Cek pada halaman setelah login muncul icon user pojok kiri atas
		await t.expect(Selector('.title-menu').innerText).eql('Menu Utama');//Cek Label Menu
		await t.click(Selector('#\\31 _menu > span > div').withText('Manajemen Dasbor'));//Klik Manajemen Dasbor
		await t.expect(Selector('.title-menu').innerText).eql('Dasbor'); //Cek label DasborS
		await t.click(Selector('#\\35 _menu > span > div'));
		await t.expect(Selector('.dashboard-title').innerText).eql('Dasbor Tunggakan dan Denda');
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('#btn_fullscreen');//Klik Fullscreen
		await t.wait(1000);
		await t.click('.navbar-brand');//kembali ke halaman utama
});

test('Akses User Management', async t => {
		//await t.maximizeWindow(); //Memperbesar Layar
		await t.expect(Selector('.sg-user').exists).ok();//Cek pada halaman setelah login muncul icon user pojok kiri atas
		await t.expect(Selector('.title-menu').innerText).eql('Menu Utama');//Cek Label Menu
		await t.click(Selector('#\\31 _menu > span > div').withText('Manajemen Pengguna'));//Klik Manajemen Dasbor
		await t.expect(Selector('.pageTitle').innerText).contains('Manajemen User');
		await t.wait(1000);
		await t.click('.navbar-brand');//kembali ke halaman utama
	},{preserveUrl: true} );

test('Fungsi di User Management', async t => {
		//await t.maximizeWindow(); //Memperbesar Layar
		await t.expect(Selector('.sg-user').exists).ok();//Cek pada halaman setelah login muncul icon user pojok kiri atas
		await t.expect(Selector('.title-menu').innerText).eql('Menu Utama');//Cek Label Menu
		await t.click(Selector('#\\31 _menu > span > div').withText('Manajemen Pengguna'));//Klik Manajemen Dasbor
		await t.wait(1000);
		//Mengecek apakah sort ascending atau descending
		await t.expect(Selector('th').nth(1).getAttribute('aria-sort')).eql('ascending');
		//Klik tabel header username untuk melakukan sorting
		await t.click(Selector('th').nth(1));
		//Mengecek apakah sort ascending atau descending
		await t.expect(Selector('th').nth(1).getAttribute('aria-sort')).eql('descending');
		await t.click(Selector('th').nth(1));
		//Menginput Page 2
		await t.typeText(Selector('.paginate_input'),'2',{replace:true});
		//Melakukan Enter
		await t.pressKey('enter');
		//Mengecek tabel berisi kata teste atau tidak
		await t.expect(Selector('tr').find('td').parent('#table_user').innerText).contains('test9');
		//Klik ke Halaman sebelumnya
		await t.click('#table_user_previous');
		//Mengecek tabel berisi kata teste atau tidak
		await t.expect(Selector('tr').find('td').parent('#table_user').innerText).contains('admi');
		//Klik ke haalaman selanjutnya
		await t.click('#table_user_next');
		//Mengecek tabel berisi kata teste atau tidak
		await t.expect(Selector('tr').find('td').parent('#table_user').innerText).contains('test9');
		//Klik ke haalaman selanjutnya
		await t.click('#table_user_next');
		//Mengetik di textbox search filter
		await t.typeText('#search_filter','ad');
		//Klik tombol Filter
		await t.click('#btn_filter');
		//Mengecek apakah table berisi kata yang berisi huruf atau kata yang di ketikan di atas
		await t.expect(Selector('tr').find('td').parent('#table_user').innerText).contains('ad');
		//Mengetik kembali di textbox search dengan mereplace yang sebelumnya
		await t.typeText('#search_filter','te', {replace: true});
		//Klik tombol Filter
		await t.click('#btn_filter');
		//Mengecek apakah table berisi kata yang berisi huruf atau kata yang di ketikan di atas
		await t.expect(Selector('tr').find('td').parent('#table_user').innerText).contains('te');
		//kembali ke halaman utama
		await t.click('.navbar-brand');
	});
