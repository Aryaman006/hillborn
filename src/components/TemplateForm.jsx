import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TemplateForm = ({ initialValues, isEdit = false }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      description: Yup.string().required('Description is required'),
      price: Yup.number().required('Price is required').positive(),
      previewUrl: Yup.string().required('Preview URL is required').url(),
      zipFile: isEdit ? Yup.mixed() : Yup.mixed().required('ZIP file is required'),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          if (key === 'zipFile' && values.zipFile) {
            formData.append(key, values.zipFile);
          } else {
            formData.append(key, values[key]);
          }
        });

        const url = isEdit
          ? `/api/templates/${initialValues.id}`
          : '/api/templates';

        const method = isEdit ? 'put' : 'post';

        await axios({ method, url, data: formData });
        toast.success(`${isEdit ? 'Updated' : 'Added'} successfully!`);
      } catch (error) {
        toast.error(error.response?.data?.error || 'Something went wrong!');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Template Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className="border p-2 w-full"
      />
      {formik.errors.name && <div className="text-red-500">{formik.errors.name}</div>}

      <textarea
        name="description"
        placeholder="Template Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        className="border p-2 w-full"
      />
      {formik.errors.description && <div className="text-red-500">{formik.errors.description}</div>}

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        className="border p-2 w-full"
      />
      {formik.errors.price && <div className="text-red-500">{formik.errors.price}</div>}

      <input
        type="url"
        name="previewUrl"
        placeholder="Preview URL"
        value={formik.values.previewUrl}
        onChange={formik.handleChange}
        className="border p-2 w-full"
      />
      {formik.errors.previewUrl && <div className="text-red-500">{formik.errors.previewUrl}</div>}

      {!isEdit && (
        <input
          type="file"
          name="zipFile"
          onChange={(e) => formik.setFieldValue('zipFile', e.currentTarget.files[0])}
          className="border p-2 w-full"
        />
      )}
      {formik.errors.zipFile && <div className="text-red-500">{formik.errors.zipFile}</div>}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {isEdit ? 'Update Template' : 'Add Template'}
      </button>
    </form>
  );
};

export default TemplateForm;
