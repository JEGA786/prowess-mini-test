function stickyHeader() {
    var a = $("header.stickyHeader").height();
    $(window).scrollTop() > a || $("header.stickyHeader").removeClass("topStripRemove")
}
$(document).ready(function() {
    $(".headerBottomContent .mainNavigation a.mobileNavIcon").click(function() {
        $(".headerBottomContent .mainNavigation nav").slideToggle()
    }),
    $(".headerBottomContent .mainNavigation ul li.parent > a").click(function(a) {
        a.preventDefault();
        var e = $(this).parent().children(".child-menu").slideToggle();
        console.log(e)
    }),
    $(".authorLogin a").click(function(a) {
        a.preventDefault(),
        $("body").addClass("fixed"),
        $(".loginContent").show(1e3)
    }),
    $(".loginContent .close a").click(function(a) {
        a.preventDefault(),
        $("body").removeClass("fixed"),
        $(".createAccount.active").removeClass("active"),
        $(".createAccount+.login").addClass("active"),
        $(".loginDetailsData .panel").removeClass("show"),
        $(".loginDetailsData .panel.loginFormData").addClass("show")
    }),
    $(".loginLeftContent a").click(function(a) {
        a.preventDefault(),
        $(this).parent().hasClass("active") || ($(this).parent().hasClass("createAccount") ? ($(".login.active").removeClass("active"),
        $(this).parent().addClass("active"),
        $(".loginDetailsData .panel").removeClass("show"),
        $(".loginDetailsData .panel.registerFormData ").addClass("show")) : ($(".createAccount.active").removeClass("active"),
        $(this).parent().addClass("active"),
        $(".loginDetailsData .panel").removeClass("show"),
        $(".loginDetailsData .panel.loginFormData").addClass("show")))
    }),
    $(".forGotPasswordLink").click(function(a) {
        a.preventDefault(),
        $("#loginFormData .loginData").slideUp(),
        $("#loginFormData .forgotPasswordData").slideDown()
    }),
    $(".backToLogin").click(function(a) {
        a.preventDefault(),
        $("#loginFormData .loginData").slideDown(),
        $("#loginFormData .forgotPasswordData").slideUp()
    }),
    $(".authorLoginData ul li.parent > a").click(function(a) {
        a.preventDefault(),
        $(this).parent().hasClass("active") ? ($(this).parent().removeClass("active"),
        $(this).parent().children(".userChildMenu").slideUp()) : ($(this).parent().addClass("active"),
        $(this).parent().children(".userChildMenu").slideDown())
    }),
    $('#inStores_wrapper.dataTables_wrapper .dataTables_filter input[type="search"]').attr("placeholder", "Customer Name/Title/ISBN"),
    stickyHeader()
}),
$(window).resize(function() {
    stickyHeader()
}),
$(window).scroll(function() {
    stickyHeader()
});
