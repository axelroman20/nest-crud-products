export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  console.log(file);
  if (!file) return callback(new Error('No file provided'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png'];

  if (!validExtensions.includes(fileExtension)) {
    return callback(null, false);
  }

  callback(null, true);
};
