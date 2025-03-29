import React, { useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import TableContainer from 'Common/TableContainer';
import Select from 'react-select';
// Icons
import { Search, Eye, Pencil, Trash } from 'lucide-react';
// Import Supabase client
import { supabase } from "helpers/supabase_client";

// Define the Item interface
interface Item {
    id: number;
    name: string;
    price: string;
    description?: string;
    image_url?: string;
    category?: string;
    created_at: string;
    // Add other fields as needed
}

const table_name = process.env.REACT_APP_TABLE_NAME as string

const Belanja = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchItems = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from(table_name)
                .select()
                .order('date', { ascending: false });
            
            if (error) {
                throw error;
            }
            setItems(data || []);
        } catch (err) {
            setError("Failed to fetch items");
        } finally {
            setLoading(false);
        }
    };

    // Get Data
    useEffect(() => {    
        fetchItems();
    }, []);

    // Define table columns
    const columns = useMemo(
        () => [
            // {
            //     Header: "ID",
            //     accessorKey: "id",
            //     enableColumnFilter: false,
            //     enableSorting: true,
            //     show: false,
            //     Cell: (cell: any) => (
            //         <div className="flex items-center h-full hidden md:table-cell">
            //             {}
            //         </div>
            //     ),
            //     // id: 'id', // <-here
            // },
            {
                header: "Date",
                accessorKey: "date",
                enableColumnFilter: false,
                enableSorting: true,
                // id: "description",
            },
            {
                header: "Category",
                accessorKey: "category",
                enableColumnFilter: false,
                enableSorting: true,
                // id: "category",
            },
            {
                header: "Price",
                accessorKey: "price",
                enableColumnFilter: false,
                enableSorting: true,
                // id: "price",
            },
           
            {
                header: "Description",
                accessorKey: "description",
                enableColumnFilter: false,
                enableSorting: true,
                // id: "description",
            },
            // {
            //     Header: "Action",
            //     accessor: "action",
            //     id: "action",
            //     Cell: (cell: any) => (
            //         <div className="flex gap-2">
            //             <Link to={`/belanja/detail/${cell.row.original.id}`} className="flex items-center justify-center size-8 text-slate-500 transition-all duration-150 ease-linear bg-slate-100 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-zink-500 dark:hover:text-zink-100">
            //                 <Eye className="size-4" />
            //             </Link>
            //             <Link to={`/belanja/edit/${cell.row.original.id}`} className="flex items-center justify-center size-8 text-slate-500 transition-all duration-150 ease-linear bg-slate-100 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-zink-500 dark:hover:text-zink-100">
            //                 <Pencil className="size-4" />
            //             </Link>
            //             <button 
            //                 onClick={() => handleDeleteItem(cell.row.original.id)}
            //                 className="flex items-center justify-center size-8 text-slate-500 transition-all duration-150 ease-linear bg-slate-100 rounded-md hover:bg-red-500 hover:text-white dark:bg-zink-600 dark:text-zink-200 dark:hover:bg-red-500 dark:hover:text-white"
            //             >
            //                 <Trash className="size-4" />
            //             </button>
            //         </div>
            //     ),
            // },
        ],
        []
    );

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Hoverable</h6>
                    <TableContainer
                        isPagination={true}
                        columns={(columns || [])}
                        data={(items || [])}
                        customPageSize={10}
                        divclassName="my-2 col-span-12 overflow-x-auto lg:col-span-12"
                        tableclassName="hover group dataTable w-full text-sm align-middle whitespace-nowrap no-footer"
                        theadclassName="border-b border-slate-200 dark:border-zink-500"
                        trclassName="group-[.stripe]:even:bg-slate-50 group-[.stripe]:dark:even:bg-zink-600 transition-all duration-150 ease-linear group-[.hover]:hover:bg-slate-50 dark:group-[.hover]:hover:bg-zink-600 [&.selected]:bg-custom-500 dark:[&.selected]:bg-custom-500 [&.selected]:text-custom-50 dark:[&.selected]:text-custom-50"
                        thclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:group-[.bordered]:border-zink-500"
                        tdclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Belanja;