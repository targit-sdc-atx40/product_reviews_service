const json2csv = require('json2csv');

exports.get = (req, res) => {
    const fields = [
        'stars',
        'username',
        'body'
    ];

    const csv = json2csv({ data: '', fields: fields })

    res.set(`Content-Disposition, attachment;filename=evenMoreData.csv`);
    res.set(`Content-Type, application/octet-stream`);

    res.send(csv);
} 