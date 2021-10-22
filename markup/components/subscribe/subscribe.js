
const subscribeForms = document.getElementsByClassName('subscribe-proto__form');

for (let i = 0; i < subscribeForms.length; i++) {
    subscribeForms[i].onsubmit = (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        const data = {
            email: e.srcElement[0].value
        };
        xhr.open('POST', 'https://api.dev.eywa.fi/subscription-email-lists', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => {
            e.srcElement[0].value = '';
        };
        xhr.send(JSON.stringify(data));
    };
}
