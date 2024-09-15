"use client"
import {Flex, Typography} from "antd";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import {GeneratePdf} from "@/components/generatePdf";

export default function Home() {
  return <>
    <Flex align="center" vertical>
      <Typography.Title>Generate pdf</Typography.Title>
      <PDFViewer width="20%" height={500} showToolbar={true}>
        <GeneratePdf />
      </PDFViewer>
        <PDFDownloadLink document={<GeneratePdf />} fileName="Anlyses data">
          {({blob, url, loading, error}) => (loading ? "Loading document..." : "Download now!")}</PDFDownloadLink>
    </Flex>
  </>
}
