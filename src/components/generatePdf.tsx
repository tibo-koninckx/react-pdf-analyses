import {Document, Page, StyleSheet} from "@react-pdf/renderer";

export function GeneratePdf() {
  const styles = StyleSheet.create( {
    page: {
      flexDirection: "row",
    },
  });
  return <>
    <Document>
      <Page size="A4" style={styles.page}>

      </Page>
    </Document>
  </>;
}