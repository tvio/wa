var dateFormat = require('dateformat');

dateFormat.i18n = {
    dayNames: [
        'Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So',
        'Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'
    ],
    monthNames: [
        'Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čer', 'Červ', 'Srp', 'Říj', 'Lis', 'Pro',
        'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
    ],
    timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
};

function cformat (datum){
    return dateFormat(datum*1000)
};

module.exports.cformat = cformat;
