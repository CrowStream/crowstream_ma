/**
 * Support Request Section
 */

// React
import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

// React Native Paper
import { Button, Card, DataTable, FAB, IconButton, Subheading, Title } from 'react-native-paper';

type ItemsState = Array<{
    key: number;
    name: string;
    responded: boolean;
    date: string;
}>;

const SupportRequest = (): JSX.Element => {
    const [sortAscending, setSortAscending] = React.useState<boolean>(true);
    const [page, setPage] = React.useState<number>(0);
    const [items] = React.useState<ItemsState>([
        {
            key: 1,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 2,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 3,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 4,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 5,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 6,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 7,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 8,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 9,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
        {
            key: 10,
            name: 'Fallo en pago',
            responded: true,
            date: '22/03/2001',
        },
    ]);
    const [numberOfItemsPerPageList] = React.useState([8]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
    );
    const sortedItems = items
        .slice()
        .sort((item1, item2) =>
            (sortAscending ? item1.name < item2.name : item2.name < item1.name)
                ? 1
                : -1
        );
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View style={styles.view}>
            <Card>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title
                            sortDirection={sortAscending ? 'ascending' : 'descending'}
                            onPress={() => setSortAscending(!sortAscending)}
                            style={styles.first}
                        >
                            Petición
                        </DataTable.Title>
                        <DataTable.Title numeric>Respondida</DataTable.Title>
                        <DataTable.Title numeric>Fecha</DataTable.Title>
                    </DataTable.Header>

                    {sortedItems.slice(from, to).map((item) => (
                        <DataTable.Row key={item.key} onPress={() => { console.log("Row!") }}>
                            <DataTable.Cell style={styles.first}>{item.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.responded ? <IconButton icon="check"/> : ''}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.date}</DataTable.Cell>
                        </DataTable.Row>
                    ))}
                    

                    <DataTable.Pagination
                        page={page}
                        numberOfPages={Math.ceil(sortedItems.length / itemsPerPage)}
                        onPageChange={(page) => setPage(page)}
                        label={`${from + 1}-${to} of ${sortedItems.length}`}
                        numberOfItemsPerPage={itemsPerPage}
                        onItemsPerPageChange={onItemsPerPageChange}
                        selectPageDropdownLabel={'Filas por página'}
                    />
                </DataTable>
            </Card>
            <FAB
                style={styles.fab}
                icon="plus"
                small
                label="Crear Petición"
                onPress={() => console.log('Pressed')}
            />
        </View>

    );
};

SupportRequest.title = 'Realizar petición';

export default SupportRequest;

const styles = StyleSheet.create({
    view: {
        margin: 10,
        height: '100%'
    },
    content: {
        padding: 8,
    },
    first: {
        flex: 2,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 16,
        bottom: 16,
        backgroundColor: "#9D9FA2"
    }
});

