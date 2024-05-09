const tulind = require("../index");
const chai = require("chai");
const expect = chai.expect;

describe("Tulip Node Test Suite", function() {
    console.log("Tulip Indicators version:", tulind.version);

    function arraysEqual(a, b) {
        if (a.length !== b.length) {
            console.log("Array length mismatch.");
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            expect(a[i]).to.be.closeTo(b[i], 0.0001);
        }
        return true;
    }

    describe("DEMA", function() {
        it("should calculate double exponential moving average correctly", function(done) {
            const input = [122.906,126.500,140.406,174.000,159.812,170.000,176.750,175.531,166.562,163.750,170.500,175.000,184.750,202.781];
            const expected = [172.0780,168.5718,170.2278,173.4940,180.5297,194.1428];
            tulind.indicators.dema.indicator([input], [5], function(err, results) {
                if (err) return done(err);
                expect(arraysEqual(results[0], expected)).to.be.true;
                done();
            });
        });
    });

    describe("SMA", function() {
        const input = [1,2,3,4,5,6,7,8,9,10];
        it("should calculate simple moving average correctly for period 2", function(done) {
            const expected = [1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5];
            tulind.indicators.sma.indicator([input], [2], function(err, results) {
                if (err) return done(err);
                expect(arraysEqual(results[0], expected)).to.be.true;
                done();
            });
        });
        // Additional tests for other periods can be added here in a similar manner
    });

    // Additional indicator tests (EMA, TEMA, Wilders) should be added here following the same pattern
});
