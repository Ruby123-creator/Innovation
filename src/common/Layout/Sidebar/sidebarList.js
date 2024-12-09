
import { AiOutlineDashboard } from "react-icons/ai";
import { LuBox } from "react-icons/lu";
import { GoInbox } from "react-icons/go";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiWebmoney } from "react-icons/si";
import { FaStore } from "react-icons/fa";
const sidebarList = [
    {
    key:1,
    menuName: "Dashboard",
    iconClassName: <AiOutlineDashboard/>,
    path:"/admin/dashboard",
},

{
    key:2,
    menuName: "Product",
    iconClassName: <GoInbox/>,
   
    childList:[
        {
            menuName: "Products",
            iconClassName: <GoInbox/>,
            path:"/admin/products",
        },
        {
            menuName: "Product Price",
            iconClassName: <GoInbox/>,
            path:"/admin/price",
        },
        {
            menuName: "Price List",
            iconClassName: <GoInbox/>,
            path:"/admin/price-list",
        },
        {
            menuName: "Category",
            iconClassName: <GoInbox/>,
            path:"/admin/category",
        },
        {
            menuName: "HSN",
            iconClassName: <GoInbox/>,
            path:"/admin/hsn",
        },
        {
            menuName: "Manufacturer",
            iconClassName: <GoInbox/>,
            path:"/admin/manufacturer",
        },
        {
            menuName: "Brands",
            iconClassName: <GoInbox/>,
            path:"/admin/brands",
        },
        {
            menuName: "UOM",
            iconClassName: <GoInbox/>,
            path:"/admin/uom",
        },
        {
            menuName: "Rating and Review",
            iconClassName: <GoInbox/>,
            path:"/admin/rating-review",
        },
    ]
},
{
    key:3,
    menuName: "Inventory",
    iconClassName: <LuBox/>,
    childList:[
        {
            menuName: "My Warehouse",
            iconClassName: <GoInbox/>,
            path:"/admin/warehouse",
        },
        {
            menuName: "Stock Summary",
            iconClassName: <GoInbox/>,
            path:"/admin/stock-summary",
        },
        {
            menuName: "Stock Adjustment",
            iconClassName: <GoInbox/>,
            path:"/admin/stock-adjustment",
        },
        {
            menuName: "Aged Stock",
            iconClassName: <GoInbox/>,
            path:"/admin/aged-stock",
        },
        {
            menuName: "Stock Transfer",
            iconClassName: <GoInbox/>,
            path:"/admin/stock-transfer",
        },
       
    ]
},
{
    key:4,
    menuName: "Sales",
    iconClassName: <GiTakeMyMoney/>,
    childList:[
        {
            menuName: "Customers",
            iconClassName: <GoInbox/>,
            path:"/admin/customers",
        },
        {
            menuName: "Sales Inquiry",
            iconClassName: <GoInbox/>,
            path:"/admin/sales-inquiry",
        },
        {
            menuName: "Sales Quote",
            iconClassName: <GoInbox/>,
            path:"/admin/sales-quote",
        },
        {
            menuName: "Sales Order",
            iconClassName: <GoInbox/>,
            path:"/admin/sales-order",
        },
        {
            menuName: "Package",
            iconClassName: <GoInbox/>,
            path:"/admin/package",
        },
        {
            menuName: "Shipment",
            iconClassName: <GoInbox/>,
            path:"/admin/shipment",
        },
        {
            menuName: "Sales Invoice",
            iconClassName: <GoInbox/>,
            path:"/admin/sales-invoice",
        },
        {
            menuName: "Payments",
            iconClassName: <GoInbox/>,
            path:"/admin/payment",
        },
        {
            menuName: "Credit Memo",
            iconClassName: <GoInbox/>,
            path:"/admin/credit-memo",
        },
    ]
},
{
    key:5,
    menuName: "Purchase",
    iconClassName: <SiWebmoney/>,
    childList:[
        {
            menuName: "Suppliers",
            iconClassName: <GoInbox/>,
            path:"/admin/suppliers",
        },
        {
            menuName: "Purchase Request",
            iconClassName: <GoInbox/>,
            path:"/admin/purchase-request",
        },
        {
            menuName: "RFQ",  //request for quotation
            iconClassName: <GoInbox/>,
            path:"/admin/rfq",
        },
        {
            menuName: "Purchase Order",
            iconClassName: <GoInbox/>,
            path:"/admin/purchase-order",
        },
        {
            menuName: "Goods Receipt Note (GRN)",
            iconClassName: <GoInbox/>,
            path:"/admin/grn",
        },
        {
            menuName: "Purchase Invoice",
            iconClassName: <GoInbox/>,
            path:"/admin/purchse-invoice",
        },
        {
            menuName: "Debit Memo",
            iconClassName: <GoInbox/>,
            path:"/admin/debit-memo",
        },
        {
            menuName: "Landed Cost SetUp",
            iconClassName: <GoInbox/>,
            path:"/admin/landed-cost-setup",
        },
      
    ]
},
{
    key:6,
    menuName: "Estore",
    iconClassName: <FaStore/>,
    childList:[
        {
            menuName: "Appearance",
            iconClassName: <GoInbox/>,
            childList:[
                {
                    menuName: "Themes",
                    iconClassName: <GoInbox/>,
                    path:"/admin/themes",
                },
                {
                    menuName: "Page",
                    iconClassName: <GoInbox/>,
                    path:"/admin/pages",
                },
                {
                    menuName: "Menus",
                    iconClassName: <GoInbox/>,
                    path:"/admin/menu",
                },
            ]
        },
        {
            menuName: "Product Management",
            iconClassName: <GoInbox/>,
            path:"/admin/product-management",
        },
        {
            menuName: "Store Settings",
            iconClassName: <GoInbox/>,
            path:"/admin/store-settings",
        },
       
      
    ]
},
]

export default sidebarList;