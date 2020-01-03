import { Tariff } from './tariff.model';

export class BasicElectricityTariff extends Tariff {

    readonly baseCostPerMonthInEuros : number = 5;
    readonly consumptionCostInEuros : number = 0.22;

    getName = () => "basic electricity tariff";
    
    calculateAnnualCost = (consumptionPerYear: number) => { 
        
        const consumption  = consumptionPerYear * this.consumptionCostInEuros;
        
        //annual base cost
        const baseCost  = this.baseCostPerMonthInEuros * 12;

        return consumption + baseCost;
    };

    constructor(consumptionPerYear: number) {
        super();
        this.annualCost = this.calculateAnnualCost(consumptionPerYear);
    }
}