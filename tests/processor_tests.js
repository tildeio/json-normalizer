(function() {

var Processor = JSONNormalizer.Processor;

module("Processor");

test("A Processor can be created with JSON", function() {
	var json = {
		myKewlJSON: true
	};

	var processor = new Processor(json);
	equal(processor.json, json, "the JSON was saved on the Processor");
});

test("A Processor can camelize the keys in a JSON object", function() {
	var json = {
		rails_is_omakase: "wubwubwubwub",
		ember_is_easy_no_it_isnt: "*czzt*"
	};

	var processor = new Processor(json);
	processor.camelizeKeys();

	deepEqual(processor.json, {
		railsIsOmakase: "wubwubwubwub",
		emberIsEasyNoItIsnt: "*czzt*"
	}, "the keys were camelized");
});

})();