import * as $ from 'jquery';

const tmpl =
  (params) => `<div class="${params.type}">${params.msg}</div>`;

const notify = (msg, type) => {
    const html = tmpl({msg, type});
    console.log(html); // eslint-disable-line
    $('.info').html(html);
};
setTimeout(() => {
    notify('Hello ESLint!', 'info');
}, 500);
