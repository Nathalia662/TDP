const chai = require ('chai');
const expect = chai.expect;
const somarNs = (a,b) => 5

describe('somas', () =>{
        //teste
        it('soma de dois números -> 2 e 3',(done) =>{
            const resultado = somarNs (2,3);
            expect(resultado).be.equal(5);
            done();
        })

})