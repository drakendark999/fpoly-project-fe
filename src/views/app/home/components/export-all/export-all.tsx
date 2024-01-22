import { Button } from '@chakra-ui/react';
import { StatusEnum } from '@src/core/libs/constants';
import { getSelectorAllLichThi2 } from '@src/selector/selectorLichThi2';
import React from 'react';
import { FiDownloadCloud } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import * as XLSX from 'xlsx';

const ExportAll: React.FunctionComponent = () => {
  const lichThi = useSelector(getSelectorAllLichThi2);

  const formatDate = (ISO: string) => {
    const date = new Date(ISO);
    return date;
  };

  formatDate('2023-02-25T00:00:00.000Z');

  const handleExport = () => {
    // console.log(lichThi)

    if (confirm('Tải xuống tất cả lịch thi?')) {
      const dataHeaders = [
        'Mã kỳ thi',
        'Mã lịch thi',
        'ID',
        'ID Khu vực',
        'ID Tòa nhà',
        'GV1',
        'GV2',
        'Bộ môn',
        'Ca thi',
        'Đợt thi',
        'Mã lớp',
        'Mã môn',
        'Ngày thi',
        'Số SV',
        'Ghi chú',
        'Tên phòng',
      ];
      const data: any = [];

      lichThi.forEach((item) => {
        const arr = [
          item.maKy_Thi,
          item.maLich_Thi,
          item.id,
          item.idKhu_Vuc,
          item.idToa_Nha,
          item.GV1,
          item.GV2,
          item.bo_Mon,
          item.ca_Thi,
          item.dot_Thi,
          item.ma_Lop,
          item.ma_Mon,
          formatDate(item.ngay_Thi),
          item.so_SV,
          item.status_cancel.trim() === StatusEnum.BUSY.trim()
            ? 'Bận'
            : item.status_cancel.trim() === StatusEnum.CANCEL.trim()
            ? 'Hủy'
            : '',
          item.ten_Phong,
        ];
        data.push(arr);
      });

      const dataTotal = [dataHeaders, ...data];
      // console.log(dataTotal)

      // Khởi tạo Workbook
      const wb = XLSX.utils.book_new();

      // Chuyển đổi data thành một đối tượng bảng tính (Worksheet object)
      const ws = XLSX.utils.aoa_to_sheet(dataTotal);

      // Set header XlSX
      XLSX.utils.sheet_add_aoa(ws, [dataHeaders], { origin: 'A1' });

      for (let i = 2; i <= dataTotal.length; i++) {
        const cell = `M${i}`;
        XLSX.utils.cell_set_number_format(ws[cell], 'dd/mm/yyyy');
      }

      // Chỉnh độ rộng mặc định cho cột
      const wscols = [
        { wch: 8 },
        { wch: 10 },
        { wch: 5 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 15 },
      ];
      ws['!cols'] = wscols;

      // Add ws vao wb, đặt tên Sheet1
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      // Download file excel
      XLSX.writeFile(wb, `LichThiAll.xlsx`);
    }
  };

  return (
    <Button variant="none" onClick={handleExport}>
      <FiDownloadCloud style={{ marginRight: '10px' }} />
      Tải về lịch thi!
    </Button>
  );
};

export default ExportAll;
