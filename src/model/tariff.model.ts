export abstract class Tariff  {
    
    abstract getName : () => string;
    abstract calculateAnnualCost: (consumption:number) => number;

    annualCost: number;
}