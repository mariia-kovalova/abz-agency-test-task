import * as Yup from 'yup';
import data from 'src/data/sign-up.json';

const { name, email, phone, position_id, photo, required } =
  data.form.validation;

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(name.min_length.value, name.min_length.message)
    .max(name.max_length.value, name.max_length.message)
    .required(required),
  email: Yup.string()
    .min(email.min_length.value, email.min_length.message)
    .max(email.max_length.value, email.max_length.message)
    .matches(new RegExp(email.pattern.regexp), email.pattern.message)
    .required(required),
  phone: Yup.string()
    .matches(new RegExp(phone.pattern.regexp), phone.pattern.message)
    .required(required),
  position_id: Yup.number()
    .min(position_id.min.value, position_id.min.message)
    .required(required),
  photo: Yup.mixed<FileList>()
    .required(required)
    .test('isFile', required, files => {
      if (!files[0]) return false;
      return !!files[0].name;
    })
    .test('fileType', photo.type.message, files => {
      if (!files[0]?.type) return false;
      return files[0].type === photo.type.value;
    })
    .test('fileSize', photo.size.message, files => {
      if (!files[0]?.size) return false;
      return files[0].size <= photo.size.value;
    })
    .test('fileDimensions', photo.dimantions, files => {
      if (!files[0] || !files[0].name) return false;
      const objectUrl = URL.createObjectURL(files[0]);

      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = objectUrl;

        img.onload = function () {
          const { value } = photo.dimantions;
          const { width, height } = img;
          if (width >= value && height >= value) {
            resolve(true);
          } else {
            reject(false);
          }

          URL.revokeObjectURL(objectUrl);
        };

        img.onerror = function () {
          reject(false);
          URL.revokeObjectURL(objectUrl);
        };
      });
    }),
});
