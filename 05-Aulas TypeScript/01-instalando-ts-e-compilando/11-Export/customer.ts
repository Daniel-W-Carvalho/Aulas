import { paginationPerPage, Customer } from "./index";

interface specialCustomer extends Customer {
    discount: number;
}

const specialCustomer: specialCustomer = {
    discount: 9999999999,
    firstName: "Daniel",
    lastName: "Carvalho"
}

