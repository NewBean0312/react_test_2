import ProdListItem from "./ProdListItem";

function ProdList() {
  return (
    <>
      <ul className="flex gap-[10px]">
        <li className="flex-grow">
          <ProdListItem
            imgNo={201}
            name="PRODUCT 1"
            productPriceFormatted="140,000"
          />
        </li>
        <li className="flex-grow">
          <ProdListItem
            imgNo={1}
            name="PRODUCT 2"
            productPriceFormatted="320,000"
          />
        </li>
        <li className="flex-grow">
          <ProdListItem
            imgNo={2}
            name="PRODUCT 3"
            productPriceFormatted="340,000"
          />
        </li>
      </ul>
    </>
  );
}

export default ProdList;