import {Document, Page, StyleSheet, Text, View} from "@react-pdf/renderer";

export function GeneratePdf() {
    const styles = StyleSheet.create({
        page: {
            flexDirection: "column",
        },
        h1: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            padding: 10
        },
        table: {
            display: "flex",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            marginLeft: "5%",
            marginRight: "5%"
        },
        tableRow: {
            flexDirection: "row"
        },
        tableColHeader: {
            width: "20%",
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            backgroundColor: '#f2f'
        },
        tableCol: {
            width: "20%",
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0
        },
        tableCellHeader: {
            margin: "auto",
            marginTop: 5,
            fontSize: 12,
            fontWeight: "bold"
        },
        tableCell: {
            margin: "auto",
            marginTop: 5,
            fontSize: 10
        }
    });
    const data = [
        {col1: "Data 1", col2: "Data 2", col3: "Data 3", col4: "Data 4", col5: "Data 5"},
        {col1: "Data 6", col2: "Data 7", col3: "Data 8", col4: "Data 9", col5: "Data 10"},
        {col1: "Data 11", col2: "Data 12", col3: "Data 13", col4: "Data 14", col5: "Data 15"},
        {col1: "Data 16", col2: "Data 17", col3: "Data 18", col4: "Data19", col5: "Data 20"}
        // Add more rows as needed
    ];
    return <>
        <Document>
            <Page size="A4" style={styles.page}>
                <View><Text style={styles.h1}>Analyses</Text></View>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Header 1</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Header 2</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Header 3</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Header 4</Text>
                        </View>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>Header 5</Text>
                        </View>
                    </View>

                    {data.map((row, index) => (
                        <View style={styles.tableRow} key={index}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{row.col1}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{row.col2}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{row.col3}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{row.col4}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{row.col5}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    </>;
}