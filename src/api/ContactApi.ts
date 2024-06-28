import api from './config/axiosConfig';
import {ContactData} from '../models/Contact';
import { CategoryData } from '../models/Category';
import { UpdateStatusRequest } from './models/UpdateStatusRequest';

export const ContactApi = {
  getAllAccepted: async function () {
    const response = await api.request({
      url: `/contact/accepted`,
      method: "GET",
    })
    return response.data
  },
  getAllWaiting: async function () {
    const response = await api.request({
      url: `/contact/waiting`,
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
      url: `/contact/${contact.id}`,
      method: "PATCH",
      data: new UpdateStatusRequest(contact.status),
    })

    return response.status;
  },
}