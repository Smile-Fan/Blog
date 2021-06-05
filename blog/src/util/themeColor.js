export function themeColor(value) {
    if (value) {
        document.body.style.backgroundColor = '#484848';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    }
}