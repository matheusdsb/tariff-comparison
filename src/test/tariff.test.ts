import { expect, assert } from 'chai';
import { Tariff } from '../model/tariff.model';
import { BasicElectricityTariff } from '../model/basic-electricity-tariff.model';
import { PackagedTariff } from '../model/packaged-tariff.model';

describe('BasicElectricityTariff.annualCost', () => {

    it('Consumption = -1 => Should return Error', () => {    
        assert.throws(() => new BasicElectricityTariff(-1), Error);
    });

    it('Consumption = 3500 => Should return 830', () => {
        const basicElectricityTariff : Tariff = new BasicElectricityTariff(3500);
        expect(basicElectricityTariff.annualCost).to.equal(830);
    });

    it('Consumption = 4500 => Should return 1050', () => {
        const basicElectricityTariff : Tariff = new BasicElectricityTariff(4500);
        expect(basicElectricityTariff.annualCost).to.equal(1050);
    });
    
    it('Consumption = 6000 => Should return 1380', () => {
        const basicElectricityTariff : Tariff = new BasicElectricityTariff(6000);
        expect(basicElectricityTariff.annualCost).to.equal(1380);
    });    
});

describe('PackagedTariff.annualCost', () => {

    it('Consumption = null => Should return Error', () => {    
        assert.throws(() => new PackagedTariff(null), Error);
    });

    it('Consumption = 3500 => Should return 800', () => {
        const packagedTariff : Tariff = new PackagedTariff(3500);
        expect(packagedTariff.annualCost).to.equal(800);
    });  

    it('Consumption = 4500 => Should return 950', () => {
        const packagedTariff : Tariff = new PackagedTariff(4500);
        expect(packagedTariff.annualCost).to.equal(950);
    });  
    
    it('Consumption = 6000 => Should return 1400', () => {
        const packagedTariff : Tariff = new PackagedTariff(6000);
        expect(packagedTariff.annualCost).to.equal(1400);
    });      
});