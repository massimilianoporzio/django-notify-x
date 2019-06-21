var updateSuccess = function (response) {
    var notification_box = $(nfBoxListClassSelector);
    var notifications = response.notifications;
    $.each(notifications, function (i, notification) {
        notification_box.prepend(notification.html);
    });
    var $nf_count_badge = $('#badge-notifiche');
    var $nf_active_span = $('#notifiche-attive');
    var $nf_non_lette_span = $('#non-lette');
    var $no_notifications_div = $('#no-notifications');

    //alert(response.unread);
    $nf_count_badge.html(response.active_unread_count);
    $nf_active_span.html(response.actives);
    $nf_non_lette_span.html(response.active_unread_count)

    if (response.active_unread_count == 0) {

        $nf_count_badge.hide();
    }
    else {

        $nf_count_badge.show();
    }
    if (response.actives == 0) {
        $no_notifications_div.show()
    }
    else {
        $no_notifications_div.hide()
    }

};
