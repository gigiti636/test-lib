import { useState, ChangeEvent, FC, useMemo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { convertToBase64 } from '@/utils/helper/files';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useTranslation } from 'react-i18next';

interface FileInputProps {
  accept: string;
  maxMbSize: number;
  onFileSelected: (_file: File, _base64file: string) => void;
  maxWidth?: string;
}

const FileInput: FC<FileInputProps> = ({ accept, maxMbSize, onFileSelected, maxWidth = 'unset' }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const { t } = useTranslation('common');

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file.size < maxSizeInBytes) {
        setSelectedFile(file);
      } else {
        setError(`Max file size is ${maxSizeInBytes / bytes_in_megabyte}`);
      }
    }
  };

  const maxSizeInBytes = 1024 * 1024 * maxMbSize;

  const handleFileSelected = async () => {
    if (selectedFile) {
      const fileToBase64 = await convertToBase64(selectedFile);
      onFileSelected(selectedFile, fileToBase64);
    }
  };

  const bytes_in_megabyte = 1048576;

  const fileSize = useMemo(() => {
    if (selectedFile) {
      return (selectedFile.size / bytes_in_megabyte).toFixed(2);
    } else {
      return 0;
    }
  }, [selectedFile]);

  return (
    <Box
      border={1}
      borderColor={(theme) => theme.palette.text.disabled}
      maxWidth={maxWidth}
      minWidth={'170px'}
      minHeight={'185px'}
      position={'relative'}
      borderRadius={4}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      bgcolor={(theme) => (theme.palette.mode === 'dark' ? '#464646' : '#f6f6f6')}
      p={1}
    >
      {selectedFile ? (
        <Typography
          fontWeight={'bold'}
          color={'text.secondary'}
          variant={'subtitle1'}
          sx={{ width: '100%', wordWrap: 'break-word' }}
        >
          {selectedFile.name}
        </Typography>
      ) : (
        <Typography variant={'subtitle1'} fontWeight={'bold'}>
          {t('buttons.upload_file')}
        </Typography>
      )}
      <Box fontSize={'40px'}>
        <UploadFileIcon fontSize={'inherit'} />
      </Box>
      <input
        aria-label="upload-file"
        type="file"
        onChange={handleFileUpload}
        accept={accept}
        value={''}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          opacity: 0,
          overflow: 'hidden',
        }}
      />
      {!selectedFile && (
        <>
          <Typography variant={'subtitle2'}>
            {t('employees:review_employee_table.firstname')}
            {maxMbSize} mb
          </Typography>
          <Typography variant={'subtitle1'}>{accept}</Typography>
        </>
      )}
      {error && (
        <Typography color={'error.main'} variant={'subtitle1'}>
          {error}
        </Typography>
      )}

      {selectedFile && (
        <>
          <Typography variant={'subtitle2'}> {fileSize} mb</Typography>
          <Button
            onClick={handleFileSelected}
            type={'button'}
            disabled={!selectedFile}
            variant={'outlined'}
            sx={{ mt: 1 }}
          >
            {t('buttons.upload')}
          </Button>
        </>
      )}
    </Box>
  );
};

export default FileInput;
