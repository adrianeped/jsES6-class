const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0; //valor dinamico que posso alterar


describe('Math class', function() {
    //hooks
    beforeEach(function () {
        value = 0;
    });

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, (value) => {
            expect(value).to.equal(10);
            //assert.equal(value, 10);
            done();
        });
    });

    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Adriane Antunes'
        };
        const obj2 = {
            name: 'Adriane Antunes'
        }

        expect(obj).to.deep.equal(obj2);
        /*
        expect(obj)
            .to.have.property('name')
            .equal('Adriane');
        */
        //expect(math.multiply(value, 5)).to.equal(0);
        //assert.equal(math.multiply(value, 5), 25)
    });

    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            //load: sinon.spy()
            load: function load(){
                console.log('Called');    
            } 
        };

        sinon.stub(res, 'load').returns('xpto');
        //sinon.spy(res, 'load');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][0]).to.be.equal('index');
    })

});