import * as yup from 'yup';

export enum FormFields {
  QUERY = 'query'
}

enum FormErrors {
  REQUIRED = 'Required Field'
}

export const SearchFormSchema = () => yup.object().shape({
  [FormFields.QUERY]: yup.string().required(FormErrors.REQUIRED)
})