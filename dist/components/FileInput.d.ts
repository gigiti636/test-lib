import { FC } from 'react';

interface FileInputProps {
    accept: string;
    maxMbSize: number;
    onFileSelected: (_file: File, _base64file: string) => void;
    maxWidth?: string;
}
declare const FileInput: FC<FileInputProps>;
export default FileInput;
