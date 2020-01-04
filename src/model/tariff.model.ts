export abstract class Tariff  {
    
    abstract getName : () => string;
    abstract calculateAnnualCost: (consumption:number) => number;

    annualCost: number;    

    constructor(_consumptionPerYear: number) {
        if(!_consumptionPerYear || !(_consumptionPerYear >= 0)) {
            throw new Error('The consumption input value must be a valid number greater than or equals to zero');
        }
    }
}