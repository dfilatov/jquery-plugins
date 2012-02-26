describe('jquery.identify specs', function() {

    it('same object should be identified', function() {
        var obj1 = {};

        expect($.identify(obj1)).toEqual($.identify(obj1));
    });

    it('different objects should have different id', function() {
        var obj1 = {},
            obj2 = {};

        expect($.identify(obj1)).not.toEqual($.identify(obj2));
    });

    it('object shouldn\'t have id if only getting used', function() {
        var obj1 = {};

        expect($.identify(obj1, true)).toBeUndefined();
    });

    it('object should have id on getting if before identified', function() {
        var obj1 = {},
            id = $.identify(obj1);

        expect($.identify(obj1, true)).toBe(id);
    });

    it('should return unique id without params', function() {
       expect($.identify()).not.toBe($.identify());
    });

});