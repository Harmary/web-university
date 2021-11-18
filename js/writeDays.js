for (let i = 0; i < 6; i++) {
    document.write('<tr>');
    for (let j = 0; j < 7; j++) {
        document.write('<td class="date-link" id="td-' + i + '-' + j + '">🗓</td>');
    }
    document.write('</tr>');
}