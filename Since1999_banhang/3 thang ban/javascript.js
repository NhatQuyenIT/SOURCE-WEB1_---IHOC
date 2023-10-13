// JavaScript Document
createProduct();
createAdmin();

function currency(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}

function showMenu() {
    var menuList = ['ADIDAS', 'NIKE', 'GUCCI', 'BALENCIAGA'];
    var ul = document.getElementById('navmenu');
    var li = '<li><a href="index.html">TRANG CHỦ</a></li>';
    for (var i = 0; i < menuList.length; i++) {
        li += '<li><a href="index.html?' + menuList[i].toLowerCase() + '&0">' + menuList[i] + '</a></li>';
        ul.innerHTML = li;
    }
}

function showMenu2() {
    var menuList = ['ADIDAS', 'NIKE', 'GUCCI', 'BALENCIAGA'];
    var ul = document.getElementById('navmenu');
    var li = '<li><a href="index.html">TRANG CHỦ</a></li>';
    for (var i = 0; i < menuList.length; i++) {
        li += '<li><a href="index.html?' + menuList[i].toLowerCase() + '&0">' + menuList[i] + '</a></li>';
        ul.innerHTML = li;
    }
}

function showMenuMobile() {
    var btn = document.getElementById('btnmenu');
    if (btn.className == "") {
        document.getElementById('btnmenu').classList.add('show');
        document.getElementById('btnmenu').innerHTML = '&times;';
        document.getElementById('navmenu').classList.add('active');

    } else {
        document.getElementById('btnmenu').classList.remove('show');
        document.getElementById('btnmenu').innerHTML = '&#9776;';
        document.getElementById('navmenu').classList.remove('active');
    }

}

