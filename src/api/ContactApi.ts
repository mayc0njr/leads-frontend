import api from './config/axiosConfig';
import {ContactData} from '../models/Contact';
import { CategoryData } from '../models/Category';
import { STATUS } from '../util/constant';

export const ContactApi = {
  getAllAccepted: async function () {
    const response = await api.request({
      url: `/contacts?status=${STATUS.ACCEPTED}`,
      method: "GET",
    })
    return response.data
  },
  getAllWaiting: async function () {
    const response = await api.request({
      url: `/contacts?status=${STATUS.WAITING}`,
      method: "GET",
    })
    return response.data
  },

  getAllCategories: async function (): Promise<CategoryData[]> {
    const response = await api.request({
      url: "/categories/",
      method: "GET",
    })

    return response.data
  },

  updateContact: async function (contact: ContactData) {
    const response = await api.request({
      url: `/contacts/${contact.id}`,
      method: "PUT",
      data: contact,
    })

    return response.status;
  },
}