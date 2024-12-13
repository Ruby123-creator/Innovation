import React from "react";
import BreadCrumb from "../../common/Breadcrumb";
import { FaUser } from "react-icons/fa";
import Cards from "../../common/General/Cards";
import PageHeader from "../../common/General/PageHeader";
import { sortTable } from "../../utils";

const Products = (props) => {
  console.log(props, "HOME:::::::::::");
  const { allProduct, pageNumber , dir=0 } = props;
  console.log(allProduct, "HOME:::::::::::", "jsdhghsagdshgd");

  const cardData = [
    {
      title: "Total Products",
      number: "1,200",
      icon: <FaUser />,
      borderColor: "#4CAF50", // Green
    },
    {
      title: "Out of Stock",
      number: "200",
      icon: <FaUser />,
      borderColor: "#FF5722", // Orange
    },
    {
      title: "Sales Today",
      number: "500",
      icon: <FaUser />,
      borderColor: "#2196F3", // Blue
    },
    {
      title: "Pending Orders",
      number: "80",
      icon: <FaUser />,
      borderColor: "#FFC107", // Yellow
    },
  ];
  const onSearch = () => {};
  const onDownload = () => {};

  const onImportData = () => {};
  const _isColumnToHide = (colName) => {
    const item = props.txColumns.find((val) => val?.item === colName);

    return !item?.check;
  };

const sortColumn = (e)=>{
    sortTable(
      document.getElementById("productList"),
      e.target.cellIndex,
      1-dir
    )
    props.updateState({
      ...props , dir:1-dir
    })
}

  return (
    <div>
      <BreadCrumb />

      <div className="cards-container">
        {cardData.map((data, index) => (
          <Cards
            key={index}
            title={data.title}
            number={data.number}
            icon={data.icon}
            borderColor={data.borderColor}
          />
        ))}
      </div>

      <div>
        <PageHeader
          {...props}
          title="Products"
          totalCount="45"
          search={true}
          downloadData={true}
          importData={true}
          columns={true}
          onSearch={onSearch}
          onDownload={onDownload}
          onImportData={onImportData}
        />
      </div>
      <div className="table-container">
        <table id="productList">
          <thead>
            <tr>
              <th>SKU</th>
              <th onClick={sortColumn}>Product Name</th>
              <th>Variants</th>
              <th>Category</th>
              {!_isColumnToHide("Warehouse") ? <th>Warehouse</th> : ""}
              {!_isColumnToHide("BrandName") ? <th>Brand</th> : ""}

              {!_isColumnToHide("UPC") ? <th>UPC</th> : ""}

              {!_isColumnToHide("ISBN") ? <th>ISBN</th> : ""}
            </tr>
          </thead>
          <tbody>
            {(allProduct[pageNumber] || [])?.length
              ? (allProduct[pageNumber] || []).map((item, i) => {
                  return (
                    <tr key={"Product" + i}>
                      <td>{item?.sku}</td>
                      <td>{item?.itemName}</td>
                      <td>
                        {item.hasVariant ? (
                          item.inventoryItemVariantList ? (
                            item.inventoryItemVariantList.length
                          ) : (
                            <span
                              // onClick={() => { openVariantDetails(item) }}
                              className="cursor-pointer"
                            >
                              {item.totalVariantCount}
                            </span>
                          )
                        ) : (
                          "0"
                        )}
                      </td>
                      <td>
                        {item.categoryCount ? (
                          <span
                            // onClick={() => { openClassDetailPopup(item) }}
                            className="cursor-pointer"
                          >
                            {item.categoryCount}
                          </span>
                        ) : (
                          "0"
                        )}
                      </td>
                      {!_isColumnToHide("Warehouse") ? (
                        <td>{item?.warehouse}</td>
                      ) : (
                        ""
                      )}
                      {!_isColumnToHide("BrandName") ? (
                        <td>{item?.brandName}</td>
                      ) : (
                        ""
                      )}
                      {!_isColumnToHide("UPC") ? <td>{item?.upc}</td> : ""}
                      {!_isColumnToHide("ISBN") ? <td>{item?.isbn}</td> : ""}
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
