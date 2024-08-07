//@ts-ignore
export default function NewPostCharacters(props) {
  return (
    <div className="new-post-charachters">
      <p>
        Телефон відділення <span>{props?.Phone}</span>
      </p>
      <p>
        Статус <span>{props?.WarehouseStatus === 'Working' && 'Працює'}</span>
      </p>
      {/* <p>
        Максимальна вага вантажу для доставки на відділення
        <span>{props?.TotalMaxWeightAllowed} кг.</span>
      </p> */}
      <p>
        Ліміти щодо розмірів для доставки на відділення
        <span>Ширина {props?.ReceivingLimitationsOnDimensions.Width} см.</span>
        <span>
          Висота {props?.ReceivingLimitationsOnDimensions.Height}
          см.
        </span>
        <span>
          Довжина {props?.ReceivingLimitationsOnDimensions.Length}
          см.
        </span>
      </p>
      <p>Графiк роботи</p>
      <ul>
        <li>Понеділок : {props?.Schedule.Monday}</li>
        <li>Вівторок : {props?.Schedule.Tuesday}</li>
        <li>Середа : {props?.Schedule.Wednesday}</li>
        <li>Четвер : {props?.Schedule.Thursday}</li>
        <li>П'ятниця : {props?.Schedule.Friday}</li>
        <li>Субота : {props?.Schedule.Saturday}</li>
        <li>Неділя : {props?.Schedule.Sunday}</li>
      </ul>
      <p>
        Точка на карті <span>{props?.Longitude}</span>{' '}
        <span>{props?.Latitude}</span>
      </p>
      <p>
        ??? PostFinance <span> {props?.PostFinance}</span>
      </p>
      <p>
        ??? BicycleParking <span> {props?.BicycleParking}</span>
      </p>
      <p>
        ??? PaymentAccess <span> {props?.PaymentAccess}</span>
      </p>
      <p>
        ??? POSTerminal <span> {props?.POSTerminal}</span>
      </p>
      <p>
        ??? InternationalShipping <span> {props?.InternationalShipping}</span>
      </p>
    </div>
  );
}
