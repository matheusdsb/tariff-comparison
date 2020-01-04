import { Tariff } from './tariff.model';

export class PackagedTariff extends Tariff {

    readonly standardValueInEuros : number = 800;
    readonly limitRateInKWh : number = 4000;
    readonly additionalCostPerKWHInEuros : number = 0.30;

    getName = () => "Packaged tariff";
    
    calculateAnnualCost = (consumptionPerYear: number) => { 
        
        if(consumptionPerYear <= this.limitRateInKWh) {
            return this.standardValueInEuros;
        }

        const additionalKWh = consumptionPerYear - this.limitRateInKWh;
        const additionalCost = additionalKWh * this.additionalCostPerKWHInEuros;

        return additionalCost + this.standardValueInEuros;
        
    };

    constructor(consumptionPerYear: number) {
        super(consumptionPerYear);
        this.annualCost = this.calculateAnnualCost(consumptionPerYear);
    }
}