/*PRODUCT*/
function createProduct() {
    if (localStorage.getItem('product') === null) {
        var productArray = [
            {
                productId: 10042,
                brand: 'adidas',
                img: 'images/product/10042.jpg',
                name: 'Stan Smith Green',
                price: 2500000
            },
            {
                productId: 10041,
                brand: 'nike',
                img: '3 thang ban/images/banner_nike.jpg',
                name: 'Air max 1 Just do it',
                price: 5700000
            },
            {
                productId: 10040,
                brand: 'adidas',
                img: 'images/product/10040.jpg',
                name: 'Superstar White Gold',
                price: 2100000
            },
            {
                productId: 10039,
                brand: 'adidas',
                img: 'images/product/10039.jpg',
                name: 'Stan Smith Leather White',
                price: 3030000
            },
            {
                productId: 10038,
                brand: 'gucci',
                img: 'images/product/10038.jpg',
                name: 'Gucci Snake Diamond',
                price: 18455000
            },
            {
                productId: 10037,
                brand: 'gucci',
                img: 'images/product/10037.jpg',
                name: 'Gucci Sneaker Dirty',
                price: 15000000
            },
            {
                productId: 10036,
                brand: 'balenciaga',
                img: 'images/product/10036.jpg',
                name: 'Balenciaga Speed Trainer Triple Black',
                price: 17050000
            },
            {
                productId: 10035,
                brand: 'nike',
                img: 'images/product/10035.jpg',
                name: 'Vapormax X OFF WHITE 2018',
                price: 7500000
            },
            {
                productId: 10034,
                brand: 'nike',
                img: '3 thang ban/images/banner_nike.jpg',
                name: 'AIR MAX 270 ALL WHITE',
                price: 4319000
            },
            {
                productId: 10033,
                brand: 'adidas',
                img: 'images/product/10033.jpg',
                name: 'Human Race China Exclusive Green',
                price: 10375000
            },
            {
                productId: 10032,
                brand: 'adidas',
                img: 'images/product/10032.jpg',
                name: 'Alpha Bounce Instinct All Black',
                price: 4300000
            },
            {
                productId: 10031,
                brand: 'gucci',
                img: 'images/product/10031.jpg',
                name: 'Gucci Global Sneaker',
                price: 16050000
            },
            {
                productId: 10030,
                brand: 'gucci',
                img: 'images/product/10030.jpg',
                name: 'Gucci Bee Black',
                price: 16000000
            },
            {
                productId: 10029,
                brand: 'balenciaga',
                img: 'images/product/10029.jpg',
                name: 'Balenciaga Triple S Grey',
                price: 33000000
            },
            {
                productId: 10028,
                brand: 'balenciaga',
                img: 'images/product/10028.jpg',
                name: 'Rick Owens SS17 High',
                price: 18050000
            },
            {
                productId: 10027,
                brand: 'nike',
                img: 'images/product/10027.jpg',
                name: 'Pegasus 35 Black',
                price: 7350000
            },
            {
                productId: 10026,
                brand: 'nike',
                img: 'images/product/10026.jpg',
                name: 'Air Max 97 Silver Bullet',
                price: 8150000
            },
            {
                productId: 10025,
                brand: 'adidas',
                img: 'images/product/10025.jpg',
                name: 'Alpha Bounce Beyond Nude/Pink',
                price: 4100000
            },
            {
                productId: 10024,
                brand: 'adidas',
                img: 'images/product/10024.jpg',
                name: 'Adidas YUNG1 Navy/Red',
                price: 4590000
            },
            {
                productId: 10023,
                brand: 'gucci',
                img: 'images/product/10023.jpg',
                name: 'Gucci Snake Sneaker',
                price: 16000000
            },
            {
                productId: 10022,
                brand: 'gucci',
                img: 'images/product/10022.jpg',
                name: 'Gucci Global Silver Sneaker',
                price: 18000000
            },
            {
                productId: 10021,
                brand: 'adidas',
                img: 'images/product/10021.jpg',
                name: 'Yeezy 350 v2 ‘ Zebra ‘ Rep',
                price: 10255000
            },
            {
                productId: 10020,
                brand: 'adidas',
                img: 'images/product/10020.jpg',
                name: 'Yeezy 350 v2 Beluga 2.0',
                price: 9500000
            },
            {
                productId: 10019,
                brand: 'nike',
                img: 'images/product/10019.jpg',
                name: 'Air Max 270 Black Pink',
                price: 6250000
            },
            {
                productId: 10018,
                brand: 'nike',
                img: 'images/product/10018.jpg',
                name: 'Air max 1 x Parra',
                price: 15549000
            },
            {
                productId: 10017,
                brand: 'adidas',
                img: 'images/product/10017.jpg',
                name: 'Human Race China Exclusive Peace',
                price: 10375000
            },
            {productId: 10016, brand: 'adidas', img: 'images/product/10016.jpg', name: 'YUNG1 Frieza', price: 4130000},
            {
                productId: 10015,
                brand: 'gucci',
                img: 'images/product/10015.jpg',
                name: 'Gucci Fox Sneaker',
                price: 16000000
            },
            {
                productId: 10014,
                brand: 'gucci',
                img: 'images/product/10014.jpg',
                name: 'Gucci Stripe Sneaker',
                price: 15099000
            },
            {
                productId: 10013,
                brand: 'balenciaga',
                img: 'images/product/10013.jpg',
                name: 'Rick Owens SS17 Low',
                price: 23100000
            },
            {
                productId: 10012,
                brand: 'balenciaga',
                img: 'images/product/10012.jpg',
                name: 'Balenciaga Triple S Black',
                price: 21255000
            },
            {
                productId: 10011,
                brand: 'nike',
                img: 'images/product/10011.jpg',
                name: 'Air max 1 Box Print',
                price: 2330000
            },
            {
                productId: 10010,
                brand: 'nike',
                img: 'images/product/10010.jpg',
                name: 'Nike Element 87 Black',
                price: 5295000
            },
            {
                productId: 10009,
                brand: 'adidas',
                img: 'images/product/10009.jpg',
                name: 'Human Race V3 Solar Black',
                price: 12355000
            },
            {
                productId: 10008,
                brand: 'adidas',
                img: 'images/product/10008.jpg',
                name: 'Adidas Alpha Bounce Instinct Grey',
                price: 2799000
            },
            {productId: 10007, brand: 'gucci', img: 'images/product/10007.jpg', name: 'Gucci LOVED', price: 15600000},
            {
                productId: 10006,
                brand: 'gucci',
                img: 'images/product/10006.jpg',
                name: 'Gucci Flame Sneaker',
                price: 17099000
            },
            {
                productId: 10005,
                brand: 'balenciaga',
                img: 'images/product/10005.jpg',
                name: 'Balenciaga Triple S White',
                price: 20395000
            },
            {
                productId: 10004,
                brand: 'balenciaga',
                img: 'images/product/10004.jpg',
                name: 'Balenciaga Speed Trainer BB',
                price: 17020000
            },
            {productId: 10003, brand: 'nike', img: 'images/product/10003.jpg', name: 'Nike M2K John', price: 2949000},
            {
                productId: 10002,
                brand: 'nike',
                img: 'images/product/10002.jpg',
                name: 'Nike Pegasus 35 Grey',
                price: 5350000
            },
            {
                productId: 10001,
                brand: 'adidas',
                img: 'images/product/10001.jpg',
                name: 'Adidas Prophere Undefeated',
                price: 6599000
            },
            {
                productId: 10000,
                brand: 'adidas',
                img: 'images/product/10000.jpg',
                name: 'Adidas Yeezy 350 v2 ‘ Oreo ‘ Rep',
                price: 15000000
            },
        ];
        localStorage.setItem('product', JSON.stringify(productArray));
    }
}

