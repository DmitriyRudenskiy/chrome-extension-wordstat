var wordstat = function(type, row) {

	var result = [];

	$(type + ' ' + row).each(function() {
		var count = $(this).find('td:last').text().replace(/[^0-9]/gi, '') * 1;

		if (count > 0) {
			var item = {
				'text': $(this).find('td:first').text().trim(),
				'count': count
			};

			result.push(item);
		}
	});

	return {
		'count': function() {
			return result.length;
		},
		'get': function() {
			return result;
		}
	}
};

var runner = function(options) {
	var response = {
		'query': $(options.input).val().trim(),
		'including': wordstat(options.including, options.row).get(),
		'associations': wordstat(options.associations, options.row).get()
	};

/*
	$.ajax({
		type: "POST",
		url: options.url,
		cache: false,
		dataType: "json",
		data: response,
		success: function(response) {
			console.log('I work!');

			alert('Нет запросов!');

			//$(options.input).val('парсинг сайтов').parents('form').submit();
		}
	});
	*/
};