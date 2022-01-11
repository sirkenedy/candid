import { extname } from "path";

export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|pdf|gif)$/)) {
      return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
  };

  export const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
  };

  export const fileDestination = (req, file, callback) => {
    if (file.fieldname === "brochure") { // if uploading resume
      console.log("seen")
      return callback(null, './files/brochure');
    } else { // else uploading image
      return callback(null, './files/product-images');
    }
  }

  export const fileFilter = (req, file, cb) => {
    if (file.fieldname === "brochure") { // if uploading resume
      if (
        file.mimetype === 'application/pdf' ||
        file.mimetype === 'application/msword' ||
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) { // check file type to be pdf, doc, or docx
        cb(null, true);
      } else {
        // cb(null, false); // else fails
        return cb(new Error('File format for product brochure not supported'), false);
      }
    } else { // else uploading image
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) { // check file type to be png, jpeg, or jpg
        cb(null, true);
      } else {
        cb(null, false); // else fails
        // return cb(new Error('File format for product brochure not supported'), false);
      }
    }
  };