function showProduct() {
    var url = document.location.href;
    var temp = url.split("?");
    var s = '';
    var productArray = JSON.parse(localStorage.getItem('product'));
    if (temp[1] == '' || temp[1] == undefined || temp[1].search('all') == 0) {
        if (temp[1] == '' || temp[1] == undefined) {
            temp = 'all&0';
        } else {
            temp = temp[1];
        }
        var temp2 = temp.split("&");
        var vitri = temp2[1];
        var sotrang = 0, dem = 0;
        for (var i = vitri; i < productArray.length; i++) {
            s += '<div class="card">' +
                '<img src="' + productArray[i].img + '">' +
                '<p>' + productArray[i].name + '</p>' +
                '<p> Price: ' + currency(productArray[i].price) + '</p>' +
                '<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
            dem++;
            if (dem == 12)
                break;
        }
        sotrang = Math.ceil(productArray.length / 12);
        var lienket = '';
        for (var i = 1; i <= sotrang; i++) {
            vitri = (i - 1) * 12;
            var a = '<a href="index.html?all&' + vitri + '">' + i + '</a>';
            lienket += '<div class="pageNumber">' + a + '</div>';
        }
        document.getElementById('page').innerHTML = lienket;
    } else {
        temp = temp[1];
        var temp2 = temp.split("&");
        var brand = temp2[0];
        var vitri = temp2[1];
        var sotrang = 0, dem = 0;
        var arrtempt = [];
        for (var i = 0; i < productArray.length; i++) {
            if (brand == productArray[i].brand)
                arrtempt.push(productArray[i]);
        }
        for (var i = vitri; i < arrtempt.length; i++) {
            s += '<div class="card">' +
                '<img src="' + arrtempt[i].img + '">' +
                '<p>' + arrtempt[i].name + '</p>' +
                '<p> Price: ' + currency(arrtempt[i].price) + '</p>' +
                '<button class="btn" onClick="showProductInfo(' + arrtempt[i].productId + ')">Chi tiết</button></div>';
            dem++;
            if (dem == 8)
                break;
        }
        sotrang = Math.ceil(arrtempt.length / 8);
        var lienket = '';
        for (var i = 1; i <= sotrang; i++) {
            vitri = (i - 1) * 8;
            var a = '<a href="index.html?' + brand + '&' + vitri + '">' + i + '</a>';
            lienket += '<div class="pageNumber">' + a + '</div>';
        }
        document.getElementById('page').innerHTML = lienket;
    }
    document.getElementById('product').innerHTML = s;
}

