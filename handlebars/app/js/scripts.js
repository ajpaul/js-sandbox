document.addEventListener("DOMContentLoaded", function() {

    var source = document.querySelector("#lights-template").innerHTML;
    template = Handlebars.compile(source);

    var html = template(json);
    document.querySelector("#data-section").innerHTML = html;

});