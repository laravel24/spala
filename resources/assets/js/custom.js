$(function () {
    "use strict";

    // ==============================================================
    // Spinner
    // ==============================================================

    $(function () {
        $(".preloader").fadeOut();
    });
    jQuery(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation()
    });

    // ==============================================================
    // Top header part and sidebar part
    // ==============================================================

    var set = function () {
        var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
        var topOffset = 70;
        if (width < 1170) {
            $("body").addClass("mini-sidebar");
            $('.navbar-brand span').hide();
            $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
        }
        else {
            $("body").removeClass("mini-sidebar");
            $('.navbar-brand span').show();
        }
        var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $(".page-wrapper").css("min-height", (height) + "px");
        }
    };
    $(window).ready(set);
    $(window).on("resize", set);
    $(document).on('click', '.sidebartoggler', function () {
        if ($("body").hasClass("mini-sidebar")) {
            $("body").trigger("resize");
            $(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
            $("body").removeClass("mini-sidebar");
            $('.navbar-brand span').show();
        }
        else {
            $("body").trigger("resize");
            $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
            $("body").addClass("mini-sidebar");
            $('.navbar-brand span').hide();
        }
    });
    $(".fix-header .topbar").stick_in_parent();
    $(document).on('click', ".nav-toggler", function () {
        $("body").toggleClass("show-sidebar");
    });

    // ==============================================================
    // Tooltip
    // ==============================================================

    $('.tooltips').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });

    // ==============================================================
    // Popover
    // ==============================================================

    $(function () {
        $('[data-toggle="popover"]').popover()
    });

    // ==============================================================
    // Sidebar menu
    // ==============================================================

    $(function () {
        $('#sidebarnav').metisMenu();
    });
    $('.scroll-sidebar').slimScroll({
        position: 'left'
        , size: "5px"
        , height: '100%'
        , color: '#dcdcdc'
    });
    $('.message-scroll').slimScroll({
        position: 'right'
        , size: "5px"
        , height: '570'
        , color: '#dcdcdc'
    });

    // ==============================================================
    // Resize all elements
    // ==============================================================

    $("body").trigger("resize");

    // ==============================================================
    // Collapsable cards
    // ==============================================================

    $(document).on("click", ".card-actions a", function (e) {
        if (e.preventDefault(), $(this).hasClass("btn-close")) $(this).parent().parent().parent().fadeOut();
    });

    (function ($, window, document) {
        var panelSelector = '[data-perform="card-collapse"]';
        $(panelSelector).each(function () {
            var $this = $(this)
                , parent = $this.closest('.card')
                , wrapper = parent.find('.card-body')
                , collapseOpts = {
                toggle: false
            };
            if (!wrapper.length) {
                wrapper = parent.children('.card-heading').nextAll().wrapAll('<div/>').parent().addClass('card-body');
                collapseOpts = {};
            }
            wrapper.collapse(collapseOpts).on('hide.bs.collapse', function () {
                $this.children('i').removeClass('fas fa-times').addClass('fas fa-plus');
            }).on('show.bs.collapse', function () {
                $this.children('i').removeClass('fas fa-plus').addClass('fas fa-times');
            });
        });
        $(document).on('click', panelSelector, function (e) {
            e.preventDefault();
            var parent = $(this).closest('.card');
            var wrapper = parent.find('.card-body');
            wrapper.collapse('toggle');
        });
    }(jQuery, window, document));
});