function showProductInfo(productid) {
    document.getElementById('productInfo').style.display = 'block';
    var productArray = JSON.parse(localStorage.getItem('product'));
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].productId == productid) {
            document.getElementById('productname').innerHTML = productArray[i].name;
            document.getElementById('productprice').innerHTML = 'Giá: ' + currency(productArray[i].price);
            document.getElementById('imgbig').src = productArray[i].img;
            document.getElementById('size').value = 36;
            document.getElementById('quantity').value = 1;
            document.querySelector('#info .right button.addtocart').setAttribute('onClick', 'addToCart(' + productid + ')');
        }
    }
}

function closeProductInfo() {

    document.getElementById('productInfo').style.display = 'none';
}

/*END PRODUCT*/

/*CART*/
function addToCart(productid1) {
    var size = document.getElementById('size').value;
    var quantity = document.getElementById('quantity').value;
    var productArray = JSON.parse(localStorage.getItem('product'));
    var producttemp;
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].productId == productid1) {
            producttemp = productArray[i];
        }
    }
    if (localStorage.getItem('cart') === null) {
        var cartArray = [];
        producttemp.quantity = quantity;
        producttemp.size = size;
        producttemp.totalprice = quantity * producttemp.price;
        cartArray.unshift(producttemp);
        localStorage.setItem('cart', JSON.stringify(cartArray));
    } else {
        var cartArray = JSON.parse(localStorage.getItem('cart'));
        producttemp.quantity = quantity;
        producttemp.size = size;
        producttemp.totalprice = quantity * producttemp.price;
        cartArray.unshift(producttemp);
        localStorage.setItem('cart', JSON.stringify(cartArray));
    }
    closeProductInfo();
}

function showCartTable() {
    if (localStorage.getItem('cart') === null || localStorage.getItem('cart') == '[]') {
        var s = '<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
        document.getElementById('carttable').innerHTML = s;
        document.getElementById('totalprice').innerHTML = 0;
    } else {
        var cartArray = JSON.parse(localStorage.getItem('cart'));
        var s = '<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
        var totalprice = 0;
        for (var i = 0; i < cartArray.length; i++) {
            s += '<tr>' +
                '<td><img src="../' + cartArray[i].img + '"></td>' +
                '<td>' +
                '<div>' + cartArray[i].name + '</div>' +
                '<div>Size: ' + cartArray[i].size + '</div>' +
                '</td>' +
                '<td>' + currency(cartArray[i].price) + '</td>' +
                '<td>' +
                '<button onClick="quantitydown2(' + cartArray[i].productId + ')">-</button>' +
                '<input id="quantity" type="text" disabled value="' + cartArray[i].quantity + '" onchange="updateCart(this.value,' + cartArray[i].productId + ')">' +
                '<button onClick="quantityup2(' + cartArray[i].productId + ')">+</button>' +
                '</td>' +
                '<td>' + currency(cartArray[i].price * cartArray[i].quantity) + '</td>' +
                '<td><button onClick="deletecartitem(' + cartArray[i].productId + ')">&times;</buttom></td>' +
                '</tr>';
            totalprice += cartArray[i].price * cartArray[i].quantity;
        }
        document.getElementById('carttable').innerHTML = s;
        document.getElementById('totalprice').innerHTML = currency(totalprice);
    }
}

function deletecartitem(id) {
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].productId == id) {
            cartArray.splice(i, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
    showCartTable();
}

function deletecart() {
    localStorage.removeItem('cart');
    showCartTable();
}

function updateCart(quantity, id) {
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].productId == id) {
            cartArray[i].quantity = quantity;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
    showCartTable();
}

function quantitydown() {
    if (document.getElementById('quantity').value > 1) {
        document.getElementById('quantity').value--;
    }
}

function quantityup() {

    document.getElementById('quantity').value++;
}

