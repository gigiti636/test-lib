import Modal from './modal';
import { Box, Button } from '@mui/material';
import DateRangePicker from './DateRangePicker';
import type { DateRange } from './DateRangePicker';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface ModalDateRangePickerProps {
  open: boolean;
  handleClose: () => void;
  handleDateSelection: (_date_range: DateRange) => void;
}

export const ModalDateRangePicker = ({
  open,
  handleClose,
  handleDateSelection,
}: ModalDateRangePickerProps) => {
  const { t } = useTranslation(['reports', 'common']);

  const [selectedRange, setSelectedRange] = useState<DateRange>({ startDate: '', endDate: '' });

  const handleDateSelectedByMonth = (months: number) => {
    const now = dayjs();
    const startDate = now.subtract(months, 'month').format('YYYY-MM-DD');
    setSelectedRange({ startDate: startDate, endDate: now.format('YYYY-MM-DD') });
  };

  return (
    <Modal
      open={open}
      maxWidth={'640px'}
      onClose={handleClose}
      closeModal={handleClose}
      cancelAction={handleClose}
      action={t('common:buttons.select')}
      callToAction={() => handleDateSelection(selectedRange)}
    >
      <Box display={'flex'} gap={1} flexWrap={'wrap'}>
        <Button color={'info'} variant={'contained'} size={'small'}>
          {t('reports:sort_by.date.custom')}
        </Button>
        <Button
          color={'info'}
          variant={'outlined'}
          size={'small'}
          onClick={() => handleDateSelectedByMonth(1)}
        >
          {t('reports:sort_by.date.last_month')}
        </Button>
        <Button
          color={'info'}
          variant={'outlined'}
          size={'small'}
          onClick={() => handleDateSelectedByMonth(3)}
        >
          {t('reports:sort_by.date.last_3_months')}
        </Button>
        <Button
          color={'info'}
          variant={'outlined'}
          size={'small'}
          onClick={() => handleDateSelectedByMonth(6)}
        >
          {t('reports:sort_by.date.last_6_months')}
        </Button>
      </Box>
      <Box my={3}>
        <DateRangePicker
          dateRange={{ startDate: selectedRange.startDate, endDate: selectedRange.endDate }}
          onDateRangeChange={(range) => setSelectedRange(range)}
        />
      </Box>
    </Modal>
  );
};
