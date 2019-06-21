var markSuccess = function (response, notification) {
    //console.log(response);
    //console.log(notification);
    if (response.action == 'read') {
        var mkClass = readNotificationClass;
        var mkIconClass = 'fa-envelope-open';
        var rmClass = unreadNotificationClass;
        var rmIconClass = 'fa-envelope';
        var action = 'unread';
    } else {
        mkClass = unreadNotificationClass;
        mkIconClass = 'fa-envelope';
        rmClass = readNotificationClass;
        rmIconClass = 'fa-envelope-open';
        action = 'read';
    }
    //console.log(notification.closest(nfClassSelector));
    notification.closest(nfSelector).removeClass(rmClass).addClass(mkClass);
    notification.attr('data-mark-action', action);
    notification.removeClass(rmIconClass).addClass(mkIconClass);

    toggle_text = notification.attr('data-toggle-text') || 'Mark as ' + action;
    notification.attr('data-toggle-text', notification.html());
    notification.html(toggle_text);

    var $nf_count_badge = $('#badge-notifiche');
    var $nf_active_span = $('#notifiche-attive');
    var $nf_non_lette_span = $('#non-lette');

    if (response.active_unread_count == 0) {
        $nf_count_badge.hide();

    } else {

        $nf_count_badge.show();
        //alert(response.unread);
        //console.log(response.avtives);
        $nf_count_badge.html(response.active_unread_count);
        $nf_active_span.html(response.actives);
        $nf_non_lette_span.html(response.active_unread_count)
    }

};