function quantitydown2(id) {
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].productId == id) {
            if (cartArray[i].quantity > 1)
                cartArray[i].quantity--;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
    showCartTable();
}

function quantityup2(id) {
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].productId == id) {
            cartArray[i].quantity++;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
    showCartTable();
}

function buy() {
    if (localStorage.getItem('userlogin') === null) {
        customAlert('Bạn phải đăng nhập để mua sản phẩm', 'warning');
        return false;
    }
    var info = '';
    var totalprice = 0;
    if (localStorage.getItem('cart') === null || localStorage.getItem('cart') == '[]') {
        return false;
    }
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cartArray.length; i++) {
        info += cartArray[i].quantity + ' x ' + cartArray[i].name + ' size ' + cartArray[i].size + '; ';
        totalprice += cartArray[i].quantity * cartArray[i].price;
    }
    var customer = JSON.parse(localStorage.getItem('userlogin'));
    var date = new Date();
    var d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    if (localStorage.getItem('bill') === null) {
        var billArray = [];
        var bill = {
            id: billArray.length,
            info: info,
            totalprice: totalprice,
            customer: customer,
            date: d,
            status: 'Chưa xử lý'
        };
        billArray.unshift(bill);
        localStorage.setItem('bill', JSON.stringify(billArray));
    } else {
        var billArray = JSON.parse(localStorage.getItem('bill'));
        var bill = {
            id: billArray.length,
            info: info,
            totalprice: totalprice,
            customer: customer,
            date: d,
            status: 'Chưa xử lý'
        };
        billArray.unshift(bill);
        localStorage.setItem('bill', JSON.stringify(billArray));
    }
    localStorage.removeItem('cart');
    showCartTable();
    showbill();
}

function showbill() {
    if (localStorage.getItem('bill') === null) {
        document.getElementById('bill').style.display = 'none';
    } else {
        var user = JSON.parse(localStorage.getItem('userlogin'))
        var billArray = JSON.parse(localStorage.getItem('bill'));
        var s = '<h2>Đơn hàng đã đặt</h2>';
        for (var i = 0; i < billArray.length; i++) {
            if (user.username == billArray[i].customer.username) {
                document.getElementById('bill').style.display = 'block';
                s += '<div class="billcontent">' +
                    '<div>' + billArray[i].info + '</div>' +
                    '<div>' + currency(billArray[i].totalprice) + '</div>' +
                    '<div>' + billArray[i].date + '</div>' +
                    '<div>' + billArray[i].status + '</div>' +
                    '</div>';
            }
        }
        document.getElementById('bill').innerHTML = s;
    }
}

/*END CART*/

/*SEARCH*/
function showSearch() {

    document.getElementById('searchsection').style.display = 'block';
}

function closeSearch() {

    document.getElementById('searchsection').style.display = 'none';
}

function search() {
    var productsearch = document.getElementById('search').value.toLowerCase();
    var productArray = JSON.parse(localStorage.getItem('product'));
    var s = '';
    if (document.getElementById('searchextend').className == '') {
        for (var i = 0; i < productArray.length; i++) {
            if ((productArray[i].name.toLowerCase().search(productsearch) != -1 || productArray[i].brand.toLowerCase().search(productsearch) != -1) && productsearch != '') {
                s += '<div class="card">' +
                    '<img src="' + productArray[i].img + '">' +
                    '<p>' + productArray[i].name + '</p>' +
                    '<p> Giá: ' + currency(productArray[i].price) + '</p>' +
                    '<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
            }
        }
    } else {
        var brandsearch = document.getElementById('brandsearch').value;
        var priceform = document.getElementById('priceform').value;
        var priceto = document.getElementById('priceto').value;
        if (brandsearch == 'all') {
            for (var i = 0; i < productArray.length; i++) {
                if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].price >= priceform && productArray[i].price <= priceto) {
                    s += '<div class="card">' +
                        '<img src="' + productArray[i].img + '">' +
                        '<p>' + productArray[i].name + '</p>' +
                        '<p> Giá: ' + currency(productArray[i].price) + '</p>' +
                        '<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
                }
            }
        } else {
            for (var i = 0; i < productArray.length; i++) {
                if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].brand == brandsearch && productArray[i].price >= priceform && productArray[i].price <= priceto) {
                    s += '<div class="card">' +
                        '<img src="' + productArray[i].img + '">' +
                        '<p>' + productArray[i].name + '</p>' +
                        '<p> Giá: ' + currency(productArray[i].price) + '</p>' +
                        '<button class="btn" onClick="showProductInfo(' + productArray[i].productId + ')">Chi tiết</button></div>';
                }
            }
        }

    }
    document.getElementById('searchresult').innerHTML = s;
}

