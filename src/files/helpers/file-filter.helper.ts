import { BadRequestException } from '@nestjs/common';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['png', 'jpg', 'jpeg'];
  if (!validExtensions.includes(fileExtension)) {
    callback(new BadRequestException('Only image files are allowed!'), false);
    return;
  }
  callback(null, true);
};
