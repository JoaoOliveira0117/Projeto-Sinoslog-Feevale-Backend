import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const UPLOAD_DIR = path.join(__dirname, '../uploads/');

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export default multer({
  storage,
});
