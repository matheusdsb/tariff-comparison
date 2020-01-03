import { Tariff } from '../model/tariff.model';
import { BasicElectricityTariff } from '../model/basic-electricity-tariff.model';
import { PackagedTariff } from '../model/packaged-tariff.model';

export class TariffService {

    private tariffs: Tariff[] = [];
    private _consumptionPerYearInKWh: number;

    constructor(consumptionPerYearInKWh: number) {
        this._consumptionPerYearInKWh = consumptionPerYearInKWh;
    }

    fillList() {
        const basicElectricityTariff : Tariff = new BasicElectricityTariff(this._consumptionPerYearInKWh);
        const packagedTariff : Tariff = new PackagedTariff(this._consumptionPerYearInKWh);

        this.tariffs = [basicElectricityTariff, packagedTariff];
    }

    sortListByCost() {
        this.tariffs.sort((t1, t2) =>  t1.annualCost > t2.annualCost ? 1 : -1);
    }

    renderComparison() {
        console.log(`---- Showing comparison for ${this._consumptionPerYearInKWh.toString()} kWh/year comsuption: ---`);
        this.tariffs.forEach(tariff => console.log(`Tariff name: ${tariff.getName()} | Annual cost: ${tariff.annualCost.toString()} Euros`));
        console.log("\n");        
    }
}