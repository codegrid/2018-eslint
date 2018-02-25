var tmpl = _.template(
    '<div class="<%- type %>"><%- msg %></div>'
)
var notify = function(msg, type){
      var html = tmpl({msg: msg, type: type});
    console.log(html);
    $('.info').html(html);
};
setTimeout(function() {
    notify("Hello ESLint!", 'info');
}, 500);
