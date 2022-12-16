var kill = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
document.write('<pre>', JSON.stringify(
    ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'].reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {}), null, 2), '</pre>');

