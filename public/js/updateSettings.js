/* eslint-disable */
import axios from 'axios';
import { showAlerts } from './alerts';

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlerts('success', `${type.toUpperCase()} Updated succesfully`);
    }
  } catch (err) {
    showAlerts('error', err.response.data.message);
  }
};
