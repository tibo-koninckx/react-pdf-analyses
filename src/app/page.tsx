"use client"
import {Flex, Typography} from "antd";
import {PDFViewer} from "@react-pdf/renderer";
import {GeneratePdf} from "@/components/generatePdf";

export default function Home() {
  return <>
    <Flex align="center" vertical>
      <Typography.Title>Generate pdf</Typography.Title>
      <PDFViewer>
        <GeneratePdf />
      </PDFViewer>
    </Flex>
  </>
}
