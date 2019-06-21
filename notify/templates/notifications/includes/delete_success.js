var deleteSuccess = function (response, notification) {
    //console.log(response);
    var $selected_notification = notification.closest(nfClassSelector);
    $selected_notification.fadeOut(300, function () {
        $(this).remove()
    });
    var $nf_count_badge = $('#badge-notifiche');
    var $nf_active_span = $('#notifiche-attive');
    var $nf_non_lette_span = $('#non-lette');
    var $box = $('#box-notifiche');
    var $no_notifications_div = $('#no-notifications');

    if (response.active_unread_count == 0) {
        $nf_count_badge.hide();

        $nf_active_span.html(response.actives);
        $nf_non_lette_span.html(response.active_unread_count)

    }
    else {

        $nf_count_badge.html(response.active_unread_count);
        $nf_active_span.html(response.actives);
        $nf_non_lette_span.html(response.active_unread_count)
        $nf_count_badge.show();



    }
    if (response.actives == 0) {
        $no_notifications_div.show()
    }
    else {
        $no_notifications_div.hide()
    }

};
