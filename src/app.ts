import { BasicElectricityTariff } from './model/basic-electricity-tariff.model';
import { Tariff } from './model/tariff.model';
import { PackagedTariff } from './model/packaged-tariff.model';

const populateTariffs = (consumptionPerYearInKWh: number) : Tariff[] => {   
    
    const basicElectricityTariff : Tariff = new BasicElectricityTariff(consumptionPerYearInKWh);
    const packagedTariff : Tariff = new PackagedTariff(consumptionPerYearInKWh);

    return [basicElectricityTariff, packagedTariff];
}

const sortTariffsByCost = (tariffs: Tariff[]) : Tariff[] => {
    return tariffs.sort((t1, t2) =>  t1.annualCost > t2.annualCost ? 1 : -1);
}

const renderTariffsComparison = (consumptionPerYearInKWh: number, tariffs: Tariff[]) => {
    console.log(`---- Showing comparison for ${consumptionPerYearInKWh.toString()} kWh/year comsuption: ---`);
    tariffs.forEach(tariff => console.log(`Tariff name: ${tariff.getName()} | Annual cost: ${tariff.annualCost.toString()} Euros`));
    console.log("\n");
}

const showTariffComparison = (consumptionPerYearInKWh: number) => {
    const tariffs = populateTariffs(consumptionPerYearInKWh);
    sortTariffsByCost(tariffs);
    renderTariffsComparison(consumptionPerYearInKWh, tariffs);
 };

 showTariffComparison(3500);
 showTariffComparison(4500);
 showTariffComparison(6000);