function showextend() {
    if (document.getElementById('searchextend').className == '') {
        document.getElementById('searchextend').classList.add('active')
        document.querySelector('#searchsection .searchbox button img').src = 'images/icon/arrow2.svg';
    } else {
        document.getElementById('searchextend').classList.remove('active');
        document.querySelector('#searchsection .searchbox button img').src = 'images/icon/arrow.svg';
        var priceform = document.getElementById('priceform').value = "";
        var priceto = document.getElementById('priceto').value = "";
    }
}

function showextend2() {
    if (document.getElementById('searchextend').className == '') {
        document.getElementById('searchextend').classList.add('active')
        document.querySelector('#searchsection .searchbox button img').src = '../images/icon/arrow2.svg';
    } else {
        document.getElementById('searchextend').classList.remove('active');
        document.querySelector('#searchsection .searchbox button img').src = '../images/icon/arrow.svg';
        var priceform = document.getElementById('priceform').value = "";
        var priceto = document.getElementById('priceto').value = "";
    }
}

/*END SEARCH*/

/*USER*/
function createAdmin() {
    if (localStorage.getItem('user') === null) {
        var userArray = [];
        var user = {
            username: 'admin',
            password: 'admin',
            fullname: 'Đào Phú Duy Tân',
            address: '273 An Dương Vương, P3, Quận 5, TPHCM',
            phone: '0566490523',
            datesignup: '23-11-1999'
        };
        userArray.push(user);
        localStorage.setItem('user', JSON.stringify(userArray));
    }
}

function showform() {
    var userform = document.getElementById('user');
    userform.style.display = 'block';
}

function closeform() {
    var userform = document.getElementById('user');
    userform.style.display = 'none';
}

function showSignUp() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

document.getElementById('signupform').addEventListener('submit', createUser);
document.getElementById('loginform').addEventListener('submit', login);

