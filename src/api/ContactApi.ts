import api from './config/axiosConfig';
import {ContactData} from '../models/Contact';
import { CategoryData } from '../models/Category';

export const ProductAPI = {
  getAllAccepted: async function () {
    const response = await api.request({
      url: "/contacts",
      method: "GET",
    })

    return response.data
  },
  getAllWaiting: async function () {
    const response = await api.request({
      url: "/contacts",
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