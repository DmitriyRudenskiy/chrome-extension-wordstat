$('[type=submit]').on('click', function() {
    setTimeout(function() {
        runner({
            'including': '.b-word-statistics__including-phrases',
            'associations': '.b-word-statistics__phrases-associations',
            'row': '.b-word-statistics__tr',
            'input': 'input.b-form-input__input',
            'url': 'http://dnor.ru'
        });
    }, 1000)
});