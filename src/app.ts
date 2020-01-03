import { TariffService } from './service/tariff.service';

const showTariffComparison = (consumptionPerYearInKWh: number) => {

    const tariffService = new TariffService(consumptionPerYearInKWh);

    tariffService
        .fillList()
        .sortListByCost()
        .renderComparison();    
 };

 try {
    showTariffComparison(3500);
    showTariffComparison(4500);
    showTariffComparison(6000);
 } catch(error) {
    console.log('An error has occurred: ' + error.message);
 }





