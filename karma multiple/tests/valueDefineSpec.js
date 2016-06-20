describe('This suite is to test for defined values', function() {
	it('This tests if the function checks for values defined or not', function(){
		var val=defined();
		expect(val).toBeDefined;
	});
});