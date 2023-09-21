'use client'
import { Box, IconButton, TextField, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@utils/theme";
import Header from "./Header";
import Link from "next/link";
import { AddCircle, RefreshRounded, RemoveCircle } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";
import Loading from '@components/Loading';

const AddRowButton = ({ onAddRow }) => {
    return (
        <IconButton onClick={onAddRow}
        sx={{
            // "&:hover": { color: colors.blueAccent[200]},
            borderRadius: "10px",
            width: '200px',
            // color:  colors.greenAccent[500]
        }}
        >
            <AddCircle />
            Add Food
        </IconButton>
    )
}

const DeleteRowButton = ({ onDeleteRow }) => {
    return (
        <IconButton onClick={onDeleteRow}
        sx={{
            // "&:hover": { color: colors.blueAccent[200]},
            borderRadius: "10px",
            width: '200px',
            // color:  colors.greenAccent[500]
        }}
        >
            <RemoveCircle />
            Delete Food
        </IconButton>
    )
}

const TextInput = ({ onInputFood, inFood, onInputPrice, inPrice, onInputVat, inVat, onAddFoodClick }) => {
    
    return (
        <Box className="flex flex-row" style={{ }}>
            <TextField
                name="food"
                type="text"
                onChange={onInputFood}
                autoComplete="off"
                value={inFood}
                variant="filled"
                label="Enter Food..."
                sx={{ ml: "160px", width: "200px" }}
            />
            <TextField
                name="price"
                type="number"
                onChange={onInputPrice}
                value={inPrice}
                variant="filled"
                label="Enter Price..."
                sx={{ ml: "0px", width: "200px" }}
            />
            <TextField
                name="vat"
                type="number"
                onChange={onInputVat}
                value={inVat}
                variant="filled"
                label="Enter VAT..."
                sx={{ ml: "0px", width: "200px" }}
            />
            <AddRowButton onAddRow={onAddFoodClick}/>
       </Box>
    )
}

const RefreshButton = ({ onRefresh }) => {
    return(
        <Box >
            <IconButton onClick={onRefresh}
            sx={{
                // "&:hover": { color: colors.blueAccent[200]},
                borderRadius: "10px",
                width: '200px',
                // color:  colors.greenAccent[500]
            }}
            >
                <RefreshRounded />
                Refresh 
            </IconButton>
        </Box>
    )
}

const FoodMenu = ({ buttonLabel, isUpdate }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {data: session } = useSession();
    const initialColumns = [
        { field: "id", headerName: "ID", type: "number" },
        { 
            field: "name",
            headerName: "FOOD",
            flex: 1,
        },
        {
            field: "price",
            headerName: "PRICE   (KES)",
            flex: 1,
        },
        {
            field: "vat",
            headerName: "VAT   (KES)",
            flex: 1,
        },
        {
            field: "date",
            headerName: "SET AT TIME",
            flex: 1
        }
    ];

    
    const router = useRouter();
    let initialRows = [];
    const [columns, setColumns] = useState(initialColumns);
    const [rows, setRows] = useState(initialRows);
    const [selectedRows, SetSelectedRows] = useState([]);
    const [inputFood, setInputFood] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputVat, setInputVat] = useState('');
    
    useEffect(() => {
        
        const fetchMenu = async () => {
            <Loading />
            const resp = await fetch(`http://localhost:3000/api/menu`);
            return await resp.json();
        }
        setRows([]);
        
        fetchMenu().then((data)=> { 
            data.sort((a, b) => a.id - b.id ); 
            console.log(data);
            setRows(data)
        })

        return () => { setRows([])};
    },[]);

    
    const CustomControls = ({ onDelete}) => {
        return (
            <>
                <DeleteRowButton onDeleteRow={onDelete}/>
            </>
        )
    }

    const handleSetMenu = async (data) => {
        
        console.log("Set menu Assert. true: ", JSON.stringify(data));
        try {
            const response = await fetch(`http://localhost:${process.env.SERVER_PORT}/api/menu/new`, {
                method: 'POST',
                body: JSON.stringify(data)
            })

            console.log(await response.text());
            if (response.ok) {
                // await signOut();
                router.push('/foodMenu');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const memorizedEditableDataGrid = useMemo(() => {
        const currentTime = new Date();

        if (session && session.expires) {
            const expireTime = new Date(session.expires) - currentTime;

            setTimeout(() => {
                router.push('/session-expired/noLogin');
            }, expireTime)
        }

        const handleAddRow = () => {
            const newId = rows.length + 1;
            const  newRows = { id: newId, name: inputFood, price: inputPrice, vat: inputVat, date: new Date()}
                
            setRows((rows) => [...rows, newRows]);
        }
    
        const handleRemoveRow = () => {
            const updatedRows = rows.filter((row) => !selectedRows.includes(row.id));
            let rowId = 1;
            updatedRows.forEach((row) => {
                row.id = rowId;
                rowId++;
            });

            setRows(updatedRows);
            SetSelectedRows([]);
        }

        const handleFoodInput = (e) => {
            setInputFood(e.target.value) 
        }
        
        const handlePriceInput = (e) => {
            setInputPrice(e.target.value);
        }
        
        const handleVatInput = (e) => {
            setInputVat(e.target.value);
        }
        
            
        
        const handleSelectionModelChange = (selectedRowsIds) => {
            SetSelectedRows(selectedRowsIds);
        }

        return(
            <DataGrid checkboxSelection={true} rows={rows} columns={columns}
                onRowSelectionModelChange={handleSelectionModelChange}
                rowSelectionModel={selectedRows}
                slots={{
                    pagination: CustomControls,
                    toolbar: TextInput
                }}
                slotProps={{
                    pagination: { onDelete: handleRemoveRow  },
                    toolbar: { onAddFoodClick: handleAddRow, 
                        onInputFood: handleFoodInput, inFood: inputFood,
                        onInputPrice: handlePriceInput, inPrice: inputPrice,
                        onInputVat: handleVatInput, inVat: inputVat
                    }
                }}
            />
        )
    }, [rows, columns, inputFood, 
    inputPrice, inputVat, selectedRows, session, router ]);

    const memorizedNoneditDataGrid = useMemo(() => {
        return(
            <DataGrid checkboxSelection={false} rows={rows} columns={columns} />
        )
    },[rows, columns]);

    return (
        <Box className="grid grid-cols-2">
            <Header title="TODAY`S MENU" subtitle="View, Create or Update Menu from this page" />

            <IconButton
                sx={{ 
                    "&:hover": { color: colors.blueAccent[200]},
                    borderRadius: "10px",
                    width: '200px',
                    marginLeft: '230px',
                    color:  colors.greenAccent[500]
                }} 
                onClick={ () => { isUpdate ? handleSetMenu(rows) :  router.push('/foodMenu/update') } } 
            >
                {buttonLabel}
            </IconButton>

            <Box 
                mt={3}
                width='1000px' height="450px"
                sx={{  
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                      },
                      "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.greenAccent[800],
                        borderBottom: "none",
                      },
                      "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                      },
                      "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.greenAccent[800]
                      },
                      "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                      }
                    }}
            >
                { isUpdate ? memorizedEditableDataGrid : memorizedNoneditDataGrid }
            </Box>
        </Box>
    )
};

export default FoodMenu;