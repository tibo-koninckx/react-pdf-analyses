import {Document, Page} from "@react-pdf/renderer";

export function GeneratePdf() {
  return <>
    <Document>
      <Page size="A4"></Page>
    </Document>
  </>;
}