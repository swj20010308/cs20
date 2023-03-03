function toggleAddress (addressInfo, display) {
    for (let i = 0; i < addressInfo.length; i++) {
        addressInfo[i].style.display = display;
    }
}

function valid (lname, street, city, phone, total, isDelivery) {
    if (lname.value.trim().length == 0) {
        alert('Last name cannot be empty');
        return false;
    }
    if (isDelivery) {
        if (street.value.trim().length == 0) {
            alert('Need street for delivery');
            return false;
        }
        if (city.value.trim().length == 0) {
            alert('Need city for delivery');
            return false;
        }
    }
    if (phone.value.length != 7 && phone.value.length != 10) {
        alert('Invalid phone number');
        return false;
    }
    if (parseFloat(total.value) == 0) {
        alert('Cart is empty');
        return false;
    }
    return true;
}

function writeNewWindow (newWindow, menuItems, costList) {
    newWindow.document.write('<h3>Order Details</h3>');
    newWindow.document.write('<ul>');
    for (let i = 0; i < menuItems.length; i++) {
        let quan = document.querySelector('[name = "quan' + i + '"]');
        if (parseInt(quan.options[quan.selectedIndex].innerHTML) != 0) {
            newWindow.document.write(
                '<li>' +
                    menuItems[i].name +
                    ' &nbsp; quantity: ' +
                    quan.options[quan.selectedIndex].innerHTML +
                    ' &nbsp; cost: $' +
                    costList[i].value +
                    '</li>'
            );
        }
    }
    newWindow.document.write('</ul>');
    newWindow.document.write(
        '<p>Subtotal: $' +
            document.getElementById('subtotal').value +
            '</p><br>'
    );
    newWindow.document.write(
        '<p>Tax: $' + document.getElementById('tax').value + '</p><br>'
    );
    newWindow.document.write(
        '<p>Total: $' + document.getElementById('total').value + '</p><br>'
    );
}
