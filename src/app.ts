import { TariffService } from './service/tariff.service';

const showTariffComparison = (consumptionPerYearInKWh: number) => {

    const tariffService = new TariffService(consumptionPerYearInKWh);

    tariffService.fillList();
    tariffService.sortListByCost();
    tariffService.renderComparison();
 };

 showTariffComparison(3500);
 showTariffComparison(4500);
 showTariffComparison(6000);