function createUser(e) {
    e.preventDefault();
    var fullname = document.getElementById('fullname');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var username = document.getElementById('usernameSignUp');
    var password = document.getElementById('passwordSignUp');
    var password2 = document.getElementById('passwordSignUp2');
    var flag = true;
    if (!fullname.value) {
        document.getElementById('fullnameerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('fullnameerror').style.display = 'none';
    }
    if (!address.value) {
        document.getElementById('addresserror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('addresserror').style.display = 'none';
    }
    if (!phone.value) {
        document.getElementById('phoneerror').style.display = 'block';
        flag = false;
    } else {
        if (isNaN(Number(phone.value))) {
            document.getElementById('phoneerror').style.display = 'block';
            document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
            flag = false;
        } else {
            if (Number(phone.value) < 100000000 || Number(phone.value) > 999999999) {
                document.getElementById('phoneerror').style.display = 'block';
                document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
                flag = false;
            } else {
                document.getElementById('phoneerror').style.display = 'none';
            }
        }
    }
    if (!username.value) {
        document.getElementById('usererror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('usererror').style.display = 'none';
    }
    if (!password.value) {
        document.getElementById('passworderror').style.display = 'block';
        flag = false;
    } else {
        if (password.value.length < 8) {
            document.getElementById('passworderror').style.display = 'block';
            document.getElementById('passworderror').innerHTML = 'Mật khẩu phải trên 8 ký tự';
            flag = false;
        } else {
            document.getElementById('passworderror').style.display = 'none';
        }
    }
    if (password2.value != password.value) {
        document.getElementById('password2error').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('password2error').style.display = 'none';
    }
    if (flag == false) {
        return false;
    }
    var d = new Date();
    var datesignup = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    var user = {
        username: username.value,
        password: password.value,
        fullname: fullname.value,
        address: address.value,
        phone: phone.value,
        datesignup: datesignup
    };
    var userArray = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < userArray.length; i++) {
        if (user.username == userArray[i].username) {
            document.getElementById('usererror').style.display = 'block';
            document.getElementById('usererror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
            username.focus();
            return false;
        }
    }
    userArray.push(user);
    localStorage.setItem('user', JSON.stringify(userArray));
    customAlert('Bạn đã đăng ký thành công!', 'success');
    showLogin();
}

function login(e) {
    e.preventDefault();
    var username = document.getElementById('usernameLogin').value;
    var password = document.getElementById('passwordLogin').value;
    var flag = true;
    if (!username) {
        document.getElementById('usernameerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('usernameerror').style.display = 'none';
    }
    if (!password) {
        document.getElementById('passwordloginerror').style.display = 'block';
        flag = false;
    } else {
        document.getElementById('passwordloginerror').style.display = 'none';
    }
    if (flag == false) {
        return false;
    }
    var userArray = JSON.parse(localStorage.getItem('user'));
    for (var i = 0; i < userArray.length; i++) {
        if (username == userArray[i].username) {
            if (password == userArray[i].password) {
                closeform();
                localStorage.setItem('userlogin', JSON.stringify(userArray[i]));
                window.location.reload(true);
                return true;
            }
        }
    }
    document.getElementById('passwordloginerror').style.display = 'block';
    document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
    return false;
}

function logout(url) {
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    location.href = url;
}

function checklogin() {
    if (localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var s = '';
        if (user.username == 'admin') {
            s = '<li><button onClick="window.location.href=\'admin/product.html\'"><img src="images/icon/settings.svg"></button></li>' +
                '<li><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
                '<li><button onClick="location.href=\'cart.html\'"><img src="images/icon/carticon.svg"></button></li>' +
                '<li><button onClick="showSearch()"><img src="images/icon/searchicon.svg"></button></li>';
        } else {
            s = '<li><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
                '<li><button onClick="location.href=\'cart.html\'"><img src="images/icon/carticon.svg"></button></li>' +
                '<li><button onClick="showSearch()"><img src="images/icon/searchicon.svg"></button></li>';
        }
        document.querySelector('#nav .topnav ul.right').innerHTML = s;
    }
}

function checklogin2() {
    if (localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var s = '';
        if (user.username == 'admin') {
            s = '<li><button onClick="window.location.href=\'../admin/product.html\'"><img src="../images/icon/settings.svg"></button></li>' +
                '<li><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
                '<li><button onClick="location.href=\'cart.html\'"><img src="../images/icon/carticon.svg"></button></li>' +
                '<li><button onClick="showSearch()"><img src="../images/icon/searchicon.svg"></button></li>';
        } else {
            s = '<li><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>' +
                '<li><button onClick="location.href=\'cart.html\'"><img src="../images/icon/carticon.svg"></button></li>' +
                '<li><button onClick="showSearch()"><img src="../images/icon/searchicon.svg"></button></li>';
        }
        document.querySelector('#nav .topnav ul.right').innerHTML = s;
    }
}

/*END USER*/

/*CUSTOM ALERT BOX*/
function customAlert(message, type) {
    if (type == 'success') {
        document.getElementById("customalert").style.backgroundColor = '#4CAF50';
    }
    if (type == 'warning') {
        document.getElementById("customalert").style.backgroundColor = '#f44336';
    }
    document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function () {
        x.className = x.classList.remove("show");
    }, 3500);
}

//Banner begin
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideShow");
    //var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[slideIndex - 1].style.display = "block";
    //dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}

//Banner end