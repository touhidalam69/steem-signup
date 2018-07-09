function createPayment() {
    var new_account = $('#userName').val();
    var paymentFrom = $('#paymentFrom').val();
    var emailId = $('#emailId').val();
    var account_invalid = steem.utils.validateAccountName(new_account);

    if (validateEmail(emailId) == false) {
        alert('Please Input Valid Email');
        $('#emailId').focus();
        return;
    }
    else if (account_invalid != null) {
        alert(account_invalid);
        $('#userName').focus();
        return;
    }
    else if (paymentFrom == '') {
        alert('Enter Pay From Account');
        $('#paymentFrom').focus();
    }
    else {
        steem.api.getAccounts([new_account], function (err, result) {
            if (result.length == 0) {
                var steemconnectlink = "https://steemconnect.com/sign/transfer?from=" + paymentFrom + "&to=touhidalam69&amount=4.000 STEEM&memo=" + new_account + "/" + emailId;
                window.location.replace(steemconnectlink);
            } else {
                alert('account already exists');
                $('#userName').focus();
            }
        });
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}