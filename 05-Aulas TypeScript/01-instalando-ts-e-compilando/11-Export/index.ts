export interface paginationPerPage {
    page: number;
    perPage: number;
} 

export interface Customer {
    firstName: string;
    lastName: string;
}

// seria do mesmo jeito de importar e exportar do JS

//outra opção de export
// export{paginationPerPage, Customer}